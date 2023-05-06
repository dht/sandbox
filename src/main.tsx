import { App } from './bootstrap/App';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';

const container = document.getElementById('root') ?? document.body;

const root = createRoot(container);

root.render(<App />);
