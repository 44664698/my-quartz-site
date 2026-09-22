---
标题: "Python函数调用的9大方法，鲜为人知"
笔记ID: H87AAC2
笔记类型: page
星标: false
tags: 
域名: mp.weixin.qq.com
域名2: qq.com
作者: "哈希编程"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzkwMzYxODY0Mg==&mid=2247483998&idx=1&sn=10a3c13d175955c9f5a62a990c29ec0c&chksm=c092cb63f7e54275b616760093da828afe4bef645151d053a04672d201fd78ea97fee8b3d7d4&mpshare=1&scene=24&srcid=0218WUZqr5AGDWA2IDjCYLFo&sharer_shareinfo=7095bd800d70d6a458660a3180b8b5db&sharer_shareinfo_first=7095bd800d70d6a458660a3180b8b5db#rd"
五彩链接: "https://marker.dotalk.cn/#/?noteidx=H87AAC2"
划线数量: 0
创建时间: 2024-02-19 17:54
更新时间: 2024-02-19 18:07
---

## Python函数调用的9大方法


## 页面笔记


## 划线列表

## 全文剪藏
原创  pythontip  哈希编程 

> 分享调用函数的9种方法：`getattr`, `partial`, `eval`, `__dict__`, `globals`, `exec`, `attrgetter`, `methodcaller`, 和 `__call__`。其中一些函数调用方法，在函数式编程或元编程场景中大量使用。相信你在今后的学习或工作中会遇到！

![](https://g1proxy.wimg.site/sZVbGgMabPpXoKIHUs_7KLC6sICTB76ouHuL1LtwR2us/https://mmbiz.qpic.cn/mmbiz_png/1T16jHpb3hvwNBKjsSC84RWJPPdvqSNajpSbbythv7xlw497oiadEFJyguicYwIVenvCIwNGZtoh60pY5RlJr5MQ/640?wx_fmt=png&from=appmsg)

## 1\. 直接调用函数（`__call__`）

最简单最直接的使用方法：

`def func():  
    print('Hello, world!')  
func() # Hello, world!

func.__call__() # 一样的

`

## 2\. partial 函数

在python的内置库`functools`中有一个`partial`函数，可以让我们可以把一个函数的一部分参数填入，然后调用。看起来没什么用，遇到的时候有大用。😊😊

`from functools import partial  
# 请仔细品！  
def func(domain, user):  
    echo = f"Hello, {user}@{domain}!"  
    print(echo)

func_userA = partial(func, user="userA")  
func_userB = partial(func, user="userB")  
func_userA("example.com") # Hello, userA@example.com!  
func_userB("example.com") # Hello, userB@example.com!

`

## 3\. eval 函数

如果需要动态执行函数，可以使用 `eval` 来执行动态代码。

`import sys  
def pre_task():  
    print("running pre_task")

def task():  
    print("running task")

def post_task():  
    print("running post_task")

cmdList = ["pre_task()","task()","post_task()"]  
for cmd in cmdList:  
    eval(cmd) # 执行函数  
# running pre_task  
# running task  
# running post_task

`

## 4\. getattr 函数

运行类中的静态方法

`import sys

class Task:  
    @staticmethod  
    def pre_task():  
        print("running pre_task")

    @staticmethod  
    def task():  
        print("running task")

    @staticmethod  
    def post_task():  
        print("running post_task")

# ⚠️ 没有括号的字符串。  
cmdList = ["pre_task", "task", "post_task"]

task = Task()

for cmd in cmdList:  
    func = getattr(task, cmd)  
    func()

`

## 5\. **dict** 方法

首先我们需要知道，每个python对象都有一个内置的`__dict__()`方法，这个方法返回一个字典，包含了对象的所有属性。如下图，我们可以看到list的`__dict__()`方法返回的所有属性，其中红框内的，你是否有些熟悉？

![](https://g1proxy.wimg.site/szdpblwkBqAI37BEspSXji8GfNBH7QoHDBj0lOCC0qFU/https://mmbiz.qpic.cn/mmbiz_png/1T16jHpb3hvwNBKjsSC84RWJPPdvqSNaKPQvlBvPqCia5QEN5oKnXRibcKaoRdBiaM9Jpe61hUF2URTfAVgpc9jYQ/640?wx_fmt=png&from=appmsg)

2

`class Task:  
    @staticmethod  
    def pre_task():  
        print("running pre_task")

    @staticmethod  
    def task():  
        print("running task")

    @staticmethod  
    def post_task():  
        print("running post_task")

func = Task.__dict__.get("pre_task")  
func.__func__() # running pre_task  
func() # 为什么不这样用？

`

## 6\. globals 函数

`import sys

def pre_task():  
    print("running pre_task")

def task():  
    print("running task")

def post_task():  
    print("running post_task")

cmdList = ["pre_task", "task", "post_task"]

for cmd in cmdList:  
    func = globals().get(cmd)  
    func()  
# running pre_task  
# running task  
# running post_task

`

## 7\. exec 函数

你可以在一个字符串中定义你的函数，并使用compile函数将它编译成字节码，然后使用exec来执行它。

`# 方式1  
pre_task = """  
print("running pre_task")  
"""  
exec(compile(pre_task, '', 'exec'))  
# running pre_task

# 方式2  
with open('./source.txt') as f:  
    source = f.read()  
    exec(compile(source, 'source.txt', 'exec'))

`

## 8\. attrgetter 函数

在内置库`operator`中，有一个获取属性的方法，叫做`attrgetter`，我们可以通过它获取函数后执行。

`from operator import attrgetter

class People:  
    def speak(self, dest):  
        print("Hello, %s" %dest)

p = People()  
caller = attrgetter("speak")  
caller(p)("Tony") # Hello, Tony  
# 本文第四条  
caller2 = getattr(p, "speak")  
caller2("Tony") # Hello, Tony

`

## 9\. methodcaller 函数

`from operator import methodcaller

class People:  
    def speak(self, dest):  
        print(f"Hello, {dest}")

caller = methodcaller("speak", "Tony")  
p = People()  
caller(p)

`

## 小节

总结下，本文分享了使用函数的9种方法：`getattr`, `partial`, `eval`, `__dict__`, `globals`, `exec`, `attrgetter`, `methodcaller`, 和 `__call__`。

请仔细品味，思考下他们的使用场景。其中一些函数调用方法，在函数式编程或元编程场景中大量使用。相信你在今后的学习或工作中会遇到！

欢迎大家点赞、收藏、支持！

**pythontip** 出品，Happy Coding！
