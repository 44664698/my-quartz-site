---
tags:
  - Python
  - "#生态"
---

## 0.1 从数据处理到人工智能

### 0.1.1 数据表示->数据清洗->数据统计->数据可视化->数据挖掘->人工智能

### 0.1.2 -数据表示：采用合适方式用程序表达数据

### 0.1.3 -数据清洗：数据归一化、数据转换、异常值处理

### 0.1.4 -数据统计：数据的概要理解，数量、分布、中位数等

### 0.1.5 -数据可视化：直观展示数据内涵的方式

### 0.1.6 -数据挖掘：从数据分析获得知识，产生数据外的价值

### 0.1.7 -人工智能：数据/语言/图像/视觉等方面深度分析与决策

### 0.1.8 -Python 库之数据分析

#### 0.1.8.1 Numpy:表达 N 维数组的最基础库

##### 0.1.8.1.1 [http://www.numpy.org](http://www.numpy.org/)

##### 0.1.8.1.2 -Python 接口使用，C 语言实现，计算速度优异

##### 0.1.8.1.3 -Python 数据分析及科学计算的基础库，支撑 Pandas 等

##### 0.1.8.1.4 -提供直接的矩阵运算、广播函数、线性代数等功能

##### 0.1.8.1.5 函数

![[Pasted image 20240217043629.png]]
![[Pasted image 20240217043643.png]]

#### 0.1.8.2 Pandas:Python 数据分析高层次应用库

##### 0.1.8.2.1 [http://pandas.pydata.org](http://pandas.pydata.org/)

##### 0.1.8.2.2 -提供了简单易用的数据结构和数据分析工具

##### 0.1.8.2.3 -理解数据类型与索引的关系，操作索引即操作数据

##### 0.1.8.2.4 -Python 最主要的数据分析功能库，基于 Numpy 开发

##### 0.1.8.2.5 用法

###### 0.1.8.2.5.1 Series=索引+一维数据

###### 0.1.8.2.5.2 DataFrame=行列索引+维数据

#### 0.1.8.3 SciPy:数学、科学和工程计算功能库

##### 0.1.8.3.1 [http://www.scipy.org](http://www.scipy.org/)

##### 0.1.8.3.2 -提供了一批数学算法及工程数据运算功能

##### 0.1.8.3.3 -类似 Matlab,可用于如傅里叶变换、信号处理等应用

###### 0.1.8.3.3.1 傅里叶变换类

###### 0.1.8.3.3.2 信号处理类

###### 0.1.8.3.3.3 优化算法类

###### 0.1.8.3.3.4 线性代数类

###### 0.1.8.3.3.5 稀疏图运算类

###### 0.1.8.3.3.6 图像处理类

###### 0.1.8.3.3.7 稀疏图压缩类

##### 0.1.8.3.4 -Python 最主要的科学计算功能库，基于 Numpy 开发

### 0.1.9 -Python 库之数据可视化

#### 0.1.9.1 Matplotlib:高质量的二维数据可视化功能库

##### 0.1.9.1.1 [http://matplotlib.org](http://matplotlib.org/)

##### 0.1.9.1.2 -提供了超过 100 种数据可视化展示效果

##### 0.1.9.1.3 -通过 matplotlib.pyplot 子库调用各可视化效果

![[Pasted image 20240217043703.png]]

##### 0.1.9.1.4 -Python 最主要的数据可视化功能库，基于 Numpy 开发

#### 0.1.9.2 Seaborn:统计类数据可视化功能库-调用时略为简单

##### 0.1.9.2.1 [http://seaborn.pydata.org/](http://seaborn.pydata.org/)

##### 0.1.9.2.2 -提供了一批高层次的统计类数据可视化展示效果

![[Pasted image 20240217043815.png]]

##### 0.1.9.2.3 -主要展示数据间分布、分类和线性关系等内容

##### 0.1.9.2.4 -基于 Matplotlib 开发，支持 Numpy 和 Pandas

