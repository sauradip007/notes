# Unix Commands

Make some notes of the commands :D

## SSH (Remote connection)

- `ssh root@[ip]` - connects to a remote server (DigitalOcean!)

## Screen

- `screen` - opens the program screen (run node from here or it dies when you exit ssh)
- `screen -d -r` - detach and resume the screen (use this to access that node process again after killing ssh)
- `ctrl`+`a`+`d` - exit screen view and return to root terminal

## SCP

- `scp` - secure copy!
- `scp root@[ip]:[path] [local path]` - copy a file from remote to local.
- `scp [local path] root@[ip]:[path]` - copy a file from local to remote.

## File Editing

- `cd [path]` - Change directory. Can use relative or absolute path.
- `mkdir [name]` - Create folder.
- `touch []` - Create file.
- `[command] > [file]` - print results of command to file.
- `nano [file]` - opens text editor to write to file. Shortcuts listed on screen. Exit shortcut will prompt for save!
- `ls` - lists files
- `ls -lah` - lists `a`ll files (including dotfiles) in `l`ong format (with date edited and sizes) and `h`uman readable. Optionally sort by `t`ime.