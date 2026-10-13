# Using HoYoShade Hub Launcher

HoYoShade Hub is a modern graphical launcher (WinUI 3) designed for HoYoShade. It provides one-click framework and shader installation, network bypass settings (DoH + ECH), multi-game client management, and automated shader injection.

---

## Step 1: Initial Launch and Environment Checks

Extract and run `HoYoShadeHub.exe`. On first launch, the setup wizard runs an environment check verifying the WebView2 Runtime, WebP decoder, and network connectivity.

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

## Step 2: Quick Start and Component Installation

On the "Ready to Begin?" quick setup screen, the launcher selects the latest stable HoYoShade framework and the complete ReShade shader/addon pack by default.

![Quick Setup Screen](/images/hub/en/03-quick-start.png)

1. Click **Download & Install**.
2. The launcher connects to the mirror server to download and extract the HoYoShade framework, shaders, and common addons.

<div style="display: flex; gap: 12px; margin: 16px 0; flex-wrap: wrap;">
  <img src="/images/hub/en/03-downloading.png" alt="Downloading components" style="max-width: 48%; border-radius: 8px;" />
  <img src="/images/hub/en/03-download-complete.png" alt="Installation complete" style="max-width: 48%; border-radius: 8px;" />
</div>

When installation finishes, the **HoYoShade Hub, Start!** button in the bottom-right corner becomes active. Click it to enter the main dashboard.

---

## Step 3: Game Detection and Path Configuration

Upon entering the main interface, the launcher prompts you to detect installed games:

![Auto search prompt](/images/hub/en/04-main-auto-search.png)

Click **Auto Search**. The launcher scans the Windows registry for existing miHoYo / HoYoverse game installations.

::: details Game Not Found Automatically? Add Game Path Manually
If your game client is installed in a non-standard location, on an external drive, or in a portable directory without registry entries, configure the directory manually:

1. Click the game selector icon in the top-left corner to choose your game (for example, Genshin Impact).
2. Click the gear icon next to **Start Game** in the bottom-right corner to open Game Settings.
3. Click **+ Add Game Directory** or **Relocate Game**, then select the directory containing the game executable (such as `YuanShen.exe` or `GenshinImpact.exe`).

![Manual Game Path Configuration](/images/hub/en/05-manual-add-game.png)
:::

---

## Step 4: Configure Launch Options and Start Game

With the game client path configured, the main dashboard displays the game artwork and launch settings.

![Game Dashboard](/images/hub/en/06-game-dashboard.png)

In the **Launch Options** card at the bottom-left:
- Check **Launch Game**: Starts the official game client.
- Check **Launch HoYoShade**: Injects the HoYoShade graphics runtime when the game starts.
- (Optional) Toggle **Graphics Quality Enhancement (DirectX 12)** if supported by your client.

Once your options are configured, click **Start Game** in the bottom-right corner.

---

## Step 5: Verify In-Game Injection

When the game launches, HoYoShade hooks into the graphics pipeline. The ReShade banner appears at the top of the game screen during initial load:

![Game loading banner](/images/hub/en/07-launch-ingame.png)

Once effect compilation finishes, the status bar confirms installation:

![ReShade compiled successfully](/images/hub/en/07-launch-ingame-loaded.png)

- Press <kbd>Home</kbd> on your keyboard to open the ReShade overlay.
- Select your preferred preset from the dropdown menu at the top of the overlay to apply shading effects.
- For troubleshooting and hotkey configuration, refer to [Troubleshooting](/Tutorial/troubleshooting).
