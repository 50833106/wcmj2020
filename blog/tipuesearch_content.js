var tipuesearch = {"pages":[{"title":"About","text":"CMSimfly 內容管理網誌 課程倉儲: https://github.com/chiamingyen/cmsimfly 內容管理: https://chiamingyen.github.io/cmsimfly/ 課程投影片: https://chiamingyen.github.io/cmsimfly/reveal 課程網誌: https://chiamingyen.github.io/cmsimfly/blog","tags":"misc","url":"./pages/about/"},{"title":"2020wcmj W10","text":"以 SSH 維護倉儲 由於在電腦教室時採用純 IPv6 協定上網, 因此為了能夠在近端將倉儲改版資料推送到目前只接受 IPv4 協定連線的 github, 以下除了將原本以 https 對 github 連線, 改為以 ssh 協定連線外, 在 Windows 環境下必須利用 putty 與 plink, 設定 putty 格式的 .ppk 以及能夠同時支援 IPv4 與 IPv6 的代理主機.","tags":"Misc","url":"./2020-wcm-w10-summary.html"},{"title":"2020wcmj W11","text":"1.下載 Putty 工具組 2.利用 y:\\portablegit\\bin\\sh.exe 進入 shell 命令環境後, 以 ssh-keygen -t rsa -b 4096 -C \"使用者學號\"在 /y/home/.ssh 目錄下建立 id_rsa 與 id_rsa.pub 等 private key 與 public key,之後以 SciTE 開啟 id_rsa.pub 後, 將此 public key 的內容, 以新增添加到 Github.com 帳號下 personal settings -> SSH and GPG keys 頁面下. 3.接下來要利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案, 指定利用 putty 目錄下的 plink 執行 git 指令的網路代理設定.修改啟動的 start.bat 加入下列設定: set GIT_HOME=%Disk%:\\portablegit\\bin\\ set GIT_SSH=%Disk%:\\putty\\plink.exe 4.利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa. 開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位. 並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為 ::53 或 ::42 埠號設為 3128. 5.之後確定 home 下的 .ssh 目錄中的 config 6.最後再將 wcmj2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push.","tags":"Misc","url":"./2020-wcm-w11-summary.html"},{"title":"2020wcmj W12","text":"Leo Editor 基本用法 首先必須要在隨身程式系統的命令列視窗中, 以 leo 啟動 Leo Editor, 然後開啟 [wcmj2020] 倉儲 config 目錄中的 pelican.leo 檔案. 由於 Leo Editor 是一個大綱管理系統, 淡黃色區域是大綱節點區, 淡紅色區是與各大綱對應的內文區, 而淡藍色則是 Log 輸出區. 在 Leo Editor 中新增節點的指令: ctrl + i, 表示要 insert 一個新的節點. 在 Leo Editor 中向右移動節點的方法: ctrl + r, 表示要將節點往 right (右) 移動. 在 Leo Editor 中向左移動節點的方法: ctrl + l, 表示要將節點往 left (左) 移動. 在 Leo Editor 中向上移動節點的方法: ctrl + u, 表示要將節點往 up (上) 移動. 在 Leo Editor 中向下移動節點的方法: ctrl + d, 表示要將節點往 down (下) 移動.","tags":"Misc","url":"./2020-wcm-w12-summary.html"}]};