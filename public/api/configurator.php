<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

// Allow only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

// Read JSON body
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
  exit;
}

// načítaj secrets zo /web/shared (relative path z dist/api/)
$sharedSecretsPath = realpath(__DIR__ . "/../../../shared/make-secrets.php");
if (!$sharedSecretsPath || !file_exists($sharedSecretsPath)) {
  http_response_code(500);
  echo json_encode(["error" => "Missing shared secrets file"]);
  exit;
}

$secrets = require $secretsPath;

$webhookUrl = $secrets['MAKE_CONFIGURATOR_WEBHOOK_URL'] ?? '';
$apiKey     = $secrets['MAKE_API_KEY'] ?? '';

if (!$webhookUrl || !$apiKey) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Missing Make webhook or API key']);
  exit;
}

// Optional: simple anti-spam (basic)
$meta = $data['meta'] ?? [];
$contact = $data['contact'] ?? [];

$name  = trim((string)($contact['name'] ?? ''));
$email = trim((string)($contact['email'] ?? ''));

if ($name === '' || $email === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Missing required contact fields']);
  exit;
}

// Forward to Make
$ch = curl_init($webhookUrl);
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    'Content-Type: application/json',
    'x-make-apikey: ' . $apiKey,
  ],
  CURLOPT_POSTFIELDS => json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
  CURLOPT_TIMEOUT => 20,
]);

$response = curl_exec($ch);
$err      = curl_error($ch);
$code     = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === false) {
  http_response_code(502);
  echo json_encode(['ok' => false, 'error' => 'Upstream error', 'detail' => $err]);
  exit;
}

if ($code < 200 || $code >= 300) {
  http_response_code(502);
  echo json_encode(['ok' => false, 'error' => 'Make rejected request', 'status' => $code, 'body' => $response]);
  exit;
}

echo json_encode(['ok' => true]);
