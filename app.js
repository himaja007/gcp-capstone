const express = require('express');
const request = require('request');

const app = express();

app.get("/message", (req, res) => {
  request('https://hello-gateway-8lr1vymt.uc.gateway.dev/hello?key=YOUR_API_KEY', { json: true }, (err, response, body) => {
    if (err) {
      return console.log(err);
    }
    const message = body.message;
    const html = `
      <html>
        <body>
          <h1>Message from Server: ${message}</h1>
        </body>
      </html>
    `;
    res.send(html);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