#### 0.1.9.3 Mayavi:三维科学数据可视化功能库

##### 0.1.9.3.1 [http://docs.enthought.com/mayavi/mayavi/](http://docs.enthought.com/mayavi/mayavi/)

##### 0.1.9.3.2 -提供了一批简单易用的 3D 科学计算数据可视化展示效果

![[Pasted image 20240217043826.png]]

##### 0.1.9.3.3 -目前版本是 Mayavi2，三维可视化最主要的第三方库

##### 0.1.9.3.4 -支持 Numpy、TVTK、Traits、Envisage 等第三方库

### 0.1.10 -Python 库之文本处理

#### 0.1.10.1 PyPDF2:用来处理 pdf 文件的工具集

##### 0.1.10.1.1 [http://mstamy2.github.io/PyPDF2](http://mstamy2.github.io/PyPDF2)

##### 0.1.10.1.2 -提供了一批处理 PDF 文件的计算功能

##### 0.1.10.1.3 -支持获取信息、分隔/整合文件、加密解密等

###### 0.1.10.1.3.1 from PyPDF2 import PdfFileReader, PdfFileMerger

###### 0.1.10.1.3.2 merger = PdfFileMerger()

###### 0.1.10.1.3.3 input1 = open("document1.pdf", "rb")

###### 0.1.10.1.3.4 input2 = open("document2.pdf", "rb")

###### 0.1.10.1.3.5 merger.append(fileobj = input1, pages = (0,3))

###### 0.1.10.1.3.6 merger.merge(position = 2, fileobj = input2, pages = (0,1))

###### 0.1.10.1.3.7 output = open("document-output.pdf", "wb")

###### 0.1.10.1.3.8 merger.write(output)

##### 0.1.10.1.4 -完全 Python 语言实现，不需要额外依赖，功能稳定

#### 0.1.10.2 NLTK:自然语言文本处理第三方库

##### 0.1.10.2.1 [http://www.nltk.org/](http://www.nltk.org/)

##### 0.1.10.2.2 -提供了一批简单易用的自然语言文本处理功能

![[Pasted image 20240217043838.png]]
```Python
from nltk.corpus import treebank  
t = treebank.parsed_sents('wsj_0001.mrg')[0] 
t.draw()
```

##### 0.1.10.2.3 -支持语言文本分类、标记、语法句法、语义分析等

##### 0.1.10.2.4 -最优秀的 Python 自然语言处理库

#### 0.1.10.3 Python-docx:创建或更新 Microsoft Word 文件的第三方库

##### 0.1.10.3.1 [http://python-docx.readthedocs.io/en/latest/index.html](http://python-docx.readthedocs.io/en/latest/index.html)

##### 0.1.10.3.2 -提供创建或更新.doc.docx 等文件的计算功能

##### 0.1.10.3.3 -增加并配置段落、图片、表格、文字等，功能全面

###### 0.1.10.3.3.1 from docx import Document

###### 0.1.10.3.3.2 document=Document()

###### 0.1.10.3.3.3 document.add_heading('Document Title', 9)

###### 0.1.10.3.3.4 p= document.add_paragraph('A plain paragraph having some ')

###### 0.1.10.3.3.5 document. add_page_break()

###### 0.1.10.3.3.6 document.save('demo. docx')

### 0.1.11 -Python 库之机器学习

#### 0.1.11.1 Scikit-learn:机器学习方法工具集

##### 0.1.11.1.1 -提供一批统一化的机器学习方法功能接口

##### 0.1.11.1.2 -提供聚类、分类、回归、强化学习等计算功能

##### 0.1.11.1.3 -机器学习最基本且最优秀的 Python 第三方库

#### 0.1.11.2 TensorFlow: AlphaGo 背后的机器学习计算框架

##### 0.1.11.2.1 [https://www.tensorflow.org/](https://www.tensorflow.org/)

