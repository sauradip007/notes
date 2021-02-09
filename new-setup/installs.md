# New Computer Setup

List of things to install/configure for a new environment

## Installs

- VSCode
- `git` bash for Windows
- Heroku CLI
- MongoDB Compass
- MongoDB Community Server
- node.js CLI
- Python
- GitHub CLI
- rust

## Scripts

`npm install -g typescript` - Install typescript globally
`npm install -g angular-cli` - Install Angular globally
`git config --global user.name <username>` - Set GitHub username
`git config --global user.email <email>` - Set GitHub email

## Generate new SSH + GPG keys

Generate the keys. DigitalOcean and GitHub both need the SSH, only GitHub needs the GPG.

`git config --global commit.gpgsign true` - Autosign commits

## Other notes

- Run `mongo.exe` from Community Server folder to create DB instance and get localhost URI
- Add that URI *and* the Atlas URI to the MongoDB Compass
- Python *might* require manual path configuration :(
- Configure git ssh - set VSCode terminal *and* git bash to run agent automatically.
- yarn will require restart, possible manual path config.