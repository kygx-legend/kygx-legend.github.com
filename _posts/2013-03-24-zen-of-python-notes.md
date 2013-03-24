---
layout: post
title: "Zen of Python Notes"
description: "Keep Moving"
category: 
tags: [Python, Notes]
---
Copy and note at [Zen of Python][zenofpython].

    """
    The Zen of Python, by Tim Peters

    Beautiful is better than ugly.
    Explicit is better than implicit.
    Simple is better than complex.
    Complex is better than complicated.
    Flat is better than nested.
    Sparse is better than dense.
    Readability counts.
    Special cases aren't special enough to break the rules.
    Although practicality beats purity.
    Errors should never pass silently.
    Unless explicitly silenced.
    In the face of ambiguity, refuse the temptation to guess.
    There should be one-- and preferably only one --obvious way to do it.
    Although that way may not be obvious at first unless you're Dutch.
    Now is better than never.
    Although never is often better than *right* now.
    If the implementation is hard to explain, it's a bad idea.
    If the implementation is easy to explain, it may be a good idea.
    Namespaces are one honking great idea -- let's do more of those!
    """

### Knowledges of Python(reprint [this](http://www.cnblogs.com/longdouhzt/archive/2012/05/19/2508844.html)):
* filter(function, sequence)：对sequence中的item依次执行function(item)，将执行结果为True的item组成一个List/String/Tuple（取决于sequence的类型）返回：

    >>> def f(x): return x % 2 != 0 and x % 3 != 0 
    >>> filter(f, range(2, 25)) 
    [5, 7, 11, 13, 17, 19, 23]
    >>> def f(x): return x != 'a' 
    >>> filter(f, "abcdef") 
    'bcdef'

* map(function, sequence) ：对sequence中的item依次执行function(item)，见执行结果组成一个List返回：

    >>> def cube(x): return x*x*x 
    >>> map(cube, range(1, 11)) 
    [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000]
    >>> def cube(x) : return x + x 
    ... 
    >>> map(cube , "abcde") 
    ['aa', 'bb', 'cc', 'dd', 'ee']
另外map也支持多个sequence，这就要求function也支持相应数量的参数输入：
    >>> def add(x, y): return x+y 
    >>> map(add, range(8), range(8)) 
    [0, 2, 4, 6, 8, 10, 12, 14]

* reduce(function, sequence, starting_value)：对sequence中的item顺序迭代调用function，如果有starting_value，还可以作为初始值调用，例如可以用来对List求和：

    >>> def add(x,y): return x + y 
    >>> reduce(add, range(1, 11)) 
    55 （注：1+2+3+4+5+6+7+8+9+10）
    >>> reduce(add, range(1, 11), 20) 
    75 （注：20+1+2+3+4+5+6+7+8+9+10）

* lambda：这是Python支持一种有趣的语法，它允许你快速定义单行的最小函数，类似与C语言中的宏，这些叫做lambda的函数，是从LISP借用来的，可以用在任何需要函数的地方：

    >>> g = lambda x: x * 2 
    >>> g(3) 
    6 
    >>> (lambda x: x * 2)(3) 
    6

{% include href.md %}
