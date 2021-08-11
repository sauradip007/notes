# New Server Setup

This is my step-by-step guide for configuring a brand new DigitalOcean Droplet (running Ubuntu).

Instructions may vary if you use a different host or OS.

## First Steps

Very important to start here, where you'll add your non-root user and configure their access.

[View Steps](server-setup/first-steps.md)

## LetsEncrypt

If you need SSL certificates to enable HTTPS on your server, read this.

[View Instructions](server-setup/lets-encrypt.md)

## NGINX

To run multiple applications while using the standard ports (80 and 443), you'll want NGINX.

[View Instructions](server-setup/nginx-config.md)

## Prepare Node

All of my projects run on Node. Skip this if you aren't using Node.

[View Steps](server-setup/prepare-node.md)

## Clone your Repository

Get your project onto your server, and have all the power of `git` at your fingertips to keep it updated.

[View Steps](server-setup/clone-repository.md)

## Enable Firewall

Keep your server protected against unauthorised traffic.

[View Instructions](server-setup/firewall.md)

## Run your Project

Using PM2, keep your projects running 24/7 (You will need Node for this).

[View Steps](server-setup/run-project.md)

## Server Maintenance

Perform weekly maintenance to keep your servers bright and chipper.

[View Steps](server-setup/maintenance.md)

## SSH Alias

Configure an alias for your SSH connection to make your life easier.

[View Steps](server-setup/set-alias.md)
