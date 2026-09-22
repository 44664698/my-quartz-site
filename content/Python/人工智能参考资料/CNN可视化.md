---
标题: "【深度学习】原来早就有人将CNN可视化了"
笔记ID: H8DEMC3
笔记类型: page
星标: false
tags: 
域名: mp.weixin.qq.com
域名2: qq.com
作者: "人工智能大讲堂"
原文链接: "http://mp.weixin.qq.com/s?__biz=Mzg5MzY2MjMxMg==&mid=2247515400&idx=1&sn=bd40eb132e1923f72262558531ab7e85&chksm=c029980ff75e111969072a9b79d019f1591ad612846fdbc77b45dc11c72379766a2f89cdc34b&mpshare=1&scene=1&srcid=0223nbDR37tr04Nc5U5yUYy0&sharer_shareinfo=da3e3fd86bd19795888aa8f5f4c8b70d&sharer_shareinfo_first=da3e3fd86bd19795888aa8f5f4c8b70d#rd"
五彩链接: "https://marker.dotalk.cn/#/?noteidx=H8DEMC3"
划线数量: 0
创建时间: 2024-02-23 23:57
更新时间: 2024-02-23 23:59
---

## 【深度学习】原来早就有人将CNN可视化了 


## 页面笔记


## 划线列表

## 全文剪藏
 人工智能大讲堂  人工智能大讲堂 

做计算机视觉，怎么能离开CNN？  

这个模拟生物视觉系统的东西，包括了卷积、池化、Softmax……等一系列操作。

可是，卷积、池化、Softmax……究竟长啥样，是怎样相互连接在一起的？

仅凭代码凭空想象，多少让人有点头皮微凉。于是，有人干脆用Unity给它完整3D可视化了出来。

`视频：` `https://vimeo.com/stefsietz` `源代码：` `https://github.com/stefsietz/nn-visualizer` `项目主页：` `http://visuality.at/vis2/`

