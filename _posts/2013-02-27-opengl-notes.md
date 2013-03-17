---
layout: post
title: "OpenGL notes"
description: "To learn and use OpenGL."
category: 
tags: [OpenGL, Note]
---

__INSTALL AT UBUNTU &amp; Using on C/C++__  
	$ sudo apt-get install mesa-common-dev
	$ sudo apt-get install freeglut3-dev

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
    $ ./a.out

__INSTALL &amp; Using on python__  
    $ sudo easy_install pyopengl

Example:(test.py)
{% highlight python %}
    import pyglet
    from pyglet.gl import *

    win = pyglet.window.Window()
         
    @win.event
    def on_draw():
             
        # Clear buffers
        glClear(GL_COLOR_BUFFER_BIT)
        
        # Draw some stuff
        glBegin(GL_POINTS)
        glVertex2i(50, 50)
        glVertex2i(75, 100)
        glVertex2i(100, 150)
        glEnd()
         
    pyglet.app.run()
{% endhighlight %}
    $ python test.py


{% include href.md %}
