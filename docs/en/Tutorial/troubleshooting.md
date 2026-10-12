# Troubleshooting & FAQ

This page covers common issues and diagnostic steps when running HoYoShade.

## 1. Injector Stays on "Waiting for a process to start"

The console window remains stuck on `Waiting for a '...' process to start ...` after you launch the game from the launcher:

- **Check client selection**: Verify that the selected client matches the executable running on your system. For example, the Mainland China Genshin client runs `YuanShen.exe`, while the Global client runs `GenshinImpact.exe`. If the wrong channel is selected in the injector, it will not detect the process. See [Check your Client Type](/Tutorial/check-your-client).
- **Check administrative privileges**: If your game launcher runs with administrator rights but the injector runs as a standard user, the injector will fail to attach to the target process. Right-click the HoYoShade launcher and select "Run as administrator".
- **Silent antivirus blocking**: Some security tools block process injection APIs without displaying an alert. Check [Antivirus Exclusions](/Tutorial/antivirus) to add the HoYoShade folder to your exclusion list.

## 2. Game Crashes, Closes Suddenly, or Throws a Direct3D Error on Launch

The game closes immediately on startup or displays a device error:

- **Third-party overlay conflicts**: ReShade hooks into DirectX presentation calls. Other software hooking the same pipeline can cause hook collisions:
  - **RivaTuner Statistics Server (RTSS)**: Set Application Detection Level to `None` for the game executable, or enable "Custom Direct3D Support".
  - **GeForce Experience / NVIDIA App**: Disable "In-Game Overlay" in the settings.
  - **Discord / Steam Overlay / Game overlays**: Turn off in-game overlays in their respective settings.
- **Outdated GPU drivers**: Older drivers may lack necessary DirectX 11 or 12 instructions. Update to the latest stable driver release from your GPU vendor.
- **Corrupted shader files**: If you added third-party shaders manually, syntax or compilation errors can cause crashes. Temporarily remove custom additions from the `reshade-shaders/Shaders/` directory to isolate the problem.

## 3. Pressing the Home Key Does Not Open the Overlay

The game runs normally, but the ReShade menu does not appear:

- **Key combination requirements**: Many laptop keyboards and compact (60% or TKL) keyboards require a modifier key to trigger <kbd>Home</kbd> (such as <kbd>Fn</kbd> + <kbd>Home</kbd> or <kbd>Fn</kbd> + <kbd>Left Arrow</kbd>).
- **Verify `ReShade.ini` location**: `ReShade.ini` must reside in the directory containing the game executable, not the outer launcher folder. If this file is missing, ReShade cannot read keybinding configurations.
- **Rebind the overlay hotkey**: Open `ReShade.ini` in the game directory with a text editor, locate `KeyOverlay=`, and set it to a different virtual key code if the Home key conflicts with other software.

## 4. Recovering After Game Updates

When miHoYo releases a regular game patch or major version update:

- The HoYoShade injection mechanism is designed to remain compatible without requiring an update to the injector itself.
- If the overlay stops appearing after an update, verify that `ReShade.ini` was not removed from the game executable directory. If missing, copy it from your HoYoShade folder again.

## 5. Depth Effects (DOF, Ambient Occlusion) Do Not Function

- To prevent unfair advantages in online multiplayer environments (such as see-through wall hacks), standard ReShade disables high-precision depth buffer access when network traffic or multi-player scenes are detected.
- Bundled HoYoShade presets focus on color grading, tonemapping, contrast adjustment, and sharpening. These effects do not depend on depth buffers and remain active across all scenes.