![](https://g1proxy.wimg.site/sEjA2J08W1U0FiueiXyDjxj54g-2i-lWXOT0EVWmlEDQ/https://mmbiz.qpic.cn/mmbiz_gif/5fknb41ib9qGlE67p6qrcZb2WBKcvvnoh33VqyYIA8JGCsgT8R7fHA2FA1DvibGH6VB8mznIykunashiaw9jgkibSw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic)

很多模型可视化工具，大多只是一个原型，你没办法导入其它模型。  

这个不仅支持导入训练好的模型，还能把训练过程也看得明明白白。

比如随着epoch（迭代次数）的变化，训练过程中各层出现的实时变化。

![](https://g1proxy.wimg.site/sseiYP-AmvjJJ4bKcrc5rpY6f5Vb5QXz_HesfjdNcWaY/https://mmbiz.qpic.cn/mmbiz_gif/5fknb41ib9qGlE67p6qrcZb2WBKcvvnohwiamzZwO36xvEjg0RcJutPWNxUwoicBksiasgaVducMJ5DRs1S2J9ZTPw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic)

![](https://g1proxy.wimg.site/sohVpTLNnoijpfhbUhy6VaBD2bZL0aL1dUs6L4Pox9Oc/https://mmbiz.qpic.cn/mmbiz_gif/5fknb41ib9qGlE67p6qrcZb2WBKcvvnohibf8lU5eZ3TSkTfcstOLQvR2MgQVpebDsmTD6d8ADg84iaY2kGicpdEdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic)

为了能更清楚地展示网络细节，用户还可以在其中自由地折叠、扩展每个层。

比如将特征图在线性布局和网格布局之间转换。

![](https://g1proxy.wimg.site/sAtaFgVi3Vi-bf2Qm-R1NwCWrGBp5A88t2linsBGR1Ao/https://mmbiz.qpic.cn/mmbiz_gif/5fknb41ib9qGlE67p6qrcZb2WBKcvvnohMvQrHG2e0yopIp9ia46W38coqEia3cfzrTtNDVILMbvrkTonmx2npXJg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic)

折叠卷积层的特征图输出。

![](https://g1proxy.wimg.site/sKX8goxtVqOOSuIiUGcM8xImUud0A-ZvELQpCf_4qeLc/https://mmbiz.qpic.cn/mmbiz_gif/5fknb41ib9qGlE67p6qrcZb2WBKcvvnohuxLS0EZHlgoz2JngS9yXt9meeLicFOPMicWekyQhu6jzOPhuAYDJYOrw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic)

对全连接层进行边绑定（edge bunding）等等。

![](https://g1proxy.wimg.site/szJPeEy6QH7M0YtJ8tA4hj2102V0T_1-DkJ1sFZDa2VQ/https://mmbiz.qpic.cn/mmbiz_gif/5fknb41ib9qGlE67p6qrcZb2WBKcvvnohwzWW4dymYNiajOicGXdAjLDGQh0VUOaTBGare1avePnCYel63JbAlQOw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic)

这样的可视化图像，可以通过加载TensorFlow的检查点来构建。但需要通过Github源码仓库中的转换工具将TensorFlow的检查点转换成可执行程序支持的json文件。

![](https://g1proxy.wimg.site/sT-BJhBqPUQyFdoq2Jaxb-EO95vJoyX8Gznc_afpFQEg/https://mmbiz.qpic.cn/sz_mmbiz_png/gWS53OdTR9TZFa4JSibkTlprLtib8v4jPpQ9xiaIWVaX0SfbQ6pFWnA5rODiaogTejQoRBPC2ySr78MB2Iic3xSzryA/640?wx_fmt=png&from=appmsg)

也可以在Unity编辑器中设计。

![](https://g1proxy.wimg.site/sw7KQofrOjnWXZdya2iereA31I2E_FaLobAq8Fs9jzCw/https://mmbiz.qpic.cn/sz_mmbiz_png/gWS53OdTR9TZFa4JSibkTlprLtib8v4jPpaFzicyQdME3iaKLFGsebMJQZq9WILa3VsEsNRtcHJmDjhMd2ehQNibmeQ/640?wx_fmt=png&from=appmsg)

该项目的作者Stefan Sietzen，是一位来自维也纳的3D特效师。

![](https://g1proxy.wimg.site/sT1DOPx7uSg6kOGsRnkf41oyMyEn3H1f_TC3NHH6uGGs/https://mmbiz.qpic.cn/mmbiz_png/5fknb41ib9qGlE67p6qrcZb2WBKcvvnoh3BZavnkAMxw5C4bZVuvZUV2vegdiaQhV6HkW0pqLr3IJagWCez2Qr0g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)  

据他介绍，之所以创建这样一个CNN可视化工具，是因为他自己初学神经网络时，经常觉得很难理解卷积层之间是如何相互连接，又如何与不同类型的层连接的。

而该工具的主要功能包括，卷积、最大池化和完全连接层的可视化表示，以及各种能实现更清晰可视化的简化机制等等。

总而言之，就是想让初学者通过最直观的方式，来get到CNN的重点。

## 如何用Unity搞出一个3D网络

在正式上手Unity前，作者先在Houdini软件中，搭建了一个可视化的3D网络原型。

![](https://g1proxy.wimg.site/soRQBZgdTlTGHlx2mlnt-6OIejcDVWd1d8f6_EsNCvKA/https://mmbiz.qpic.cn/sz_mmbiz_jpg/gWS53OdTR9TZFa4JSibkTlprLtib8v4jPp9ta2xR6lmogvPWgcDJQicFh9ZdsGCUjX2qh83SOTepPd0cdzAbluuUw/640?wx_fmt=jpeg&from=appmsg)

也就是说，先给Unity版3D网络提供一个搭建思路，提前准备好实现展示卷积计算的方法、特征图的形状、边绑定的效果等问题。  

它的节点编辑器长这样：

![](https://g1proxy.wimg.site/sMA7i9meNXDlLdPcqORe7IIvLzG-fKHmgogCDtcMxtF0/https://mmbiz.qpic.cn/sz_mmbiz_jpg/gWS53OdTR9TZFa4JSibkTlprLtib8v4jPpeGVK1h2ibnPZIIPH10xQdo9KzXGlG3xiaibCcgFncsM8Sburg162kA1gw/640?wx_fmt=jpeg&from=appmsg)

然后，就可以在Unity上搭建3D神经网络了。

首先，需要预设好神经网络的“形状”。

由于之前并没有用过Unity，作者先学习了着色器和过程式几何相关的知识。

这里面，作者发现了一些局限性，他采用的是Unity为着色器开发的语言Shaderlab，这个语言无法使用着色变化，只有对语义进行预定义的变量，才能让它在顶点、几何和像素着色器之间传递。

而且，它无法任意分配顶点属性，只有位置、颜色、UV等预定义属性。（可能这也是3D网络无法实时改变颜色的原因之一）

![](https://g1proxy.wimg.site/s2vP0jovGnOwhJ3PbJklpGsP_x71Vr0VtbLzt-MjBcgM/https://mmbiz.qpic.cn/sz_mmbiz_png/gWS53OdTR9TZFa4JSibkTlprLtib8v4jPpy3JHLeibme5dhiafvMJWKHtybXbM5RxxpCBoEeiavy3v61WUoNibLORlTg/640?wx_fmt=png&from=appmsg)

在研究了一些实例化（instancing）相关的概念后，作者计划采用几何着色器的方法生成神经网络的连线。其中起点和终点被传递到顶点着色器，并直接转发到几何着色器。

这些线，最多可以由120个顶点组成，因为Unity允许的几何着色器能创建的变量的标量浮点数为1024。

设计后的网络形状，大致长这样：

![](https://g1proxy.wimg.site/sWbJ0eriTraRYtA8qLfdLBty8igjRmVh7dCT8V2U3qyI/https://mmbiz.qpic.cn/sz_mmbiz_jpg/gWS53OdTR9TZFa4JSibkTlprLtib8v4jPpdClHrwKF5gNI0axtyZvZzS3INm7cibiaGHkAcKAzaqgb46r8J3f3D2bA/640?wx_fmt=jpeg&from=appmsg)

然后，就是从模型的TensorFlow代码中，生成对应的3D神经网络图像。

其中，Tensorflow-native.ckpt格式的文件，需要存储重构模型图所需的数据、二进制的权重读取和激活值，以及特定层的名字。

以Cifar10-greyscale数据集为例，需要编写一个检查点（checkpoint）文件，以及设置随即初始化的权重。

![](https://g1proxy.wimg.site/sVdORugrIgxzM1ZBfox2QWH0JaMNM40opdyregInAhYw/https://mmbiz.qpic.cn/sz_mmbiz_png/gWS53OdTR9TZFa4JSibkTlprLtib8v4jPpL1iaXhTWFMicMARoKSwwFib3lNg3OG0ptyN42d4ymbG5OmAxQQLaeFLvA/640?wx_fmt=png&from=appmsg)

在那之后，需要加载这些检查点文件、启动TensorFlow会话，输入训练示例，以便查询每一层的激活函数。

然后编写一个json文件，存储每一层的形状、名称、权重和激活函数，便于读取。然后使用权重值，将颜色数据分配给各层的Unity Mesh。

![](https://g1proxy.wimg.site/sjqggyaytdOWBXbBXGfpcvjVmUO2XSJXs0ZHlmLfXVHg/https://mmbiz.qpic.cn/sz_mmbiz_png/gWS53OdTR9TZFa4JSibkTlprLtib8v4jPpsVslumvBwEjxibdhCqw3MYnt2atRAQyydicibHdfDtaQJs23znjkAuicdQ/640?wx_fmt=png&from=appmsg)

最终搞出来的效果，还是不错的：

![](https://g1proxy.wimg.site/sNau5RzrtXlwuejCTcYfSTiWM1176AWEiGIlasX7oZiE/https://mmbiz.qpic.cn/mmbiz_gif/5fknb41ib9qGlE67p6qrcZb2WBKcvvnoh689RWWJicBFL5IEQg19XyhxjqoTJ6WtVNzwRRvjqAcA8569xqFSYRhQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic)

参考：

\[1\]https://www.cg.tuwien.ac.at/courses/Visualisierung2/HallOfFame/2018/OtherTopic02/html/detail.html

\[2\]http://visuality.at/vis2/
