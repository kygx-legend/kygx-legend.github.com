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
If this error occurs:
    undefined reference to 'gluPerspective'
    collect2: ld returned 1 exit status

Then run:
    $ gcc/g++ program.\{c/h\} -lglut -lGLU

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

__Function List:__
一：GL库函数
使用颜色
glshadeModel--选择平面明暗模式或光滑明暗模式
glColor--设置当前颜色
glColorPointer--定义颜色数组
gllndex--设置当前颜色索引
gllndexPointer--定义颜色索引数组
glCOforTableEXT--为目标调色板纹理指定调色板的格式和大小
glColorsubTableEXT--指定需要替代的目标纹理调色板的一部分
绘制几何图原及物体
glVertex--指定顶点
glVertexPointer--定义顶点数据数组
glArrayElement--指定用来绘制顶点的数组元素
glBegin，glEnd--限定一个或多个图原顶点的绘制
glEdgeFlag，glEdgeFlagy--指定边界标记
glPointsize--指定光栅化点的直径
glLinewidth--指定光栅化直线的宽度
glLinestipple--指定点划线
glPolygonMode--选择多边形光栅化模式
glFrontFace--定义正面多边形和反反面多边形
glPolygonstipple--设置多边形点划图
glDrawElements--从数组数据绘制图原
glRect--绘制矩形
坐标转换
glTranslate--用平移矩阵乘以当前矩阵
glRotate--用旋转矩阵乘以当前矩阵
glscale--用缩放矩阵乘以当前矩阵
glViewport--设置机口
glFrustum--用透视矩阵乘以当前矩阵
glorthO--用正视矩阵乘以当前矩阵
glClipPlane--指定切割几何物体的平面
堆栈操作
glLoadMatrix--用任意矩阵替换当前矩阵
glMultMatrix--用任意矩阵乘以当前矩阵
glMatrixMode--指定哪一个矩阵是当前矩阵
glPushMatrix，glPopMatrix--压人和弹出当前矩阵堆栈
glPushAttrib，glPopAttrib--压人和弹出属性堆栈
glPushClientAttrib，glPopClientAttrib--在客户属性堆栈中保存和恢复客户状态变量组
glPushName，gPopName--压人和弹出名称堆栈
gllnitNames--初始名称堆栈
glLoadName--向名称堆栈中装载名称
显示列表
glNewList，glEndList--创建或替换一个显示列表
glCallLISt--执行一个显示列表
glCallLISts--执行一列显示列表
glGenLists--生成一组空的相邻的显示列表
glDeleteLists--删除一组相邻的显示列表
gllSLISt--检验显示列表的存在
使用光照和材质
glNormal--设置当前的法向量
glNormalPointer--定义法向量数组
glLight--设置光源参数
glLightModel--设置光照模型参数
glMaterial--为光照模型指定材质参数
glColorMateria--使材质颜色跟踪当前颜色
像素操作
glRasterPos--为像素操作指定光栅位置
glBitmap--绘制位图
glReadPixels--从帧缓存中读取一块像素
glDrawPixels--将一个像素块写人帧缓存
glCopyPixels--在帧缓存中拷贝像素
glCopyTexlmage1D--将像素从帧缓存拷贝到一维纹理图像中
glCopyTexlmageZD--把像素从帧缓存拷贝到二维纹理图像中
glCopyTexsublmagelD--从帧缓存中拷贝一维纹理图像的子图像
glCopyTexsublmageZD--从帧缓存中拷贝二维纹理图像的子图像
glPixelZoom--指定像素缩放因子
glPixelstore--设置像素存储模式
glPixelTransfer--设置像素传输模式
glPixelMap--设置像素传输映射表
纹理映射
glTexlmagelD--指定一维纹理图像
glTexlmageZD--指定二维纹理映射
glTexParameter--设置纹理参数
glTexsublmage1D--指定已存在的一维纹理图像的一部分
glTexsublmageZD--指定已存在的二维纹理图像的一部分
glTexEnv--设置纹理环境参数
glTexCoord--设置当前纹理坐标
glTexGen--控制纹理坐标的生成
glTexCoordPointer--定义纹理坐标数组
glDeleteTextures--删除命名的纹理
特殊效果操作
glBlendFunc--指定像素的数学算法
glHint--指定由实现确定的控制行为
glFOg--指定雾化参数
帧缓存操作
glClear--将缓存清除为预先的设置值
glClearAccum--设置累加缓存的清除值
glClearColor--设置颜色缓存的清除值
glClearDepth--设置深度缓存的清除值
glClearlndex--设置颜色索引缓存的清除值
glClearstencil--设置模板缓存的清除值
glDrawBuffer--指定绘制的颜色缓存
gllndexMask--控制颜色索引缓存中单个位的写操作
glColorMask--激活或关闭帧缓存颜色分量的写操作
glDepthMask--激活或关闭对深度缓存的写操作
glstencilMask--控制模板平面中单个位的写操作
glAlphaFunc-一指定alpha检验函数
glstencilFunc--设置模板检验函数和参考值
glstencilop--设置模板检验操作
glDepthFunc--指定深度比较中使用的数值
glDepthRange--指定从单位化的设备坐标到窗口坐标的z值映射
glLOgiCOp--为颜色索引绘制指定逻辑像素操作
glACCum--对累加缓存进行操作
绘制曲线和曲面
glEvalCoord--求取激活的一维和二维纹理图
glMapl--定义一维求值器
glMapZ--定义二维求值器
glMapGrid--定义一维或二维网格
glEvalMesh--计算一维或二维点网格或线网格
glEvalPoint--生成并求取网格中的单个点
查询函数
glGet--返回所选择的参数值
glGetClipPlane--返回指定的切平面系数
glGetColorTableEXT--获得当前目标纹理调色板的颜色表数据
glGetColorTableParameterfvEXT，glGetColorTableParameterlvEXT-从颜色表中获得调色板参数
glGetError--返回错误信息
glGetLight--返回光源参数值
glGetMap--返回求值器参数
glGetMaterial--返回材质参数
glGetPixelMap--返回指定的像素映像
glGetPointery--返回顶点数据数组地J
glGetPolygonstipple--返回多边形点戈
glGetstring--返回描述当前OpenGL
glGetTexEnv--返回纹理环境参数
glGetTexGen--返回纹理坐标生成参数
glGetTexlmage--返回纹理图像
glGetTexLevelParameter--返回指定细节水平的纹理参数值
glGetTexParameter--返回纹理参数值

