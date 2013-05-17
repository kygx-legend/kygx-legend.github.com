---
layout: post
title: "effective c++"
description: "Notes of Book <The Effective C++>."
category: 
tags: [Notes, C++]
---

## 一。让自己习惯C++(accustom yourself to C++)

#### 条款01： 视C++为一个语言联邦(View C++ as a federation of languages.)

_Remember_:  

* C++高效编程守则视状况变化而变化，取决于你使用C++的哪一部分。 

#### 条款02： 尽量以const，enum，inline替换#define(Prefer consts, enums, and inlines to #defines.)

_Remember_:  

* 对于单纯常量，最好以const对象或enums替换#defines。
* 对于形似函数的宏（macros），最好改用inline函数替换#defines。

#### 条款03：尽可能使用const(Use const whenever possible.)

_Remember_:  

* 将某些东西声明为const可帮助编译器侦测出错误用法。const可被施加于任何作用域内的对象、函数参数、函数返回类型、成员函数本体。
* 编译器强制实施bitwise constness，但你编写程序时应该使用“概念上的常量性（conceptual constness）。
* 当const和non-const成员函数有着实质等价的实现时，令non-const版本调用const版本可避免代码重复。

#### 条款04：确定对象被使用前已先被初始化(Make sure that objects are initialized before they are used.)

_Remember_:  

* 为内置型对象进行手工初始化，因为C++不保证初始化它们。
* 构造函数最好使用成员初值列（member initialization list），而不要在构造函数本体内使用赋值操作（assignment）。初值列列出的成员变量，其排列次序应该和他们在class中的声明次序相同。
* 为免除“跨编译单元之初始化次序”问题，请以local static对象替换non-local static对象。


## 二。构造/析构/赋值运算(Constructors, Destructors, and Assignment Operators.)

#### 条款05：了解C++默默编写并调用哪些函数(Know what functions C++ silently writes and calls.)

_Remember_:  

* 编译器可以暗自为class创建default构造函数、copy构造函数、copy assignment操作符，以及析构函数。

#### 条款06：若不想使用编译器自动生成的函数，就该明确拒绝(Explicitly disallow the use of compiler-generated functions you do not want.)

_Remember_:  

* 为驳回编译器自动（暗自）提供的机能，可将相应的成员函数声明为private并且不予实现。使用像Uncopyable这样的base class也是一种做法。

#### 条款07：为多态基类声明virtual析构函数(Declare destructors virtual in polymorphic base classes.)

_Remember_:  

* polymorphic（带多态性质的）base classes应该声明一个virtual析构函数。如果class带有任何virtual函数，他就应该拥有一个virtual析构函数。
* Classes的设计目的如果不是作为base classes使用，或不是为了具备多态性（polymorphically），就不应该声明virtual析构函数。

#### 条款08：别让异常逃离析构函数(Prevent exceptions from leaving destructors.)

_Remember_:  

* 如果close抛出异常就结束程序。通常通过调用abort完成。
* 吞下因调用close而发生的异常。
* 析构函数绝对不要吐出异常。如果一个被析构函数调用的函数可能抛出异常，析构函数应该捕捉任何异常，然后吞下它们（不传播）或结束程序。
* 如果客户需要对某一个操作函数运行期间抛出的异常做出反应，那么class应该提供一个普通函数（而非在析构函数中）执行该操作。

#### 条款09：绝不在构造和析构过程中调用virtual函数(Never call virtual functions during construction or destruction.)

_Remember_:  

* 在构造和析构期间不要调用virtual函数，因为这类调用从不下降至derived class（比起当前执行构造函数和析构函数的那层）。

#### 条款10：令operator=返回一个reference to *this(Have assignment operators return a reference to *this.)

_Remember_:  

* 令赋值（assignment）操作符返回一个reference to *this。

#### 条款11：在operator=中处理“自我赋值”(Handle assignment to self in operator=.)

_Remember_:  

* 确保当对象自我赋值时operator=有良好行为。其中技术包括比较“来源对象”和“目标对象”的地址、精心周到的语句顺序、以及copy-and-swap。
* 确定任何函数如果操作一个以上的对象，而其中多个对象是同一个对象时，其行为仍然正确。

#### 条款12：复制对象时勿忘其每一个成分(Copy all parts of an object.)

_Remember_:  

* Copying函数应该确保复制“对象内的所有成员变量”及“所有base class成分”。
* 不要尝试以某个copying函数实现另一个copying函数。应该将共同机能放进第三个函数中，并由两个copying函数共同调用。


__待续...__  
__Coming soon...__

{% include href.md %}