##### 0.1.11.2.2 -谷歌公司推动的开源机器学习框架

##### 0.1.11.2.3 -将数据流图作为基础，图节点代表运算，边代表张量

##### 0.1.11.2.4 -应用机器学习方法的一种方式，支撑谷歌人工智能应用

###### 0.1.11.2.4.1 import tensorflow as tf

###### 0.1.11.2.4.2 init = tf.global_variables_initializer()

###### 0.1.11.2.4.3 sess = tf.Session()

###### 0.1.11.2.4.4 sess.run(init)

###### 0.1.11.2.4.5 res = sess.run(result)

###### 0.1.11.2.4.6 print('result:', res)

#### 0.1.11.3 MXNet:基于神经网络的深度学习计算框架

##### 0.1.11.3.1 -提供可扩展的神经网络及深度学习计算功能

##### 0.1.11.3.2 -可用于自动驾驶、机器翻译、语音识别等众多领域

##### 0.1.11.3.3 -Python 最重要的深度学习计算框架

## 0.2 霍兰德人格分析雷达图 Radar Chart

### 0.2.1 雷达图是多特性直观展示的重要方式![[Pasted image 20240217043856.png]]

#### 0.2.1.1 -需求：雷达图方式验证霍兰德人格分析

#### 0.2.1.2 -输入：各职业人群结合兴趣的调研数据

#### 0.2.1.3 -输出：雷达图

### 0.2.2 -霍兰德认为：人格兴趣与职业之间应有一种内在的对应关系

#### 0.2.2.1 -通用雷达图绘制：matplotlib 库

#### 0.2.2.2 -专业的多维数据表示：numpy 库

#### 0.2.2.3 -输出：雷达图

### 0.2.3 -人格分类：研究型、艺术型、社会型、企业型、传统型、现实性

#### 0.2.3.1 目标感：寻找感兴趣的目标，寻(wa)觅(jue)之

#### 0.2.3.2 沉浸感：寻找可实现的方法，思(zuo)考(mo)之

#### 0.2.3.3 熟练度：练习、练习、再练习，熟练之

### 0.2.4 -职业：工程师、实验员、艺术家、推销员、记事员、社会工作者

## 0.3 从 Web 解析到网络空间

### 0.3.1 Python 库之网络爬虫

#### 0.3.1.1 Requests:最友好的网络爬虫功能库

##### 0.3.1.1.1 [http://www.python-requests.org/](http://www.python-requests.org/)

##### 0.3.1.1.2 -提供了简单易用的类 HTTP 协议网络爬虫功能

##### 0.3.1.1.3 -支持连接池、SSL、Cookies、HTTP(S)代理等

##### 0.3.1.1.4 -Python 最主要的页面级网络爬虫功能库

#### 0.3.1.2 Scrapy:优秀的网络爬虫框架

##### 0.3.1.2.1 [https://scrapy.org](https://scrapy.org/)

##### 0.3.1.2.2 -提供了构建网络爬虫系统的框架功能，功能半成品

##### 0.3.1.2.3 -支持批量和定时网页爬取、提供数据处理流程等

##### 0.3.1.2.4 -Python 最主要且最专业的网络爬虫框架

##### 0.3.1.2.5 Python 数据分析高层次应用库![[Pasted image 20240217043911.png]]

#### 0.3.1.3 pyspider:强大的 Web 页面爬取系统

##### 0.3.1.3.1 [http://docs.pyspider.org](http://docs.pyspider.org/)

##### 0.3.1.3.2 -提供了完整的网页爬取系统构建功能

##### 0.3.1.3.3 -支持数据库后端、消息队列、优先级、分布式架构等

##### 0.3.1.3.4 -Python 重要的网络爬虫类第三方库

### 0.3.2 -Python 库之 Web 信息提取

#### 0.3.2.1 Beautiful Soup: HTML 和 XML 的解析库

##### 0.3.2.1.1 [https://www.crummy.com/software/BeautifulSoup/bs4](https://www.crummy.com/software/BeautifulSoup/bs4)

