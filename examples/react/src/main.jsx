import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const endpoint = import.meta.env.VITE_FORMBOOST_ENDPOINT || 'YOUR_FORMBOOST_ENDPOINT';
  return (
    <main>
      <h1>Contact us</h1>
      <p>React form connected to Formboost.</p>
      <form action={endpoint} method="POST">
        <label>Name<input name="name" autoComplete="name" required /></label>
        <label>Email<input type="email" name="email" autoComplete="email" required /></label>
        <label>Message<textarea name="message" rows="5" required /></label>
        <button type="submit">Send message</button>
      </form>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
