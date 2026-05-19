import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Parche global: Redirigir todas las peticiones /api a Vercel en el APK/Producción
const originalFetch = window.fetch;
window.fetch = async (input, init) => {
  if (typeof input === 'string' && input.startsWith('/api')) {
    // Si no estamos en entorno local de desarrollo, forzamos el dominio del backend
    if (!import.meta.env.DEV) {
      input = 'https://via-nova-ia.vercel.app' + input;
    }
  }
  return originalFetch(input, init);
};

// Parche para Capacitor/APK: Evitar el error "404 Page Not Found" de wouter
// Capacitor suele cargar la app en http://localhost/index.html en lugar de http://localhost/
if (window.location.pathname === '/index.html') {
  window.history.replaceState(null, '', '/');
}

createRoot(document.getElementById("root")!).render(<App />);
