---
layout: post
title: "Blog by Github &amp; Jekyll &amp; Markdown"
description: "搭建个人博客快捷教程"
category: 
tags: [Jekyll, Github, Markdown]
---

## Github and Git
> Go __[Github][github]__ to create your __account__ and new __repo__ named your __account name__.   
> Initial your local _settings_ of __git__.

All you need is __[this][githubhelp]__! Another is __[Git Guide by Chinese][gitguide]__.

## Jekyll
You can see the web site of __[Jekyll][jekyll]__.

__INSTALL Jekyll__
> if ruby is installed:
	$ gem install jekyll
> if something wrong like needing other dependency:
	$ sudo apt-get install ruby-dev ruby-full
> if it is too slow, you can change the source:
	$ gem sources http://ruby.taobao.org

__WORK With Github__
> You can download the __Jekyll Bootstrap__ for first time.   
	$ git clone https://github.com/plusjade/jekyll-bootstrap.git USERNAME.github.com
> Then push your git.
	$ cd USERNAME.github.com  
	$ git init  
	$ git remote add origin git@github.com:/USERNAME/USERNAME.github.com.git    
	$ git add .   
	$ git push origin master   
> Go __USERNAME.github.com__ after a while. More guides is in __[Jekyll][jekyll]__.  
> Another tool is __rake__. You can install it now.
	$ gem install rake

__Struction of Jekyll__
	.
	|-- _config.yml
	|-- _includes
	|-- _layouts
	|   |-- default.html
	|   |-- page.html
	|   `-- post.html
	|-- _posts
	|   `-- 2007-10-29-post.md
	|-- _site
	`-- index.html

__Uses of Jekyll__

> Local testing. __Remember__ that once *_config.tml* changes, it becomes effective after restarting the server.
	$ jekyll --server
> Post one new post.
	$ rake post title="YOUR TITLE"
> You can change the theme by this. Such as change to _theme-the-program_.
	$ rake theme:install git="https://github.com/jekyllbootstrap/theme-the-program.git"
> Then change to it.
	$ rake theme:switch name="the-program"

## Markdown
One simple language.  

> You can see __[this page][markdownguide]__ or see my other post named __Markdown Learning__.

> if you want to use __rdiscount__:
	$ gem install rdiscount
> if you want to use __pygments__:
	$ sudo easy_install Pygments
> then change the *_config.yml* and restart the server.
	markdown: rdiscount
	pygments: true

## Q&A

If any question, please __[contact me][email]__.

{% include href.md %}
