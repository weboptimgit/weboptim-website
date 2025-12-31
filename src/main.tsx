import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Dispatch event for prerenderer to know rendering is complete
// This fires after React has finished mounting
setTimeout(() => {
  document.dispatchEvent(new Event("prerender-ready"));
}, 100);

// Register Service Worker for caching JS, CSS, images, fonts
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
