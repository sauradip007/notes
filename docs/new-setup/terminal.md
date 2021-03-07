# Windows Terminal Settings

Windows Terminal can be installed from the Microsoft Store on Windows 10 or later. It is not available for earlier versions of Windows.

Selecting the "Settings" option in the terminal dropdown will open a `settings.json` file. This content goes there.

```json
{
  "$schema": "https://aka.ms/terminal-profiles-schema",
  "defaultProfile": "{07b52e3e-de2c-5db4-bd2d-ba144ed6c273}",
  "copyOnSelect": false,
  "copyFormatting": false,
  "profiles": {
    "defaults": {
      // Put settings here that you want to apply to all profiles.
    },
    "list": [
      {
        "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
        "name": "Windows PowerShell",
        "commandline": "powershell.exe",
        "hidden": true
      },
      {
        "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
        "name": "Command Prompt",
        "commandline": "cmd.exe",
        "hidden": true
      },
      {
        "guid": "{07b52e3e-de2c-5db4-bd2d-ba144ed6c273}",
        "hidden": false,
        "name": "Ubuntu-20.04",
        "source": "Windows.Terminal.Wsl",
        "startingDirectory": "//wsl$/Ubuntu-20.04/home/nhcarrigan",
        "colorScheme": "Duotone Dark",
        "useAcrylic": true,
        "acrylicOpacity": 0.5,
        "fontFace": "PxPlus IBM VGA8",
        "fontSize": 16,
        "experimental.retroTerminalEffect": true
      },
      {
        "guid": "{00000000-0000-0000-ba54-000000000002}",
        "commandline": "%PROGRAMFILES%/git/usr/bin/bash.exe -i -l",
        "icon": "%PROGRAMFILES%/Git/mingw64/share/git/git-for-windows.ico",
        "name": "Git Bash",
        "startingDirectory": "%USERPROFILE%",
        "colorScheme": "Slate",
        "acrylicOpacity": 0.5,
        "useAcrylic": true,
        "fontFace": "PxPlus IBM VGA8",
        "fontSize": 16,
        "experimental.retroTerminalEffect": true
      },
      {
        "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
        "hidden": true,
        "name": "Azure Cloud Shell",
        "source": "Windows.Terminal.Azure"
      }
    ]
  },
  "schemes": [
    {
      "name": "Duotone Dark",
      "black": "#4b0066",
      "red": "#d9393e",
      "green": "#2dcd73",
      "yellow": "#d9b76e",
      "blue": "#2488ff",
      "purple": "#d257ff",
      "cyan": "#6ad7d9",
      "white": "#b7a1ff",
      "brightBlack": "#580078",
      "brightRed": "#d9393e",
      "brightGreen": "#2dcd73",
      "brightYellow": "#d9b76e",
      "brightBlue": "#2488ff",
      "brightPurple": "#d257ff",
      "brightCyan": "#6ad7d9",
      "brightWhite": "#dfd1ed",
      "background": "#1f1d27",
      "foreground": "#b7a1ff"
    },
    {
      "name": "Slate",
      "black": "#222222",
      "red": "#e2a8bf",
      "green": "#81d778",
      "yellow": "#c4c9c0",
      "blue": "#264b49",
      "purple": "#a481d3",
      "cyan": "#15ab9c",
      "white": "#02c5e0",
      "brightBlack": "#ffffff",
      "brightRed": "#ffcdd9",
      "brightGreen": "#beffa8",
      "brightYellow": "#d0ccca",
      "brightBlue": "#7ab0d2",
      "brightPurple": "#c5a7d9",
      "brightCyan": "#8cdfe0",
      "brightWhite": "#e0e0e0",
      "background": "#222222",
      "foreground": "#35b1d2"
    }
  ],
  "actions": [
    { "command": { "action": "copy", "singleLine": false }, "keys": "ctrl+c" },
    { "command": "paste", "keys": "ctrl+v" },
    { "command": "find", "keys": "ctrl+shift+f" },
    {
      "command": {
        "action": "splitPane",
        "split": "auto",
        "splitMode": "duplicate"
      },
      "keys": "alt+shift+d"
    }
  ]
}
```

To read more about this file, check out [my article on configuring Windows Terminal](https://www.freecodecamp.org/news/windows-terminal-themes-color-schemes-powershell-customize/).