---
layout: post
title: "make own operate system"
description: "as the title"
category: 
tags: [Note, OS]
---

Leave Blank!!!


__1.Environment__  

* system: linux(ubuntu12.04)
* virtual machine: virtualbox
* compile: gcc, make

    $ sudo apt-get install build-essential nasm virtualbox

__2.Make floppy disk, .img__  
    
    $ nasm boot.asm -o boot.bin
    $ dd if=boot.bin of=floppy.img bs=512 count=1

    






{% include href.md %}
