---
标题: "Python爬虫可视化大屏项目居然如此简单！原来都是这样做到的！！"
笔记ID: H873B76
笔记类型: page
星标: false
tags: 
域名: mp.weixin.qq.com
域名2: qq.com
作者: "程序猿代码之路"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzkxNDI5NzEwMA==&mid=2247484512&idx=1&sn=13ce8361a37caf87ab0104924e20a09b&chksm=c171dc03f6065515943730a8595401052c37e281fbd89ebe810b9d117687089797dd6e4eda89&mpshare=1&scene=1&srcid=0221exCqHFZKgPRk36aYFZsP&sharer_shareinfo=b81b3226912cfbeb7d490503eee3af82&sharer_shareinfo_first=b81b3226912cfbeb7d490503eee3af82#rd"
五彩链接: "https://marker.dotalk.cn/#/?noteidx=H873B76"
划线数量: 0
创建时间: 2024-02-21 08:57
更新时间: 2024-02-21 08:59
---

## 0.1 Python爬虫可视化大屏项目居然如此简单！原来都是这样做到的！！ 


## 0.2 页面笔记


## 0.3 划线列表

## 0.4 全文剪藏
原创 程序猿代码之路  程序猿代码之路 

目前的可视化大屏基本上是千篇一律，大家只要参考着做基本就能快速入手！！并且还有着配套的可视化大屏模板使用，只要参考就一定可以自己弄出来的。

