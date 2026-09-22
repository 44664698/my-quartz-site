---
标题: "为了写好 Python 库之旅，我爬了 52 万个 Python 库"
笔记ID: H8DA652
笔记类型: page
星标: false
tags: 
域名: mp.weixin.qq.com
域名2: qq.com
作者: "管窥程序"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzI4MzMyNjQwMw==&mid=2247487073&idx=1&sn=9037cb29b5347c3bf0466f0180a1a60a&chksm=eb8d2ccddcfaa5db23a7795f882bbceea16e7278dc344c4e779431e775126685e0661ea7dad9&mpshare=1&scene=1&srcid=0313nDig6SpTJKFv17JHF2q1&sharer_shareinfo=037485770a7095d132fe935daa72d32b&sharer_shareinfo_first=037485770a7095d132fe935daa72d32b#rd"
五彩链接: "https://marker.dotalk.cn/#/?noteidx=H8DA652"
划线数量: 0
创建时间: 2024-03-13 12:20
更新时间: 2024-03-13 12:22
---

## 0.1 为了写好 Python 库之旅，我爬了 52 万个 Python 库 


## 0.2 页面笔记


## 0.3 划线列表

## 0.4 全文剪藏
原创 晓飞的李  管窥程序 

> [**Python 库之旅**](https://mp.weixin.qq.com/mp/appmsgalbum?%5F%5Fbiz=MzI4MzMyNjQwMw==&action=getalbum&album%5Fid=3270934118536822790#wechat%5Fredirect) 已经持续一段时间了，在这个过程中，收到了许多读者朋友的好评与支持。在此，我要**衷心感谢，每一位读者朋友的支持与厚爱**。

## 0.5 起初

说实话，我在工作中使用，甚至算上遇到的 Python 库相对来说是比较少的。

在开始写 Python 库之旅系列文章时，还可以从自己了解的、知道的库中选择，但时间一长，坐吃山空。

为了继续给读者介绍更多优质的库，我找遍了 CSDN，知乎，博客园等平台，确实找了一些被整理好的 Python 库列表。

但除了常见的，想按照**易用性**、**趣味性**、**高效性**和**灵活性**去找很难。要么一些库太新未被收录，要么有很多库年久失修。选用了一些之后，还是无法解决写作素材问题。

于是重新打量起了 Pypi —— 这个世界上最全的 Python 库仓库、pip 安装命令的默认源。

Pypi 一共收纳了 52 万多个 Python 库，无论如何，符合我们要求的库一定包含其中。

其实，很早前我想过从这里找，但畏惧于它的浩如烟海，加上有其他选择，就绕走开了。这次，没了退路。

## 0.6 爱你，不容易

> 只要是网上的数据，对于一个程序员来说，获取就如探囊取物。

都不用什么复杂技术，用 requests 库，写个小脚本就搞定了。

![](https://g1proxy.wimg.site/suaUpWB9Q-hOmC2zszVf_XCQ7yPQu5ZYp7awqQgvxS3I/https://mmbiz.qpic.cn/mmbiz_gif/HLK6tODE9a7wUSDRL74Y0GUM7YuGXbcpAISaCb25a0hRNCg5D1OKxIkriaeS9wq6HTFGPichyu3uY6TgACYlfulw/640?wx_fmt=gif&from=appmsg)

获取 Python 库

不过还是那句话，**爬虫好写，数据难洗**。

52 万多个内容，鱼龙混杂 —— 什么数据缺失、前后矛盾、挂羊头卖狗肉等情况比比皆是。

更挠头的是，存在有大量的练习用的 “**假库**”！

你听说过用纯数字命名的库吗？00000

还有某个框架下大量的插件库，比如 django ，odoo 等等，大量的无效库。

在爬去的过程中，还可能遇到被封 IP，处理中断，数据提取无效等问题。

如果说获取数据是个技术活，想想办法总能解决或者绕过，当拿着几十万个库，从中找出符合要求的却如大海捞针。

## 0.7 理解与包容

未了方便筛选，就必须对每个库做评判，打分，而这就涉及到了对每个库的理解。

你一定会想到用 ChatGPT ，对这是个好方法，ChatGPT 确实能了解大部分知名甚至不太知名的 Python 库。

但有更多的库 ChatGPT 也不了解，要么太小众，没有被做为学习语料，要么比较新，训练时还没有。

另外如此多的库，就算每个都能让 ChatGPT 评判，就必须使用 OpenAI 的 API，你知道的 ，API 和 ChatGPT 是独立计费的，可不便宜。

> 当上帝给你关闭一扇面时，也会同时打开一扇窗。

既然不能用 AI 做评判，那么就收集数据自己搞呗。

因为许多库的源码都是托管在 Github 上的，如果能获取到一个库在 Github 上的信息，那就有可能写出评判算法。

幸运的是，Github 不仅有大量的 Python 库源码，以及各种信息，而且还提供了获取这些信息的 API。

有了 API，爬虫更好写，于是再写一个爬虫，从之前获取的 Python 库信息中，获得库名信息，然后交给爬虫，让它将 Github 上的信息提取到，存入 Python 库档案数据中。

剩下的就简单了，就是确定一个评价算法，比如库的星标数量、被分叉数量、最后更新时间、维护者信息等等，将他们做加权平均，很容易能得到一个0～100 的评分。

![](https://g1proxy.wimg.site/sdJy5rrm9WWn7iMA19Yw3k3ILyJHUivzBrmG1Kda6aKE/https://mmbiz.qpic.cn/mmbiz_gif/HLK6tODE9a7wUSDRL74Y0GUM7YuGXbcpia4oWWhA5xictochtBcWm7UK1FQ15g9GiaZXpYia4Gic26ficHJkZyOuhLPQ/640?wx_fmt=gif&from=appmsg)

筛选

## 0.8 柳暗花明

有了评分，写个 SQL 语句就可以提取出符合要求的库名了。

但到这一步还没有完事，因为符合要求的库还是太多了，所以需要进一步获取到他们的概要信息，或者简介，以便让我理解一个库的基本功能或作用。

这个没什么难度，因为 Pypi 上有个字段 **summary**，刚好提供了库的简介，所以对于候选库，再获取一次他们的简介。

为了让信息更准确，还需要提取库的 readme 信息，因为前面提到的 Github 爬虫，以及 Pypi 库页面上的内容，获取是想当容易的。

至此，一个相对全面客观的 Python 库档案整理好了，将信息生成一个 Html 页面，用来展示和方便浏览，这下再也不用为没有合适的 Python 库素材发愁了。

![](https://g1proxy.wimg.site/skclZP8arYa0sxvpk1qJAK301E02rymTjO3VgH86mwpI/https://mmbiz.qpic.cn/mmbiz_png/HLK6tODE9a7wUSDRL74Y0GUM7YuGXbcpZb3qfTfGzvg9oNZTjic8d2WHqh5GN162ahw643YDcdVhwQlCZibZB1Ag/640?wx_fmt=png&from=appmsg)

展示

## 0.9 细水长流

当每天不断地浏览、了解这些优秀的 Python 库时，我感受到最多的是一个人的渺小，力量的薄弱，那么多的资源、思想、方法、工具，浩如烟海，而我只是沧海漂摇的一叶扁舟。

或许（一定）我永远也记不住每朵浪花，但我可以通过自己的技能和眼界，发现和观察每一朵盛开在我眼前的美丽的花朵。

在了解众多 Python 库，提取他们的主要信息和功能的同时，我也成为了自己的读者，并且已经在工作生活中用到了一些优秀的库，比如 Tqdm——一个拒绝无聊的 Python 库。

我并不是优秀 Python 库的创造者，只是知识海洋中的一个搬运工。

## 0.10 总结

尽管采集 Python 库的过程很坎坷，尽管采用的方法可能不是最优的，但并不能阻挡我对整个过程的实现。

过程中采用了 Python 编程、网络请求、数据库、Html等多个技术，但真正动手敲代码的部分并不多，当把一个过程用伪代码，甚至只是自然语言描述清楚后，ChatGPT 就能完成大部分工作。

比如从 Pypi 上提取关键信息，创建 Python 库档案数据库，一直到最后的用网页展示，都是 ChatGPT 的功劳。

正如昨天的文章标题《[**以一抵百，抵千，抵万**](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzI4MzMyNjQwMw==&mid=2247487046&idx=2&sn=147bc4ed77ae3f544a9d6af78c308dd3&chksm=eb8d2ceadcfaa5fc0c69bb1f8c18b941c3ff0b16bcbce04c125abd265dba30526c05ef6de09d&scene=21#wechat%5Fredirect)》，在过去这样的事情至少需要个小型团队干上小半个月，而现在就我一个人，一周左右，而且效果好更好（很少有集成bug、交流障碍、设计返工等情况）。

不得不再次强调，AI 牛逼，编程越重要，前提条件是你有**编程思想，了解编程基础**。

推荐《自学是门手艺》，不仅可以习得 Python 编程基础，更是习得自学能力的金钥匙！

**私信中**回复**订单号**，邀你加入 《**Python 习得群**》，让你的编程技能，突飞猛进！
