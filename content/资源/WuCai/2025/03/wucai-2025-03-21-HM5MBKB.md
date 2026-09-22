---
标题: "一款刚刚开源的TTS语音模型！25ms超低延迟支持实时对话，4种规格适配全场景！"
笔记ID: HM5MBKB
笔记类型: page
星标: true
tags: 
  - 星标
域名: mp.weixin.qq.com
域名2: qq.com
作者: "开源星探"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzkwMjQ0NzI0OQ==&mid=2247501702&idx=1&sn=2832a56d8305d56ef274b7722f2f6994&chksm=c1e6e8b8f5aabf9119aa535f9be423956c469bde7d9f11a6c919c4b2c128e452f61d831968fa&mpshare=1&scene=1&srcid=0321Yj2yh8jCnvYOXSuF0vJK&sharer_shareinfo=f21e3e72d10f7c41a9da638afbe01330&sharer_shareinfo_first=f21e3e72d10f7c41a9da638afbe01330#rd"
五彩链接: "https://marker.dotalk.cn/#/?nx=HM5MBKB&vs=1"
划线数量: 0
创建时间: 2025-03-21 08:52
更新时间: 2025-03-21 08:53
---

## 一款刚刚开源的TTS语音模型！25ms超低延迟支持实时对话，4种规格适配全场景！ 
[[星标]]

## 页面笔记


## 划线列表

## 全文剪藏
在 TTS 领域，情感表达的自然度和实时性一直是两大挑战。传统模型往往在延迟和语音质量间难以平衡。

近两年 TTS 模型也发展的越来越好，也有越来越多的功能全面的 TTS 模型面世。

**Orpheus TTS**  是一款刚刚发布的开源 TTS 模型，它以其接近人类的自然情感表达、超低延迟的实时输出以及强大的零样本语音克隆能力，迅速成为开源社区关注的焦点。

不仅能生成流畅自然、充满情感的声音，还将延迟压缩到令人惊叹的 25-50 毫秒，完美适配实时对话场景。

并且提供了从 150M 到 3B 参数的四种型号，满足不同场景的需求。支持零样本语音克隆和灵活的情感控制，可让每个人都能轻松定制专属音色。

