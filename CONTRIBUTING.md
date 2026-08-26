# Contributing to Formboost Examples

Thanks for helping improve the official Formboost examples.

The goal of every example is to help a developer understand and integrate Formboost as quickly as possible.

## Principles

Each example should be:

- Focused on one clear Formboost use case
- Small enough to understand quickly
- Easy to run locally
- Secure by default
- Free of real credentials and customer data
- Consistent with the framework's recommended practices

## Repository naming

Use this pattern:

```text
formboost-<framework>-example
```

Examples:

```text
formboost-react-example
formboost-nextjs-example
formboost-vue-example
```

## Required README sections

Framework repositories should include:

1. What the example demonstrates
2. Prerequisites
3. Installation
4. Formboost configuration
5. Running locally
6. How the submission flow works
7. Deployment notes
8. Security notes
9. Useful Formboost links

## Configuration

Never commit production secrets, API keys, payment information, or customer submission data.

Use placeholders or environment variables, for example:

```text
YOUR_FORMBOOST_ENDPOINT
```

If environment variables are used, include a safe `.env.example` file.

## Example scope

Prefer a simple contact form unless the example is specifically demonstrating another use case.

Default fields:

- Name
- Email
- Message

Avoid adding unrelated authentication, databases, state libraries, UI frameworks, or backend services unless the example specifically requires them.

## Code quality

Before contributing:

- Ensure the project installs cleanly
- Ensure the example runs locally
- Ensure a test submission reaches Formboost
- Run linting and formatting where supported
- Remove unused dependencies
- Check that no secrets or real customer data are committed

## Pull requests

Keep pull requests narrow and explain:

- What changed
- Why it improves the example
- How it was tested

For new framework examples, link the corresponding repository from the main `formboost-examples` README.

## Questions

For product documentation, visit https://docs.formboost.app.
