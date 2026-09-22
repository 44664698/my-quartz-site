---
标题: "AI热门工具-MCP 简单案例"
笔记ID: HMCHD7A
笔记类型: page
星标: true
tags: 
  - 星标
域名: mp.weixin.qq.com
域名2: qq.com
作者: "Brook的知识分享平台"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzI1ODc5MDY2OA==&mid=2247484530&idx=1&sn=2b8a9bbd731413897235c98a47702660&chksm=ebdce182c010b5be0bc86097c2fe940867a445da7e6fa0775df18925849a9357e7f37d8362af&mpshare=1&scene=1&srcid=0409kT39fxW1gSEqHxwEwxmw&sharer_shareinfo=a7b6c29c4016828329903793ecd0375e&sharer_shareinfo_first=a7b6c29c4016828329903793ecd0375e#rd"
五彩链接: "https://marker.dotalk.cn/#/?nx=HMCHD7A&vs=1"
划线数量: 0
创建时间: 2025-04-09 19:42
更新时间: 2025-04-09 19:42
---

## AI热门工具-MCP 简单案例 
[[星标]]

## 页面笔记


## 划线列表

## 全文剪藏
近期AI领域MCP非常火热，每天都有大量的MCP工具诞生，在此简单介绍一下它的原理和应用。

MCP 简介

MCP全称Model Context Protocol 模型上下文协议，由Claude的母公司Anthropic于24年底开源发布。

