# Lets Encrypt

These are the instructions for setting up a LetsEncrypt certificate for a Node.js/Express application.

> [!NOTE]
> This process requires the use of `snap`. If you are running on WSL2, `snap` support is limited and you can try installing with `sudo apt-get install certbot` instead.

## Install Certbot

Certbot is a tool to generate LetsEncrypt certificates. Run this command to install Certbot.

```bash
sudo snap install --classic certbot
```

Then, link your `snap` configuration to your `usr` directory.

```bash
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

## Run Certbot

> [!WARNING]
> You will need to stop any web server you have running on the machine before this step.

To begin generating the certificate, run this command:

```bash
sudo certbot certonly --standalone
```

Certbot will prompt you for the email to notify for renewals and other concerns, and the domain (or domains) you want to certify. You must already have DNS records configured for these domains.

Then Certbot will generate and verify the certificates.

## Using the Certificates in Express

These sections are specific for a Node.js application running with Express. You will need to import the following packages:

```ts
import express from "express";
import { readFile } from "fs/promises";
import http from "http";
import https from "https";
```

- `express` will handle the routing and middleware
- `fs/promises` gives access to asynchronous operations on the file system
- `http` will spin an http server
- `https` will spin an https server

Now configure your application:

```ts
// anonymous IIFE for async/await
(async () => {
  const app = express();

  // mount your middleware and routes here

  app.use("/", (req, res) => {
    res.send("hi");
  });

  const httpServer = http.createServer(app);

  httpServer.listen(80, () => {
    logHandler.log("http", "http server listening on port 80");
  });

  if (process.env.NODE_ENV === "production") {
    const privateKey = await readFile(
      "/etc/letsencrypt/live/example.com/privkey.pem",
      "utf8"
    );
    const certificate = await readFile(
      "/etc/letsencrypt/live/example.com/cert.pem",
      "utf8"
    );
    const ca = await readFile(
      "/etc/letsencrypt/live/example.com/chain.pem",
      "utf8"
    );

    const credentials = {
      key: privateKey,
      cert: certificate,
      ca: ca,
    };

    const httpsServer = https.createServer(credentials, app);

    httpsServer.listen(443, () => {
      logHandler.log("http", "https server listening on port 443");
    });
  }
})();
```

A few things to note:

- The file paths above used in the `readFile` calls are the default output paths for Certbot. You should replace `example.com` with your actual domain or subdomain name.
- `80` and `443` are the default ports for http and https traffic, respectively. If you are running more than one application on your system, you'll need to change these AND specify the port in the links you share with users (i.e. example.com:8000).
- We use an anonymous IIFE (immediately invoked function expression) around our entire application code to grant top-level `await` use.
