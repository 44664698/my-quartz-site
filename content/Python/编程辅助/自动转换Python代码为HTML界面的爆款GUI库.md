---
标题: "推荐一款自动转换Python代码为HTML界面的爆款GUI库！"
笔记ID: H87AE93
笔记类型: page
星标: false
tags: 
域名: mp.weixin.qq.com
域名2: qq.com
作者: "测试开发技术"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzA4NDUyNzA0Ng==&mid=2247498586&idx=1&sn=570bf4633ab54e3ddd92739d10734d59&chksm=9fe769f3a890e0e53accea6ad5a4917971465b60efa2b7fc8c7ac1cba2794a4a06696c7f53c8&mpshare=1&scene=1&srcid=0220pBWGaQuaEfkK4vFah6zK&sharer_shareinfo=05419553bcbc02b4617925ea8c1b5523&sharer_shareinfo_first=05419553bcbc02b4617925ea8c1b5523#rd"
五彩链接: "https://marker.dotalk.cn/#/?noteidx=H87AE93"
划线数量: 0
创建时间: 2024-02-20 07:52
更新时间: 2024-02-20 07:53
---

## 0.1 推荐一款自动转换Python代码为HTML界面的爆款GUI库！ 


## 0.2 页面笔记


## 0.3 划线列表

## 0.4 全文剪藏
原创  狂师  测试开发技术 