二：GLU库函数
绘制NURBS曲线和曲面
gluNewNurbsRenderer--创建一个NURBS对像
gluNurbsProperty--设置NURBS属性
gluNurbsCallback--为NURBS对像定义回调函数
gluBeginCurve，gluEndCurve--限定NURBS曲线的定义
gluNurbsCurve--定义NURBS曲线的形状
gluDeleteNurbsRenderer--删除NURBS对像
gluBeglnsurface，gluEndsurface--限定NURBS曲面的定义
ghiNurbssurface--定义NURBS曲面的形状
gluBeginTrim，gluEndTrim--限定NURBS裁剪环的定义
gluPwlCurve--描述分段线性NURBS裁剪曲线
gfuBeglnPolygon， gluEndPolygon--限定多边形的定义
gluPickMatrix--定义拾取区域
绘制二次几何物体
gluNewQuadric--创建一个二次对象
gluQuadricDrawsope--指定二次对象的绘制方式
gluQuadricNormals--指定二次对象使用的法向量类型
gluQuadricorientation--指定二次对象的内侧面或外侧面方向
gluCylinder--绘制圆柱体
ghisphere--绘制球体
glllDISk--绘制圆盘
gluPartialDisk--绘制部分圆盘
gliJDeleteQuadric--删除二次对象
gluQuadricTexture--指定是否为二次对象使用纹理
ghiQuadricCallback--为二次对象定义回调
网格化
gluNewTess--创建一个网格化对象
gluTessVertex--在多边形上指定顶点
gluTessCallback--为网格化对象定义回调
gluTessBeglnPolygon，ghiTessEndPolygon--限定多边形的描述
gluTessBeglnContour，gluTessEndContour--限定多边形轮廓线的定义
gluTessProperty--设置网格化对象的属性
ghiNextContour--标记开始绘制另一个轮廓线
gluTessNormal--为多边形指定法向量
gluDeleteTess--删除网格化对象
坐标变换
gluOorthoZD--定义二维正视投影矩阵
gluPerspective--创建透视投影矩阵
gltlLOOkAt--定义视景转换
gluProject--将物体坐标映射为窗口坐标
gluInProject--将窗口坐标映射力物体坐标
多重映射
gfuBuildlDMipmaps--创建一维多重映射
gluBuildZDMipmaps--创建H维多重映射
gluSCalelmage--将图像缩放到任意尺寸
查询函数
ghiErrorstring--从OpenGL或GLU错误代码中生成错误字符串
gluGetNurbsProperty--获得NURBS属性
ghiGetstring--获得描述GLU版本号或支持GLU扩展调用的字符串
ghiGetTessProperty--获得网格化对象的属性

