---
标题: "看了很多MCP文章还没懂？那是因为太官方！本文两分钟让你彻底理解MCP！"
笔记ID: HMCMF9C
笔记类型: page
星标: true
tags: 
  - 星标
域名: mp.weixin.qq.com
域名2: qq.com
作者: "AI不慌指南"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzU2NDYyODkwNg==&mid=2247483959&idx=1&sn=8c5fe649de26ba7534e23c50ffec3fa9&chksm=fd2fee0fdd6864d261e989ff7b852d89c6d28fae57507e3f7a6bb0e7e781ca389d5818ffe7da&mpshare=1&scene=1&srcid=0408xb9geUMaSIRNsGd1y0Od&sharer_shareinfo=5fec99c5962028fcbc161891b972a1d0&sharer_shareinfo_first=5fec99c5962028fcbc161891b972a1d0#rd"
五彩链接: "https://marker.dotalk.cn/#/?nx=HMCMF9C&vs=1"
划线数量: 0
创建时间: 2025-04-08 21:58
更新时间: 2025-04-08 21:59
---

## 看了很多MCP文章还没懂？那是因为太官方！本文两分钟让你彻底理解MCP！ 
[[星标]]

## 页面笔记


## 划线列表

## 全文剪藏
MCP（Model Context Protocol） 是什么？很多文章祭出这张官方架构图开讲，看完可能也不知道是个啥，本文抛开技术讲使用，三个问题让你两分钟彻底理解 MCP。

