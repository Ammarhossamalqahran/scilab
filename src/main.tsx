import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { PreferencesProvider } from './app/PreferencesContext';
import '@fontsource/ibm-plex-sans-arabic/arabic-400.css';
import '@fontsource/ibm-plex-sans-arabic/arabic-500.css';
import '@fontsource/ibm-plex-sans-arabic/arabic-600.css';
import '@fontsource/ibm-plex-sans-arabic/latin-400.css';
import '@fontsource/ibm-plex-sans-arabic/latin-500.css';
import '@fontsource/ibm-plex-sans-arabic/latin-600.css';
import '@fontsource/el-messiri/arabic-600.css';
import '@fontsource/el-messiri/arabic-700.css';
import '@fontsource/el-messiri/latin-600.css';
import '@fontsource/el-messiri/latin-700.css';
import '../src.css';
import { startAnalytics } from './analytics';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PreferencesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PreferencesProvider>
  </React.StrictMode>,
);

<<<<<<< HEAD
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('/sw.js').catch(() => undefined); });
}
=======
startAnalytics();
>>>>>>> e9a7d67 (Cloudflare Web Analytics loader (off until token is added))
