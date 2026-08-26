import http from 'node:http';

const port = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  if (req.method !== 'POST' || req.url !== '/webhooks/formboost') {
    res.writeHead(404).end('Not found');
    return;
  }

  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    try {
      const event = JSON.parse(body || '{}');
      console.log('Received Formboost event:', event.event ?? 'unknown');
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ received: true }));
    } catch {
      res.writeHead(400, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ error: 'Invalid JSON' }));
    }
  });
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