![](https://g1proxy.wimg.site/ssQIBfhc2r_NkGhfZQxFmSjb_Wp4QqTzeF1_GHVJtz68/https://mmbiz.qpic.cn/mmbiz_png/NjA8gwicXyeJBZnvqet4AJWUiadbWwqJlsJdLlFQXyZAiauyYO5nVT4aZYNzVBBkHA7CyNdKVvZov8Vc248yGRW1g/640?wx_fmt=png&from=appmsg)

#### 核心亮点

* • **超低延迟** ：支持实时流式推理，延迟低至约200毫秒，通过压缩最低可至 25-50 毫秒
* • **自然情感表达** ：支持丰富的情感和语调控制，支持高兴、悲伤、生气、困倦等多种情绪
* • **零样本语音克隆** ：无需预训练，仅需提供参考音频即可克隆目标音色
* • **提供 4 种模型规模** ：Medium (3B)、Small (1B)、Tiny (400M)、Nano (150M)
* • **端到端语音生成** ：还未上线，上线即可提升语音自然度、可控性及生成速度

#### 快速使用

Orpheus TTS 的安装和使用过程简单，支持本地部署。

如果想要直接体验该TTS工具，HF平台上也有在线Demo可体验（需魔法）。

![](https://g1proxy.wimg.site/sOcEA6-R8GzjOzxRQrpQbIywcN6a5KEFoeMno8xuwftQ/https://mmbiz.qpic.cn/mmbiz_png/NjA8gwicXyeJBZnvqet4AJWUiadbWwqJlsLECb7VfiaZIqZ8iaE9yNcu4uMwcTSRIzKedOnbdWZWp32ib2UkpP3ZOBw/640?wx_fmt=png&from=appmsg)

在线Demo：  

https://huggingface.co/spaces/MohamedRashad/Orpheus-TTS

本地部署步骤：

① 克隆项目


```
git clone https://github.com/canopyai/Orpheus-TTS.git
cd Orpheus-TTS
```


② 安装依赖


```
pip install orpheus-speech
```


③ Python调用示例


```
from orpheus_tts import OrpheusModel
import wave
import time

model = OrpheusModel(model_name ="canopylabs/orpheus-tts-0.1-finetune-prod")
prompt = '''Man, the way social media has, um, completely changed how we interact is just wild, right? Like, we're all connected 24/7 but somehow people feel more alone than ever. And don't even get me started on how it's messing with kids' self-esteem and mental health and whatnot.'''

start_time = time.monotonic()
syn_tokens = model.generate_speech(
   prompt=prompt,
   voice="tara",
   )

with wave.open("output.wav", "wb") as wf:
   wf.setnchannels(1)
   wf.setsampwidth(2)
   wf.setframerate(24000)

   total_frames = 0
   chunk_counter = 0
   for audio_chunk in syn_tokens: # output streaming
      chunk_counter += 1
      frame_count = len(audio_chunk) // (wf.getsampwidth() * wf.getnchannels())
      total_frames += frame_count
      wf.writeframes(audio_chunk)
   duration = total_frames / wf.getframerate()

   end_time = time.monotonic()
   print(f"It took {end_time - start_time} seconds to generate {duration:.2f} seconds of audio")
```


#### 写在最后

传统语音合成（TTS）系统面临三大核心挑战：情感表达生硬、推理延迟过高（普遍>500ms）、克隆音色需大量数据。

Orpheus TTS通过混合专家架构（MoE）与KV缓存优化，在150M到3B参数范围内实现：MOS评分达4.6、端到端延迟压至25ms、零样本语音克隆、超强情感控制。

适用于 AI 语音助手、游戏配音、有声读物、虚拟客服、智能语音交互等 多种应用，兼顾 高质量语音合成 & 实时交互体验，是当前最具潜力的开源 TTS 方案之一！

GitHub 项目地址：https://github.com/canopyai/Orpheus-TTS

![](https://g1proxy.wimg.site/sgpiJ671_dxKX-tLqjc3Uh0UAnX_nWM3dWVylBYEg-SQ/https://mmbiz.qpic.cn/mmbiz_gif/NjA8gwicXyeLogiaTtO5FxiaHKoG9PkNcf1b9jFAz19hLdZ7ypHBHJfhZ0Sic2UzkLLNrRjMxjvQcO4fHHJV4Zk9Ig/640?wx_fmt=gif)

● [一款改变你视频下载体验的神器：MediaGo](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkwMjQ0NzI0OQ==&mid=2247496744&idx=1&sn=10e51b11313e3df83499ae061af8557f&chksm=c0a7ddd6f7d054c0748fe4952bb11f22b556c4ebb956f1498ede2bd75a106a88be217da7a152&scene=21#wechat%5Fredirect)

● [新一代开源语音库CoQui TTS冲到了GitHub 20.5k Star](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkwMjQ0NzI0OQ==&mid=2247491110&idx=1&sn=0e518cb7e65f1ac4e98cc9207375cfd8&chksm=c0a437d8f7d3bece7e7a80eee7762321da7e54d389b6076fa47420451e6a46e6c7e6e2c321f0&scene=21#wechat%5Fredirect)

[● ](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkwMjQ0NzI0OQ==&mid=2247491011&idx=1&sn=23a7b985aa390059af4273bd71541f23&chksm=c0a4343df7d3bd2b914aa51919e3deed511e884fa3bf20c74de7e6275f8dc266f1cfacb32ceb&scene=21#wechat%5Fredirect)[最新最全 VSCODE 插件推荐（2023版）](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkwMjQ0NzI0OQ==&mid=2247491011&idx=1&sn=23a7b985aa390059af4273bd71541f23&chksm=c0a4343df7d3bd2b914aa51919e3deed511e884fa3bf20c74de7e6275f8dc266f1cfacb32ceb&scene=21#wechat%5Fredirect)  

● [Star 50.3k！超棒的国产远程桌面开源应用火了！](http://mp.weixin.qq.com/s?%5F%5Fbiz=MzkwMjQ0NzI0OQ==&mid=2247492205&idx=1&sn=ac25e9469275976771d6f8c842fc87bd&chksm=c0a7cb93f7d04285cdb85c397a4c1b378c707777f485c8c72e4c4432f2dbe27a2c378d562659&scene=21#wechat%5Fredirect)

● [超牛的AI物理引擎项目，刚开源不到一天，就飙升到超9K Star！突破物理仿真极限！](https://mp.weixin.qq.com/s?%5F%5Fbiz=MzkwMjQ0NzI0OQ==&mid=2247500015&idx=1&sn=a444cf247657778093110e1ac0322616&scene=21#wechat%5Fredirect)

![](https://g1proxy.wimg.site/slkAZfUra0aLUbfuE4TVSCFRzQxBS3VerQ092i3_jNHQ/https://mmbiz.qpic.cn/mmbiz_gif/NjA8gwicXyeKqAjyn8A3ob9xT4DDY8DB3JCvIaM6JKWXFsgCxznXicJhpRYJ5MIPb9xvgGA4WYhPagIKorlScib0Q/640?wx_fmt=gif)

如果本文对您有帮助，也请帮忙点个 赞👍 + 在看 哈！❤️

**在看你就赞赞我！** 

![](https://g1proxy.wimg.site/sw2cWBRodeprhAglxj3q9HSLF5Jtvh2a6AkjN7ynHjAQ/https://mmbiz.qpic.cn/mmbiz_gif/NjA8gwicXyeLZdEkueqhds4y07sImrPvibkDIsnVCibl5ibS6jSiccRh6RtH8ZqBPBWSib0kn7Ep6mP5YPJCJkraJ3kw/640?wx_fmt=gif)
