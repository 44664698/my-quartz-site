---
标题: "1+2=28 -- DeepSeek满血版28倍提升之AMX"
笔记ID: HMFHEDD
笔记类型: page
星标: true
tags: 
  - 星标
域名: mp.weixin.qq.com
域名2: qq.com
作者: "IT奶爸"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzIzMzIyMjIyMw==&mid=2650170268&idx=1&sn=771e345d15449de641c883042185fd66&chksm=f1405c956dacf637b9ed060ea13f57646558a9caccba30704a940472849521cae9f1949763b5&mpshare=1&scene=1&srcid=0306BAEFRnksfxwG7oF4pKXf&sharer_shareinfo=a282dd66e42b9b5cce45c1a48ec4fdd2&sharer_shareinfo_first=a282dd66e42b9b5cce45c1a48ec4fdd2#rd"
五彩链接: "https://marker.dotalk.cn/#/?nx=HMFHEDD&vs=1"
划线数量: 0
创建时间: 2025-03-06 01:34
更新时间: 2025-03-06 01:34
---

## 1+2=28 -- DeepSeek满血版28倍提升之AMX 
[[星标]]

## 页面笔记


## 划线列表

## 全文剪藏
**引言 — 基于一张4090 加 两个 Intel CPU（集成AMX指令）的配置 ，KTransformer为DeepSeek V3 671B满血版带来了28倍的性能提升。** 

**本文** **包括以下三部分，原文以及参考文献发表至IT奶爸-知识星球：** 

**1\. KTransformers的提升** 

**2\. AMX的介绍** 

**3\. 基础性能的对比** 

---

**I. KTransformers的提升** 

KTransformers（发音：Quick Transformer）是一个基于Python的开源框架，专注于优化大模型的本地推理体验。

根据Github上最新的更新：

* **2025 年 2 月 10 日**  
：支持 Deepseek-R1 和 V3 在单个（24GB VRAM）/多 GPU 和 382G DRAM 上运行，速度提升高达 3\~28 倍。

V0.2最佳性能测试的配置：

* CPU: Intel (R) Xeon (R) Gold 6454S 1T 内存 (2 NUMA 节点)
* GPU: 4090D 24G 显存
* 内存: 标准 DDR5-4800 服务器内存 (1 TB)

采用的CPU是Intel的Sapphire Rapid，双路服务器，每个CPU 32核心。