三：GLUT库函数
初始化和启动事件处理
ghjtlnit--初始化GLUT库
glutlnitwindowPosition--设置初始窗口位置
glutlnitwindowsize--设置初始窗口大小
glutlnitDisplayMode--设置初始显示模式
glutMainLoop--进人GLUT事件处理循环
窗口管理
glutCreatewindow--创建顶层窗口
glutCreatesubwindow--创建子窗口
ghitHidewindow--隐藏当前窗口的显示状态
glutshowwindow--改变当前窗口的显示状态，使其显示
gfutsetwindowTitle--设置当前顶层窗口的窗口标题
ghitsetlconTitle--设置当前顶层窗口的图标标题
ghitPostRedisplay--标记当前窗口需要重新绘制
glutswapBuffers--交换当前窗口的缓存
glutFullscreen--关闭全屏显示
glutPositionwindow--申请改变当前窗口的位置
gintReshapewindow--申请改变当前窗口的大小
glutsetwindow--设置当前窗口
ghitGetwindow--获得当前窗口的标识符
glutPopwindow--改变当前窗口的位置，使其前移
ghitPtshwilldOO--改变当前窗口的位置，使其后移
glutDestroywindow--销毁指定的窗口
glutlconifywindow--使当前窗口图标化显示
glutsetCursor--设置当前窗口的鼠标形状重叠层管理
glutEstablishoverlay--创建当前窗口的重叠层
glutUseLayer--改变当前窗口的使用层
glutRemoveoverlay--删除当前窗口的重叠层
glutPostoverlayRedisplay--标记当前窗口的重叠层
需要重新绘制
glutshowoverlay--显示当前窗口的重叠层
glutHideoverlay--显示当前窗口的重叠层
菜单管理
glutCreateMenu--创建一个新的弹出式菜单
glutAddMenuEntry--在当前菜单的底部增加一个菜单条目
glutAddsubMenu--在当前菜单的底部增加一个子菜单触发条目
glutAttachMenu--把当前窗口的一个鼠标按键与当前菜单的标识符联系起来
glutGetMenu--获取当前菜单的标识符
glutsetMenu--设置当前菜单
glutDestroyMenu--删除指定的菜单
glutChangeToMenuEntry--将指定的当前菜单中的菜单项更改为菜单条目
glutChangeTosubMenu--将指定的当前菜单中的菜单项更改为子菜单触发条目
glutRemoveMenultem--删除指定的菜单项
glutDetachMenu--释放当前窗口的一个鼠标按键注册回调函数
glutDispfayFunc--注册当前窗口的显示回调函数
glutReshapeFunc--注册当前窗口的形状变化回调函数
glutMouseFunc--注册当前窗口的鼠标回调函数
glutMotionFunc--设置移动回调函数
glutldleFunc--设置全局的空闲回调函数
glutVisibilityFunc--设置当前窗口的可视回调函数
glutKeyboardFunc--注册当前窗口的键盘回调函数
glutspecialFunc--设置当前窗口的特定键回调函数
glutoverlayDisplayFunc--注册当前窗口的重叠层显示回调函数
glutPassiveMotionFunc--设置当前窗口的被动移动回调函数
glutEntryFunc--设置当前窗口的鼠标进出回调函数
glutspaceballMotionFunc--设置当前窗口的空间球移动回调函数
glutspaceballRotateFunc--设置当前窗口的空间球旋转回调函数
glutspaceballButtonFunc--设置当前窗口的空间球按键回调函数
glutButtonBoxFunc--设置当前窗口的拨号按键盒按键回调函数
glutDialsFunc--设置当前窗口的拨号按键盒拨号回调函数
glutTabletMotionFunc--设置图形板移动回调函数
glutTabletButtonFunc--设置当前窗口的图形板按键回调函数
glutMenustatusFunc--设置全局的菜单状态回调函数
glutTimerFunc--注册按一定时间间隔触发的定时器回调函数
颜色素引映射表管理
glutsetColor--设置当前窗口当前层一个颜色表单元的颜色
glutGetColor--获得指定的索引颜色
glutCopyColormap--将逻辑颜色表从指定的窗口拷贝到当前窗口状态检索
glutGet--检索指定的GLUT状态
glutLayerGet--检索属于当前窗口重叠层的 GLU T状态
glutDeviceGet--检索GLUT设备信息
glutGetModifiers--返回修饰键在引起某些回调的事件发生时的状态
glutExtensionsupported--判别当前OpenGL版本是否支持给定的OpenGL扩展字体绘制
glutBltmapCharcter--绘制一个位图字符
glutBitmapwidth--返回一个位图字符的宽度
glutstrokeCharcter--绘制一个笔画字符
glutstrokewidth--返回一个笔画字体的宽度几何图形绘制
glutSolidsphere，glutwiresphere--绘制实心球体和线框球体
glutsolidCube，glutwireCube--绘制实心立方体和线框立方体
glutsolidCone，glutwireCone--绘制实心圆锥体和线框圆锥体
glutsolidTorus，glutwireTorus--绘制实心圆环和线框圆环
glutSolidDOdeCahedroll，glLltwiFeDOdechedfotl--绘制实心十二面体和线框十二面体
glutSolidOctahedron，glutWireOctahedron--绘制买心八面体和线框八面体
glutsolldTetrahedron，glutwireTetrahedron--绘制实心四面体和线框四面体
glutSollelcosahedron，glutwirelcosahedron--绘制实心二十面体和线框二十面体
glutsolidTeapot，glutwireTeapot--绘制实心茶壶和线框茶壶

{% include href.md %}
