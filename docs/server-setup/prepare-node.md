# Preparing Node

Ensure you are on your new user account and *not* the `root` account.

## Get nvm

Run this to install `nvm` on the droplet.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

If you get an error that your `$NVM_DIR` is already set, you likely installed as another user (maybe `root`?). Run this snippet to fix that, then run the install script above again.

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Now you have two options. You can exit the ssh session with `ctrl`+`a`+`d` and reconnect, or you can copy and run the code `nvm` provides after install. One of these will need to be done to load the `nvm` into the path.

## Install Node

Now you can install Node.js. The `node` keyword will fetch the latest version (16, at the time of writing). If you need a specific version, replace `node` with a version number.

```bash
nvm install node
```

If this is the only Node version you have installed, `nvm` will automatically use it and set it as the default. If you need to switch, do `nvm use version`, replacing `version` with the number. If you want to set a different version as default, use `nvm alias default version`, again replacing `version` with the number.
