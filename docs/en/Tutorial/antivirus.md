# Antivirus Exclusions

When using injection-based mods, false positives and silent blocking from antivirus software are the most common causes of injection failure. This guide explains why these alerts occur and how to configure exclusions properly.

## Why Antivirus Flags HoYoShade

The HoYoShade injector loads `ReShade64.dll` into the game process memory at startup. This process uses standard Windows process manipulation APIs, including `OpenProcess`, `VirtualAllocEx`, `WriteProcessMemory`, and `CreateRemoteThread`.

Because some malware families also use process injection, heuristic analysis and cloud-delivered protection in modern antivirus suites frequently flag injectors as generic threats (such as `HackTool:Win32/Injector` or `Trojan:Win32/Wacatac`).

HoYoShade's injection source code is fully open source in the project repository (see [`inject_mod.cpp`](https://github.com/DuolaD/HoYoShade/blob/V2.X.X-Stable/inject_mod.cpp)). It contains no data collection, backdoors, or malicious logic. Adding an exclusion ensures the injector can access the game process without interference.

## Windows Security (Windows Defender) Configuration

For Windows 10 and Windows 11:

1. Open the Start menu, search for **Windows Security**, and open it.
2. Select **Virus & threat protection**.
3. Under "Virus & threat protection settings", click **Manage settings**.
4. Scroll down to the "Exclusions" section and click **Add or remove exclusions**.
5. Select "Yes" on the User Account Control prompt.
6. Click **Add an exclusion** and choose **Folder**.
7. Browse to and select the extracted HoYoShade folder (such as `D:\HoYoShade\`).
8. *(Recommended)* Add the folder containing your game executable as a second folder exclusion.

## Third-Party Antivirus Suites

If you use third-party security software (such as Kaspersky, Bitdefender, Norton, or Avast):

1. Open the application settings.
2. Locate the "Exclusions", "Trusted Zone", or "Exceptions" panel.
3. Add the entire HoYoShade folder to the exclusion list.

## Restoring Quarantined Files

If your antivirus software deleted or quarantined files before you set up exclusions:

1. Open the "Protection history" or "Quarantine" section of your security software.
2. Locate the quarantined HoYoShade file (such as the launcher executable or `ReShade64.dll`).
3. Select "Restore" and allow the file on your device.
4. If the file cannot be restored, configure the folder exclusion first and re-extract the archive.
