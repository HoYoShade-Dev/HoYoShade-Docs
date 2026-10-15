# 使用 HoYoShade Hub 啟動器

HoYoShade Hub 是專為 HoYoShade 打造的現代化圖形介面（WinUI 3）啟動管理工具。整合了框架與著色器組件的一鍵安裝、網路加速設定、多遊戲客戶端管理與自動化注入功能。

---

## 步驟一：下載與安裝 / 解壓縮

前往 [HoYoShade Hub GitHub Releases](https://github.com/DuolaD/HoYoShade-Hub/releases/latest) 下載最新發行的安裝檔或壓縮檔。

![GitHub Releases 資源列表](/images/hub/zh_tw/00-download-releases.png)

### 1. 選擇相應的處理器架構
- **`x64`**：適用於絕大多數搭載 Intel 或 AMD 64 位元處理器的常規 Windows 桌上型電腦與筆記型電腦。
- **`arm64`**：適用於搭載高通驍龍（如 Snapdragon X Elite / Plus 等）、Surface Pro ARM 版或 Mac 虛擬機器（Parallels Desktop WOA）的 Windows on ARM 裝置。

### 2. 選擇安裝形式
- **便攜版 (`HoYoShadeHub_Portable_*.7z`)**：免安裝綠色版。所有資料與設定檔均保留在解壓縮後的目錄內，方便隨身攜帶與備份。
- **安裝版 (`HoYoShadeHub_Setup_*.exe`)**：標準 Windows 安裝精靈。執行後依照精靈指引安裝，會自動在「開始」功能表與桌面建立捷徑。

### 3. 解壓縮與安裝步驟

#### 選項 A：使用便攜版（解壓即用）
下載 `.7z` 壓縮檔後，可透過以下方式解壓縮至任意非系統限制目錄（建議全英文路徑）：
1. **系統內建解壓縮功能**：現代 Windows 11 已原生支援 `.7z` 格式。在壓縮檔上按右鍵，點選「全部解壓縮...」，指定目標資料夾後點選解壓縮即可。
2. **使用 7-Zip（推薦）**：對於 Windows 10 或需要更穩定解壓縮體驗的使用者，推薦安裝免費開源的 [7-Zip](https://www.7-zip.org/)。使用 7-Zip 開啟壓縮檔，點選工具列中的「解壓縮」按鈕（或在檔案按右鍵選擇「7-Zip」→「解壓縮至...」）完成解壓縮。

![使用 7-Zip 解壓縮壓縮檔](/images/hub/zh_tw/00-extract-7zip.png)

解壓縮完成後進入資料夾，找到並按兩下執行 `HoYoShadeHub.exe`：

![解壓縮後的檔案目錄與主程式](/images/hub/zh_tw/00-extracted-folder.png)

#### 選項 B：使用安裝版
按兩下執行下載的 `HoYoShadeHub_Setup_*.exe`，依照精靈指示選擇安裝目錄並完成安裝，隨後從桌面或「開始」功能表啟動「HoYoShade Hub」。

::: details 執行前置環境需求
- **系統要求**：Windows 10 1809 (組建 17763) 或更高版本。
- **[WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2)**：現代 Windows 11 與多數已更新的 Windows 10 通常已內建。若啟動時提示缺少，請前往微軟官方網站下載安裝。
- **[WebP 影像擴充 (WebP Image Extension)](https://apps.microsoft.com/detail/9pg2dk419drg)**：用於啟動器內背景圖繪製。若背景呈現黑畫面或未顯示，可前往微軟應用程式市集（Microsoft Store）免費安裝。
- 為獲得最佳視覺效果，建議在 Windows 系統設定中開啟「透明效果」與「動畫效果」。
:::

---

## 步驟二：初次啟動與執行環境檢查

解壓縮或安裝完成後，執行 `HoYoShadeHub.exe`。首次啟動會進入歡迎精靈頁面，啟動器會自動偵測系統環境（包含 WebView2 Runtime、WebP 解碼器與網路連線狀態）。

![歡迎介面](/images/hub/zh_tw/01-welcome.png)

介面右上角支援切換語言（包含繁體中文、簡體中文、香港繁體及英文）。頁面中央會顯示預設的個人資料儲存資料夾，也可以點選「選擇資料夾」自訂儲存位置。

::: details 網路受限或連線異常？設定 DoH 與 ECH 加速
若所在網路環境連線 GitHub 或海外節點受阻，可在歡迎介面點選「網路設定」超連結，啟用 DNS over HTTPS (DoH) 與加密用戶端 Hello (ECH)。

<div style="display: flex; gap: 12px; margin: 16px 0; flex-wrap: wrap;">
  <img src="/images/hub/zh_tw/02-network-default.png" alt="網路設定預設狀態" style="max-width: 48%; border-radius: 8px;" />
  <img src="/images/hub/zh_tw/02-network-doh.png" alt="開啟 DoH 與 ECH" style="max-width: 48%; border-radius: 8px;" />
</div>

開啟 DoH 後，可在下拉選單中挑選延遲較低的 DNS 供應商（例如 Cloudflare、阿里雲、騰訊雲等），以繞過 DNS 污染並確保組件順利下載：

![挑選 DNS 供應商](/images/hub/zh_tw/02-network-doh-providers.png)
:::

確認環境檢查通過後，點選右下角的「下一步」。

---

## 步驟三：快速開始與自動化安裝

在「初露鋒芒」快速設定頁面，啟動器預設會自動下載並配置最新穩定版 HoYoShade 框架與全量 ReShade 著色器包。

![快速設定頁面](/images/hub/zh_tw/03-quick-start.png)

1. 點選「下載並安裝」按鈕。
2. 啟動器會自動連線鏡像伺服器下載 HoYoShade 核心框架及常用 Shaders/Addons。

<div style="display: flex; gap: 12px; margin: 16px 0; flex-wrap: wrap;">
  <img src="/images/hub/zh_tw/03-downloading.png" alt="正在下載組件" style="max-width: 48%; border-radius: 8px;" />
  <img src="/images/hub/zh_tw/03-download-complete.png" alt="組件安裝完成" style="max-width: 48%; border-radius: 8px;" />
</div>

安裝完成後，右下角「HoYoShade Hub，啟動！」按鈕將高亮顯示。點選該按鈕即可進入主控制面板。

---

## 步驟四：遊戲偵測與路徑設定

進入主介面後，左上角會提示自動尋找本地已安裝的遊戲客戶端：

![自動查找提示](/images/hub/zh_tw/04-main-auto-search.png)

點選「自動尋找」，啟動器將透過系統登錄檔自動識別 miHoYo / HoYoverse 客戶端。

::: details 未能自動識別遊戲？手動加入遊戲目錄
若客戶端存放在非預設路徑、使用免安裝便攜版、外接硬碟或虛擬機器共用資料夾，登錄檔可能缺少對應資訊。此時可以手動指定遊戲路徑：

1. 點選主介面左上角四宮格圖示或遊戲圖示，切換至目標遊戲（例如原神中國服）。
2. 點選右下角「開始遊戲」旁的齒輪設定圖示，進入遊戲設定面板。
3. 點選「+ 加入遊戲目錄」或「重新定位遊戲」，瀏覽並選擇遊戲可執行檔所在目錄（例如包含 `YuanShen.exe` 的客戶端資料夾）。

![手動配置遊戲路徑](/images/hub/zh_tw/05-manual-add-game.png)
:::

---

## 步驟五：設定啟動選項並啟動遊戲

路徑設定完成後，主介面會呈現對應遊戲的儀表板背景與操作面板。

![遊戲主儀表板](/images/hub/zh_tw/06-game-dashboard.png)

在左下角「啟動選項」卡片中：
- 勾選 **啟動遊戲**：啟動官方遊戲客戶端。
- 勾選 **啟動 HoYoShade**：在遊戲啟動時自動掛載 HoYoShade 圖形增強核心。
- （可選）依需求勾選 **畫質增強 (啟用 DX12)** 等進階啟動項。

確認設定無誤後，點選右下角的「開始遊戲」。

---

## 步驟六：遊戲內驗證與效果調節

啟動器喚起遊戲客戶端後，HoYoShade 將自動注入渲染管線。進入遊戲初始載入畫面時，螢幕頂端會彈出 ReShade 狀態列：

![遊戲啟動加載畫面](/images/hub/zh_tw/07-launch-ingame.png)

著色器編譯完成後，狀態列將提示安裝成功：

![ReShade 加載成功](/images/hub/zh_tw/07-launch-ingame-loaded.png)

- 鍵盤按下 <kbd>Home</kbd> 鍵：呼叫出 ReShade 控制面板。
- 在控制面板頂部下拉選單中挑選內建的畫面預設，即可體驗即時光影與畫質增強。
- 更多疑難排查與快捷鍵說明請參閱 [常見問題與排錯](/zh_tw/Tutorial/troubleshooting)。
