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

{% include href.md %}
