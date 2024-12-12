import { render } from 'react-dom/server';
import App from './App'; 

export const render = (url: string) => {
  const html = renderToString(<App />); 
  return { html };
};
