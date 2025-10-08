# Quick Start

Welcome to HoYoShade! This is a quick start guide.

We recommend reading the linked pages below for more details so you can understand and start using HoYoShade quickly.

## What is HoYoShade?

HoYoShade is an open-source fork of the official ReShade project, specially developed for games published by `miHoYo/HoYoverse`. It focuses on improved reliability, features and stability compared with upstream ReShade and aims to be an excellent graphics enhancement tool.

ReShade works by intercepting the rendering calls and image data sent from the CPU to the GPU, modifying those rendering data streams, and producing enhanced visual effects in the game.

Compared to the upstream ReShade, HoYoShade:

- Adds extra support for all games and launchers published under the `miHoYo/HoYoverse` umbrella, providing a unified, reliable, and configurable injection solution so users don’t have to pay extra learning/compatibility costs when sharing across different systems/configurations.
  
- Is designed to tolerate official game updates/patches pushed by `miHoYo/HoYoverse` so you can continue using HoYoShade after updates.
- Provides localized, region-specific, and sometimes exclusive features and additional support for countries and regions in Greater China (Mainland China, Hong Kong, Macau, Taiwan, Singapore) and some Asia-Pacific regions.
  
- Collaborates with many official `miHoYo/HoYoverse` contracted creators and has grown a community composed of contracted creators, contributors and players.
  
- Maintains compatibility-focused development for popular launchers used under `miHoYo/HoYoverse` and provides community-developed presets and tooling.
  
- Supplies some pre-made presets and recommended configurations.
  
- Aims to provide higher reliability and usability than upstream ReShade in certain countries/regions where international networks are restricted.
  
- Keeps file structure and usage patterns as consistent as possible with official ReShade to reduce user learning costs.

In the future, HoYoShade plans to support more `miHoYo/HoYoverse` games.

HoYoShade integrates and modifies several open-source projects based on upstream ReShade — see the [Resource](#〢-来源) section for a concrete list.

For information about the project maintainers and contributors, see the [Contributors](#〢-贡献者) section.

## Before you use HoYoShade

Before you get started, please take time to carefully read the sections below and make sure you understand and accept the stated requirements.

### Important notes for users

- Before installing or using HoYoShade, please read our [User Agreement](/user-agreement). If you do not fully accept the [User Agreement](/user-agreement), stop using HoYoShade immediately. Continuing to use HoYoShade will be considered acceptance of the [User Agreement](/user-agreement).
  
- If any content or terms in this User Agreement or this document conflict with the laws, regulations, or policies of your international or regional government, the laws, regulations, or policies of your international or regional government shall prevail.

- If any features within HoYoShade violate the laws, regulations, or policies of your international or regional government, please voluntarily refuse to use them. HoYoShade contributors are not responsible for any such violations.
  
- Unless explicitly stated otherwise, references to `miHoYo/HoYoverse` throughout HoYoShade and its affiliated pages indicate `miHoYo/HoYoverse` as an organization or group, not any specific subsidiary company, group, or individual.
  
- HoYoShade and its maintainers have no affiliation with `miHoYo/HoYoverse`. If you wish to report problems or file issues about the official game, do not report them through the game developer/publisher channels — use the project’s issue tracker or the maintainers’ contact channels instead.
  
- HoYoShade is a free, open-source mod. The open-source edition will remain free forever. If you downloaded open-source edition for paid/go to this website for paid, contact the seller/platform for refunds. If needed, retain proof of purchase and report to local enforcement or law agencies in your country/region.
  
- HoYoShade is maintained and developed by a number of independent [contributors](#〢-贡献者). Because main contributors often have other real-life obligations, update and maintenance pace may be slower than some users expect — please be understanding.
  
- If you find HoYoShade useful and would like to support development, you may choose to [donate (global)](#〢-赞助HoYoShade) or [purchase our value-added service (available only in Mainland China)](#〢-增值服务). [Purchasing the value-added service (Mainland China only)](#〢-增值服务) grants access to a closed-source release with additional features. For other payment options or enquiries, [contact 哆啦D夢|DuolaD](https://github.com/DuolaD).
  
- If you want to report issues or request refunds and you are in regions where international network access is restricted (for example: Mainland China, Vietnam, etc.), use the [GitHub issue](https://github.com/DuolaD/HoYoShade/issues) or [contact 哆啦D夢|DuolaD](https://github.com/DuolaD) directly.
  
- If you are traveling to or currently living in a country/region with restricted international network access (for example: Mainland China, Vietnam, etc.) and cannot reach international services normally, we recommend that you follow local official contact channels before making requests so you can still receive our latest announcements.
  
- You must confirm the exact game client, publisher, version number, client type and source you are using before using HoYoShade. These details determine which injection presets/options should be used to inject HoYoShade into the game client. Using incorrect injection options may cause the injector to become unresponsive, make the game client unresponsive, or cause other unexpected issues that prevent normal operation.

- In certain countries/regions with strict review and control (for example: Vietnam, India), the game client you can obtain locally may be published by a local publisher instead of miHoYo/HoYoverse. Usually this does not affect the classification of the client type and typically does not prevent continued use of HoYoShade afterwards.

- In some countries/regions (for example: Mainland China), `miHoYo/HoYoverse` may sell the publishing rights for their games to other local publishers, so you might see different publishers operating the same game in the same country/region. This usually does not affect the client type classification and normally does not affect continued use of HoYoShade.

## Hardware requirements

To run HoYoShade, your device must meet the following minimum/recommended hardware requirements:

- CPU: A processor that satisfies the minimum or recommended requirements of the game client itself and is capable of running the GPU at full load without becoming a bottleneck.
  
- Memory and storage: Sufficient RAM and disk space to meet the game client's minimum/recommended requirements plus spare capacity to support HoYoShade.
  
- Operating system: The client device must be running Windows. At least Windows 10 is required.  
   - If your system is older than the game's minimum/recommended OS requirement, use the game's minimum/recommended OS as the baseline.

   - Note: Non-Microsoft (OEM) or vendor-provided Windows builds which deviate significantly from standard Windows may fall outside HoYoShade support.
   - Other operating systems (including but not limited to HarmonyOS, macOS, Linux and their derivatives) are not supported by HoYoShade.

   - Attempting to run HoYoShade on unsupported OSes will not be resolved by the maintainers.

- GPU: A graphics card supporting DirectX 10/11/12 rendering interfaces. Vendor brand is not restricted.
   - While HoYoShade itself does not raise GPU performance requirements, for a good experience we recommend GPUs roughly equivalent to or better than NVIDIA GTX 1060 / RTX 2060 and the latest official drivers from the GPU vendor. Older or low-end GPUs and non-official drivers may prevent HoYoShade from functioning as expected.

   - If the game client itself has additional GPU requirements, your device must meet those as well.

- Cooling and power: The device’s cooling system should be able to support full-load operation of the CPU and GPU simultaneously. Otherwise, instability, device aging, or damage may occur during use.

## Quick install

1. Download the latest version of HoYoShade.
2. Choose the appropriate launcher installation method for your client:
    - [Install using the miHoYo Launcher / HoYoPlay](/Tutorial/mihoyo-launcher)
    - [Install using the Starward Launcher](/Tutorial/starward-launcher)

## Need help?

If you encounter problems during installation or use, first consult the detailed tutorials or contact the maintainers for assistance.