import { createApp } from 'vue';
import './style.css';

createApp({
  data() {
    return {
      endpoint: import.meta.env.VITE_FORMBOOST_ENDPOINT || 'YOUR_FORMBOOST_ENDPOINT'
    };
  },
  template: `
    <main>
      <h1>Contact us</h1>
      <p>Vue form connected to Formboost.</p>
      <form :action="endpoint" method="POST">
        <label>Name<input name="name" autocomplete="name" required /></label>
        <label>Email<input type="email" name="email" autocomplete="email" required /></label>
        <label>Message<textarea name="message" rows="5" required></textarea></label>
        <button type="submit">Send message</button>
      </form>
    </main>
  `
}).mount('#app');
