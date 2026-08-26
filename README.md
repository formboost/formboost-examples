# Formboost Examples

Official examples and starter projects for integrating [Formboost](https://formboost.app) with popular frameworks and platforms.

Formboost is a developer-first form backend. Connect your existing forms to Formboost and receive submissions without building and maintaining your own backend.

## Examples

| Stack | Repository | Status |
| --- | --- | --- |
| HTML | `formboost-html-example` | Planned |
| React | `formboost-react-example` | Planned |
| Next.js | `formboost-nextjs-example` | Planned |
| Vue | `formboost-vue-example` | Planned |
| Astro | `formboost-astro-example` | Planned |
| Svelte | `formboost-svelte-example` | Planned |

Additional examples for webhooks, SDKs, integrations, and other platforms will be added over time.

## What you can build

These examples focus on the most common Formboost workflow:

1. Create a form in Formboost.
2. Copy your Formboost submission endpoint.
3. Connect your existing HTML or framework form.
4. Submit test data.
5. Receive and manage submissions in Formboost.

Typical use cases include:

- Contact forms
- Feedback forms
- Lead capture forms
- Waitlists
- Newsletter forms
- Support forms
- Registration forms

## Quick example

```html
<form action="YOUR_FORMBOOST_ENDPOINT" method="POST">
  <label>
    Name
    <input type="text" name="name" required />
  </label>

  <label>
    Email
    <input type="email" name="email" required />
  </label>

  <label>
    Message
    <textarea name="message" required></textarea>
  </label>

  <button type="submit">Send message</button>
</form>
```

Replace `YOUR_FORMBOOST_ENDPOINT` with the endpoint generated for your form in Formboost.

## Repository conventions

Each framework-specific repository should be:

- Small and easy to understand
- Runnable locally in a few commands
- Focused on one clear use case
- Free of production credentials and customer data
- Based on the framework's current recommended project structure
- Documented with setup, configuration, run, and deployment instructions

Examples should use placeholders such as:

```text
YOUR_FORMBOOST_ENDPOINT
```

or environment variables when the framework requires them.

Never commit API keys, secrets, production credentials, payment information, or real customer submission data.

## Planned repositories

The first wave of official examples:

```text
formboost-html-example
formboost-react-example
formboost-nextjs-example
formboost-vue-example
formboost-astro-example
formboost-svelte-example
```

Later additions may include:

```text
formboost-node-webhook-example
formboost-express-webhook-example
formboost-typescript-example
formboost-javascript-example
```

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for repository standards and contribution guidelines.

## Links

- Website: https://formboost.app
- Documentation: https://docs.formboost.app
- GitHub organization: https://github.com/formboost

## License

Examples in this repository are available under the [MIT License](LICENSE).