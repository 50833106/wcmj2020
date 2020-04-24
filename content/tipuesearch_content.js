var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'Cmsimde', 'text': '\n', 'tags': '', 'url': 'Cmsimde.html'}, {'title': '有關本網站', 'text': '這門課程在教導學員如何利用網際環境管理與工程應用相關的內容管理. \n 總共使用兩套網際內容管理系統: \n https://github.com/mdecourse/cmsimde \n https://www.blogger.com/ \n Please use your student number to \xa0 register a github account . \n 請利用學號註冊一個 Github 帳號 \n Repository (倉儲): \xa0 https://github.com/mdecourse/wcmj2020 \xa0 \n Project (專案): \xa0 https://github.com/mdecourse/wcmj2020/projects/1 \xa0 \n Gitter (討論區): \xa0 https://gitter.im/mdecourse/wcmj2020 \xa0 \n Web site (網站):\xa0 https://mde.tw/wcmj2020 \xa0 \n Blog (網誌): \xa0 https://mde.tw/wcmj2020/blog \xa0 \n Presentation (簡報): \xa0 https://mde.tw/wcmj2020/reveal \xa0 \n 電腦輔助設計室與協同設計室行事曆 \n \n', 'tags': '', 'url': '有關本網站.html'}, {'title': '分組結果', 'text': 'group 1 Repository: \xa0 50833110 \xa0 | Site: \xa0 50833110 Repository: \xa0 50833112 \xa0 | Site: \xa0 50833112 Repository: \xa0 50833115 \xa0 | Site: \xa0 50833115 Repository: \xa0 50833123 \xa0 | Site: \xa0 50833123 Repository: \xa0 50833127 \xa0 | Site: \xa0 50833127 Repository: \xa0 50833128 \xa0 | Site: \xa0 50833128 Repository: \xa0 50833129 \xa0 | Site: \xa0 50833129 Repository: \xa0 50833131 \xa0 | Site: \xa0 50833131 Repository: \xa0 50833133 \xa0 | Site: \xa0 50833133 Repository: \xa0 50833138 \xa0 | Site: \xa0 50833138 ============================== group 2 Repository: \xa0 50833101 \xa0 | Site: \xa0 50833101 Repository: \xa0 50833107 \xa0 | Site: \xa0 50833107 Repository: \xa0 50833108 \xa0 | Site: \xa0 50833108 Repository: \xa0 50833111 \xa0 | Site: \xa0 50833111 Repository: \xa0 50833117 \xa0 | Site: \xa0 50833117 Repository: \xa0 50833119 \xa0 | Site: \xa0 50833119 Repository: \xa0 50833122 \xa0 | Site: \xa0 50833122 Repository: \xa0 50833126 \xa0 | Site: \xa0 50833126 Repository: \xa0 50833130 \xa0 | Site: \xa0 50833130 Repository: \xa0 50833134 \xa0 | Site: \xa0 50833134 ============================== group 3 Repository: \xa0 50833104 \xa0 | Site: \xa0 50833104 Repository: \xa0 50833106 \xa0 | Site: \xa0 50833106 Repository: \xa0 50833113 \xa0 | Site: \xa0 50833113 Repository: \xa0 50833114 \xa0 | Site: \xa0 50833114 Repository: \xa0 50833116 \xa0 | Site: \xa0 50833116 Repository: \xa0 50833118 \xa0 | Site: \xa0 50833118 Repository: \xa0 50833120 \xa0 | Site: \xa0 50833120 Repository: \xa0 50833125 \xa0 | Site: \xa0 50833125 Repository: \xa0 50833140 \xa0 | Site: \xa0 50833140 Repository: \xa0 50833141 \xa0 | Site: \xa0 50833141 ============================== group 4 Repository: \xa0 50833102 \xa0 | Site: \xa0 50833102 Repository: \xa0 50833103 \xa0 | Site: \xa0 50833103 Repository: \xa0 50833105 \xa0 | Site: \xa0 50833105 Repository: \xa0 50833109 \xa0 | Site: \xa0 50833109 Repository: \xa0 50833121 \xa0 | Site: \xa0 50833121 Repository: \xa0 50833124 \xa0 | Site: \xa0 50833124 Repository: \xa0 50833135 \xa0 | Site: \xa0 50833135 Repository: \xa0 50833136 \xa0 | Site: \xa0 50833136 Repository: \xa0 50833137 \xa0 | Site: \xa0 50833137 Repository: \xa0 50833139 \xa0 | Site: \xa0 50833139 \n', 'tags': '', 'url': '分組結果.html'}, {'title': '大家早安', 'text': '沒事就是想說早安 \n', 'tags': '', 'url': '大家早安.html'}, {'title': '大家午安', 'text': '跟您說午安 \n', 'tags': '', 'url': '大家午安.html'}, {'title': '大家晚安', 'text': 'goodnight', 'tags': '', 'url': '大家晚安.html'}]};