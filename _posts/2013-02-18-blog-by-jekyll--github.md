---
layout: post
title: "Blog by Github and Jekyll and Markdown"
description: "搭建个人博客"
category: 
tags: [Jekyll, Github, Markdown]
---

## Github and Git
> Go __[Github][github]__ to create your __account__ and new __repo__ named your __account name__.   
> Initial your local _settings_ of __git__.

All you need is __[this][githubhelp]__! Another is __[Git Guide by Chinese][gitguide]__.

[github]: <https://github.com> "Github"
[githubhelp]: <https://help.github.com/> "Github Help"
[gitguide]: <http://rogerdudler.github.com/git-guide/index.zh.html> "Git Guide"

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

[jekyll]: <http://jekyllrb.com/> "Jekyll"


## Markdown
One simple language.  

> You can see __[this page][markdown]__.

> if you want to use __rdiscountu__:
	$ gem install rdiscount

> if you want to use __pygments__:
	$ sudo easy_install Pygments

[markdown]: <http://wowubuntu.com/markdown/> "Markdown"
