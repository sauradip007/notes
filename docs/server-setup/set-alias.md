# Set an SSH Alias

Now that you have finished setting up your server, you may find that you frequently need to `ssh` into that server.

Rather than typing out `ssh nhcarrigan@[ip]`, you can configure a name for the host.

## Config File

Navigate to your `.ssh` directory.

```bash
cd ~/.ssh
```

Edit your config file with your favourite editor.

```bash
nano config
```

> [!NOTE]
> The config file does NOT have a file extension.

Add your new host using the following syntax:

```txt
Host <name>
  HostName <ip>
  user <username>
```

A few things to note here:

- The `<name>` placeholder will be your nickname for this server.
- The `<ip>` placeholder can also be a domain name (personally I prefer IPs).
- The `<username>` placeholder should be the user you just created (not `root`!).

An example config might look like:

```txt
Host demo
  HostName 125.0.0.1
  user nhcarrigan
```

You can add additional hosts! Separate them with a new line.

```txt
Host demo
  HostName 125.0.0.1
  user nhcarrigan

Host test
  HostName 255.255.255.0
  user testytest
```

## Using your new config

Now you can connect to your new server!

```bash
ssh demo
```

This should be much smoother than trying to find the IP address every time.

It also works with `scp`!

```bash
scp test.md demo:/home/nhcarrigan/test.md
```

Enjoy your new shortcuts!
