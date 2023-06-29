import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.module.scss';
import TodoList from './pages';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