![](https://g1proxy.wimg.site/srg361CtFkSeb_W4QTKNrl59B0mwfEozaygyG8f5_8V4/https://mmbiz.qpic.cn/sz_mmbiz_png/WCCMxRiaeYVgSMzvKLS6UeO8Q8TBzUaCtl8nhrrhPvudVonSKlbxib8mh3xMSP8BR0UbicdZOkTVHJ3udUwAVwcyQ/640?wx_fmt=png&from=appmsg)

其中最重要的是下面这个高亮出来的AMX 功能：

![](https://g1proxy.wimg.site/snqDzyeAQcOGi1fs8rKNVx7TB9AGzuRzyTD_BU0oA2PY/https://mmbiz.qpic.cn/sz_mmbiz_jpg/WCCMxRiaeYVgSMzvKLS6UeO8Q8TBzUaCticb5ibteQVvsdiaybzEX1Td81BXO6IsezakbCaqEfRWB1ns5btOzkIENw/640?wx_fmt=jpeg)

### 性能对比：KTransformers vs llama.cpp

| 指标            | llama.cpp（双节点，64核） | KTransformers（双节点，64核） | 提升倍数   |
| ------------- | ------------------ | ---------------------- | ------ |
| Prefill Speed | 10.31 tokens/s     | 286.55 tokens/s        | 27.79× |
| Decode Speed  | 4.51 tokens/s      | 13.69 tokens/s         | 3.03×  |

   * AMX 优化和选择性专家激活将在 V0.3 中开源。
   * V0.3-抢先看, KTrans V0.3 的预填充速度比 KTrans V0.2 快 3.45x 倍，比 llama.cpp 快 27.79x 倍。 解码速度与 KTrans V0.2（6 个专家版本）相同，因此省略。主要加速来自于
   * 英特尔 AMX 指令集和专门设计的缓存友好内存布局
   * 专家选择策略，根据离线配置文件结果选择更少的专家

专家卸载：与传统的基于层或 KVCache 卸载（如 llama.cpp 中的）不同，将专家计算卸载到 CPU，将 MLA/KVCache 卸载到 GPU，与 DeepSeek 的架构完美对齐，实现最佳效率。

英特尔 AMX 优化 – AMX 加速内核经过精心调优，运行速度是现有 llama.cpp 实现的数倍。该团队计划在清理后开源此内核，并考虑向 llama.cpp 上游贡献代码。

为什么选择英特尔 CPU？ 英特尔目前是唯一支持 AMX 类似指令的 CPU 供应商，与仅支持 AVX 的替代方案相比，性能显著更好。

**II. AMX的介绍** 

上面KTransformer选用的CPU是第4代英特尔至强，也是第一代集成了AMX的CPU，在之后的第4代，第5代，第6代至强（性能核）也就是Granite Rapid CPU（GNR），都集成了AMX。

第六代GNR，也就是P-core/性能核，与第五代相比，GPT-J-6B (bf16) 性能提高两倍。

而拥有AMX的第5代（EMR）相比于没有AMX加持的第3代（Icelake）相比，训练和推理体验提升高达14倍。

AMX 是一个专用硬件模块，有助于优化和加速依赖矩阵数学的深度学习训练和推理工作负载。

AMX 使 AI 工作负载能够在 CPU 上运行，而不是将其单纯的卸载到独立加速器，从而显著提高性能。其架构支持 BF16（训练/推理）和 int8（推理）数据类型，包括两个主要组件：

* Tile：由 8 个二维寄存器组成，每个寄存器大小为 1 KB，用于存储大数据块。
* Tile Matrix Multiplication (TMUL)：TMUL 是连接到 Tile 上的加速器引擎，为 AI 执行矩阵乘法计算。

![Intel AMX 高级架构。](https://g1proxy.wimg.site/sHSrRhdp5lts44VFwktDhqt9uF8nD43Y805K27qJbcXc/https://mmbiz.qpic.cn/sz_mmbiz_png/WCCMxRiaeYVgSMzvKLS6UeO8Q8TBzUaCtB3S6YIItTSStic4ZQKsnXiaHicgggwptyhstejhKzxQibKVNCEdoUKty3w/640?wx_fmt=png&from=appmsg)

下表说明了与第 3 代 Intel Xeon Platinum 8380 处理器 （FP32） 相比，使用第 4 代 Intel Xeon Platinum 8480+ 处理器 （Intel AMX BF16） 时 PyTorch 训练性能的提升。

![](https://g1proxy.wimg.site/shfWJ7HDnCbSDDiRuVJRcx9uE0TX2wl0UOgaNDVaHQSM/https://mmbiz.qpic.cn/sz_mmbiz_png/WCCMxRiaeYVgSMzvKLS6UeO8Q8TBzUaCtRDTyO3FKzedZ0CY0v28HGPOS3CZr7Tz8XPFtwl0uKjtHsibLAM7tU4A/640?wx_fmt=png&from=appmsg)

下面是推理性能的提升：

![](https://g1proxy.wimg.site/sozaGJPfcE5vKuToQdE0xUv_YRGYJ12YYNAIb9QqwBuA/https://mmbiz.qpic.cn/sz_mmbiz_png/WCCMxRiaeYVgSMzvKLS6UeO8Q8TBzUaCtcqVjicj65Iiapm7sBZnmX7CfHfcTpSiaZnZWERTYXVRGZnMAFQsYJsBKg/640?wx_fmt=png&from=appmsg)

**III. 基础性能的对比** 

下面是谷歌在Google Cloud上针对与Intel AMX，以及开启了TDX 加 AMX的性能比较。

注：采用 Intel TDX 的机密 VM 可以帮助防止内部攻击和软件漏洞，并确保数据和代码的机密性和完整性。Intel 的 AMX 和 TDX 技术相结合，使客户能够更轻松地保护其 AI 推理、微调和中小型训练作业。

在实验中，比较了 vCPU 可用计算机类型最大的三个 VM（C3即采用了英特尔的第4代至强CPU）：

* N2 VM：未启用 Intel AMX 或 Intel TDX 的 N2 计算机系列 VM。
* C3 VM： 仅启用了 Intel AMX 的 C3 计算机系列 VM。
* C3+TDX VM：C3 计算机系列 VM 同时启用了 Intel TDX 和 Intel AMX。

AI训练结果：

与 N2 VM 相比，C3 VM 的训练时间加快了 4.54 倍，而 C3+TDX VM 为一个工作负载的训练时间提供了 4.14 倍的加速，具有相同的超参数，例如全局批量大小和等效质量指标。

![](https://g1proxy.wimg.site/sxJnKv7pRwtXWTGbBSAa5WRtFUYSUmjX5shdvcNsT_j0/https://mmbiz.qpic.cn/sz_mmbiz_png/WCCMxRiaeYVgSMzvKLS6UeO8Q8TBzUaCtRfFvYLHMNAia9JfXjyyzicQibHwFwmh6VzfmA1gWrPSefoIf21pHHKDQQ/640?wx_fmt=png&from=appmsg)

AI推理结果：

在两个 LLM（Llama-2-7B 和 Llama-2-13B）上运行了文本生成任务。使用上述 N2、C3 和 C3+TDX VM，我们根据两个指标评估了任务性能：

* 每个输出Token的时间 （TPOT）：为单个请求生成输出Token的时间。此指标对应于用户如何看待模型的“速度”。例如，每个Token 100 毫秒的 TPOT 大约为每分钟 450 个字 （WPM），这比普通人的读取速度要快。
* 吞吐量（Token/秒）：推理服务器每秒可以为批量请求生成的输出Token数。

我们将 N2 VM 与 C3 和 C3+TDX VM 进行了比较，发现 C3 VM 和 C3+TDX VM 上的 Intel AMX 提供了大约三倍的延迟速度改进（TPOT 的批处理大小为 1）， 吞吐量增加了大约七倍（批处理大小为 6）。

![](https://g1proxy.wimg.site/szywJ24TLUcc6RBNA3SSdAuVnbwkrcGFQ5ua8clBI6cg/https://mmbiz.qpic.cn/sz_mmbiz_png/WCCMxRiaeYVgSMzvKLS6UeO8Q8TBzUaCtsM6b6icyvMia5vvZFRLiaP7ArGQHhY70Edfu7dARiajUpecDloStWa8h5A/640?wx_fmt=png&from=appmsg)

![](https://g1proxy.wimg.site/sPX3bFw6-ANZqYXIDyXoxk5TkjvWEihOHD6FbxVZkBiM/https://mmbiz.qpic.cn/sz_mmbiz_png/WCCMxRiaeYVgSMzvKLS6UeO8Q8TBzUaCtqHsg0hxNkZDI4KWib9OfwYMS1htr5WPfnR1rpY8j9rz1fHcxPQoSmCw/640?wx_fmt=png&from=appmsg)

---

参考文献：

ktransformers Github

https://github.com/kvcache-ai/KTransformers

## We tested Intel’s AMX CPU accelerator for AI. Here’s what we learned

## https://cloud.google.com/blog/products/identity-security/we-tested-intels-amx-cpu-accelerator-for-ai-heres-what-we-learned

## Exploiting Intel Advanced Matrix Extensions (AMX) for Large Language Model Inference

https://ieeexplore.ieee.org/document/10538369

---

![](https://g1proxy.wimg.site/skzHYjhdTmozgAL6qCno4vV3VGEzXCn1Hc-qKzTgmct0/https://mmbiz.qpic.cn/sz_mmbiz_png/WCCMxRiaeYViakqX7SxTvphcx88D85tjdGg09HF0cPFc9QIibRVCveYat2BHbTUFXgY4Ogdmxqh0DAEOj1b5BIeDQ/640?wx_fmt=png)

**为感谢支持，可加本微信进入交流群。** 

**IT奶爸-知识星球** 

---

**高阅读量文章** 

* [RDMA与外卖小哥](https://mp.weixin.qq.com/s?%5F%5Fbiz=MzIzMzIyMjIyMw==&mid=2650169836&idx=1&sn=6c831bbf1774542c27bda9e511461b66&scene=21#wechat%5Fredirect)
* [Nvidia不满足于CUDA护城河，开始构建硬件生态](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzIzMzIyMjIyMw==&mid=2650167941&idx=1&sn=030420776b9083f04ae99773b518d05c&chksm=f08a03a5c7fd8ab3ee8213c6ed6a4f5fab5953ac3038359256ea4688acc066e8eb311b8173fd&scene=21#wechat%5Fredirect)
* [448G SerDes的“大”眼睛 -- 2024 OCP Global Summit 信息分享](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzIzMzIyMjIyMw==&mid=2650169933&idx=1&sn=61aaa186e7cb92729c59f0bef48f89f4&chksm=f08a3b6dc7fdb27bc5c39ecbcb587fedb0773be1a5afbb74bab58b99400b4308d4077fb46676&scene=21#wechat%5Fredirect)
* [一文读懂 SFP家族](https://mp.weixin.qq.com/s?%5F%5Fbiz=MzIzMzIyMjIyMw==&mid=2650170002&idx=1&sn=efca5b7ec46996b0b10d16f1038358a9&scene=21#wechat%5Fredirect)
* [CPU架构——动若狡兔之Turbo](https://mp.weixin.qq.com/s?%5F%5Fbiz=MzIzMzIyMjIyMw==&mid=2650168128&idx=1&sn=7463edc755f6a7fe77c8117f71986844&scene=21#wechat%5Fredirect)
* [不是NV用不起，而是以太网更有性价比 ——Gaudi 3 技术白皮书解读 - 1](https://mp.weixin.qq.com/s?%5F%5Fbiz=MzIzMzIyMjIyMw==&mid=2650169229&idx=1&sn=95a649b277f8615ffd31d1c576cdd2fe&scene=21#wechat%5Fredirect)
