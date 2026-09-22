---
标题: "Embedding模型：bge-m3和bge-large-zh-v1.5如何选？"
笔记ID: HM5HDMH
笔记类型: page
星标: true
tags: 
  - 星标
域名: mp.weixin.qq.com
域名2: qq.com
作者: "7sh科技"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzUwOTI5MTA0Nw==&mid=2247484826&idx=1&sn=c1038898a5cc65569fc01b9e33dce532&chksm=f8fce4c6a482fb7941db74414a3817dc69ed8628f86e9873f81c5af5f24272fe44e84f866864&mpshare=1&scene=1&srcid=0322mwDSk9opBGNWkZCYnYIl&sharer_shareinfo=59c7b2b3e82c3132ddc2c704843be2d4&sharer_shareinfo_first=59c7b2b3e82c3132ddc2c704843be2d4#rd"
五彩链接: "https://marker.dotalk.cn/#/?nx=HM5HDMH&vs=1"
划线数量: 0
创建时间: 2025-03-22 17:13
更新时间: 2025-03-22 17:13
---

## 0.1 Embedding模型：bge-m3和bge-large-zh-v1.5如何选？ 
[[星标]]

## 0.2 页面笔记


## 0.3 划线列表

## 0.4 全文剪藏
目前公认质量最好的Embedding模型就是 Text-embedding-ada-002 ，OpenAI开发，1536维，性能优异但不开源，且国内 使用受限。

那么，还有什么 开源好用 的embedding模型推荐吗？有，那就是 bge系列。

![](https://g1proxy.wimg.site/svldkV_W2mBLqy5OFn6kpRPbPQwQpYYnyNYIgXYZoAqE/https://mmbiz.qpic.cn/sz_mmbiz_png/DMXZ0nzViaJcmRKnRia7JdCfEK5l6HiaocX0ojRMjo3B0ESoYq3mxEXsRiaHWmsYlXzAWFQSJey9hatJcSV3NlWJwg/640?wx_fmt=png&from=appmsg)

去年有一篇文章也写到了这个话题，阅读量不低。看来大家目前都在搭建私域的RAG系统，也是特别关注 embedding模型 的选择哈。

bge系列，有2个模型推荐，分别是：BGE-M3 和 BGE-large-zh-v1.5 模型，需要根据具体需求和场景进行权衡。

### 0.4.1 **BGE-M3的特点** 

**多语言支持** ：

BGE-M3支持超过100种语言，适合需要处理多语言文本的场景。

**长文本处理能力** ：

能够处理长达8192个token的输入，适合需要处理长文档的场景。

**检索能力** ：

集成了稠密检索、稀疏检索和多向量检索功能，适用于语义搜索、关键字搜索和重排序等任务。

**灵活性** ：

支持多种检索方式（如语义相似性搜索），适合复杂的自然语言处理任务。

**资源消耗** ：

由于其强大的功能和长文本处理能力，BGE-M3可能需要更高的计算资源和存储空间。

**中文优化** ：

专为中文场景设计，具有良好的中文语言理解和生成能力。

**嵌入维度** ：

1024维，适合中文文本的嵌入任务。

**资源消耗** ：

相比于BGE-M3，BGE-large-zh-v1.5的资源消耗较低，更适合资源有限的环境

### 0.4.2 **选择建议** 

**多语言需求** ：

如果项目需要处理多语言文本，尤其是非中文内容，BGE-M3是更优选择，因为它支持超过100种语言且具备强大的长文本处理能力。

**中文优化需求** ：

如果项目主要处理中文文本，并且对资源消耗有限制，BGE-large-zh-v1.5可能是更好的选择，因为它在中文场景下表现优异且资源消耗较低。

如果项目涉及商用，需注意BGE-large-zh-v1.5可能存在的一些潜在风险，这个可以自行查阅下相关资料。

往期推荐

1\. [DeepSeek开源「DeepEP」让AI速度狂飙的“通信黑科技”来了！](https://mp.weixin.qq.com/s?%5F%5Fbiz=MzUwOTI5MTA0Nw==&mid=2247484821&idx=1&sn=5df9437226582895032028ade6f7adc8&scene=21#wechat%5Fredirect)

2\. [大模型为啥按Tokens收费？Tokens究竟是什么？](https://mp.weixin.qq.com/s?%5F%5Fbiz=MzUwOTI5MTA0Nw==&mid=2247484816&idx=1&sn=fb43d7b04856fb1c9eb7b6cfc72c1f6d&scene=21#wechat%5Fredirect)

3\. [Transfomer 架构，大模型诞生的基石，你真的了解它吗？](https://mp.weixin.qq.com/s?%5F%5Fbiz=MzUwOTI5MTA0Nw==&mid=2247484811&idx=1&sn=91e7137328d178873e9ebba064f6696d&scene=21#wechat%5Fredirect)

> 好了，本期内容就是这么多，希望能够帮助到您，感谢您能读到最后，如果觉得内容不错，请您点赞转发给予鼓励，咱们下期再见。

---

![](https://g1proxy.wimg.site/sicIV0IrygRSfbfK53ixv1GQ_syuNtioz8sURuDY2bEA/https://mmbiz.qpic.cn/mmbiz_png/DMXZ0nzViaJfAFUol3bwKxDAJvO0vNMPmIuqic3tEQW8VTxO8hBiaITlv9wWNxHOiaictmyBFgibM8keItdebeW8RVSg/640?wx_fmt=png)


## 0.5 性能对比

| 特性 | BAAI/bge-large-zh-v1.5 | BGE-M3-Small | BGE-M3-Base | BGE-M3-Large |

|------|----------------------|--------------|-------------|--------------|

| 参数量 | 约400M | 1.3B | 2.5B | 2.7B |

| 架构 | BERT系列 | 基于Llama 3 | 基于Llama 3 | 基于Llama 3 |

| 显存占用 | 约1.3GB | 约2.5-3GB | 约4-5GB | 约5-6GB |

| 中文性能 | 优秀 | 更优 | 卓越 | 最优 |