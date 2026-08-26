export default function Home() {
  const endpoint = process.env.NEXT_PUBLIC_FORMBOOST_ENDPOINT || 'https://formboost.app/f/YOUR_ENDPOINT';
  return (
    <main>
      <h1>Contact us</h1>
      <p>Next.js form connected to Formboost.</p>
      <form action={endpoint} method="POST">
        <label>Name<input name="name" autoComplete="name" required /></label>
        <label>Email<input type="email" name="email" autoComplete="email" required /></label>
        <label>Message<textarea name="message" rows="5" required /></label>
        <button type="submit">Send message</button>
      </form>
    </main>
  );
}
