# Install with HoYoPlay Launcher

This guide explains how to run HoYoShade alongside games managed by the official miHoYo / HoYoverse launcher (HoYoPlay).

## Prerequisites

1. Ensure your game is installed through HoYoPlay and launches normally on its own.
2. Close the game completely before proceeding.
3. Download the latest HoYoShade zip archive from the Release page and extract it to a dedicated folder (such as `D:\HoYoShade\`).
4. To prevent false positives or process blocking, configure an exclusion in your antivirus software before starting. See [Antivirus Exclusions](/Tutorial/antivirus).

## Step-by-Step Instructions

### Step 1: Locate the Game Directory

HoYoPlay and the actual game process reside in different folders. You need to open the folder containing the game executable:

1. Open HoYoPlay and navigate to the target game (such as Genshin Impact or Honkai: Star Rail).
2. Click the **options icon (three dots or gear)** next to the Start button and select **Game Settings**.
3. Under the installation path section, click **Open Directory**.
4. File Explorer will open the game directory. Confirm that the main executable file is present (such as `YuanShen.exe`, `GenshinImpact.exe`, `StarRail.exe`, or `ZenlessZoneZero.exe`).

### Step 2: Deploy `ReShade.ini`

1. Open your extracted HoYoShade folder and run the launcher.
2. The launcher generates a `ReShade.ini` file in the HoYoShade root directory on first launch.
3. Copy this `ReShade.ini` file and paste it into the **game executable directory** opened in Step 1.

> Note: `ReShade.ini` points ReShade to the shaders and presets. Placing it next to the game executable allows the ReShade runtime to read your configuration when the game starts. You do not need to repeat this step on future launches unless you reinstall the game.

### Step 3: Run the Injector

1. In the HoYoShade launcher console, enter the number corresponding to your game and region. (If you are uncertain, check [Check your Client Type](/Tutorial/check-your-client).)
2. The console window will display a waiting prompt:
   ```text
   Waiting for a 'GenshinImpact.exe' process to start ...
   ```
3. Keep this console window open in the background.

### Step 4: Launch the Game from HoYoPlay

1. Return to HoYoPlay and click **Start Game**.
2. When the game process starts, the HoYoShade injector detects the process PID and injects the DLL:
   ```text
   Found a matching process with PID 12345! Injecting HoYoShade ... Succeeded!
   ```
3. The injector console will close or finish automatically once injection succeeds.

### Step 5: Verify in Game and Select a Preset

1. During the game loading screen, a ReShade status bar appears across the top showing shader compilation progress.
2. Once compilation finishes, press the <kbd>Home</kbd> key on your keyboard to open the ReShade configuration overlay.
3. Use the preset dropdown at the top of the overlay to select a bundled preset, or customize effect parameters manually.

## Handling Game Updates

When HoYoPlay updates a game with a minor patch or a new version:

1. `ReShade.ini` in the game directory is normally preserved during patch updates.
2. Start the HoYoShade injector first, then click Start Game in HoYoPlay as usual.
3. If a full game reinstallation changes the installation folder, copy `ReShade.ini` into the new game folder again.