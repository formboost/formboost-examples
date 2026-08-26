# Formboost Examples

Official examples and starter projects for integrating [Formboost](https://formboost.app) with popular frameworks and platforms.

Formboost is a developer-first form backend. Connect your existing forms to Formboost and receive submissions without building and maintaining your own backend.

## Examples

All examples live in this repository under [`examples/`](examples/).

| Stack | Example | Type |
| --- | --- | --- |
| HTML | [`examples/html`](examples/html) | Native HTML form |
| JavaScript | [`examples/javascript`](examples/javascript) | Async `fetch` submission |
| TypeScript | [`examples/typescript`](examples/typescript) | Typed async submission |
| React | [`examples/react`](examples/react) | React + Vite |
| Next.js | [`examples/nextjs`](examples/nextjs) | App Router |
| Vue | [`examples/vue`](examples/vue) | Vue + Vite |
| Astro | [`examples/astro`](examples/astro) | Astro page |
| Svelte | [`examples/svelte`](examples/svelte) | Svelte + Vite |
| Node.js | [`examples/node-webhook`](examples/node-webhook) | Webhook receiver |
| Express | [`examples/express-webhook`](examples/express-webhook) | Express webhook receiver |

## Formboost endpoint

Formboost submission URLs use this format:

```text
https://formboost.app/f/YOUR_ENDPOINT
```

Replace `YOUR_ENDPOINT` with the endpoint identifier generated for your form in Formboost.

## Quick start

The simplest Formboost integration is a standard HTML form:

```html
<form action="https://formboost.app/f/YOUR_ENDPOINT" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send message</button>
</form>
```

Create a form at [formboost.app](https://formboost.app), copy its endpoint identifier, and replace `YOUR_ENDPOINT`.

## Running framework examples

For examples containing a `package.json`:

```bash
cd examples/react
npm install
npm run dev
```

Use the equivalent folder for Next.js, Vue, Astro, Svelte, or TypeScript.

Where supported, configure the endpoint with the framework-specific public environment variable:

```text
React / Vue / Svelte / TypeScript
VITE_FORMBOOST_ENDPOINT=https://formboost.app/f/YOUR_ENDPOINT

Next.js
NEXT_PUBLIC_FORMBOOST_ENDPOINT=https://formboost.app/f/YOUR_ENDPOINT

Astro
PUBLIC_FORMBOOST_ENDPOINT=https://formboost.app/f/YOUR_ENDPOINT
```

The examples intentionally use `https://formboost.app/f/YOUR_ENDPOINT` as the fallback so developers can immediately see the complete Formboost submission URL while no real endpoint, secret, customer data, or credential is committed to this repository.

## Webhook examples

Webhook receiver examples are available for Node.js and Express:

```bash
cd examples/express-webhook
npm install
npm start
```

They expose:

```text
POST /webhooks/formboost
```

The webhook examples demonstrate request handling only. Add the authentication/signature-validation mechanism defined by your Formboost webhook configuration before using the pattern in production.

## What you can build

Typical Formboost use cases include:

- Contact forms
- Feedback forms
- Lead capture forms
- Waitlists
- Newsletter forms
- Support forms
- Registration forms

## Repository principles

Every example should be:

- Small and easy to understand
- Independently runnable
- Focused on one clear integration pattern
- Free of production credentials and customer data
- Based on the framework's recommended project structure
- Easy to copy into an existing application
- Explicit about the canonical Formboost submission URL: `https://formboost.app/f/YOUR_ENDPOINT`

Never commit API keys, secrets, production credentials, payment information, or real customer submission data.

## Planned additions

Useful next examples include:

- Remix
- Nuxt
- Angular
- SolidJS
- Qwik
- PHP
- Laravel
- Django
- Flask
- WordPress
- Webflow
- Serverless webhook handlers

These should only be added when they provide a genuinely different integration pattern rather than duplicating existing examples.

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for repository standards and contribution guidelines.

## Links

- Website: https://formboost.app
- Documentation: https://formboost.app/docs
- GitHub organization: https://github.com/formboost

## License

Examples in this repository are available under the [MIT License](LICENSE).