这是前端模板：[Echarts可视化大屏模板](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkxNDI5NzEwMA==&mid=2247483996&idx=1&sn=1cafbed9d356ec948ecb21d514f7957b&chksm=c171da3ff606532954515f6d8a4d321945f9240016bfa390700edb58b520fe0ca96bb9895fe2&scene=21#wechat%5Fredirect)

若想要用Python代码写后端并且爬取相关数据进行清理然后保存进入数据库，用Echarts做可视化图表的话，大家完全可以参考以下这个项目来做。

## 0.5 开源啦！

****一、平台简介**

COVID-19-Django **国内疫情大数据可视化平台**主要是为了更直观地实时关注和掌握新型冠状病毒感染的肺炎疫情防控进展，也更直观地了解全国的疫情情况，及时有效做出防控措施，在数据可视化技术的解决下，数据信息所面向的不仅是决策者，也能向大众进行授权展示，我们可以通过大数据可视化，可以更清楚、更直观地了解到目前疫情全国各地的感染人数，以此了解疫情的变化的趋势。

本系统采用Django架构开发web应用，使用Echarts绘制基本图表，利用Python语言中的requests库从一些新闻网站上爬取疫情数据下来清洗然后存储在MySQL中，实现了永久保存数据，以及实时更新数据，不仅方便，而且还能保证数据的安全性。

💡 COVID-19-Django 基于Django的国内疫情可视化平台， 目前已开源，可免费学习使用，若分享转载请注明出处，谢谢。

* 🧑‍🤝‍🧑前端采用Echarts 、Jquery、Ajax、HTML、CSS、。
* 💡后端采用 Python 语言 Django 框架。

## 0.6 ****二、** **内置功能**

👨‍⚕️用户登录：用户登录和注册功能。

👩‍⚕️数据爬取：数据爬取脚本GetData.py和SaveMysqlData.py，直接将疫情数据爬取到MySQL数据库中。

 数据更新：数据重新爬取并且更新数据。

👨‍🎓疫情可视化大屏：从MySQL数据库将数据取出并且整理将其用来做数据可视化。

****三、详细结构**

`- covids19 项目名字` `    - connect.py 数据库配置相关` `    - GetData.py Python数据爬虫相关` `    - indexdata.py 数据封装相关` `    - SaveMysqlData.py 将爬取的数据保存到MySQL数据库` `    - settings.py 很重要，整个项目的启动，由配置文件决定` `    - urls.py 路由（总路由）` `    - views.py 视图函数（重点）` `    - wsgi.py wsgi服务器的配置` `- static 静态资源存放路径` `- templates 模板文件（一个一个的html），pycharm创建出来才有这个文件夹` `- venv 项目虚拟环境管理` `- covid-19.sql 数据库里面的数据表` `- manage.py 启动项目，创建app，各种命令的操作` `- requirements.txt 项目运行需要的依赖`

## 0.7 ****四、准备工作**

`Python >= 3.8.0 (推荐3.8+版本)` `Mysql >= 5.7.0 (可选，默认数据库sqlite3，推荐8.0版本)` `PyCharm >= 2021` `操作系统 (推荐Windows10版本)`

## 0.8 ****五、运行准备♝**

`--1.在MySQL数据库中新建数据库covid-19` `  
` `--2.将covid-19.sql文件中的数据导入到数据库中` `  
` `--3.安装依赖环境` `pip install -r requirements.txt` `  
` `--4.更换数据库密码` `--进入connect.py和settings.py文件修改下` `  
` `--connect.py` `conn = Connect(user="root",` `                   password="000000",` `                   host="127.0.0.1",` `                   database="covid-19",` `                   port=3306,` `                   charset="utf8", )` `--settings.py` `DATABASES = {` `    'default':` `    {` `        'ENGINE': 'django.db.backends.mysql',    # 数据库引擎` `        'NAME': 'covid-19', # 数据库名称` `        'HOST': '127.0.0.1', # 数据库地址，本机 ip 地址 127.0.0.1` `        'PORT': 3306, # 端口` `        'USER': 'root',  # 数据库用户名` `        'PASSWORD': '000000', # 数据库密码` `    }` `}` `  
` `--5.启动项目` `python3 manage.py runserver 0.0.0.0:8000`

### 0.8.1 ****六、访问项目**

* 访问地址：http://localhost:8000 (默认为此地址，如有修改请按照配置文件)
* 账号：admin 密码：admin

## 0.9 ****七、演示图✅**

![](https://g1proxy.wimg.site/sSg3uiB9DHtxpOXhFEUtk2Xw3kSraZsipK35yaIZTYCk/https://mmbiz.qpic.cn/mmbiz_png/ibibRb6TL2bRuuXIx9AfVPzxbFkXzia6q2yBmoo2GR79HiaEYFfKgDYnPBCicEpic6Vp6FhdhESiaeKBmyvRLaJn9Uglw/640?wx_fmt=png&from=appmsg)

![](https://g1proxy.wimg.site/sTDM95oPalVlHQb1Md3tGfmqOIEdjl4TEIppoPeLHCKE/https://mmbiz.qpic.cn/mmbiz_png/ibibRb6TL2bRuuXIx9AfVPzxbFkXzia6q2yrUpUicHYB6bziaXjVrb0ibyGpODNNDicZmevl2vm7ia1hyenaXyyJziaHnjw/640?wx_fmt=png&from=appmsg)

![](https://g1proxy.wimg.site/sUs3vSvO1PzLg3QyOEw-l7JFj6i6vEBQhJcNpsWOE1cE/https://mmbiz.qpic.cn/mmbiz_jpg/ibibRb6TL2bRuuXIx9AfVPzxbFkXzia6q2y6rYpyQUVXZhSANzw9wQVD0Ieicslb1OvyWXyOcpwKypLyB9ZmtVjWiag/640?wx_fmt=jpeg&from=appmsg)

![](https://g1proxy.wimg.site/s_I3Nk_6GEtGU71BRLRXKDraQSp4UAhgMshm2L-E0UCw/https://mmbiz.qpic.cn/mmbiz_jpg/ibibRb6TL2bRuuXIx9AfVPzxbFkXzia6q2ypz3dO2ycsrHW7NsMoG6TRgkb1UqtUibZJicK1YUmnPmQ2ib0ROIRqsTBw/640?wx_fmt=jpeg&from=appmsg)

![](https://g1proxy.wimg.site/s9hmvzo_GD7q8Qn5T-2byVCYvqu1bcV_5nepRtB6sDDU/https://mmbiz.qpic.cn/mmbiz_jpg/ibibRb6TL2bRuuXIx9AfVPzxbFkXzia6q2yibrfQFJOesvSqXfJtnyNVgbIlMkx7YjdWp00ue0V1dTXJ5rbibCXichMg/640?wx_fmt=jpeg&from=appmsg)

![](https://g1proxy.wimg.site/svDy592J5m2bGJ2tMZsvCzJZz0sNO7OtY93QpzpiQE3A/https://mmbiz.qpic.cn/mmbiz_png/ibibRb6TL2bRuuXIx9AfVPzxbFkXzia6q2yGbhqmibEtqwYCegwjM9GicpWObNvbicbNZVxmrLViafuc34cmSfCHdZ4HA/640?wx_fmt=png&from=appmsg)

![](https://g1proxy.wimg.site/s4aUJfr_l817PiqzOgAkcG3rbaGIpS_kG4cpEcMXfa5U/https://mmbiz.qpic.cn/mmbiz_png/ibibRb6TL2bRuuXIx9AfVPzxbFkXzia6q2yI3TLHA0Wjbmj6Pppqic4KSwvPmTGvibSQzfeVr4yFE7MxGzptbmKKRgQ/640?wx_fmt=png&from=appmsg)

![](https://g1proxy.wimg.site/sJaznEI5JjWjWhrfzXnSv4BxUkZoo9F8qBZoVH2QOZYE/https://mmbiz.qpic.cn/mmbiz_png/ibibRb6TL2bRuuXIx9AfVPzxbFkXzia6q2yYXIPbWu199tr2VsBvuP068kVkTiaSIktv4hJIK6AjxyyRmjVdOaAAuA/640?wx_fmt=png&from=appmsg)

![](https://g1proxy.wimg.site/sBTdK2Se7nPWN1qMcs3y0IaE0lMo8l_mDO7j4aNC3vE8/https://mmbiz.qpic.cn/mmbiz_png/ibibRb6TL2bRuuXIx9AfVPzxbFkXzia6q2ymQIWQNIlJgywrCV0Nh9AibVCCy07vJD3DWeF2sBCQwN9HFO3GJibt5qA/640?wx_fmt=png&from=appmsg)

## 0.10 ****八、后续打算✅**

👨‍⚕️疫情数据后台管理：用来管理疫情数据信息以及爬虫脚本信息。

👩‍⚕️加入Redis技术：优化可视化大屏查询数据时间。

👨‍🎓增加kafka技术：将爬取到的数据写入kafka之后，再去消费数据，无论是将数据清洗之后存入数据库中或者是将数据拿出来进行一些监测。

****九、源码地址**  

****系统源码的获取，扫码关注，后台回复：** **疫情可视化平台Python**

或者去gitee或者github地址下载即可！！！

gitee地址(主推)：https://gitee.com/Heng-Xiao/covid-19-django👩‍👦‍👦

github地址：https://github.com/Heng-Xiao/covid-19-django👩‍👦‍👦