##### 0.3.2.1.2 -提供了解析 HTML 和 XML 等 Web 信息的功能![[Pasted image 20240217043922.png]]

##### 0.3.2.1.3 -又名 beautifulsoup4 或 bs4，可以加载多种解析引擎

##### 0.3.2.1.4 -常与网络爬虫库搭配使用，如 Scrapy、requests 等

#### 0.3.2.2 Re:正则表达式解析和处理功能-标准库

##### 0.3.2.2.1 [https://docs.python.org/3.6/library/re.html](https://docs.python.org/3.6/library/re.html)

##### 0.3.2.2.2 -提供了定义和解析正则表达式的一批通用功能

##### 0.3.2.2.3 -可用于各类场景，包括定点的 Web 信息提取

##### 0.3.2.2.4 -Python 最主要的标准库之一，无需安装

##### 0.3.2.2.5 函数

###### 0.3.2.2.5.1 re.search()

###### 0.3.2.2.5.2 re.split()

###### 0.3.2.2.5.3 re.match()

###### 0.3.2.2.5.4 re.finditer()

###### 0.3.2.2.5.5 re.findall()

###### 0.3.2.2.5.6 re.sub()

#### 0.3.2.3 Python-Goose:提取文章类型 Web 页面的功能库

##### 0.3.2.3.1 [https://github.com/grangier/python-goose](https://github.com/grangier/python-goose)

##### 0.3.2.3.2 -提供了对 Web 页面中文章信息/视频等元数据的提取功能

##### 0.3.2.3.3 -针对特定类型 Web 页面，应用覆盖面较广

##### 0.3.2.3.4 -Python 最主要的 Web 信息提取库

### 0.3.3 -Python 库之 Web 网站开发

#### 0.3.3.1 Django:最流行的 Web 应用框架

##### 0.3.3.1.1 [https://www.djangoproject.com](https://www.djangoproject.com/)

##### 0.3.3.1.2 -提供了构建 Web 系统的基本应用框架

##### 0.3.3.1.3 -MTV 模式：模型(model)、模板(Template)、视图(Views)

##### 0.3.3.1.4 -Python 最重要的 Web 应用框架，略微复杂的应用框架

##### 0.3.3.1.5 规模大，适合专业人士

#### 0.3.3.2 Pyramid:规模适中的 Web 应用框架

##### 0.3.3.2.1 [https://trypyramid.com/](https://trypyramid.com/)

##### 0.3.3.2.2 -提供了简单方便构建 Web 系统的应用框架

##### 0.3.3.2.3 -不大不小，规模适中，适合快速构建并适度扩展类应用

##### 0.3.3.2.4 -Python 产品级 Web 应用框架，起步简单可扩展性好

##### 0.3.3.2.5 中规模，十几行左右代码即成网站

#### 0.3.3.3 Flask:Web 应用开发微框架

##### 0.3.3.3.1 [http://flask.pocoo.org](http://flask.pocoo.org/)

##### 0.3.3.3.2 -提供了最简单构建 Web 系统的应用框架

##### 0.3.3.3.3 -特点是：简单、规模小、快速

##### 0.3.3.3.4 -Django>Pyramid > Flask

##### 0.3.3.3.5 小规模，5 行代码即成网站

### 0.3.4 -Python 库之网络应用开发

#### 0.3.4.1 WeRoBot:微信公众号开发框架

##### 0.3.4.1.1 [https://github.com/offu/WeRoBot](https://github.com/offu/WeRoBot)

##### 0.3.4.1.2 -提供了解析微信服务器消息及反馈消息的功能

##### 0.3.4.1.3 -建立微信机器人的重要技术手段

#### 0.3.4.2 aip：百度 AI 开放平台接口

##### 0.3.4.2.1 [https://github.com/Baidu-AIP/python-sdk](https://github.com/Baidu-AIP/python-sdk)