![](https://g1proxy.wimg.site/sdaZBcPcmS11DcWCAwcxDEnw9kgwPS3UHm-THd2eM0Bc/https://mmbiz.qpic.cn/mmbiz_png/02vwMrk0iaSV8dFaibMic3qkvHK3jRwrpco0sxhFFEIFNib2QfX5rU6DXz2Hz6aiccYRpbVt7jfWibMG01iaqxic0yE6tw/640?wx_fmt=png&from=appmsg)

对于无技术背景的人来讲，MCP 广义上来说，是通过AI对话可以自动执行各种工具来完成你想法的智能体。

注：官方的定义是模型上下文协议，来制定大模型和工具交互的协议标准。这点我们在使用上无需过多关注。

比如，将哪吒2饺子画的破亿海报全部收集起来生成一个PDF文档，如果我们手动去做，将会是：

1. 搜索、阅读、挑选哪吒2的破亿海报
2. 一张一张的将海报图片保存到电脑上
3. 创建文档，保存文案和插入图片，然后生成PDF文件

如果使用 MCP 呢？只需要在输入框中一句话：”微博搜索哪吒之魔童闹海电影破亿海报，保存文案和图片做个PDF文档”。MCP会先拆分任务，调用浏览器工具解析微博推文，保存图片到你的电脑上、创建 Markdown 文件，转换成PDF文件。如笔者使用 MCP 自动执行任务的截图如下：

![](https://g1proxy.wimg.site/s7oprc1zr3fYYKuJPj3o8B9M1P4p_K58acIdy6L-zne4/https://mmbiz.qpic.cn/mmbiz_png/02vwMrk0iaSV8dFaibMic3qkvHK3jRwrpco089hqPiaWlxvvwqGHsvRtKNuC2Q0tfEFDjenEBicgticJRAXzuibEmxZJQ/640?wx_fmt=png&from=appmsg)

部分执行视频如下：

嘿！有意思，可以看到，MCP 可以自己完成任务。这不妥妥的个人助理嘛：给它分配好任务，它来自己思考，自己使用工具或者编写脚本，操作你的电脑来完成任务。

那么就有疑问了：

1. 我们在哪给 MCP 分配任务？
2. MCP 怎么知道如何完成任务？
3. MCP 去哪找工具来完成任务？

接下来通过这三个问题来彻底理解如何使用 MCP。

---

在哪给 MCP 分配任务？

我们需要在电脑上安装一个具有输入框的客户端，来给 MCP 分配任务，这个客户端就是官方所谓的 MCP Host（暂时也可以理解为 MCP Client）。部分 Host 列表如下，笔者使用的是 Cline，比较推荐，国内可以使用。官方自己的是 Claude Desktop（但国内无法访问）。

![](https://g1proxy.wimg.site/sP9FmanOQFnbFCFvq8mHdDqs8rQDbdR3LFkqB4lNtxaU/https://mmbiz.qpic.cn/mmbiz_png/02vwMrk0iaSV8dFaibMic3qkvHK3jRwrpcoL8RX33Yn7gLibbfiaS3kaxeBYQOAmEsoU5CXa2nGgiar4g7b8bbIPPjhw/640?wx_fmt=png&from=appmsg)

### MCP 怎么知道如何完成任务？

我们需要给上面的客户端接入大模型，使其可以对任务进行拆分。在上述已安装的 Host 中进行配置，比如笔者配置的是阿里云的千问大模型（有大量的免费额度）。

![](https://g1proxy.wimg.site/scJATV0pPmUWyT1c06TN0m2M29R5iB_TKlJ6N7FXwTT8/https://mmbiz.qpic.cn/mmbiz_png/02vwMrk0iaSV8dFaibMic3qkvHK3jRwrpcoBR5yclQCiaw5Z1WVpK2icvtGic7rOVgQSl6daS919mlzOcBnuAUBibQ08Q/640?wx_fmt=png&from=appmsg)

## MCP 去哪找工具来完成任务？

我们需要在客户端上注册工具，让大模型可以找到这些工具来执行，这个注册工具就是官方所谓的 MCP Server。注册工具的方式也非常简单，可以在 MCP Servers插件中直接安装，如下图：

![](https://g1proxy.wimg.site/s9yg-DoL4m_t36v7TsnQvG4pGbIkf70nPxwcxZBrSWe0/https://mmbiz.qpic.cn/mmbiz_png/02vwMrk0iaSV8dFaibMic3qkvHK3jRwrpcoset3X6uJrUDRa8mxHfx0kHgVRl1Qg10UhW0icPXzPOYw1K0wnTwIx1w/640?wx_fmt=png&from=appmsg)

或者直接在输入框中输入，让大模型给你自动安装。

![](https://g1proxy.wimg.site/s6qrtlqNHYrpxyMZxjK1bg7j0ul1XvbQe7CiiypHOzFc/https://mmbiz.qpic.cn/mmbiz_png/02vwMrk0iaSV8dFaibMic3qkvHK3jRwrpconibpgsfrHko1gqsGsrl6ZxVnym46vndM9P4oicw5bDDuNnDRajFV1cIg/640?wx_fmt=png&from=appmsg)

做完上述三步，恭喜你，MCP 大功告成，你已经彻底理解了MCP。可以通过扩展工具（MCP Server），来给你的“小助理”增强更多的能力。

那么去哪找客户端（MCP Host/Client）和 工具（MCP Server）呢？

---

## 让你更好地使用 MCP！

## 官方提供的 MCP Servers 库：

## https://github.com/modelcontextprotocol/servers

![](https://g1proxy.wimg.site/siblz2JLDLGd2G7DmgXWYY7Y7V9cGdsFOCVS5shxFjpA/https://mmbiz.qpic.cn/mmbiz_png/02vwMrk0iaSV8dFaibMic3qkvHK3jRwrpcorH3N7lN3FGxMRGpvfyzaXJ8bIzT37gT27fYpFKHL4p4OBuEpMiakkuQ/640?wx_fmt=png&from=appmsg)

## 其他 MCP Hub 网站如下：

## PulseMCP：https://www.pulsemcp.com/

![](https://g1proxy.wimg.site/sbWP9hBwz-14Nigk0H-wj4b6Mb2BYJxlu0VCsnkY_tSc/https://mmbiz.qpic.cn/mmbiz_png/02vwMrk0iaSV8dFaibMic3qkvHK3jRwrpcoEOiamUr3jpY9u5kBHyiaazvK5fqnkCELzkJrNRj4D3lcMerwn1JGWkkg/640?wx_fmt=png&from=appmsg)

## mcp.so：https://mcp.so

![](https://g1proxy.wimg.site/sHU9zUNUpaifIMJ1vv_64O8mMRjvxiq_fpr-rxApGyjE/https://mmbiz.qpic.cn/mmbiz_png/02vwMrk0iaSV8dFaibMic3qkvHK3jRwrpcoQ9rVpUZNTE7sxuj7Mh1T8K3ibB2icia1b9spha5GYiabTLnkzyGy9sVuQQ/640?wx_fmt=png&from=appmsg)

## 如果这些工具都满足不了你的需求

## 那么可以自己10分钟通过AI写个工具

## 点击关注，后续介绍，亲手打造个人助理。

---

☟☟☟

欢迎关注AI不慌指南，解读AI前沿资讯，分享AI普惠知识

消除焦虑，拥抱AI 😄
