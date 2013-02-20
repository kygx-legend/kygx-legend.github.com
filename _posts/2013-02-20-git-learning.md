---
layout: post
title: "Git Learning"
description: "A Simple Guide"
category: 
tags: [Git, Github]
---

* It is not the whole guide, just tell you how to use git by a new user.  If you want to know more, please go __[this page][google]__.
* Arrange by [git guide][gitguide].
* Imaging that you are installed the [github][github] now.  

> create a new repository.
	$ mkdir yourrepo
	$ cd yourrepo
	$ git init
> or you can checkout a repository.
	$ git clone /path/to/repository
> when using a remote server.
	$ git clone username@host:/path/to/repository
> add file you want.
	$ git add <filename>
	$ git add *
	$ git add .
	$ git add -i ===> interactive
> remove file you want.
	$ git rm <filename>
> commit changes.
	$ git commit [-a] -m "commit message"
> push your changes.
	$ git push origin master 
> if you have not cloned and want to connect your repository to a remote server.
	$ git remote add origin <server>
> if you also have some problem, you can do the follow.
	$ git pull origin master ===> update
	$ git remote rm origin ===> then add remote again 
> create branch.
	$ git checkout -b newbranch
> switch branch.
	$ git checkout oldbranch
> delete branch.
	$ git checkout -d <branch>
> push to remote branch.
	$ git push origin <branch>
> update local repository.
	$ git pull ===> git fetch & git merge
> in case did something wrong and replace local changes.
	$ git checkout -- <filename>
> reset repository.
	$ git reset --hard [origin/branch]
> see the differences.
	$ git diff
> see the status.
	$ git status
> add tags.
	$ git tag
> commit with log.
	$ git log
> use git GUI.
	$ gitk

Hints:  

* Generally not all must you remember. If need help, just see this.

{% include href.md %}
