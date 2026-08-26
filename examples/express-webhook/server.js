import express from 'express';

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json({ limit: '1mb' }));

app.post('/webhooks/formboost', (req, res) => {
  const event = req.body ?? {};
  console.log('Received Formboost event:', event.event ?? 'unknown');
  res.status(200).json({ received: true });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
