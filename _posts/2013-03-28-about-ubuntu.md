---
layout: post
title: "about ubuntu"
description: "Remember some issues at Ubuntu"
category: 
tags: [Ubuntu]
---

1. Turn off the independent graphic card.
Requirement: Ubuntu 10.10 or later versions. You can put the follow to /etc/rc.local. 
    echo IGD > /sys/kernel/debug/vgaswitcheroo/switch
    echo OFF > /sys/kernel/debug/vgaswitcheroo/switch

{% include href.md %}