##### 0.3.4.2.2 -提供了访问百度 AI 服务的 Python 功能接口

##### 0.3.4.2.3 -语音、人脸、OCR、NLP、知识图谱、图像搜索等领域

##### 0.3.4.2.4 -Python 百度 AI 应用的最主要方式

#### 0.3.4.3 MyQR:二维码生成第三方库

##### 0.3.4.3.1 [https://github.com/sylnsfar/qrcode](https://github.com/sylnsfar/qrcode)

##### 0.3.4.3.2 -提供了生成二维码的系列功能

##### 0.3.4.3.3 -基本二维码、艺术二维码和动态二维码

## 0.4 从人机交互到艺术设计

### 0.4.1 -Python 库之图形用户界面

#### 0.4.1.1 PyQt5:Qt 开发框架的 Python 接口

##### 0.4.1.1.1 [https://www.riverbankcomputing.com/software/pyqt](https://www.riverbankcomputing.com/software/pyqt)

##### 0.4.1.1.2 -提供了创建 Qt5 程序的 Python API 接口

##### 0.4.1.1.3 -Qt 是非常成熟的跨平台桌面应用开发系统，完备 GUI

##### 0.4.1.1.4 -推荐的 Python GUI 开发第三方库

#### 0.4.1.2 wxPython:跨平台 GUI 开发框架

##### 0.4.1.2.1 [https://www.wxpython.org](https://www.wxpython.org/)

##### 0.4.1.2.2 -提供了专用于 Python 的跨平台 GUI 开发框架

##### 0.4.1.2.3 -理解数据类型与索引的关系，操作索引即操作数据

##### 0.4.1.2.4 -Python 最主要的数据分析功能库，基于 Numpy 开发

#### 0.4.1.3 PyGObject:使用 GTK+开发 GUI 的功能库

##### 0.4.1.3.1 [https://pygobject.readthedocs.io](https://pygobject.readthedocs.io/)

##### 0.4.1.3.2 由科学家与工程师联合设计

##### 0.4.1.3.3 -提供了整合 GTK+、WebKitGTK+等库的功能

##### 0.4.1.3.4 -GTK+:跨平台的一种用户图形界面 GUI 框架

##### 0.4.1.3.5 -实例：Anaconda 采用该库构建 GUI

###### 0.4.1.3.5.1 import gi

###### 0.4.1.3.5.2 gi.require_version("Gtk", "3.0")

###### 0.4.1.3.5.3 from gi. repository import Gtk

###### 0.4.1.3.5.4 window = Gtk.Window(title="Hello World")

###### 0.4.1.3.5.5 window.show()

###### 0.4.1.3.5.6 window. connect("destroy", Gtk.main_quit)

###### 0.4.1.3.5.7 Gtk.main()

### 0.4.2 -Python 库之游戏开发

#### 0.4.2.1 PyGame:简单的游戏开发功能库

##### 0.4.2.1.1 [http://www.pygame.org](http://www.pygame.org/)

##### 0.4.2.1.2 -提供了基于 SDL 的简单游戏开发功能及实现引擎

##### 0.4.2.1.3 -理解游戏对外部输入的响应机制及角色构建和交互机制

##### 0.4.2.1.4 -Python 游戏入门最主要的第三方库

#### 0.4.2.2 Panda3D:开源、跨平台的 3D 渲染和游戏开发库

##### 0.4.2.2.1 [http://www.panda3d.org](http://www.panda3d.org/)

##### 0.4.2.2.2 -一个 3D 游戏引擎，提供 Python 和 C++两种接口

##### 0.4.2.2.3 -支持很多先进特性：法线贴图、光泽贴图、卡通渲染等

##### 0.4.2.2.4 -由迪士尼和卡尼基梅隆大学共同开发

#### 0.4.2.3 cocos2d:构建 2D 游戏和图形界面交互式应用的框架

##### 0.4.2.3.1 [http://python.cocos2d.org/](http://python.cocos2d.org/)

