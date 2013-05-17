---
layout: post
title: "Common GDB Instruction"
description: "Manual for GDB."
category: 
tags: [Notes, GDB]
---

__[repost](http://blogread.cn/it/article/941?f=footerrecommend)__  

start - 开始调试,并且自动在main开始处中断(break)

b [函数名] - 在指定函数处设置断点

b [文件名]:[行数] - 在指定文件的行数处设置断点

b [文件名]:[函数名] - 在指定文件的函数处设置断点

s - 执行下一步语句,如果有函数就跳进去继续执行

n - 执行下一步语句,不会跳入函数

i b - 查看已经设置的断点(break)

en b [断点编号] - 启用断点

d b - 删除所有断点

d b [断点编号] - 删除指定编号

c - 继续运行直到断点

finish - 继续运行直到函数返回

frame - 查看当前的运行到的位置

dis [变量名] - 监控指定变量值,每次执行s,n或者c之后会显示

dis [函数名]::[变量名] -监控指定函数的变量,对于当前位于某函数内需要监控全局变量很有用

i dis - 显示监控信息,添加了监控变量多少个,每个是什么

en dis [监控编号] - 如果监控变量是未赋值的,会自动disable掉这个监控,使用en把监控重新打开

d d - 删除所有监控

d d [监控编号] - 删除指定监控

q - 退出gdb

set follow-fork-mode [parent/child] - child为fork产生时跳入子进程,parent为继续监控主进程

set detach-on-fork [on/off] - 当跳入子进程的时候,on为主进程继续运行,off为暂停主进程的执行

{% include href.md %}
