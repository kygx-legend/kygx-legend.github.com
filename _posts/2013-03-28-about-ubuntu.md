---
layout: post
title: "about ubuntu"
description: "Remember some issues at Ubuntu"
category: 
tags: [Ubuntu]
---

__1.Turn off the independent graphic card__  
Requirement: Ubuntu 10.10 or later versions. You can put the follow to /etc/rc.local.   

    echo IGD > /sys/kernel/debug/vgaswitcheroo/switch
    echo OFF > /sys/kernel/debug/vgaswitcheroo/switch 

__2.28个Unix/Linux的命令行神器([reprint](http://coolshell.cn/articles/7829.html))__

added:
    recordmydesktop ======>out.ogv
    mencode =====>改视频格式
    (use:mencoder -ovc lavc -oac copy -lavcopts vcodec=flv -nosound -o out.flv out.ogv)
    convert =====>更改图片各种格式
    xpdf =====>解决pdf在linux下乱码问题

    dstat &amp; sar(iostat, vmstat, ifstat 三合一的工具，用来查看系统性能)
    slurm(查看网络流量的一个工具)
    vim &amp; emacs(真正程序员的代码编辑器)
    screen, dtach, tmux, byobu(一个console或terminal创建多个窗口)
    multitail(用来实现同时监控多个文档、类似tail命令的功能的软件)
    tpp(终端下的PPT)
    xargs &amp; parallel(Executes tasks from input (even multithread))
    duplicity &amp; rsyncrypto(Encrypting backup tools)
    nethack &amp; slash em(20年历史的古老电脑游戏)
    lftp(利用lftp命令行ftp工具进行网站数据的增量备份，镜像，就像使用rsync一样)
    ack(ack是一个perl脚本，是grep的一个可选替换品)
    calcurse &amp; remind + wyrd(命令行下的日历和日程软件)
    newsbeuter &amp; rsstail(命令行下RSS的阅读工具)
    powertop(看看自己的电脑里哪些程序费电)
    htop &amp; iotop(用来查看进程，内存和IO负载)
    ttyrec &amp; ipbt( tty 控制台录制程序，其所录制的数据文件可以使用与之配套的 ttyplay 播放)
    rsync(通过SSH进行文件同步的经典工具)
    mtr(traceroute 2.0，其是把 traceroute 和 ping 集成在一块的一个小工具 用于诊断网络)
    socat &amp; netpipes(netcat的N倍加强版,命令行来进行socket操作的命令)
    iftop &amp; iptraf(用来查看当前网络链接的一些流量情况)
    siege &amp; tsung(web压力测试和评测工具)
    ledger(命令行下记帐的小工具)
    taskwarrior(基于命令行的 TODO 列表管理工具)
    curl(利用URL语法在命令行下工作的文件传输工具)
    rtorrent &amp; aria2(下载工具)
    ttytter &amp; earthquake(命令行上的Twitter客户端)
    vifm &amp; ranger(文件管理器)
    cowsay &amp; sl &amp; linuxlogo(??)

__3.shell强大命令([reprint](http://coolshell.cn/articles/8619.html))__  

    $!$
    !$是一个特殊的环境变量，它代表了上一个命令的最后一个字符串。如：你可能会这样：
    $mkdir mydir
    $mv mydir yourdir
    $cd yourdir
    可以改成：
    $mkdir mydir
    $mv !$ yourdir
    $cd !$
    sudo !!
    以root的身份执行上一条命令 。
    场景举例：比如Ubuntu里用apt-get安装软件包的时候是需要root身份的，我们经常会忘记在apt-get前加sudo。每次不得不加上sudo再重新键入这行命令，这时可以很方便的用sudo !!完事。
    （陈皓注：在shell下，有时候你会输入很长的命令，你可以使用!xxx来重复最近的一次命令，比如，你以前输入过，vi /where/the/file/is, 下次你可以使用 !vi 重得上次最近一次的vi命令。）
    cd –
    回到上一次的目录 。
    场景举例：当前目录为/home/a，用cd ../b切换到/home/b。这时可以通过反复执行cd –命令在/home/a和/home/b之间来回方便的切换。
    （陈皓注：cd ~ 是回到自己的Home目录，cd ~user，是进入某个用户的Home目录）
    ‘ALT+.’ or ‘<ESC> .’
    热建alt+. 或 esc+. 可以把上次命令行的参数给重复出来。
    ^old^new
    替换前一条命令里的部分字符串。
    场景：echo "wanderful"，其实是想输出echo "wonderful"。只需要^a^o就行了，对很长的命令的错误拼写有很大的帮助。（陈皓注：也可以使用 !!:gs/old/new）
    du -s * | sort -n | tail
    列出当前目录里最大的10个文件。
    :w !sudo tee %
    在vi中保存一个只有root可以写的文件
    date -d@1234567890
    时间截转时间
    > file.txt
    创建一个空文件，比touch短。
    mtr coolshell.cn
    mtr命令比traceroute要好。
    在命令行前加空格，该命令不会进入history里。
    echo “ls -l” | at midnight
    在某个时间运行某个命令。
    curl -u user:pass -d status=”Tweeting from the shell” http://twitter.com/statuses/update.xml
    命令行的方式更新twitter。
    curl -u username –silent “https://mail.google.com/mail/feed/atom” | perl -ne ‘print “\t” if /<name>/; print “$2\n” if /<(title|name)>(.*)<\/\1>/;’
    检查你的gmail未读邮件
    ps aux | sort -nk +4 | tail
    列出头十个最耗内存的进程
    man ascii
    显示ascii码表。
    场景：忘记ascii码表的时候还需要google么?尤其在天朝网络如此“顺畅”的情况下，就更麻烦在GWF多应用一次规则了，直接用本地的man ascii吧。
    ctrl-x e
    快速启动你的默认编辑器（由变量$EDITOR设置）。
    netstat –tlnp
    列出本机进程监听的端口号。（陈皓注：netstat -anop 可以显示侦听在这个端口号的进程）
    tail -f /path/to/file.log | sed '/^Finished: SUCCESS$/ q'
    当file.log里出现Finished: SUCCESS时候就退出tail，这个命令用于实时监控并过滤log是否出现了某条记录。
    ssh user@server bash < /path/to/local/script.sh
    在远程机器上运行一段脚本。这条命令最大的好处就是不用把脚本拷到远程机器上。
    ssh user@host cat /path/to/remotefile | diff /path/to/localfile -
    比较一个远程文件和一个本地文件
    net rpc shutdown -I ipAddressOfWindowsPC -U username%password
    远程关闭一台Windows的机器
    screen -d -m -S some_name ping my_router
    后台运行一段不终止的程序，并可以随时查看它的状态。-d -m参数启动“分离”模式，-S指定了一个session的标识。可以通过-R命令来重新“挂载”一个标识的session。更多细节请参考screen用法 man screen。
    wget --random-wait -r -p -e robots=off -U mozilla http://www.example.com
    下载整个www.example.com网站。（注：别太过分，大部分网站都有防爬功能了：））
    curl ifconfig.me
    当你的机器在内网的时候，可以通过这个命令查看外网的IP。
    convert input.png -gravity NorthWest -background transparent -extent 720×200  output.png
    改一下图片的大小尺寸
    lsof –i
    实时查看本机网络服务的活动状态。
    vim scp://username@host//path/to/somefile
    vim一个远程文件
    python -m SimpleHTTPServer
    一句话实现一个HTTP服务，把当前目录设为HTTP服务目录，可以通过http://localhost:8000访问 这也许是这个星球上最简单的HTTP服务器的实现了。
    history | awk '{CMD[$2]++;count++;} END { for (a in CMD )print CMD[a] " " CMD[a]/count*100 "% " a }' | grep -v "./" | column -c3 -s " " -t | sort -nr | nl | head -n10
    (陈皓注：有点复杂了，history|awk ‘{print $2}’|awk ‘BEGIN {FS=”|”} {print $1}’|sort|uniq -c|sort -rn|head -10)
    这行脚本能输出你最常用的十条命令，由此甚至可以洞察你是一个什么类型的程序员。
    tr -c “[:digit:]” ” ” < /dev/urandom | dd cbs=$COLUMNS conv=unblock | GREP_COLOR=”1;32″ grep –color “[^ ]“
    想看看Marix的屏幕效果吗？（不是很像，但也很Cool!）

《Linux命令行与Shell脚本编程大全》

_快捷键_  
    Ctrl + a 切换到命令行开始
    Ctrl + e 切换到命令行末尾
    Ctrl + l 清除屏幕内容
    Ctrl + u 清除光标之前的内容
    Ctrl + k 清除光标之后的内容
    Ctrl + h 类似于退格键
    Ctrl + r 在历史命令中查找 （这个非常好用，输入关键字就调出以前的命令了）
    Ctrl + c 终止命令
    Ctrl + d 退出shell
    Ctrl + z 转入后台运行..

__4:记录__
    if matplotlib not show:
    $ find matplotlib/mpl-data
    $ change backend to gtk|wx

__5:ubuntu各文件夹简介__  
/bin 二进制可执行命令  
/dev 设备文件（硬盘/光驱等）  
/etc 系统管理和配置文件  
/etc/rc.d 启动的配置文件和脚本  
/home 用户主目录，下面会有以登录用户名作为文件夹名的各文件夹  
/lib 标准程序设计库又叫动态链接共享库，作用类似windows里的.dll文件  
/sbin 系统管理命令，这里存放的是系统管理员使用的管理程序  
/tmp 公用的临时文件存储点  
/root 系统管理员的主目录  
/mnt 系统提供这个目录是让用户临时挂载其他的文件系统。  
/lost+found 这个目录平时是空的，系统非正常关机而留下“无家可归”的文件  
/proc 虚拟的目录，是系统内存的映射。可直接访问这个目录来获取系统信息。  
/var 某些大文件的溢出区，比方说各种服务的日志文件  
/usr 最庞大的目录，要用到的应用程序和文件几乎都在这个目录。其中包含：  
/usr/x11r6 x-window的目录  
/usr/bin 应用程序  
/usr/sbin 超级用户的一些管理程序  
/usr/doc linux文档  
/usr/include linux下开发和编译应用程序所需要的头文件  
/usr/lib 常用的动态链接库和软件包的配置文件  
/usr/man 帮助文档  
/usr/src 源代码，linux内核的源代码就放在/usr/src/linux里  
/usr/local/bin 本地增加的命令  
/usr/local/lib 本地增加的库  
通常情况下，根文件系统所占空间一般应该比较小，因为其中的绝大部分文件都不需要经常改动，而且包括严格的文件和一个小的不经常改变的文件系统不容易损坏。  
除了可能的一个叫/vmlinuz标准的系统引导映像之外，根目录一般不含任何文件。所有其他文件在根文件系统的子目录中。  
1./bin目录  
/bin目录包含了引导启动所需的命令或普通用户可能用的命令(可能在引导启动后)。这些命令都是二进制文件的可执行程序(bin是binary-二进制的简称)，多是系统中重要的系统文件。  
2./sbin目录  
/sbin目录类似/bin，也用于存储二进制文件。因为其中的大部分文件多是系统管理员使用的基本的系统程序，所以虽然普通用户必要且允许时可以使用，但一般不给普通用户使用。  
3./etc 目录  
/etc目录存放着各种系统配置文件，其中包括了用户信息文件/etc/passwd，系统初始化文件/etc/rc等。linux正是*这些文件才得以正常地运行。  
4./root目录  
/root目录是超级用户的目录。  
5./lib目录  
/lib目录是根文件系统上的程序所需的共享库，存放了根文件系统程序运行所需的共享文件。这些文件包含了可被许多程序共享的代码，以避免每个程序都包含有相同的子程序的副本，故可以使得可执行文件变得更小，节省空间。  
6./lib/modules目录  
/lib/modules目录包含系统核心可加载各种模块，尤其是那些在恢复损坏的系统时重新引导系统所需的模块(例如网络和文件系统驱动)。  
7./dev目录  
/dev目录存放了设备文件，即设备驱动程序，用户通过这些文件访问外部设备。比如，用户可以通过访问/dev/mouse来访问鼠标的输入，就像访问其他文件一样。  
8./tmp目录  
/tmp目录存放程序在运行时产生的信息和数据  
9./boot目录  
/boot 目录存放引导加载器 (bootstraploader)使用的文件，如lilo，核心映像也经常放在这里，而不是放在根目录中。但是如果有许多核心映像，这个目录就可能变得很大，这时使用单独的文件系统会更好一些。还有一点要注意的是，要确保核心映像必须在ide硬盘的前1024柱面内。  
10./mnt目录  
/mnt 目录是系统管理员临时装载(mount)文件系统的安装点。程序并不自动支持安装到/mnt。/mnt下面可以分为许多子目录，例如/mnt/dosa可能是使用msdos文件系统的软驱，而/mnt/exta可能是使用ext2文件系统的软驱，/mnt/cdrom光驱等等。  
下面详细介绍；  
/etc 文件系统  
/etc目录包含各种系统配置文件  
1./etc/rc或/etc/rc.d或/etc/rc?.d 启动、或改变运行级时运行的脚本或脚本的目录。  
2./etc/passwd 用户数据库，其中的域给出了用户名、真实姓名、用户起始目录、加密口令和用户的其他信息。  
3./etc/fdprm 软盘参数表，用以说明不同的软盘格式。可用setfdprm进行设置。更多的信息见setfdprm的帮助页。  
4./etc/fstab 指定启动时需要自动安装的文件系统列表。也包括用swapon-a启用的swap区的信息。  
5./etc/group 类似/etc/passwd，但说明的不是用户信息而是组的信息。包括组的各种数据。  
6./etc/inittab init的配置文件。  
7./etc/issue 包括用户在登录提示符前的输出信息。通常包括系统的一段短说明或欢迎信息。具体内容由系统管理员确定。  
8./etc/magic “file”的配置文件。包含不同文件格式的说明，“file”基于它猜测文件类型  
9./etc/motd motd是messageoftheday的缩写，用户成功登录后自动输出。内容由系统管理员确定。常用于通告信息，如计划关机时间的警告等。  
10./etc/mtab 当前安装的文件系统列表。由脚本(scritp)初始化，并由mount命令自动更新。当需要一个当前安装的文件系统的列表时使用(例如df命令)。  
11./etc/shadow 在安装了影子(shadow)口令软件的系统上的影子口令文件。影子口令文件将/etc/passwd文件中的加密口令移动到/etc/shadow中，而后者只对超级用户可读。这使破译口令更困难，以此增加系统的安全性。  
12./etc/login.defs login命令的配置文件。  
13./etc/printcap 类似/etc/termcap，但针对打印机。语法不同。  
14./etc/profile、/etc/csh.login、/etc /csh.cshrc 登录或启动时bourne或cshells执行的文件。这允许系统管理员为所有用户建立全局缺省环境。  
15./etc/securetty 确认安全终端，即哪个终端允许超级用户登录。一般只列出虚拟控制台，这样就不可能(至少很困难)通过调制解调器(modem)或网络闯入系统并得到超级用户特权。  
16./etc/shells 列出可以使用的shell。chsh命令允许用户在本文件指定范围内改变登录的shell。提供一台机器ftp服务的服务进程ftpd检查用户shell 是否列在/etc/shells文件中，如果不是，将不允许该用户登录。  
17./etc/termcap 终端性能数据库。说明不同的终端用什么“转义序列”控制。写程序时不直接输出转义序列(这样只能工作于特定品牌的终端)，而是从/etc/termcap 中查找要做的工作的正确序列。这样，多数的程序可以在多数终端上运行。  
/dev文件系统  
/dev 目录包括所有设备的设备文件。设备文件用特定的约定命名，这在设备列表中说明。设备文件在安装时由系统产生，以后可以用/dev/makedev描述 /dev/makedev.local是系统管理员为本地设备文件(或连接)写的描述文稿(即如一些非标准设备驱动不是标准makedev的一部分)。下面简要介绍/dev下一些常用文件。  
1./dev/console 系统控制台，也就是直接和系统连接的监视器。  
2./dev/hd ide硬盘驱动程序接口  
3./dev/sd scsi磁盘驱动程序接口。如有系统有scsi硬盘，就不会访问/dev/had，而会访问/dev/sda。  
4./dev/fd 软驱设备驱动程序。如/dev/fd0指系统的第一个软盘  
5./dev/st scsi磁带驱动器驱动程序。  
6./dev/tty 提供虚拟控制台支持。如/dev/tty1指的是系统的第一个虚拟控制台  
7./dev/pty 提供远程登陆伪终端支持。在进行telnet登录时就要用到/dev/pty设备。  
8./dev/ttys 计算机串行接口，对于dos来说就是“com1”口。  
9./dev/cua 计算机串行接口，与调制解调器一起使用的设备。  
10./dev/null “黑洞”，所有写入该设备的信息都将消失。例如：当想要将屏幕上的输出信息隐藏起来时，只要将输出信息输入到/dev/null中即可。  
/usr 文件系统  
/usr 是个很重要的目录，通常这一文件系统很大，因为所有程序安装在这里。/usr里的所有文件一般来自linux发行版 (distribution)；本地安装的程序和其他东西在/usr/local下，因为这样可以在升级新版系统或新发行版时无须重新安装全部程序。 /usr目录下的许多内容是  
可选的，但这些功能会使用户使用系统更加有效。/usr可容纳许多大型的软件包和它们的配置文件。下面列出一些重要的目录(一些不太重要的目录被省略了)。  
1./usr/x11r6  
包含xwindow系统的所有可执行程序、配置文件和支持文件。为简化x 的开发和安装，x的文件没有集成到系统中。xwindow系统是一个功能强大的图形环境，提供了大量的图形工具程序。用户如果对 microsoftwindows或machintosh比较熟悉的话，就不会对xwindow系统感到束手无策了。  
2./usr/x386  
类似/usr/x11r6，但是是专门给x11release5的。  
3./usr/bin  
集中了几乎所有用户命令，是系统的软件库。另有些命令在/bin或/usr/local/bin中。  
4./usr/sbin  
包括了根文件系统不必要的系统管理命令，例如多数服务程序。  
5./usr /man、/usr/info、/usr/doc  
这些目录包含所有手册页、gnu信息文档和各种其他文档文件。每个联机手册的“节”都有两个子目录。例如：/usr/man/man1中包含联机手册第一节的源码(没有格式化的原始文件)，/usr/man/cat1包含第一节已格式化的内容。l联机手册分为以下九节：内部命令、系统调用、库函数、设备、文件格式、游戏、宏软件包、系统管理和核心程序。  
6./usr/include  
包含了c语言的头文件，这些文件多以.h结尾，用来描述c语言程序中用到的数据结构、子过程和常量。为了保持一致性，这实际上应该放在/usr/lib下，但习惯上一直沿用了这个名  
字。  
7./usr/lib  
包含了程序或子系统的不变的数据文件，包括一些site-wide配置文件。名字lib来源于库(library);编程的原始库也存在/usr/lib里。当编译程序时，程序便会和其中的库进行连接。也有许多程序把配置文件存入其中。  
8./usr/local  
本地安装的软件和其他文件放在这里。这与/usr很相似。用户可能会在这发现一些比较大的软件包，如 tex、emacs等。  
/var文件系统  
/var 包含系统一般运行时要改变的数据。通常这些数据所在的目录的大小是要经常变化或扩充的。原来/var目录中有些内容是在/usr中的，但为了保持/usr 目录的相对稳定，就把那些需要经常改变的目录放到/var中了。每个系统是特定的，即不通过网络与其他计算机共享。  
下面列出一些重要的目录(一些不太重要的目录省略了)。  
1./var/catman  
包括了格式化过的帮助(man)页。帮助页的源文件一般存在/usr/man/man中；有些man页可能有预格式化的版本，存在/usr/man/cat 中。而其他的 man页在第一次看时都需要格式化，格式化完的版本存在/var/man中，这样其他人再看相同的页时就无须等待格式化了。(/var/catman经常被清除，就像清除临时目录一样。)  
2./var/lib  
存放系统正常运行时要改变的文件。  
3./var/local  
存放 /usr/local中安装的程序的可变数据(即系统管理员安装的程序)。注意，如果必要，即使本地安装的程序也会使用其他/var目录，例如/var /lock。  
4./var/lock  
锁定文件。许多程序遵循在/var/lock中产生一个锁定文件的约定，以用来支持他们正在使用某个特定的设备或文件。其他程序注意到这个锁定文件时，就不会再使用这个设备或文件。  
5./var/log  
各种程序的日志(log)文件，尤其是login(/var/log/wtmplog纪录所有到系统的登录和注销)和syslog(/var/log/messages纪录存储所有核心和系统程序信息)。/var/log里的文件经常不确定地增长，应该定期清除。  
6./var/run  
保存在下一次系统引导前有效的关于系统的信息文件。例如，/var/run/utmp包含当前登录的用户的信息。  
7./var/spool  
放置“假脱机(spool)”程序的目录，如mail、news、打印队列和其他队列工作的目录。每个不同的spool在/var/spool下有自己的子目录，例如，用户的邮箱就存放在 /var/spool/mail中。  
8./var/tmp  
比/tmp允许更大的或需要存在较长时间的临时文件。注意系统管理员可能不允许 /var/tmp有很旧的文件。  
/proc文件系统  
/proc 文件系统是一个伪的文件系统，就是说它是一个实际上不存在的目录，因而这是一个非常特殊的目录。它并不存在于某个磁盘上，而是由核心在内存中产生。这个目录用于提供关于系统的信息。下面说明一些最重要的文件和目录(/proc文件系统在procman页中有更详细的说明)。  
1./proc/x 关于进程x的信息目录，这一x是这一进程的标识号。每个进程在/proc下有一个名为自己进程号的目录。  
2./proc/cpuinfo 存放处理器(cpu)的信息，如cpu的类型、制造商、型号和性能等。  
3./proc/devices 当前运行的核心配置的设备驱动的列表。  
4./proc/dma 显示当前使用的dma通道。  
5./proc/filesystems 核心配置的文件系统信息。  
6./proc/interrupts 显示被占用的中断信息和占用者的信息，以及被占用的数量。  
7./proc/ioports 当前使用的i/o端口。  
8./proc/kcore 系统物理内存映像。与物理内存大小完全一样，然而实际上没有占用这么多内存；它仅仅是在程序访问它时才被创建。(注意：除非你把它拷贝到什么地方，否则 /proc下没有任何东西占用任何磁盘空间。)  
9./proc/kmsg 核心输出的消息。也会被送到syslog。  
10./proc/ksyms 核心符号表。  
11./proc/loadavg 系统“平均负载”；3个没有意义的指示器指出系统当前的工作量。  
12./proc/meminfo 各种存储器使用信息，包括物理内存和交换分区(swap)。  
13./proc/modules 存放当前加载了哪些核心模块信息。  
14./proc/net 网络协议状态信息。  
15./proc/self 存放到查看/proc的程序的进程目录的符号连接。当2个进程查看/proc时，这将会是不同的连接。这主要便于程序得到它自己的进程目录。  
16./proc/stat 系统的不同状态，例如，系统启动后页面发生错误的次数。  
17./proc/uptime 系统启动的时间长度。  
18./proc/version 核心版本。  


{% include href.md %}
