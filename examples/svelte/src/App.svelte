<script>
  const endpoint = import.meta.env.VITE_FORMBOOST_ENDPOINT || 'https://formboost.app/f/YOUR_ENDPOINT';
</script>

<main>
  <h1>Contact us</h1>
  <p>Svelte form connected to Formboost.</p>
  <form action={endpoint} method="POST">
    <label>Name<input name="name" autocomplete="name" required /></label>
    <label>Email<input type="email" name="email" autocomplete="email" required /></label>
    <label>Message<textarea name="message" rows="5" required></textarea></label>
    <button type="submit">Send message</button>
  </form>
</main>
