---
layout: post
title: "OpenGL notes"
description: "To learn and use OpenGL."
category: 
tags: [OpenGL, Note]
---

INSTALL AT UBUNTU
	$ sudo apt-get install mesa-common-dev
	$ sudo apt-get install freeglut3-dev
INCLUDE
Use glut. Use the follow only.
{% highlight c++ %}
#include "GL/freeglut.h"
{% endhighlight %}
Others.
{% highlight c++ %}
#include "GL/gl.h"
#include "GL/glu.h"
{% endhighlight %}
COMPILE &amp; RUN
Add -lglut which means link glut.
	$ gcc/g++ program.\{c/h\} -lglut


{% include href.md %}
