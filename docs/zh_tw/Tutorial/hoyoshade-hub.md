# 使用 HoYoShade Hub 啟動器

HoYoShade Hub 是專為 HoYoShade 打造的現代化圖形介面（WinUI 3）啟動管理工具。整合了框架與著色器組件的一鍵安裝、網路加速設定、多遊戲客戶端管理與自動化注入功能。

---

## 步驟一：初次啟動與執行環境檢查

解壓縮並執行 `HoYoShadeHub.exe`。首次啟動會進入歡迎精靈頁面，啟動器會自動偵測系統環境（包含 WebView2 Runtime、WebP 解碼器與網路連線狀態）。

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

## 步驟二：快速開始與自動化安裝

在「初露鋒芒」快速設定頁面，啟動器預設會自動下載並配置最新穩定版 HoYoShade 框架與全量 ReShade 著色器包。

![快速設定頁面](/images/hub/zh_tw/03-quick-start.png)

1. 點選「下載並安裝」按鈕。
2. 啟動器會自動連線鏡像伺服器下載 HoYoShade 核心框架及常用 Shaders/Addons。

<div style="display: flex; gap: 12px; margin: 16px 0; flex-wrap: wrap;">
  <img src="/images/hub/zh_tw/03-downloading.png" alt="正在下載組件" style="max-width: 48%; border-radius: 8px;" />
  <img src="/images/hub/zh_tw/03-download-complete.png" alt="組件安裝完成" style="max-width: 48%; border-radius: 8px;" />
</div>

安裝完成後，右下角「HoYoShade Hub，啟動！」按鈕會亮起。點選該按鈕即可進入主控制面板。

---

## 步驟三：遊戲偵測與路徑設定

進入主介面後，左上角會提示自動尋找本機已安裝的遊戲客戶端：

![自動尋找提示](/images/hub/zh_tw/04-main-auto-search.png)

點選「自動查找」，啟動器會透過系統登錄檔自動辨識 miHoYo / HoYoverse 客戶端。

::: details 未能自動識別遊戲？手動新增遊戲目錄
若遊戲客戶端放置於非預設路徑、使用便攜版、外接硬碟或虛擬機共用目錄，登錄檔可能缺少對應資訊。此時可以手動指定遊戲路徑：

1. 點選主介面左上角四宮格圖示或遊戲圖示，切換至目標遊戲（例如原神中國伺服器）。
2. 點選右下角「啟動遊戲」旁的齒輪設定圖示，進入遊戲設定面板。
3. 點選「+ 新增遊戲目錄」或「重新定位遊戲」，瀏覽並選擇包含遊戲主執行檔的資料夾（例如包含 `YuanShen.exe` 的客戶端目錄）。

![手動設定遊戲路徑](/images/hub/zh_tw/05-manual-add-game.png)
:::

---

## 步驟四：設定啟動選項並開啟遊戲

路徑設定完成後，主介面會顯示對應遊戲的儀表板背景與控制面板。

![遊戲主儀表板](/images/hub/zh_tw/06-game-dashboard.png)

在左下角「啟動選項」卡片中：
- 勾選 **啟動遊戲**：啟動官方遊戲客戶端。
- 勾選 **啟動 HoYoShade**：在遊戲啟動時自動掛載 HoYoShade 畫質增強核心。
- （可選）依需求勾選 **畫質增強 (啟用 DX12)** 等進階選項。

確認設定無誤後，點選右下角的「啟動遊戲」。

---

## 步驟五：遊戲內驗證與效果調校

啟動器喚起遊戲客戶端後，HoYoShade 會自動注入渲染管線。進入遊戲初始載入畫面時，螢幕頂部會彈出 ReShade 狀態列：

![遊戲啟動載入畫面](/images/hub/zh_tw/07-launch-ingame.png)

著色器編譯完成後，狀態列會顯示安裝成功提示：

![ReShade 載入成功](/images/hub/zh_tw/07-launch-ingame-loaded.png)

- 鍵盤按下 <kbd>Home</kbd> 鍵：呼出 ReShade 控制面板。
- 在控制面板頂部下拉選單選擇自帶的畫面預設，即可體驗即時光影與畫質增強。
- 更多疑難排解與快速鍵說明請參閱 [常見問題與疑難排解](/zh_tw/Tutorial/troubleshooting)。
