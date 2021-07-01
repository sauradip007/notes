# Digital Ocean Droplet Setup

Create new droplet using latest version of Ubuntu x64. Set up with SSH key, not password.

## SSH in to droplet

```bash
ssh root@[ip]
```

## Get nvm

Run this to install `nvm` on the droplet.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

Now you have two options. You can exit the ssh session with `ctrl`+`a`+`d` and reconnect, or you can copy and run the code `nvm` provides after install. One of these will need to be done to load the `nvm` into the path.

Now install Node.js. The `node` keyword will fetch the latest version (16, at the time of writing). If you need a specific version, replace `node` with a version number.

```bash
nvm install node
```

If this is the only Node version you have installed, `nvm` will automatically use it and set it as the default. If you need to switch, do `nvm use version`, replacing `version` with the number. If you want to set a different version as default, use `nvm alias default version`, again replacing `version` with the number.

## Set up app

If you are following these instructions, you connected to `ssh` as the `root` user. This means your terminal has loaded in the `/root` directory. Run `cd /home` to switch to the `home` directory, which is where you should be loading your applications.

Now clone the repository into the directory. Note that you need to use the HTTPS url, not the SSH url, as you haven't authenticated `git`. If you are deploying a private repository, you will need to authenticate `git` or use another method for pulling your files into the VM.

By default, `git` will clone the repository into a directory with the repository's name. If you want a different directory name, replace `(name)` with the name you want the directory to take.

```bash
git clone <https url, NOT ssh url> (name)
```

Switch to the repository directory.

```bash
cd <repo folder (same as repo name)>
```

## Running the Application

`pm2` is a great tool for managing applications. Install it with:

```bash
npm install -g pm2
```

Then create a new `pm2` process for your application with:

```bash
pm2 start 'script' --name 'app-name'
```

Note that you will replace `script` (keep the quotes!) with the script you use to start your application (such as `npm start` or `npm run develop`), and replace `app-name` with a user friendly name for your application.

For example:

```bash
pm2 start 'npm start' --name 'BeccaLyria'
```

## Maintaining Your Applications

A few helpful `pm2` commands:

- `pm2 ls`: Lists all `pm2` processes, including helpful information such as the status (running or stopped), name, PID, and number of times it has been restarted.
- `pm2 restart <name>`: Restarts the process with the given name (you can use the PID instead).
- `pm2 stop <name>`: Stops the process with the given name.
- `pm2 delete <name>`: Removes the process with the given name.
- `pm2 logs <name>`: Displays the logs for the process' application.
