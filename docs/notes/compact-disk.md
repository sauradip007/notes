# Compact WSL Disk

At the time of writing this, WSL has a "fun" feature where it creates a virtual disk partition for the file system. This partition will grow in size as more storage space is needed, but won't release that allocation if files are deleted.

So, periodically it is necessary to compact the partition to free up that allocation. On Windows Pro this is much easier, but because I use Windows Home the process is a bit more complicated.

The full script is:

```console
wsl --shutdown
diskpart
# open window Diskpart
select vdisk file="C:\Users\nhcar\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu20.04onWindows_79rhkp1fndgsc\LocalState\ext4.vhdx"
attach vdisk readonly
compact vdisk
detach vdisk
exit
```

Let's break it down.

## Shutdown WSL

First you'll need to shut down the WSL engine. In PowerShell, run `wsl.exe --shutdown`.

## Windows Diskpart

`Diskpart` is a built-in partition tool included in Windows Home. Open the utility with `diskpart`.

Then, select your WSL virtual partition with `select vdisk file="path"`. You'll need to replace the `path` with the path to your virtual partition - in my case, this was `"C:\Users\nhcar\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu20.04onWindows_79rhkp1fndgsc\LocalState\ext4.vhdx"`.

Attach the partition in readonly mode with `attach vdisk readonly`. If you get an error here that the partition is in use, run `wsl.exe --shutdown` in PowerShell again.

Then compress it with `compact vdisk`. This may take a few minutes, but this is the step that frees up the storage space.

Run `detach vdisk` to unmount the partition when this is done, and `exit` to close the `Diskpart` utility.