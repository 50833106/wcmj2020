var tipuesearch = {"pages": [{'title': '有關本網站', 'text': '這裡是50833106的紀錄學習歷程網站 \n \n', 'tags': '', 'url': '有關本網站.html'}, {'title': 'About', 'text': '\n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n', 'tags': '', 'url': 'About.html'}, {'title': '利用 cmsimde 建立靜態網誌方法', 'text': '1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \n', 'tags': '', 'url': '利用 cmsimde 建立靜態網誌方法.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Cmsimde', 'text': 'https://github.com/mdecourse/cmsimde.git \xa0 是一套利用 Python 解譯程式語言所編寫的網際內容管理系統, 使用者可以用來建立動態網站, 靜態網站, 網誌與網際簡報系統. \n 程式語言就其執行的方式, 可以分為編譯式與解譯式等兩種. \n 編譯式語言例如: C 程式語言 \n 解譯式語言例如: Python 程式語言 \n 編寫程式語言是工程師與電腦溝通的途徑之一, 工程師編寫計算機程式在電腦上執行, 可以透過電腦強大與重複的運算能力來解決問題. \n CMSiMDE 就是工程師希望將各種與產品開發的過程資料, 存放在網站上, 除了可用於工程師之間的溝通外, 還能夠將產品開發的細節, 或者特定工具的使用詳細記錄, 以作為往後的參考. \n', 'tags': '', 'url': 'Cmsimde.html'}, {'title': '如何使用 CMSiMDE', 'text': '(1) 以子模組的方式使用 CMSiMDE \n 將 Github 倉儲 git clone 到近端工作區之後, 可以利用 git submodule add 指令將遠端倉儲中的 CMSiMDE 程式碼納為倉儲中的 cmsimde 子目錄, 並且保持與遠端原始碼的版次關聯 (也就是能夠指定採用遠端特定版本的 CMSiMDE 程式碼). \n 好處: 子模組可以與遠端官方的倉儲保持關聯, 一旦 CMSiMDE 更新版本, 使用者可以利用 git pull 直接拉下遠端 CMSiMDE 的最新程式碼. \n 壞處: 使用者若要 git clone 遠端的倉儲至近端, 需要加上 --recurse-submodules 選項 \n (2) 不以子模組的方式使用 CMSiMDE \n 假如不需要保持與遠端 CMSiMDE 倉儲特定版次的關聯性, 可以直接將 CMSiMDE 倉儲中的檔案, 直接放入 cmsimde 目錄, 並將其中 up_dir 的內容複製到希望建立網頁的倉儲主目錄中即可. \n 好處: 使用者可以直接使用 git clone 指令, 拉下遠端倉儲的所有資料. \n 壞處: 失去與遠端 CMSiMDE 倉儲的關聯, 假如要使用最新改版後的 CMSiMDE 原始碼, 必須另外 git clone 然後再取代倉儲中 cmsimde 的所有檔案. \n \n \n \n', 'tags': '', 'url': '如何使用 CMSiMDE.html'}, {'title': '主題', 'text': 'Google Blogger \n Login to your gm email account and download \xa0 2010_BeginningGoogleBlogger.pdf \n WCM \n Login to your gm email account and download \xa0 2020wcm_topic_1.pdf . \n What is a content management system? \n Analyzing your information life cycle. \n Overview of enterprise content management. \n Git \n Login to your gm email account and download \xa0 IntroductionToVersionControlAndGit.pdf . \n What is version control? \n Git installation and setup. \n Git getting started. \n Commits and remote git. \n', 'tags': '', 'url': '主題.html'}, {'title': 'Github', 'text': 'Login to your gm email account and download \xa0 GithubPrimer.pdf \n Login to your gm email account and download \xa0 ConflictsGUIToolAdvGit.pdf \n \n', 'tags': '', 'url': 'Github.html'}, {'title': '上課內容重點筆記', 'text': '\n', 'tags': '', 'url': '上課內容重點筆記.html'}, {'title': 'proxy', 'text': '代理 （英語： Proxy ）也稱 網路代理 ，是一種特殊的網路服務，允許一個 網路終端 （一般為 客戶端 ）通過這個服務與另一個 網路終端 （一般為 伺服器 ）進行非直接的連接。一些 閘道器 、 路由器 等網路裝置具備網路代理功能。一般認為代理服務有利於保障網路終端的隱私或安全，防止攻擊。 \n 提供代理服務的電腦系統或其它類型的網路終端稱為代理伺服器（英文：Proxy Server）。一個完整的代理請求過程為： 客戶端 首先與代理伺服器建立連接，接著根據代理伺服器所使用的代理協定，請求對目標伺服器建立連接、或者獲得目標伺服器的指定資源（如：檔案）。在後一種情況中，代理伺服器可能對目標伺服器的資源下載至本地 快取 ，如果客戶端所要取得的資源在代理伺服器的快取之中，則代理伺服器並不會向目標伺服器傳送請求，而是直接傳回已快取的資源。一些代理協定允許代理伺服器改變客戶端的原始請求、目標伺服器的原始回應，以滿足代理協定的需要。代理伺服器的選項和設定在電腦程式中，通常包括一個「防火牆」，允許用戶輸入代理位址，它會遮蓋他們的網路活動，可以允許繞過網際網路過濾實現網路存取。 \n 代理伺服器的基本行為就是接收客戶端傳送的請求後轉發給其他伺服器。代理不改變請求 URI ，會直接傳送給前方持有資源的目標伺服器。 \n 持有資源實體的伺服器被稱為 源伺服器 。從源伺服器返回的回應經過代理伺服器後再傳給客戶端。 \n', 'tags': '', 'url': 'proxy.html'}, {'title': 'NAT', 'text': '網路位址轉換 （英語： N etwork \xa0 A ddress \xa0 T ranslation ，縮寫： NAT ；又稱 網路掩蔽 、 IP 掩蔽 ）在 計算機網路 中是一種在 IP 封包 通過 路由器 或 防火牆 時重寫來源 IP地址 或目的 IP 位址的技術。這種技術被普遍使用在有多台主機但只通過一個公有IP位址存取 網際網路 的 私有網路 中。它是一個方便且得到了廣泛應用的技術。當然， NAT 也讓主機之間的通信變得複雜，導致了通信效率的降低。 \n', 'tags': '', 'url': 'NAT.html'}, {'title': '電腦之硬體設備', 'text': '', 'tags': '', 'url': '電腦之硬體設備.html'}, {'title': 'CPU', 'text': '中央處理器，電腦的心臟，速度越快效果越好，若電腦為一家店，則CPU可以說是店員，反應越快越佳。 \n', 'tags': '', 'url': 'CPU.html'}, {'title': '記憶體RAM', 'text': '電腦系統運作實戰存資料的地方，其大小也是影響電腦速率快慢的重要因素。 \n', 'tags': '', 'url': '記憶體RAM.html'}, {'title': '硬碟', 'text': '儲存系統軟體、應用軟體及資料的地方，一台主機可以裝多顆硬碟。 \n', 'tags': '', 'url': '硬碟.html'}, {'title': 'IPv4與IPv6之差別', 'text': '', 'tags': '', 'url': 'IPv4與IPv6之差別.html'}, {'title': 'IPv4', 'text': 'IPv4的格式是32位元長度，位置能提供2的32次方個，換算後約42億個。雖然有這麼多個，但依舊被消耗殆盡。 \n', 'tags': '', 'url': 'IPv4.html'}, {'title': 'IPv6', 'text': 'IPv6，他所能提供的ip位置遠遠超過IPv4的數量，簡單來說，轉換到IPv6後ip位置的數量幾乎不可能用完。 \n', 'tags': '', 'url': 'IPv6.html'}, {'title': '紙本筆記', 'text': '\n \n \n \n \n \n', 'tags': '', 'url': '紙本筆記.html'}, {'title': '課程進度', 'text': '\n', 'tags': '', 'url': '課程進度.html'}, {'title': 'w1', 'text': '\n 建立blogger \n 課程小單字 \n \n 1 super computer 超級電腦 \n 2pc=person computer 個人電腦\xa0\n 3mainframe 伺服器主機 \n 4\xa0server 伺服器 (虛擬 實體) \n 5 mobile phone 手機 \n \n 6 microcontroller 微控制器 \n \n \n \n Port 埠號 \n DHCP動態網路位置 \n \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '課程小筆記 \n \n IPv4 version 4 IP 四個區段,用.隔開 \n IPv6 version 6 IP 八個區段,用:隔開 \n [2001:288:6004:17::53]:3128 140.130.17.53:3128 \n [2001:288:6004:17::42]:3128 140.130.17.53:254(系gateway通道) \n [2001:288:6004:17::17]:3128 140.130.1.*(校主幹) \n [2001:288:6004:17::7]:3128 \n \n 課程小單字 \n tcp/ip==trandmision control protocol/internet protocol \n \n \n inter-net==inter-national(國際) \n \n \n (網際,inter+networt) \n \n \n protocal 協定\n microscope 顯微鏡 \n telescope 望遠鏡\n \n trasmit 傳輸 \n data 資料 \n \n packet 封包 \n \n \n \n control 控制\n macro 巨(比原子(atom)大) \n atomic bomb 原子彈中華電信 dns. server. dns==domain name server 符號名稱伺服器 \n \n version 版本(短時間) \n edition 版本(長時間) \n router 路由器 \n route 路徑 \n remote login 遠端登入 \n \n micro 微 \n \n \n \n \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3建立可攜式環境', 'text': '\n 建立可攜式環境 \n 為了讓工程師可以在不同的 Windows 10 64 位元電腦上管理 CMSiMDE 網際內容管理系統, 因此需要 Python 解譯環境以及一個文字檔案的編輯器. \n 這裡所安裝的 Python 解譯器選擇由 C 所編寫的 CPython, 可以從 \xa0 https://www.python.org/ \xa0 下載安裝. 但是在此我們要將 Python 解譯系統配置在 USB 隨身碟上, 使用者可以隨身攜帶, 一旦配置完成後, 可以在任何一台 Windows 10 64 位元的筆電或電腦上執行 Python 或 C 程式. \n 可攜 Python 程式環境的建立步驟: \n 安裝 Python 套件時, 不要安裝 pip, 之後將 Python38 目錄複製到 data 目錄中, 然後建立 start.bat 指定使用可攜系統中的 Python, 之後再利用 g et-pip.py, \xa0 以命令列中的 python get-pip.py 安裝 pip. \n 可攜 Tiny C 程式環境的建立步驟: \n 從 \xa0 https://bellard.org/tcc/ \xa0 下載 Tiny C, 將 tcc 解開壓縮後放到 data 目錄中. 然後修改 wscite 目錄中的 cpp.properties, 使用 Tiny C 類解譯 .c 程式. \n 選用的文字編輯器: \xa0 https://www.scintilla.org/SciTE.html \n 建立完成的可攜程式環境: \n 下載 \xa0 wcmj2020_tool.7z , 檔案大小為 435 MB, 解開壓縮後為 1.8 GB (其中包括 Mypaint, Dia 與 OBS 等) \n 將 wcmj2020_tool.7z 解壓縮到隨身碟或電腦硬碟中, 將 home 與 home_ipv6 目錄中的 .gitconfig user.name 與 user.email 改為自己的 Github 帳號與 email 後, 利用 start.bat 啟動可攜系統, 利用 stop.bat 關閉可攜系統. \n \n', 'tags': '', 'url': 'w3建立可攜式環境.html'}, {'title': 'w4建網站', 'text': '\n 此內容管理系統以 https:..github.com.mdecourse.cmsimde 作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n \n \n 利用 cmsimde 建立靜態網誌方法: \n \n \n 在 github 建立倉儲, git clone 到近端 \n 參考https:..github.com.mdecourse.newcms, 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add https:..github.com.mdecourse.cmsimde cmsimde \n \n \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n \n \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n \n \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n \n \n 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules https:..github.com.mdecourse.newcms.git \n \n', 'tags': '', 'url': 'w4建網站.html'}, {'title': 'w5', 'text': '\n 筆記 \n firmwarre 韌體 \n \n \n \n \n \n \n software 軟體 \n hardware 硬體\n \n \n terminology 專業術語 \n particular 特別 \n \n \n technical 技術 \n \n \n \n \n application 應用 \n \n \n \n \n \n command wundow 命令視窗 \n submodule 子模組 \n \n machine language 機器語言 \n \n \n URL:Uniform Resourse Locator 統一資源定位 \n ----------------------------------------------------------------------------------------------------------------- \n \n \n 程式令: \n \n \n Y:←指y槽 \n Y:\\ ←表示Y槽的root根目錄 \n > 為回應符號(prormptsign) \n \\ 為blackslash 反斜線 \n dir為顯示目錄內容的指令 \n cd tmp 表示change directory 到指定的目錄 \n git為分散式版次管理的指令名稱 \n git clone表示要使用git對遠端的倉儲進行clone。 \n \n \n \n \n \n \n 課堂小單字 \n shell 殼 \n interface 介面 \n device 物件 \n graphics 圖形 \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '\xa0 portable obs教學 \n \n portable obs \n \n \n google hangout meet \n \n \n streeming and recording \n --------------------------------------------------------------------------------------------------------------- \n \n \n 讓手機可以利用電腦熱點上網： \n 採用 https://www.tp-link.com/us/home-networking/usb-adapter/tl-wn725n/ \n \n \n 將此一 USB Wifi adapter 連接電腦後, 若網路為 IPv4 協定時, 可以透過"設定 -> 網路和網際網路 -> 行動熱點", 選擇開啟並編輯"網路名稱與網路密碼"後, 讓至多 8 台手機透過熱點連線上網。 \n \n \n 但是因為目前 Windows 10 並未提供 IPv6 網路協定下的網路熱點功能, 因此在純 IPv6 網路協定下無法使用"行動熱點"服務。 \n \n \n 利用手機鏡頭當作 webcam: \n \n \n Android: https://www.digitalcitizen.life/turn-android-smartphone-webcam-windows \n iPhone: https://www.makeuseof.com/tag/use-your-iphone-as-a-webcam-heres-how-ios/ \n \n \n \n 需要 clone 個人倉儲時： \n git clone --recurse-submodules 倉儲_url.git \n \n \n 例如: git clone --recurse-submodules https://github.com/mdecourse/wcmj2020.git \n \n \n 現場直播的 audio 錄音設定 \n 在電腦輔助設計室進行直播時, 由於現場有擴音設備, 因此採用 OBS 串流至 Youtube 的最佳收音並非從 Webcam 的麥克風, 而是從擴音器以 audio outpu 連接到電腦的麥克風插槽, 然後將 OBS 的 audio 設定為從電腦的麥克風收音. \n \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7-8', 'text': '\xa0 grouping and meeting \n \n 第三組group3 \n 50833104 組長 \n 50833106 \n 50833113 \n 50833114 \n 50833116 \n 50833118 \n 50833120 \n 50833125 \n 50833140 \n 50833141 \n \n \n \n proxy \n \n 2001:288:6004:17::53 \n \n \n 2001:288:6004:17::42 \n 2001:288:6004:17::17 \n 2001:288:6004:17::4 "虛擬主機 可以校外連接" \n \n \n \n 下周可能線上上課 \n \n', 'tags': '', 'url': 'w7-8.html'}, {'title': 'w9期中考', 'text': '學習這幾周下來之心得 \n w1教我們如何建立blogger \n w2-4則是教我們如何用git指令建立cmsimde網站，並如何維護 \n 而w6-w9則是教學如何開直播 \n', 'tags': '', 'url': 'w9期中考.html'}, {'title': 'w10-12如何用ssh', 'text': '由於在電腦教室時採用純 IPv6 協定上網, 因此為了能夠在近端將倉儲改版資料推送到目前只接受 IPv4 協定連線的 github, 以下除了將原本以 https 對 github 連線, 改為以 ssh 協定連線外, 在 Windows 環境下必須利用 putty 與 plink, 設定 putty 格式的 .ppk 以及能夠同時支援 IPv4 與 IPv6 的代理主機. \n 設定步驟如下: \n 1. 下載 Putty 工具組 \n 從\xa0 https://www.chiark.greenend.org.uk/~sgtatham/putty/ \xa0 下載一般版, 或從 \xa0 http://jakub.kotrla.net/putty/ \xa0 下載特殊的可攜版本. \n 2. 利用 y:\\portablegit\\bin\\sh.exe 進入 shell 命令環境後, 以\xa0 \n \n \n \n \n \n \n 1 \n \n \n \n ssh-keygen -t rsa -b 4096 -C \xa0 "使用者學號" \n \n \n \n \n \n \n \n 在 /y/home/.ssh 目錄下建立 id_rsa 與 id_rsa.pub 等 private key 與 public key \n 之後以 SciTE 開啟 id_rsa.pub 後, 將此 public key 的內容, 以新增添加到 Github.com 帳號下 personal settings -> SSH and GPG keys 頁面下. \n 3. 接下來要利用 puttygen.exe 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式, 並修改隨身系統的啟動批次檔案, 指定利用 putty 目錄下的 plink 執行 git 指令的網路代理設定. \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n \n \n \n 修改啟動的 start.bat 加入下列設定: \n \xa0 \n set GIT_HOME=%Disk%:\\portablegit\\bin\\ \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n \n \n \n \n \n \n \n 4. 利用 puttygen.exe 載入第二步驟所建立的 private key, 也就是 id_rsa. \n 開啟 puttygen 之後, 以右下方的 load 載入 id_rsa, 成功載入後, 利用 save private key 按鈕, 將已經轉為 putty 格式的 .ppk 存檔. 此一 .ppk 檔案必須在設定 putty 中 github.com session 時, 在 Connection->SSH->Auth 項目下, 將轉檔後的 .ppk 指向 private key file for authentication 欄位.\xa0 \n 並在 Connection->Proxy 項目下, 指定 Proxy type: HTTP, 並將 IPv6 代理主機設為 ::53 或 ::42 埠號設為 3128. \n 5. 之後確定 home 下的 .ssh 目錄中的 config 設定檔案為: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n # no proxy at home \n #ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p \n # set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup \n ProxyCommand y:/putty/plink.exe github.com %h %p \n \xa0 \xa0 \n Host github.com \n \xa0\xa0\xa0\xa0 User git \n \xa0\xa0\xa0\xa0 Port 22 \n \xa0\xa0\xa0\xa0 Hostname github.com \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0\xa0\xa0\xa0 # for connect.exe need openssh key format \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\id_rsa_mdecourse" \n \xa0\xa0\xa0\xa0 # for plink.exe need rsa key format but set under putty github.com session \n \xa0\xa0\xa0\xa0 # plink.exe do not need the following setting \n \xa0\xa0\xa0\xa0 #IdentityFile "y:\\home\\.ssh\\mdecourse_putty_private.ppk" \n \xa0 \xa0 \n \xa0\xa0\xa0\xa0 TCPKeepAlive yes \n \xa0\xa0\xa0\xa0 IdentitiesOnly yes \n \n \n \n \n \n \n \n 6. 最後再將 wcmj2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線: 範例如下: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n \n \n \n [core] \n \xa0\xa0\xa0\xa0 repositoryformatversion = 0 \n \xa0\xa0\xa0\xa0 filemode = \xa0 false \n \xa0\xa0\xa0\xa0 bare = \xa0 false \n \xa0\xa0\xa0\xa0 logallrefupdates = \xa0 true \n \xa0\xa0\xa0\xa0 symlinks = \xa0 false \n \xa0\xa0\xa0\xa0 ignorecase = \xa0 true \n [submodule] \n \xa0\xa0\xa0\xa0 active = . \n [remote \xa0 "origin" ] \n \xa0\xa0\xa0\xa0 #url = https://github.com/mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 url = git@github.com:mdecourse/wcmj2020.git \n \xa0\xa0\xa0\xa0 fetch = +refs/heads/*:refs/remotes/origin/* \n [branch \xa0 "master" ] \n \xa0\xa0\xa0\xa0 remote = origin \n \xa0\xa0\xa0\xa0 merge = refs/heads/master \n [submodule \xa0 "cmsimde" ] \n \xa0\xa0\xa0\xa0 url = https: //github.com/mdecourse/cmsimde.git \n \n \n \n \n \n \n \n 之後就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push了喔。 \n', 'tags': '', 'url': 'w10-12如何用ssh.html'}, {'title': 'W13', 'text': '利用 Windows 10 設定 -> 選擇預設網頁瀏覽器, 使用 Google Chrome 作為預設瀏覽器. \n 隨身程式系統必須安裝\xa0 google-api-python-client 與 oauth2client pip install google-api-python-client oauth2client OAuth 2.0 client IDs 程式類別可以選擇 other 使用者完成 client_secrets.json 設定後, 必須將檔案存在倉儲目錄外部 \n add_to_blogger 按鈕內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n 81 \n 82 \n 83 \n 84 \n 85 \n 86 \n 87 \n 88 \n 89 \n 90 \n 91 \n 92 \n 93 \n 94 \n 95 \n 96 \n \n \n \n from \xa0 markdown \xa0 import \xa0 markdown \n from \xa0 oauth2client \xa0 import \xa0 client \n from \xa0 googleapiclient \xa0 import \xa0 sample_tools \n import \xa0 os \n \xa0 \n os.environ[ \'TZ\' ] \xa0 = \xa0 \'Asia/Taipei\' \n argv \xa0 = \xa0 "" \n # 認證並建立服務 \n # name of the api is "blogger", version is "v3" \n # description of the api is __doc__ \n # file name of the application: location of client_secrets.json \n service, flags \xa0 = \xa0 sample_tools.init( \n \xa0\xa0 argv, \xa0 \'blogger\' , \xa0 \'v3\' , __doc__, \xa0 "./../../client_secrets.json" , \n \xa0\xa0 scope = \'https://www.googleapis.com/auth/blogger\' ) \n \xa0 \n \xa0 \n def \xa0 get_cat_tag_content(data): \n \xa0\xa0\xa0\xa0 # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- \n \xa0\xa0\xa0\xa0 # 用跳行符號分割 \n \xa0\xa0\xa0\xa0 data_list \xa0 = \xa0 data.split( "\\n" ) \n \xa0\xa0\xa0\xa0 #第 2 行為 title \n \xa0\xa0\xa0\xa0 title = \xa0 data_list[ 1 ] \n \xa0\xa0\xa0\xa0 #第 4 行為 category \n \xa0\xa0\xa0\xa0 category \xa0 = \xa0 data_list[ 3 ] \n \xa0\xa0\xa0\xa0 #第 5 行為 tags \n \xa0\xa0\xa0\xa0 tags \xa0 = \xa0 data_list[ 4 ] \n \xa0\xa0\xa0\xa0 # 有多項資料的 content 型別為數列 \n \xa0\xa0\xa0\xa0 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 \n \xa0\xa0\xa0\xa0 content \xa0 = \xa0 "\\n" .join(data_list[ 8 :]) \n \xa0\xa0\xa0\xa0 # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more--> \n \xa0\xa0\xa0\xa0 content \xa0 = \xa0 content.replace( \'<!-- PELICAN_END_SUMMARY -->\' , \xa0 \'<!--more-->\' ) \n \xa0\xa0\xa0\xa0 # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~python\', \'[code lang="python"]\') \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~\', \'[/code]\') \n \xa0\xa0\xa0\xa0 return \xa0 title, category, tags, content \n \xa0 \n # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 \n # p.h 為 @clean filename.md \n # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 \n md_filename \xa0 = \xa0 p.h.split( " " )[ 1 ] \n with \xa0 open (md_filename, \xa0 \'r\' , encoding = "utf-8" ) as content_file: \n \xa0\xa0\xa0\xa0 md_content \xa0 = \xa0 content_file.read() \n # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) \n title_str, category_str, tags_str, content \xa0 = \xa0 get_cat_tag_content(md_content) \n category \xa0 = \xa0 category_str.split( ":" )[ 1 ] \n tags \xa0 = \xa0 tags_str.split( ":" )[ 1 ].split( "," ) \n tags.append(category) \n # title 是一個單獨的字串 \n title \xa0 = \xa0 title_str.split( ":" )[ 1 ] \n # 將 markdown 格式 content 轉為 html \n content \xa0 = \xa0 markdown(content) \n # 以下處理 content 的 <h2> 標題 \n content \xa0 = \xa0 content.replace( "<h2>" , \xa0 "<h2><font size=\'4\'>" ) \n content \xa0 = \xa0 content.replace( "</h2>" , \xa0 "</font></h2>" ) \n # g.es(content) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 users = service.users() \n \xa0\xa0\xa0\xa0 # 取得使用者 profile 資料 \n \xa0\xa0\xa0\xa0 user = users.get(userId=\'self\').execute() \n \xa0\xa0\xa0\xa0 print(\'網誌名稱: %s\' % user[\'displayName\']) \n \xa0\xa0\xa0\xa0 \'\'\' \n \xa0\xa0\xa0\xa0 blogs \xa0 = \xa0 service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs \xa0 = \xa0 blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 # post_id is now blogs["items"][0]["id"] \n \xa0\xa0\xa0\xa0 blog_id \xa0 = \xa0 blogs[ "items" ][ 0 ][ "id" ] \n \xa0\xa0\xa0\xa0 #for blog in blogs[\'items\']: \n \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 #print(blog[\'name\'], blog[\'url\']) \n \xa0\xa0\xa0\xa0 posts \xa0 = \xa0 service.posts() \n \xa0\xa0\xa0\xa0 # 新增網誌 post 時, 需要 post_id \n \xa0\xa0\xa0\xa0 body \xa0 = \xa0 { \n \xa0\xa0\xa0\xa0 "kind" : \xa0 "blogger#post" , \n \xa0\xa0\xa0\xa0 "id" : blog_id, \n \xa0\xa0\xa0\xa0 "title" : title, \n \xa0\xa0\xa0\xa0 # 利用 markdown 函式, 將 .md 的內文轉為 html, 作為 Blogger 的文章內容 \n \xa0\xa0\xa0\xa0 "content" : content, \n \xa0\xa0\xa0\xa0 "labels" : tags \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 insert \xa0 = \xa0 posts.insert(blogId = blog_id, body = body) \n \xa0\xa0\xa0\xa0 posts_doc \xa0 = \xa0 insert.execute() \n \xa0\xa0\xa0\xa0 post_id \xa0 = \xa0 posts_doc[ "id" ] \n \xa0\xa0\xa0\xa0 #print(posts_doc) \n \xa0\xa0\xa0\xa0 os.remove( "blogger.dat" ) \n \xa0\xa0\xa0\xa0 # 利用最後的 child 節點來儲存 post_id \n \xa0\xa0\xa0\xa0 to_save_post_id \xa0 = \xa0 p.insertAsLastChild()\xa0\xa0 \n \xa0\xa0\xa0\xa0 # 改為內文為空的節點, id 直接標在 head 標題 \n \xa0\xa0\xa0\xa0 to_save_post_id.b \xa0 = \xa0 "" \n \xa0\xa0\xa0\xa0 to_save_post_id.h \xa0 = \xa0 post_id \n \xa0\xa0\xa0\xa0 # 因為新增節點, commander 必須 redraw \n \xa0\xa0\xa0\xa0 c.redraw() \n \xa0\xa0\xa0\xa0 g.es( "post_id 為" , post_id) \n \xa0\xa0\xa0\xa0 g.es( "已經將資料送往 Blogger!" ) \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 g.es( "error" ) \n \n \n \n \n \n \n \n edit_to_blogger 按鈕內容: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n 38 \n 39 \n 40 \n 41 \n 42 \n 43 \n 44 \n 45 \n 46 \n 47 \n 48 \n 49 \n 50 \n 51 \n 52 \n 53 \n 54 \n 55 \n 56 \n 57 \n 58 \n 59 \n 60 \n 61 \n 62 \n 63 \n 64 \n 65 \n 66 \n 67 \n 68 \n 69 \n 70 \n 71 \n 72 \n 73 \n 74 \n 75 \n 76 \n 77 \n 78 \n 79 \n 80 \n \n \n \n from \xa0 markdown \xa0 import \xa0 markdown \n from \xa0 oauth2client \xa0 import \xa0 client \n from \xa0 googleapiclient \xa0 import \xa0 sample_tools \n import \xa0 os \n \xa0 \n os.environ[ \'TZ\' ] \xa0 = \xa0 \'Asia/Taipei\' \n argv \xa0 = \xa0 "" \n # 認證並建立服務 \n # name of the api is "blogger", version is "v3" \n # description of the api is __doc__ \n # file name of the application: location of client_secrets.json \n service, flags \xa0 = \xa0 sample_tools.init( \n \xa0\xa0 argv, \xa0 \'blogger\' , \xa0 \'v3\' , __doc__, \xa0 "./../../client_secrets.json" , \n \xa0\xa0 scope = \'https://www.googleapis.com/auth/blogger\' ) \n \xa0 \n \xa0 \n def \xa0 get_cat_tag_content(data): \n \xa0\xa0\xa0\xa0 # 請注意, 因為 data 來自 .md 的檔案 內容, 第1行為 --- \n \xa0\xa0\xa0\xa0 # 用跳行符號分割 \n \xa0\xa0\xa0\xa0 data_list \xa0 = \xa0 data.split( "\\n" ) \n \xa0\xa0\xa0\xa0 #第 2 行為 title \n \xa0\xa0\xa0\xa0 title = \xa0 data_list[ 1 ] \n \xa0\xa0\xa0\xa0 #第 4 行為 category \n \xa0\xa0\xa0\xa0 category \xa0 = \xa0 data_list[ 3 ] \n \xa0\xa0\xa0\xa0 #第 5 行為 tags \n \xa0\xa0\xa0\xa0 tags \xa0 = \xa0 data_list[ 4 ] \n \xa0\xa0\xa0\xa0 # 有多項資料的 content 型別為數列 \n \xa0\xa0\xa0\xa0 # 再將第 9 行之後的資料數列串回成以跳行隔開的資料 \n \xa0\xa0\xa0\xa0 content \xa0 = \xa0 "\\n" .join(data_list[ 8 :]) \n \xa0\xa0\xa0\xa0 # 先將截斷摘要與內文的 pelican md 檔按符號, 換成 Blogger 的 <!--more--> \n \xa0\xa0\xa0\xa0 content \xa0 = \xa0 content.replace( \'<!-- PELICAN_END_SUMMARY -->\' , \xa0 \'<!--more-->\' ) \n \xa0\xa0\xa0\xa0 # 接著若內容有 ~~~python 與 ~~~ 則換成 Wordpress 格式 \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~python\', \'[code lang="python"]\') \n \xa0\xa0\xa0\xa0 #content = content.replace(\'~~~\', \'[/code]\') \n \xa0\xa0\xa0\xa0 return \xa0 title, category, tags, content \n \xa0 \n # 從目前所在節點的 body pan 中取出類別, tags 以及文章內容 \n # p.h 為 @clean filename.md \n # 因為要使用 @clean 節點掛上為後的 blogger post_id, 因此改為讀 .md 檔案 \n md_filename \xa0 = \xa0 p.h.split( " " )[ 1 ] \n with \xa0 open (md_filename, \xa0 \'r\' , encoding = "utf-8" ) as content_file: \n \xa0\xa0\xa0\xa0 md_content \xa0 = \xa0 content_file.read() \n # title_str, category_str, tags_str, content = get_cat_tag_content(p.b) \n title_str, category_str, tags_str, content \xa0 = \xa0 get_cat_tag_content(md_content) \n category \xa0 = \xa0 category_str.split( ":" )[ 1 ] \n tags \xa0 = \xa0 tags_str.split( ":" )[ 1 ].split( "," ) \n tags.append(category) \n # title 是一個單獨的字串 \n title \xa0 = \xa0 title_str.split( ":" )[ 1 ] \n # 將 markdown 格式 content 轉為 html \n content \xa0 = \xa0 markdown(content) \n # 以下處理 content 的 <h2> 標題 \n content \xa0 = \xa0 content.replace( "<h2>" , \xa0 "<h2><font size=\'4\'>" ) \n content \xa0 = \xa0 content.replace( "</h2>" , \xa0 "</font></h2>" ) \n # g.es(content) \n \xa0 \n try : \n \xa0\xa0\xa0\xa0 blogs \xa0 = \xa0 service.blogs() \n \xa0\xa0\xa0\xa0 # 取得使用者所建立網誌名稱 \n \xa0\xa0\xa0\xa0 blogs \xa0 = \xa0 blogs.listByUser(userId = \'self\' ).execute() \n \xa0\xa0\xa0\xa0 blog_id \xa0 = \xa0 blogs[ "items" ][ 0 ][ "id" ] \n \xa0\xa0\xa0\xa0 # 設法取得原 post 的 id \n \xa0\xa0\xa0\xa0 postid_outline \xa0 = \xa0 p.getLastChild() \n \xa0\xa0\xa0\xa0 # 直接從標題取得 post 的 id 號碼 \n \xa0\xa0\xa0\xa0 post_id \xa0 = \xa0 postid_outline.h \n \xa0\xa0\xa0\xa0 posts \xa0 = \xa0 service.posts() \n \xa0\xa0\xa0\xa0 # 更新網誌文章時的 body \n \xa0\xa0\xa0\xa0 body \xa0 = \xa0 { \n \xa0\xa0\xa0\xa0 "kind" : \xa0 "blogger#post" , \n \xa0\xa0\xa0\xa0 "title" : title, \n \xa0\xa0\xa0\xa0 "content" : content \n \xa0\xa0\xa0\xa0 } \n \xa0\xa0\xa0\xa0 # need to save postId to outline head \n \xa0\xa0\xa0\xa0 update \xa0 = \xa0 posts.update(blogId = blog_id, postId = post_id, body = body, publish = True ) \n \xa0\xa0\xa0\xa0 update_doc \xa0 = \xa0 update.execute() \n \xa0\xa0\xa0\xa0 os.remove( "blogger.dat" ) \n \xa0\xa0\xa0\xa0 g.es( "post_id 為" , post_id) \n \xa0\xa0\xa0\xa0 g.es( "已經將更新資料送往 Blogger!" ) \n except (client.AccessTokenRefreshError): \n \xa0\xa0\xa0\xa0 g.es( "error" ) \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'w14', 'text': '直接在操作系統建立網際內容管理合用系統 \n Windows 10 64 位元操作系統 \n 安裝 Python 3.8.3 與 pip \n 至\xa0 https://www.python.org/downloads/windows/ \xa0下載 Python 3.8.3 \xa0 Windows x86-64 executable installer \n 可以直接選擇安裝 pip 與所有選項內容 \n 安裝 Git \n 利用\xa0 64-bit Git for Windows Setup \xa0安裝 Git 工具. \n 安裝 CMSiMDE 所需模組 \n 利用 cmd 開啟命令列視窗, 以 pip 安裝 flask flask_cors lxml bs4 markdown pelican leo 等模組 \n pip install\xa0 \xa0flask flask_cors lxml bs4 markdown pelican leo \n Ubuntu 20.04 操作系統 (請下載 \xa0 W12 Virtualbox 虛擬主機檔案 ) \n Ubuntu 20.04 同時存在 Python 2.7 與 Python 3.8.2,\xa0 CMSiMDE 只相容於 Python 3.8.2, 因此啟動指令必須使用: \n python3 wsgi.py \n 與\xa0 \n pip3 install\xa0 \xa0flask flask_cors lxml bs4 markdown pelican leo \n Mac OS X 操作系統 \n 與 Ubuntu 20.04 類似. \n', 'tags': '', 'url': 'w14.html'}, {'title': 'w15-18統整', 'text': '將 W1-W14 週的所有上課內容, 以圖文及影音資料加以整理在個人及分組倉儲、網站及簡報外,還要自選另一主題, 將分組協同的過程與內容整理在個人與分組的倉儲資料中. \n', 'tags': '', 'url': 'w15-18統整.html'}, {'title': '分組討論之內容', 'text': '', 'tags': '', 'url': '分組討論之內容.html'}]};