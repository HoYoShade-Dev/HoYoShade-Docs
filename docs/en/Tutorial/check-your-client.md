# Check your Client Type

Before injecting HoYoShade, verify the region and channel of your game client.

The HoYoShade injector targets a specific process name and permission profile based on your selection. If you choose the wrong client (for example, selecting the Mainland China client when running the Global version), the injector will wait indefinitely because the expected executable never launches.

## Executable Names by Game and Region

| Game | Channel / Region | Executable File |
| :--- | :--- | :--- |
| **Genshin Impact** | Mainland China Official (Celestia) | `YuanShen.exe` |
| **Genshin Impact** | Mainland China Bilibili (Irminsul) | `YuanShen.exe` |
| **Genshin Impact** | Global (America, Europe, Asia, TW/HK/MO) | `GenshinImpact.exe` |
| **Genshin Impact** | Epic Games Store | `GenshinImpact.exe` |
| **Honkai: Star Rail** | Mainland China (Astral Express, Bilibili) | `StarRail.exe` |
| **Honkai: Star Rail** | Global (America, Europe, Asia, TW/HK/MO) | `StarRail.exe` |
| **Zenless Zone Zero** | Mainland China / Global | `ZenlessZoneZero.exe` |
| **Honkai Impact 3rd** | Mainland China Official / Global / Steam | `BH3.exe` |

*Note: Genshin Impact uses different executable filenames for the Mainland China client and the Global client. Choose the matching option in the injector.*

## How to Determine your Channel

If you are unsure which channel your client belongs to, use the following checks.

### Method 1: Check `config.ini` in the Game Folder

This is the most reliable check:

1. Open the game folder containing the executable listed above (for example, `Genshin Impact Game\` or `ZenlessZoneZero Game\`).
2. Open `config.ini` with a text editor.
3. Inspect the `cps`, `channel`, and `sub_channel` lines:

```ini
[General]
channel=1
cps=mihoyo
game_version=5.4.0
sub_channel=1
```

The values correspond to:

- **Mainland China Official**: `cps=mihoyo`, `channel=1`, `sub_channel=1`.
- **Mainland China Bilibili**: `cps=bilibili`, `channel=14`, `sub_channel=0`.
- **Global**: `cps=hoyoverse`, `channel=1` (or local co-publishing tags like Epic).

### Method 2: Check the Launcher and Login Screen

- **Launcher title**:
  - The Mainland China edition of HoYoPlay displays titles in Simplified Chinese (such as 《原神》 or 《崩坏：星穹铁道》).
  - The Global edition of HoYoPlay defaults to English and shows international titles (such as *Genshin Impact* or *Honkai: Star Rail*).
- **Login screen**:
  - A miHoYo account prompt with Chinese mobile verification indicates the Mainland China official server.
  - A Bilibili login window or QR code indicates the Bilibili server.
  - Options for HoYoverse Account, Google, Apple ID, or Facebook indicate the Global server.

### Method 3: Check Starward

If you use Starward, select your game on the home screen. The top right corner displays the active server (such as Celestia, Irminsul, America, or Asia). Match that name to the option in the HoYoShade injector menu.