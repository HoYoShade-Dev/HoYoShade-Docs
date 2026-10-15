# Using HoYoShade Hub Launcher

HoYoShade Hub is a modern graphical launcher (WinUI 3) designed for HoYoShade. It provides one-click framework and shader installation, network bypass settings (DoH + ECH), multi-game client management, and automated shader injection.

---

## Step 1: Download and Obtain HoYoShade Hub

Head over to [HoYoShade Hub GitHub Releases](https://github.com/DuolaD/HoYoShade-Hub/releases/latest) to download the latest release packages.

![GitHub Releases Assets list](/images/hub/en/00-download-releases.png)

### 1. Choose Matching Processor Architecture
- **`x64`**: For the vast majority of standard Windows desktop PCs and laptops equipped with Intel or AMD 64-bit processors.
- **`arm64`**: For Windows on ARM devices, including Qualcomm Snapdragon (Snapdragon X Elite / Plus), Surface Pro ARM, or macOS virtualization (Parallels Desktop WOA).

### 2. Choose Package Format
- **Portable Edition (`HoYoShadeHub_Portable_*.7z`)**: Standalone green archive requiring no installation. Extract to any directory (an English path is recommended), then launch `HoYoShadeHub.exe` directly. All configurations and data stay localized in the program directory.
- **Setup Edition (`HoYoShadeHub_Setup_*.exe`)**: Standard Windows setup installer. Run the installer to automatically configure the application and create Start Menu and Desktop shortcuts.

::: details Runtime Prerequisites
- **OS Requirement**: Windows 10 1809 (Build 17763) or later.
- **[WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2)**: Pre-installed on Windows 11 and most updated Windows 10 systems. If prompted on launch, download and install it from Microsoft's official site.
- **[WebP Image Extension](https://apps.microsoft.com/detail/9pg2dk419drg)**: Used to render background wallpapers in the launcher. If backgrounds appear black or missing, install it for free from the Microsoft Store.
- For the best visual experience, enable **Transparency effects** and **Animation effects** in Windows Settings.
:::

---

## Step 2: Initial Launch and Environment Checks

After extracting or installing, run `HoYoShadeHub.exe`. On first launch, the setup wizard runs an environment check verifying the WebView2 Runtime, WebP decoder, and network connectivity.

![Welcome screen](/images/hub/en/01-welcome.png)

Use the dropdown in the top-right corner to switch the display language (English, Simplified Chinese, Traditional Chinese Hong Kong, and Traditional Chinese Taiwan are supported). The center panel displays the default user data directory; click **Select Folder** if you prefer a custom storage location.

::: details Connection Issues or Restricted Network? Configure DoH and ECH
If your network experiences throttling or DNS blocking when connecting to GitHub or remote mirrors, click the **network settings** link on the welcome screen to enable DNS over HTTPS (DoH) and Encrypted Client Hello (ECH).

<div style="display: flex; gap: 12px; margin: 16px 0; flex-wrap: wrap;">
  <img src="/images/hub/en/02-network-default.png" alt="Default network settings" style="max-width: 48%; border-radius: 8px;" />
  <img src="/images/hub/en/02-network-doh.png" alt="DoH and ECH enabled" style="max-width: 48%; border-radius: 8px;" />
</div>

Once DoH is enabled, select a low-latency DNS provider from the dropdown (such as Cloudflare, Google, CleanBrowsing, or regional mirrors) to bypass DNS hijacking:

![Select DNS Provider](/images/hub/en/02-network-doh-providers.png)
:::

Once the environment checks pass, click **Next** in the bottom-right corner.

---

## Step 3: Quick Start and Component Installation

On the "Ready to Begin?" quick setup screen, the launcher selects the latest stable HoYoShade framework and the complete ReShade shader/addon pack by default.

![Quick Setup Screen](/images/hub/en/03-quick-start.png)

1. Click **Download & Install**.
2. The launcher connects to the mirror server to download and extract the HoYoShade framework, shaders, and common addons.

<div style="display: flex; gap: 12px; margin: 16px 0; flex-wrap: wrap;">
  <img src="/images/hub/en/03-downloading.png" alt="Downloading components" style="max-width: 48%; border-radius: 8px;" />
  <img src="/images/hub/en/03-download-complete.png" alt="Installation complete" style="max-width: 48%; border-radius: 8px;" />
</div>

Once installation completes, the **HoYoShade Hub, Launch!** button in the bottom right will highlight. Click it to enter the main dashboard.

---

## Step 4: Game Detection and Path Configuration

Upon entering the main dashboard, the launcher prompts to scan for local installed game clients in the top left:

![Auto Search Prompt](/images/hub/en/04-main-auto-search.png)

Click **Auto Search** to automatically detect miHoYo / HoYoverse clients registered in Windows Registry.

::: details Game Not Found? Manually Add Game Directory
If your game client is located in a custom path, on an external drive, a portable directory, or a virtual machine shared folder, the registry entry may not be found. You can locate it manually:

1. Click the grid icon or game icon in the top-left corner to switch to your target game (e.g. Genshin Impact Global / CN).
2. Click the gear settings icon next to **Start Game** in the bottom-right corner to open the Game Settings page.
3. Click **+ Add Game Directory** or **Relocate Game**, and select the folder containing the game executable (e.g. the folder containing `GenshinImpact.exe` or `YuanShen.exe`).

![Manual game configuration](/images/hub/en/05-manual-add-game.png)
:::

---

## Step 5: Configure Launch Options and Start Game

Once the game path is configured, the dashboard displays the game artwork and controls.

![Game Dashboard](/images/hub/en/06-game-dashboard.png)

In the bottom-left **Launch Options** card:
- Check **Start Game**: Launches the official game client.
- Check **Start HoYoShade**: Automatically attaches HoYoShade graphics core on game launch.
- (Optional) Toggle **Enhanced Graphics (DX12)** or other advanced startup options as needed.

Review your choices and click **Start Game** in the bottom-right corner.

---

## Step 6: In-Game Verification and Effects Tuning

When the game launches, HoYoShade hooks into the rendering pipeline. During the initial game loading screen, the ReShade status banner appears at the top:

![Game launch screen](/images/hub/en/07-launch-ingame.png)

Once shader compilation completes, the status bar confirms installation:

![ReShade Loaded Successfully](/images/hub/en/07-launch-ingame-loaded.png)

- Press <kbd>Home</kbd> on your keyboard to open the ReShade overlay.
- Select from the bundled presets in the top dropdown to experience real-time lighting and graphic enhancements.
- For troubleshooting or hotkey remapping, consult the [Troubleshooting Guide](/en/Tutorial/troubleshooting).
