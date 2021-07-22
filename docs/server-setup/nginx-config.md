# NGINX Configuration

I migrated domain registrar from GoDaddy to Cloudflare. One of the features Cloudflare offers is DNS proxying - which is great, but seems to break when using non-standard ports.

Since my development VPS runs applications on non-standard ports, I needed a way around this. So I decided to play with NGINX a bit.

## Installing NGINX

Installing this on my DigitalOcean droplet was one command:

```bash
sudo apt-get install nginx
```

## Configuring

The configuration files go in `/etc/nginx/conf.d/`. Create a `.conf` file with a friendly name, such as `server.conf`, and edit it with your editor of choice (I use nano):

```bash
sudo nano /etc/nginx/conf.d/server.conf
```

Then, follow this template for setting up the internal proxying:

```txt
server {
    listen 80;
    server_name subdomain.domain.tld;

    location / {
        proxy_set_header Host $host;
        proxy_pass http://127.0.0.1:port;
        proxy_redirect off;
    }
}
```

Replace your `subdomain.domain.tld` with the actual domain you want to redirect (i.e `battlesnake.nhcarrigan.com`). Replace the `port` with the port your desired application is running on (mine runs on 4000). Make sure that you don't miss a `;`.

You can copy and reuse this template multiple times in the file, for each subdomain and app you need to connect. Note that if you have an app running on port 80 directly NGINX won't start.

## Configuring SSL

Assuming you have set up a [Lets Encrypt Certificate](/general/lets-encrypt.md), you'll need to configure NGINX for the SSL routes too.

You can follow the same template, with a bit of a modification:

```txt
server {
    listen 443 ssl;
    server_name subdomain.domain.tld;
    ssl_certificate /etc/letsencrypt/live/subdomain.domain.tld/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/subdomain.domain.tld/privkey.pem;

    location / {
        proxy_set_header Host $host;
        proxy_pass https://127.0.0.1:port;
        proxy_redirect off;
    }
}
```

This will tell NGINX where to find your SSL certificate, and allow it to redirect the HTTP requests accordingly.

## Validating Config

Before running the NGINX service, you can use `sudo nginx -t` to test that your configuration is valid. This can help catch errors before you try to start the service again.

## Running NGINX

After changing your configuration, you need to start (or restart) NGINX.

```bash
sudo systemctl restart nginx
```

If this is successful, you will not see any output in the terminal. If there is an error, you will see a message that the process exited with error code.

In the event of an error, you can run `systemctl status nginx.service` to see what triggered the error.