![](https://g1proxy.wimg.site/srP2k_MOVvM2aGGEzwOtZoN4mL7U3GMDI4kax98qwZ-4/https://mmbiz.qpic.cn/mmbiz_jpg/k2FwYYrGoDkxAUgpNP7xEVwSYTPYTI6m3XgHVbmAb3FWfO1OARUibINzGeyibcawIsibUiakq0G5Z63cZ1du5qhQog/640?wx_fmt=jpeg&from=appmsg)

Python是一款高级编程语言，支持许多第三方库和框架，今天就给大家推荐流行的GUI库：`remi`。

## 0.5 1、介绍

Remi是一个用于创建Python应用程序的GUI库，它的界面在Web浏览器中进行渲染。它可以帮助开发者创建跨平台的GUI应用，而无需编写HTML代码。且自动将你的Python代码转换为HTML，并在应用启动时启动一个Web服务器，使得可以在本地或远程网络上访问它。

## 0.6 2、特点、优势

remi具有以下主要特性：

* 基于Python：Remi是一个Python库，充分利用了Python的简洁和易读性，使得开发过程更加高效。
* GUI框架：Remi提供了一个简单的GUI框架，可用于创建基于Web的用户界面，包括按钮、文本框、下拉菜单等常见的UI组件。
* WebSockets支持：Remi支持WebSockets协议，使得实时通信和数据更新变得更加容易。
* 服务器端推送事件（SSE）支持：Remi还支持服务器端推送事件（SSE），可用于向客户端推送实时数据和通知。
* 跨平台性：Remi可以在大多数现代Web浏览器中运行，包括Chrome、Firefox、Safari等，而且不需要安装额外的插件或扩展。
* 轻量级：Remi是一个轻量级的工具，不需要复杂的设置或依赖，可以快速部署和运行。

整的来说，Remi是一个用于在Python中创建Web应用程序和用户界面的工具，它提供了一个简单的GUI框架，可以通过Python代码来创建Web界面。利用Remi，开发者可以使用Python代码来定义用户界面的结构、样式和交互逻辑，而不需要直接编写HTML。无需深入了解HTML和JavaScript。通过Remi，开发者可以使用Python的简洁和易读性来构建Web界面，这使得创建Web应用程序变得更加容易和高效。

## 0.7 3、安装和使用Remi

要使用Remi，您需要安装它：

`pip install remi  
`

安装完成后，您可以开始使用Remi创建GUI应用程序。下面是一个简单的示例代码：

`import remi.gui as gui  
from remi import start, App

class MyApp(App):  
    def __init__(self, *args):  
        super(MyApp, self).__init__(*args)

    def main(self):  
        # 创建一个按钮  
        btn = gui.Button("点击我")

        # 定义按钮的点击事件处理函数  
        def on_button_pressed(widget):  
            widget.set_text("我被点击了！")

        # 将按钮的点击事件与处理函数绑定  
        btn.set_on_click_listener(on_button_pressed)

        # 将按钮添加到应用程序的根部件中  
        self.main_container.append(btn)

        # 返回根部件  
        return self.main_container

# 启动应用程序  
start(MyApp)

`

在这个示例中，我们创建了一个简单的应用程序，其中包含一个按钮。当按钮被点击时，它会改变自己的文本内容。这个示例演示了如何使用Remi来创建基本的用户界面和交互逻辑。

如果需要创建一个复杂的用户界面，您可以使用Remi提供的各种组件和布局来构建您的界面。下面是一个示例，演示如何使用Remi创建一个包含多个组件和布局的用户界面：

`import remi.gui as gui  
from remi import start, App

class MyApp(App):  
    def __init__(self, *args):  
        super(MyApp, self).__init__(*args)

    def main(self):  
        # 创建一个垂直布局  
        vbox = gui.VBox(width=400, height=300)

        # 创建一个标签  
        label = gui.Label("全栈测试开发技术")

        # 创建一个文本框  
        text_box = gui.TextInput(width=200, height=30)

        # 创建一个按钮  
        btn = gui.Button("点击我")

        # 创建一个水平布局  
        hbox = gui.HBox(width=400, height=50)

        # 定义按钮的点击事件处理函数  
        def on_button_pressed(widget, event):  
            label.set_text(text_box.get_value())

        # 将按钮的点击事件与处理函数绑定  
        btn.onclick.connect(on_button_pressed)

        # 将标签、文本框和按钮添加到垂直布局中  
        vbox.append(label)  
        vbox.append(text_box)  
        vbox.append(btn)

        # 将垂直布局添加到水平布局中  
        hbox.append(vbox)

        # 创建一个图像  
        img = gui.Image("https://www.python.org/static/community_logos/python-logo-master-v3-TM.png", width=100, height=100)

        # 将图像添加到水平布局中  
        hbox.append(img)

        # 返回水平布局  
        return hbox

# 启动应用程序  
start(MyApp)

`

在这个示例中，我们创建了一个复杂的用户界面，其中包含一个标签、一个文本框、一个按钮和一个图像。当按钮被点击时，标签的文本将会被设置为文本框中的值。

运行以上代码后，Remi会自动启动一个Web服务器，并在浏览器中显示您的GUI应用程序。

![](https://g1proxy.wimg.site/s7smnseV-btZ-GcTbwQqgyqv3z1FOzh12Wpka7RkBcHI/https://mmbiz.qpic.cn/mmbiz_png/k2FwYYrGoDkxAUgpNP7xEVwSYTPYTI6m86HeGEthPZwZ3Nlqs4YvWZ2eqR19pY4mmZ3hQvZ4lNQuJDZaYYI3iaQ/640?wx_fmt=png&from=appmsg)

image

您可以通过访问http://localhost:21109来访问应用程序。

## 0.8 4、总结

Remi是一个强大且方便的Python GUI库，它可以在Web浏览器中渲染应用程序的界面。由于界面是在Web浏览器中渲染的，Remi应用可以在各种操作系统上运行，包括Windows、macOS和Linux。

这使得开发者可以使用相同的代码和界面在不同的平台上部署和使用他们的应用程序，减少了开发和维护的工作量。

由于Remi自动将Python代码转换为HTML，简化了界面的开发过程。无论是初学者还是有经验的开发者，都可以通过Remi轻松创建功能丰富的跨平台GUI应用。

如果觉得有用，就请关注、点赞、在看、分享到朋友圈吧！  

推荐阅读：

1. [重磅消息 | 2023年最新全栈测试开发技能实战指南V2.0（第4期）](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzA4NDUyNzA0Ng==&mid=2247496800&idx=1&sn=cd5ca80c855a3484953c2e0411c73b70&chksm=9fe766c9a890efdf9b8d71cc211324d0e2f80e2f936e5b6e8b3e402325a7a992d111dbe4cb9b&scene=21#wechat%5Fredirect)
2. [史上最全测试开发工具推荐（含自动化、APP性能、稳定性、抓包神器）](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzA4NDUyNzA0Ng==&mid=2247489864&idx=1&sn=0f671ef6d8e3d16c47cd497d857b4f5c&chksm=9fe48be1a89302f78a74c4b168713763dd02e4f94c1a07d2300d3783d0950e9cb3d0d6e7a59d&scene=21#wechat%5Fredirect)
3. [推荐几款常用测试数据自动生成工具（适用自动化测试、性能测试）](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzA4NDUyNzA0Ng==&mid=2247497383&idx=1&sn=1d77d38b282381f1ae3334e78d9fa88f&chksm=9fe7640ea890ed183a7ed8c1f73ff1f2b139de3d1465dd22a06d61c99a46bf32ea418a695eeb&scene=21#wechat%5Fredirect)

END

![](https://g1proxy.wimg.site/sDqzz9CQVCCTeEKzjO_snj5nLm_Yhd4ze6qiCnALjHYQ/https://mmbiz.qpic.cn/mmbiz/wyice8kFQhf5geQK3gu2FUugjB8iaSGpjOnSiczzq38D7R4gn4vsiaPmyCFCC0XvrfX7RePCX7N7WJicx5D1LDLYklw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

所有原创文章

第一时间发布至此公众号「测试开发技术」

![](https://g1proxy.wimg.site/smpj1vh23j3oBctXwuzqG9OmoPR44JpndQbcTVRZTXe4/https://mmbiz.qpic.cn/mmbiz_jpg/k2FwYYrGoDkhbOPPUeDxMLtUznh9RyshUe1QFw10Ll9yoTOHicMT69cJGbsgcnYbiaKFiaia8YuffMj8sOkG4wyNDg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

长按二维码/微信扫码 添加作者
