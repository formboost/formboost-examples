const FORMBOOST_ENDPOINT = 'https://formboost.app/f/YOUR_ENDPOINT';
const form = document.querySelector('#contact-form');
const status = document.querySelector('#status');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  status.textContent = 'Sending…';

  try {
    const response = await fetch(FORMBOOST_ENDPOINT, {
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
