

是 turtle 绘图体系的 Python 实现，是 Python 语言的标准库之一，不是需要安装才能用的第三方库。

-库 Library、包 Package、模块 Module，统称：模块。

turtle 的绘图窗体布局：

turtle.setup(width,height,startx,starty)

后 2 个参数为可选，setup()不是必须的。

###### 绝对坐标：turtle.goto(x 坐标,y 坐标)

###### 相对坐标：

正前方：turtle.fd(d)

向左侧以某点为圆心走弧线：turtle.circle(r,angle)

掉头：turtle.bk(d)

###### 角度坐标系：

turtle.seth(angle)

-按绝对角度改变方向，不表达前进量。搭配使用：turtle.fd(d)

###### -按相对角度改变方向：

turtle.left(angle)/turtle.right(angle) `#`不表达前进量

###### turtle 的 RGB 色彩模式：默认小数(0~1)，可切整数值(0~255)

turtle.colormode(mode) `#`设置色彩输入格式

-mode=1.0：小数值，-mode=255：整数值模式。

白色 white：1,1,1；黄色 yellow：1,1,0；洋红 magenta：1,0,1；

青色 cyan：0,1,1；蓝色 blue：0,0,1；黑色 black：0,0,0

海贝色 seashell：1,0.96,0.93；金色 gold：1,0.84,0；粉红色 pink：1,0.75,0.80；

棕色 brown：0.65,0.16,0.16；紫色 purple：0.63,0.13,0.94；番茄色 tomato：1,0.39,0.28。

turtle.color(小数或整数) `#`改变输出颜色。

#### 库引用

扩充 Python 程序功能的方式

##### -使用 import 保留字完成，采用`<`a>.`<`b>()的编码风格。

##### import `<`库名>

`<`库名>.`<`函数名>(`<`函数参数>)

##### 使用 from 和 import 共同完成，省去每一行都要写`<`库名>

from `<`库名> import `<`函数名> `#`“调用某库”升级到“从某库调用函数”，

from `<`库名> import \* `#`扩充该库内的所有函数

`<`函数名>(`<`函数参数>)

这样一来，就不用每一行前面加个"`<`库名>."，直接调用函数。缺点：可能出现重名函数。

##### 使用 import 和 as 共同完成：

import `<`库名> as `<`库别名> `#`给调用的库起个小名

`<`库别名>.`<`函数名>(`<`函数参数>)

##### turtle 画笔控制函数

-turtle.penup() `#`别名：turtle.pu()，操作后一直有效，一般成对出现

抬起画笔

-turtle.pendown() `#`别名：turtle.pd()，操作后一直有效，一般成对出现

落下画笔

-turtle.pensize(width) `#`别名：turtle.width(width)，设置后一直有效，直至下次设置

-turtle.hideturtle() `#`乌龟隐身

画笔宽度

-turtle.pencolor(color) `#`color 为颜色字符串或 R,G,B 值

画笔颜色

color 参数有三种形式：

颜色字符串：turtle.pencolor("purple") `#`purple 须小写

RGB 的小数值：turtle.pencolor(0.63,0.13,0.94)

RGB 的元组值：turtle.pencolor((0.63,0.13,0.94))

-trutle.write() `#`画汉字

例：trutle.write("年",font=("Arial",18,"normal")

##### turtle 运动控制函数：控制海龟走直线&走曲线

走直线：

-turtle.forward(d) 别名 turtle.fd(d) `#`向前走直线，-d：行进距离，可以是负数

走弧线：

-turtle.circle(r,extent=None) `#`根据半径 r 沿切线方向绘制 extent 角度的弧形

-r：默认圆心在海龟左侧 r 距离的位置，负数在右侧

##### turtle 方向控制函数：转弯

-turtle.setheading(angle) 别名 turtle.seth(angle)

改变先进方向，-angle：正负角度值

相对角度：

-turtle.left(angle) `#`海龟向左转，正角度值

-turtle.right(angle) `#`海龟向右转，正角度值


###### turtle.done()函数

运行完毕之后，不会自动退出

