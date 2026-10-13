# Quick Start

Welcome to the HoYoShade documentation. This page outlines core concepts and the basic setup process to help you run HoYoShade.

## What is HoYoShade?

HoYoShade is an open-source graphics enhancement tool based on ReShade, tailored specifically for PC game clients from miHoYo and HoYoverse.

ReShade intercepts graphics API calls between the CPU and GPU to adjust and enhance visual rendering during post-processing. HoYoShade adapts this process for miHoYo game environments:

- **Unified injection**: Equipped with the self-developed injection core, HoYoShade provides multi-game compatibility and streamlines anti-cheat bypass and process hooking.
- **Game update resistance**: The injection mechanism hooks into the game process memory space at launch. In theory, regular client patches and major version updates do not require software re-adaptation.
- **Launcher and mod compatibility**: HoYoShade maintains compatibility with common launchers (such as HoYoPlay and Starward) and companion tools (such as FPS unlockers and 3DMigoto), supporting chained launches.
- **Ready out of the box**: Packages include essential shaders, localized interface fonts, and pre-tuned color presets.
- **Open source**: The core loader and injection logic are open source under the BSD-3 License.

## Important Notes and Account Safety

Review the following before using HoYoShade:

- **Account safety**: While HoYoShade only modifies local post-processing graphics without altering game memory data or game mechanics, anti-cheat detection policies can change at any time. Using third-party injection tools carries inherent risks of account penalties. Users assume all responsibility for account safety. See the [User Agreement](/user-agreement) for details.
- **Content creation**: When recording video, streaming, or publishing screenshots, consider hiding in-game UIDs and avoiding displaying the ReShade overlay in public broadcasts.
- **Unofficial project**: HoYoShade is maintained independently by the community and is not affiliated with or endorsed by miHoYo or HoYoverse. Do not contact official game support regarding issues caused by mods.
- **Free and open source**: The open-source release of HoYoShade is permanently free. If you purchased this software on an e-commerce platform or through unauthorized channels, request a refund immediately.

## System Requirements

- **Operating system**: 64-bit Windows 10 or Windows 11. macOS, Linux, HarmonyOS, and translation layers are not supported.
- **Hardware**:
  - CPU and RAM: Must meet the official minimum system requirements of the target game.
  - GPU: Must support DirectX 11 or DirectX 12. An NVIDIA GeForce GTX 1060 or AMD Radeon RX 580 or higher is recommended, with the latest stable graphics drivers installed.
- **Runtime**: Microsoft Visual C++ 2015-2022 Redistributable (x64).

## Three-Step Setup

1. **Extract the archive**:
   Download the latest release from [GitHub Releases](https://github.com/DuolaD/HoYoShade/releases). Extract the files to a non-system folder (such as `D:\HoYoShade\`). Add this directory to your antivirus exclusions before launching, as explained in [Antivirus Exclusions](/Tutorial/antivirus).

2. **Run the injector and select your client**:
   Start the HoYoShade launcher and choose your game and regional client from the menu. (If you are unsure which client you have, see [Check your Client Type](/Tutorial/check-your-client).) The injector will enter a waiting state.

3. **Launch the game and load a preset**:
   Start the game through your official launcher or Starward. A ReShade status bar will appear at the top of the screen during launch. Once in game, press the <kbd>Home</kbd> key to open the overlay and pick a preset.

For step-by-step instructions with specific launchers, refer to:
- [Use HoYoShade Hub Launcher (Recommended)](/Tutorial/hoyoshade-hub)
- [Install with HoYoPlay Launcher](/Tutorial/mihoyo-launcher)
- [Install with Starward Launcher](/Tutorial/starward-launcher)