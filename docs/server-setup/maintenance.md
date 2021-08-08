# Server Maintenance

Assuming you've followed the setup guide, you'll want to perform weekly maintenance to keep your server running smoothly.

`pm2` retains logs, which can result in excessive disk space consumption. This maintenance process will clean up the logs, as well as free up your memory usage to ensure things do not get bogged down.

## Connect to Server

Start by connecting to your server.

```bash
ssh nhcarrigan@[ip]
```

## Shut Down PM2

Get a list of your current running `pm2` processes. Make a note of which ones you have running and which ones you have idle, as you'll need to start the processes again later.

```bash
pm2 ls
```

Now that you have a list, store your process list in the settings so you can restore it after the reboot.

```bash
pm2 save
```

Shut down all of your running processes to prepare for a flush.

```bash
pm2 stop all
```

Now dump the logs.

> [!NOTE]
> Before doing this, view any logs you need to investigate as this step will remove them.

```bash
pm2 flush
```

## Restarting the Server

Time to restart the machine.

```bash
sudo reboot
```

This will kill your current connection. Allow the machine a minute or two to boot up again, then reopen your SSH connection.

Start your NGINX process again so your port routing works.

```bash
sudo systemctl start nginx
```

Restore your process list that you saved earlier.

```bash
pm2 resurrect
```

And finally start your processes again! You can start them all individually, or load them all at once:

```bash
pm2 start all
```
