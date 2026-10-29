import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { LiveAnnouncerProvider } from './components/LiveAnnouncer.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <LiveAnnouncerProvider>
    <App />
  </LiveAnnouncerProvider>
);
