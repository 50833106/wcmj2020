REM　@echo off
set Disk=y
subst %Disk%: "data"

%Disk%:

set HomePath=%Disk%:\home
set HomeDrive=%Disk%:\home
set Home=%Disk%:\home
set USERPROFILE=%Disk%:\home

REM 將系統 Python 程式的 io 設為 utf-8
set PYTHONIOENCODING="utf-8"

set PYTHONPATH=%Disk%:\Python38\DLLs;%Disk%:\Python38\Lib;%Disk%:\Python38\Lib\site-packages;
set PYTHONHOME=%Disk%:\Python38

REM 設定跟 Python 有關的命令搜尋路徑
set path_python=%Disk%:\Python38;%Disk%:\Python38\Scripts;
REM 設定跟Git 有關的命令搜尋路徑
set path_git=%Disk%:\portablegit\bin;
REM 設定 msys2 64 位元的執行路徑
set path_msys2=%Disk%:\msys64\usr\bin;

path=%Disk%:;%path_python%;%path_git%;%path_msys2%;

start /MIN cmd.exe
start /MIN cmd.exe
start /MIN cmd.exe
start /MIN cmd.exe

start /MIN %Disk%:\wScite\SciTE.exe
start /MIN %Disk%:\wScite\SciTE.exe

Exit
