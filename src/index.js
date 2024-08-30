import React from 'react';
   import ReactDOM from 'react-dom/client';
   import PromptEngineeringApp from './App';

   const rootElement = document.getElementById('prompt-engineering-root');
   if (rootElement) {
     const root = ReactDOM.createRoot(rootElement);
     root.render(
       <React.StrictMode>
         <PromptEngineeringApp />
       </React.StrictMode>
     );
   }