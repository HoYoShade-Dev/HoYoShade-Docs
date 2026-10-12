Add-Type @"
using System;
using System.Runtime.InteropServices;
public class Win32 {
    [StructLayout(LayoutKind.Sequential)]
    public struct RECT {
        public int Left;
        public int Top;
        public int Right;
        public int Bottom;
    }
    [DllImport("user32.dll")]
    public static extern bool GetWindowRect(IntPtr hWnd, out RECT lpRect);
    [DllImport("dwmapi.dll")]
    public static extern int DwmGetWindowAttribute(IntPtr hwnd, int dwAttribute, out RECT pvAttribute, int cbAttribute);
    [DllImport("user32.dll")]
    public static extern bool SetForegroundWindow(IntPtr hWnd);
}
"@

Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.Windows.Forms

$proc = Get-Process chrome | Where-Object { $_.MainWindowHandle -ne 0 -and $_.MainWindowTitle -ne "" } | Select-Object -First 1
if (-not $proc) {
    Write-Error "Chrome window not found"
    exit 1
}

[Win32]::SetForegroundWindow($proc.MainWindowHandle)
Start-Sleep -Milliseconds 300

$rect = New-Object Win32+RECT
$hr = [Win32]::DwmGetWindowAttribute($proc.MainWindowHandle, 9, [ref]$rect, [System.Runtime.InteropServices.Marshal]::SizeOf($rect))
if ($hr -ne 0) {
    [Win32]::GetWindowRect($proc.MainWindowHandle, [ref]$rect) | Out-Null
}

$width = $rect.Right - $rect.Left
$height = $rect.Bottom - $rect.Top

Write-Output "Bounds: $($rect.Left), $($rect.Top), $width x $height"

$bmp = New-Object System.Drawing.Bitmap $width, $height
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.CopyFromScreen($rect.Left, $rect.Top, 0, 0, (New-Object System.Drawing.Size $width, $height))

$outPath = "Z:\Desktop\GitRepo\HoYoShade-Docs\docs\public\chrome_captured.png"
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$bmp.Dispose()

Write-Output "Saved to $outPath"