##### 0.4.2.3.2 -提供了基于 OpenGL 的游戏开发图形渲染功能

##### 0.4.2.3.3 -支持 GPU 加速，采用树形结构分层管理游戏对象类型

##### 0.4.2.3.4 -适用于 2D 专业级游戏开发

### 0.4.3 -Python 库之虚拟现实

#### 0.4.3.1 VR Zero:在树莓派上开发 VR 应用的 Python 库

##### 0.4.3.1.1 [https://github.com/WayneKeenan/python-vrzero](https://github.com/WayneKeenan/python-vrzero)

##### 0.4.3.1.2 Raspberry Pi(中文名为“树莓派"，简写为 RPi,(或者 RasPi / RPI)是为学习计算机编程教育而设计，只有信用卡大小的微型电脑，其系统基于 Linux。随着 Windows 10 IoT 的发布，我们也将可以用上运行 Windows 的树莓派。

##### 0.4.3.1.3 -提供大量与 VR 开发相关的功能

##### 0.4.3.1.4 -针对树莓派的 VR 开发库，支持设备小型化，配置简单化

##### 0.4.3.1.5 -非常适合初学者实践 VR 开发及应用

#### 0.4.3.2 pyovr: Oculus Rift 的 Python 开发接口

##### 0.4.3.2.1 [https://github.com/cmbruns/pyovr](https://github.com/cmbruns/pyovr)

##### 0.4.3.2.2 -针对 Oculus VR 设备的 Python 开发库

##### 0.4.3.2.3 -基于成熟的 VR 设备，提供全套文档，工业级应用设备

##### 0.4.3.2.4 -Python+虚拟现实领域探索的一种思路

#### 0.4.3.3 Vizard:基于 Python 的通用 VR 开发引擎

##### 0.4.3.3.1 [http://www.worldviz.com/vizard-virtual-reality-software](http://www.worldviz.com/vizard-virtual-reality-software)

##### 0.4.3.3.2 -专业的企业级虚拟现实开发引擎

##### 0.4.3.3.3 -提供详细的官方文档

##### 0.4.3.3.4 -支持多种主流的 VR 硬件设备，具有一定通用性

### 0.4.4 -Python 库之图形艺术

#### 0.4.4.1 Quads:迭代的艺术

##### 0.4.4.1.1 [https://github.com/fogleman/Quads](https://github.com/fogleman/Quads)

##### 0.4.4.1.2 -对图片进行四分迭代，形成像素风

##### 0.4.4.1.3 -可以生成动图或静图图像

##### 0.4.4.1.4 -简单易用，具有很高展示度

#### 0.4.4.2 ascii_art: ASCII 艺术库

##### 0.4.4.2.1 [https://github.com/jontonsoup4/ascii_art](https://github.com/jontonsoup4/ascii_art)

##### 0.4.4.2.2 -将普通图片转为 ASCII 艺术风格

##### 0.4.4.2.3 -输出可以是纯文本或彩色文本

##### 0.4.4.2.4 -可采用图片格式输出

#### 0.4.4.3 turtle:海龟绘图体系

##### 0.4.4.3.1 [https://docs.python.org/3/library/turtle.html](https://docs.python.org/3/library/turtle.html)

##### 0.4.4.3.2 Random Art![[Pasted image 20240217043957.png]]

## 0.5 玫瑰花绘制

### 0.5.1 顶层设计

#### 0.5.1.1 -需求：用 Python 绘制一朵玫瑰花，献给所思所念

#### 0.5.1.2 -输入：你的想象力！

#### 0.5.1.3 -输出：玫瑰花

# 1 编程不重要，思想才重要！

## 1.1 -认识自己：明确自己的目标，有自己的思想（想法）

## 1.2 -方式方法：编程只是手段，熟练之，未雨绸缪为思想服务

## 1.3 -为谁编程：将自身发展与祖国发展相结合，创造真正价值
