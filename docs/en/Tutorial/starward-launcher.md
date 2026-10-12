# Install with Starward Launcher

[Starward](https://github.com/Scighost/Starward) is an open-source launcher for miHoYo games. This guide explains how to use HoYoShade with games managed by Starward.

## Prerequisites

1. Ensure the game is linked or installed in Starward and launches properly on its own.
2. Close the game completely before starting.
3. Extract HoYoShade to a dedicated directory and configure [Antivirus Exclusions](/Tutorial/antivirus).

## Step-by-Step Instructions

### Step 1: Locate the Game Directory in Starward

1. Open Starward and select the target game on the left navigation bar.
2. Next to the "Start Game" button at the bottom, click the **gear icon (Game Settings)**.
3. Find the game installation directory path and click the folder icon next to it to open the directory in File Explorer.
4. Verify that the main executable is present in this folder (such as `YuanShen.exe`, `GenshinImpact.exe`, `StarRail.exe`, or `ZenlessZoneZero.exe`).

### Step 2: Deploy `ReShade.ini`

1. In the extracted HoYoShade folder, launch the HoYoShade program to generate `ReShade.ini`.
2. Copy `ReShade.ini` and paste it into the game directory opened in Step 1.

### Step 3: Run the HoYoShade Injector

1. In the HoYoShade console, enter the number matching your target game and region.
2. The injector enters a waiting state:
   ```text
   Waiting for a '...' process to start ...
   ```
3. Leave this console window open in the background.

### Step 4: Launch the Game from Starward

1. Return to Starward and click **Start Game**.
2. The injector detects the game process and injects the runtime DLL, printing `Injecting HoYoShade ... Succeeded!` before closing itself.
3. The ReShade banner appears across the top of the game screen. Once loading finishes, press <kbd>Home</kbd> to open the preset menu.

## Starward Features and Compatibility Notes

### 1. Built-in FPS Unlocker Compatibility
Starward offers an optional frame rate unlocking feature for several games. HoYoShade works alongside this feature without conflicts:
- The FPS unlocker modifies engine frame limiters in process memory.
- HoYoShade hooks into the DirectX graphics post-processing pipeline.
- Both tools operate on different layers. When using an FPS unlocker, avoid changing frame rate settings within the game's native graphics settings menu.

### 2. Custom Launch Arguments
Configuring custom launch parameters in Starward (such as `-popupwindow` or `-screen-fullscreen 0`) does not interfere with the injection process.

### 3. Server Region Switching
Starward allows users to switch between server regions (such as moving between Mainland China and Global clients). When switching regions, choose the corresponding client in the HoYoShade injector menu (for example, `YuanShen.exe` for Mainland China and `GenshinImpact.exe` for Global), or the injector will not detect the process.