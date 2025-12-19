<?php
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(204);
  exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["error" => "Method not allowed"]);
  exit;
}

$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(["error" => "Invalid JSON"]);
  exit;
}

// načítaj secrets zo /web/shared (relative path z dist/api/)
$sharedSecretsPath = realpath(__DIR__ . "/../../../shared/make-secrets.php");
if (!$sharedSecretsPath || !file_exists($sharedSecretsPath)) {
  http_response_code(500);
  echo json_encode(["error" => "Missing shared secrets file"]);
  exit;
}

$secrets = require $sharedSecretsPath;
$MAKE_WEBHOOK_URL = $secrets["MAKE_WEBHOOK_URL"] ?? "";
$MAKE_API_KEY = $secrets["MAKE_API_KEY"] ?? "";

if (!$MAKE_WEBHOOK_URL || !$MAKE_API_KEY) {
  http_response_code(500);
  echo json_encode(["error" => "Secrets are not configured"]);
  exit;
}

// forward na Make
$payload = json_encode($data, JSON_UNESCAPED_UNICODE);

$ch = curl_init($MAKE_WEBHOOK_URL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  "Content-Type: application/json",
  "x-make-apikey: " . $MAKE_API_KEY,
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

$responseBody = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$err = curl_error($ch);
curl_close($ch);

if ($responseBody === false) {
  http_response_code(502);
  echo json_encode(["error" => "Webhook request failed", "detail" => $err]);
  exit;
}

if ($httpCode < 200 || $httpCode >= 300) {
  http_response_code(502);
  echo json_encode(["error" => "Make webhook failed", "status" => $httpCode, "detail" => $responseBody]);
  exit;
}

echo json_encode(["ok" => true]);
