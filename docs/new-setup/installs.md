# New Computer Setup

This is a list of things to install and configure for my local development environment.

## Installs

| Windows Environment | WSL 2 - Ubuntu |
| ------------------- | -------------- |
| VSCode              | nvm            |
| `git` Bash          | Rust           |
| Node                | Python         |
| Sublime             | GitHub CLI     |
|                     | mongod         |

## Set Up Node

First, install `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

Then install and use the latest version of node.

```bash
nvm install node
nvm use node
```

Finally, install the needed global packages and configure `git`.

- `npm install -g typescript` - Install typescript globally
- `npm install -g angular-cli` - Install Angular globally
- `git config --global user.name <username>` - Set GitHub username
- `git config --global user.email <email>` - Set GitHub email

## Generate new SSH + GPG keys

Generate the keys. DigitalOcean and GitHub both need the SSH, only GitHub needs the GPG.

- `ssh-keygen -t ed25519 -C <email>` to generate the ssh key. Use your GitHub email address.
- `ssh-add ~./ssh/id_ed25519` to add the key to the ssh agent. Ensure the agent is running with `eval 'ssh-agent -s`.
- `clip < ~./ssh/id_ed25519.pub>` to copy the new public key to your clipboard. Give this to GitHub, DigitalOcean, and anywhere else you need SSH.
- `gpg --full-generate-key` to generate a GPG key. Following the prompts, select the `RSA and RSA` type, enter a key size of `4096`, and leave the length of time blank to set the key to never expire. When prompted for user information, ensure you use the email address associated with your GitHub account (just like in your `git config` earlier.) Then set your GPG password.
- `gpg --list-secret-keys --keyid-format LONG` to list your current GPG keys. Three lines per key. First line will say `sec 4096R/<hash>` - copy the `hash`.
- `gpg --armor --export <hash>` to print the full GPG key in the format GitHub expects. Copy this and add it to your account.
- `git config --global commit.gpgsign true` - Autosign commits.
