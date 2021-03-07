# Digital Ocean Droplet Setup

Create new droplet using latest version of Ubuntu x64. Set up with SSH key, not password.

## SSH in to droplet

```bash
ssh root@[ip]
```

## Get nvm

Install:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

Exit SSH:

`ctrl`+`a`+`d`

Reconnect SSH as above, then install node:

```bash
nvm install node
```

Use node:

```bash
nvm use node
```

## Set up app

Clone a repo:

```bash
git clone <https url, NOT ssh url>
```

Enter repo directory

```bash
cd <repo folder (same as repo name)>
```

Create screen (screen is used to persist node instance after killing SSH connection)

```bash
screen
```

Install + run app per app's documentation!

## Exit SSH

`ctrl`+`a`+`d` to exit screen, then again to logout SSH

## Reconnecting later

SSH in, as above, then get screen

```bash
screen -ls
```

This lists active screens. Each screen has a number. Use that.

```bash
screen -r [number]
```

Screen is now opened! Keep screen list clean by ending unneeded ones:

```bash
screen -X -S [number] quit
```


