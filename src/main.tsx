// main.tsx
// Application entry point.
// Mounts the React root into the #root div in index.html.

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
