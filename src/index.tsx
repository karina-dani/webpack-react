import style from './index.module.scss';
import './index.scss';
import './assets/images/file.jpg';

import { createRoot } from 'react-dom/client';
//import { App } from './app';
import { StrictMode } from 'react';

import Recipe from './app/components/Recipe';

export const App = () => {
  return (
      // компонент Recipe принимает пропс с названием блюда
      <Recipe name='Сырные палочки' />
  )
}; 

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);