![](https://g1proxy.wimg.site/s_xTycVeipy2QxFgAw-Ai5DHxtDn29olZVpIo5xdUTNk/https://mmbiz.qpic.cn/sz_mmbiz_png/bnxlDGPTQTDem0QGtMu6V8EQYnC1uAXuFhUSibz8ibOH18fEcicD5otwv4ria0kqPaYYuXfLqWcQIAZCw1oMCYS3Pg/640?wx_fmt=png&from=appmsg)

简单来说，MCP就是AI大模型的标准化工具箱，大模型可以利用这些工具与外界互动，获取信息并且完成任务。

在以往的模式中，我们经常要与浏览器、文件、数据库、代码仓库等外部工具或数据源打交道，然后把信息输入给AI大模型，大模型在给我们返回输出结果。MCP则可以通过标准化的协议自动化这一步骤。MCP作为大模型和这些外部工具的中间层，代替人类访问并操作这些外部工具。每个MCP服务或者叫MCP Server都专精于一类工作，例如有的负责读写文件，有的负责操作浏览器，有的负责查询数据库等。

**环境准备** 

* 安装 VS Code 以及 VS Code 的插件 CLINE
* 安装 Python、Node js 环境

大部分的MCP Server都是用Nodejs或Python运行环境，所以我们提前安装好这两个环境。

本次示例使用的是CLINE，一款开源的编程插件，官网是：

https://cline.bot/mcp-marketplace

![](https://g1proxy.wimg.site/sjVSXKi0-5iO1g8EkggDFP8HO0YfYX9WyKX3FqUYhae0/https://mmbiz.qpic.cn/sz_mmbiz_png/bnxlDGPTQTDem0QGtMu6V8EQYnC1uAXu8P8SwuKvvWnlnAyWdzB4KibxGIBGGTtjYsVLZZciao6YKrrh0GiceGX2g/640?wx_fmt=png&from=appmsg)

**安装教程** 

VS Code安装CLINE插件：

![](https://g1proxy.wimg.site/sCB6uN5g60kG7J0FkfG1mSDgigIzFP5Z91iwknhzQCSM/https://mmbiz.qpic.cn/sz_mmbiz_png/bnxlDGPTQTDem0QGtMu6V8EQYnC1uAXu0Nrt7KtFFXibw48NyFPg2avFFyh1AZq6DjWd0He317kuaEhooicnABiaQ/640?wx_fmt=png&from=appmsg)

安装完成后，先去OpenRouter申请一个API Key(目前这个网站无需翻墙，国内可以直连)：

https://openrouter.ai/

![](https://g1proxy.wimg.site/s_fZo3qLqUyFsraJkC5-FsQLuQWz2hC4PTuUiDFlMKqo/https://mmbiz.qpic.cn/sz_mmbiz_png/bnxlDGPTQTDem0QGtMu6V8EQYnC1uAXuE3jhU7Qnqth2dlK64SBCMKqw7WB8v7jf9Hrm2OSLYCD29LH8BibZvoA/640?wx_fmt=png&from=appmsg)

可以使用GitHub账户登录，登录后点击菜单下的Keys：

![](https://g1proxy.wimg.site/sCmzkdAccdBexr25o_OofX2JHGLqHo4tTd-BmMgfi35g/https://mmbiz.qpic.cn/sz_mmbiz_png/bnxlDGPTQTDem0QGtMu6V8EQYnC1uAXub7ibnc4KdhG5ic89LC2Idu4OhoW8Z0m1CLAUe9CtsA7SJjQ16dibT2hSg/640?wx_fmt=png&from=appmsg)

单击创建Key：

![](https://g1proxy.wimg.site/sl2Yd_ElET5FrZFSgRzidldxeEUxKbYtfjN_rI-S_yOY/https://mmbiz.qpic.cn/sz_mmbiz_png/bnxlDGPTQTDem0QGtMu6V8EQYnC1uAXunUpHvPlpISDMHK5Hd6WxwiauP8lhg6icv6P9R5wB2SG8Br2OhCrb94ibw/640?wx_fmt=png&from=appmsg)

填写个名称，第二行限制信息无需填写，然后保存好生成的Key。

打开VS Code的CLINE插件界面，单击小齿轮进入CLINE的设置界面，API Provider选择OpenRouter，下面的API Ke填写刚才申请的API Key：

![](https://g1proxy.wimg.site/s3vGKQK5zji8zDYdDqfOV1dnXn_Hu_XzUpSuq8Hax-A8/https://mmbiz.qpic.cn/sz_mmbiz_png/bnxlDGPTQTDem0QGtMu6V8EQYnC1uAXuYDHN6wBQ3fmNquicBrsasqhpebz2eicszAFmMmibFMPSTOfvzibde5Ey5w/640?wx_fmt=png&from=appmsg)

随后点击Done 回到主界面，单击CLINE界面中的MCP Servers按钮：

![](https://g1proxy.wimg.site/s287MD1p0A4Z67cEiIRxNrySOyDqXFYBFiSjN_dKt0bw/https://mmbiz.qpic.cn/sz_mmbiz_jpg/bnxlDGPTQTDem0QGtMu6V8EQYnC1uAXujoCtHAJLspuibLZWHdtQYibMECObkBDvhIdk0sGEnW8vt2sGichbBRDpw/640?wx_fmt=jpeg)

在商店中搜索postgre，选择PostgreSQL Reader进行安装：

![](https://g1proxy.wimg.site/sOJ-bXBiO9Szt7SIVVSWZGP8zWKNcppzRKzTv6AspEIA/https://mmbiz.qpic.cn/sz_mmbiz_png/bnxlDGPTQTBQA8l2I2gOiaL0u8j5ficlibAtyJI1sQryibSSWYb7QMPcvOAIx1iasYrYVxcowibzlsCvOo0rpewmab6w/640?wx_fmt=png&from=appmsg)

接下来AI会自动引导你完成安装，每一步AI都会提示你要进行的操作，它会自动创建目录、创建配置文件：

![](https://g1proxy.wimg.site/sqa8Ng6Q4Cy6iSuKnjn-WbZyKxs-IJmpW9RABVDks6hw/https://mmbiz.qpic.cn/sz_mmbiz_png/bnxlDGPTQTBQA8l2I2gOiaL0u8j5ficlibAno29O9UdWGlP7ichHZGibXGxiaImCrNK9jytjdp9VL2R67nWCujX2oOLQ/640?wx_fmt=png&from=appmsg)

如果使用的是Mac OS或Linux系统直接按提示生成的配置文件就可以使用，如果是Windows系统需要修改一下配置文件，首先点击Task右上角的关闭按钮：

![](https://g1proxy.wimg.site/sWN74V2CuJDxvJ0bSxkAcia_p9QatPM5l4WQWWJT2eYA/https://mmbiz.qpic.cn/sz_mmbiz_png/bnxlDGPTQTBQA8l2I2gOiaL0u8j5ficlibAXmZ0KEbXEibVWHvnRPib6NPickj5iczZzwAZKMSBj87qPbBSKV1vWibp23g/640?wx_fmt=png&from=appmsg)

再点击MCP Server，选择Installed选项卡，再单击配置按钮：

![](https://g1proxy.wimg.site/sp0qMLjzYBND7Cq5FrARpmgneZopxl-H1sF9x8sN8Jos/https://mmbiz.qpic.cn/sz_mmbiz_png/bnxlDGPTQTBQA8l2I2gOiaL0u8j5ficlibAnPkxHYh3jWKurxjWzEib0JiaoyLZWTxVcjKc1JEzHLdAGichLM54s6F4A/640?wx_fmt=png&from=appmsg)

将弹出来的配置文件进行修改：


```css
{
  "mcpServers": {
    "github.com/modelcontextprotocol/servers/tree/main/src/postgres": {
      "command": "cmd",
      "args": [
        "/c",
        "npx",
        "-y",
        "@modelcontextprotocol/server-postgres",
        "postgresql://user:password@localhost:5432/mydb"
      ],
      "disabled": false,
      "autoApprove": []
    }
  }
}
```


将数据连接字符串改为要访问的数据库，成功后左侧的服务器状态会变为绿色：

![](https://g1proxy.wimg.site/sQ9liyOQi2K3hpPdqzZiBFnXHzOuzBjwSFZF1pJizgxc/https://mmbiz.qpic.cn/sz_mmbiz_jpg/bnxlDGPTQTDem0QGtMu6V8EQYnC1uAXulYY8zA4EEgegdsc07xhWVzek3t82vn34IQRdCDXl7ejibicn8VT9M5Dw/640?wx_fmt=jpeg)  

**应用场景** 

给CLINE发送一个信息：我的数据库一共有几个schema，搜集它们的基本信息

AI大模型会自动调用MCP Server，并提示用户要执行的SQL，用户点击同意后就会执行SQL自动查询信息：

![](https://g1proxy.wimg.site/sr1gQly3xOuyMagzfz5GOfQ39Zlu2LM03cMiBxjFik0U/https://mmbiz.qpic.cn/sz_mmbiz_png/bnxlDGPTQTBQA8l2I2gOiaL0u8j5ficlibATKggjYGMibzc1eEjHORcybavTxDGiaic7XIhXovj8YZxBxCDfBIkCpDuQ/640?wx_fmt=png&from=appmsg)

它会自动采用分步查询机制，能够智能地对查询结果进行筛选，并基于前序结果进一步获取详细信息。当然这种分步查询能力（包括信息检索、SQL生成等）的实际表现取决于所使用大模型的能力水平。目前采用的【deepseek/deepseek-chat-v3-0324:free】模型在此方面表现优异，且完全免费。

通过MCP Server，AI可实现多种高级功能：

\- 直接操作系统文件

\- 实时访问数据库

\- 智能网络查询

\- 自动化浏览器操作

其功能定位类似于此前热门的Manus平台，但应用场景更为广泛。具体实现方式完全取决于开发者的创意构思。

可以预见，随着技术发展，更直观的AI应用将不断涌现，最终实现"一句话完成复杂任务"的智能化操作体验。

感谢大家阅读。

本文章仅代表作者个人看法。

**欢迎点击以下名片关注** 
