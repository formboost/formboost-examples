const endpoint = import.meta.env.VITE_FORMBOOST_ENDPOINT || 'https://formboost.app/f/YOUR_ENDPOINT';
const form = document.querySelector<HTMLFormElement>('#contact-form');
const status = document.querySelector<HTMLParagraphElement>('#status');

if (!form || !status) throw new Error('Required form elements not found');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  status.textContent = 'Sending…';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });

    if (!response.ok) throw new Error(`Request failed with ${response.status}`);

    form.reset();
    status.textContent = 'Message sent.';
  } catch (error) {
    console.error(error);
    status.textContent = 'Could not send your message.';
  }
});
