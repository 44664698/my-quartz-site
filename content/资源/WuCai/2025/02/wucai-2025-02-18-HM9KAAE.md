---
标题: "DeepSeek的重要优势是编程能力"
笔记ID: HM9KAAE
笔记类型: page
星标: true
tags: 
  - 星标
域名: mp.weixin.qq.com
域名2: qq.com
作者: "周枫"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzIzMTEzNDkxOA==&mid=2648257028&idx=1&sn=c4deb14edb70ae4a9b4e269648a8e454&chksm=f16fa5a516e17894fb3b8e82c047d55fb968ebefd535f25bf79bf82616d6c7b2d0da997ceead&mpshare=1&scene=1&srcid=0218HeMnXCXtNkTHOXck3UNh&sharer_shareinfo=483b17ff18a741db7def1070b63bd67d&sharer_shareinfo_first=483b17ff18a741db7def1070b63bd67d#rd"
五彩链接: "https://marker.dotalk.cn/#/?nx=HM9KAAE&vs=1"
划线数量: 0
创建时间: 2025-02-18 22:45
更新时间: 2025-02-18 22:46
---

## DeepSeek的重要优势是编程能力 
[[星标]]

## 页面笔记


## 划线列表

## 全文剪藏
近两年来，AI在编程辅助领域飞速发展，无论商业版的 GitHub Copilot，Cursor，还是开源的Cline，都展现出让开发者惊叹的代码生成与理解能力。过去一年时间我都在公司内部推广AI辅助编程，所以对于这里的进展尤其关注，**DeepSeek V3** 和**R1** 推出后，我们快速调研了其相关能力，这里和大家分享一些相关内容，包括DeepSeek编程能力的水平、用什么工具将DeepSeek在开发中使用起来，包括怎样使用第三方的DeepSeek API解决目前官方API不稳定的问题等。

DeepSeek 团队在编程方面进行了较长时间的积累和研发，两年前就曾推出过DeepSeek-Coder编程模型，而近期广受关注的 DeepSeek V3和R1模型在编程方面的性能得到了大幅的提升，这里可以参考权威的Aider LLM Leaderboards榜单（部分结果）：

| 模型                   | 成功率    | 格式正确率  | 费用     |
| -------------------- | ------ | ------ | ------ |
| 64.0%                | 100.0% | $13.29 |        |
| o3-mini (high)       | 60.4%  | 93.3%  | $18.16 |
| **DeepSeek R1**      | 56.9%  | 96.9%  | $5.42  |
| **DeepSeek Chat V3** | 48.4%  | 98.7%  | $0.34  |
| DeepSeek Chat V2.5   | 17.8%  | 92.9%  | $0.51  |

在这个专门针对编程场景设计的评测榜单中，DeepSeek R1 取得了 56.9% 的成功率，格式正确率达到了 96.9%，而完整测试集的费用仅为 $5.42，远低于其他竞争对手，如 Claude 3.5 ($14.41) 和 OpenAI o1 ($186.5)。这意味着 DeepSeek 在提供高质量代码生成的同时，也能保持极高的性价比。DeepSeek Chat V3 虽然在成功率上低于 R1，仅为 48.4%，但格式正确率仍达到了 98.7%，并且其调用成本仅为 $0.34，是榜单中最便宜的模型之一，适合对价格敏感的开发者使用。

从成功率来看，DeepSeek R1 + Claude 3.5 组合达到了 64.0%，这里是使用DeepSeek R1推理进行高层次设计，用Sonnet完成基层的代码编写，在高准确率的同时，进一步提高了代码生成的可靠性。这表明 DeepSeek R1 具备较强的抽象推理能力，并且在与其他强大模型配合使用时可以取得更好的效果。

值得注意的是，GPT-4o 和 Qwen Max 2025 在成功率上明显落后于 DeepSeek，尤其是 GPT-4o 的成功率仅有 23.1%，而 Qwen Max 甚至只有 21.8%，这说明 DeepSeek 的模型在代码相关任务上的优化更为到位。此外，DeepSeek Chat V2.5 的成功率仅为 17.8%，表明在更新到 V3 版本后，DeepSeek 取得了显著的提升。

总体来看，DeepSeek R1 和 V3 在代码生成领域的表现相当优秀，特别是在性价比和格式正确率方面占据明显优势。这使得 DeepSeek 成为开发者在 AI 编程助手领域中的一个有力选择，特别是在需要大规模调用 API 或者希望控制成本的场景下，其价值更加突出。

### DeepSeek的其它编程能力优势

除了正确率高、价格低廉之外，DeepSeek模型用于编程还有其它一些优势：

**多语言支持丰富** 。DeepSeek 在多种编程语言和开发场景中表现出色，支持 C/C++、Java、Python、JavaScript/TypeScript、MATLAB、R 等 70 余种语言，适用于前端、后端、数据分析及系统脚本编写。相比于其他 AI 编程助手，DeepSeek 经过深度优化，能够理解复杂语法和编程库，并提供精准的代码补全、优化和重构建议。

**够用的长上下文** 。得益于其 64K tokens 的长上下文窗口，DeepSeek 能够有效分析大规模代码库，支持跨文件代码分析与优化，使其在实际开发中的应用更加广泛。此外，DeepSeek 在中文编程环境下表现尤为突出，能够理解中文注释和代码需求，降低语言障碍，提高团队协作效率。

**支持项目级的编程辅助** 。从应用趋势来看，AI 编程助手正在深度融入开发流程，开发者需要的不仅仅是代码补全，更希望 AI 能够理解项目、协助调试、优化性能，并提供代码审查建议。DeepSeek 具备这些能力，配合上Cursor、Aider这些新一代的编程助手，能够在整个软件开发生命周期中充当智能助手，极大提升开发效率。

## DeepSeek 的实际使用案例

为了让 DeepSeek 的强大编程能力更好地服务于开发者日常工作，我们需要一个高效的接口将其融入开发流程。**Aider**  正是这样一款开源的代码助手工具。Aider 可以被视为开发者与大型语言模型之间的桥梁：它在终端中充当“一名智能搭档”，允许你通过对话的方式让 AI 理解和修改你的代码，并直接将更改应用到代码文件中。相比纯粹的聊天模型，Aider 增强了对**代码上下文和编辑操作** 的支持，使 AI 可以真正参与到代码编写和重构过程中。下面我们来看 Aider 如何结合 DeepSeek，帮助完成实际的编码任务。

假设我们有一个简单的 Python 函数，需要计算阶乘但代码存在问题：


```
def factorial(n):
    result = 1
    for i in range(1, n):
        result *= i
    print("Factorial:", result)

```


这段代码尝试计算 `n` 的阶乘，但明显有两个问题：一是循环范围应当包含 `n` 本身，二是函数直接打印结果而非返回，不利于复用。现在，我们使用 Aider + DeepSeek 来协助重构这段代码。首先，在终端中启动 Aider 并指定使用 DeepSeek 模型（配置方式会在下节详述）。将包含上述代码的文件加载进会话后，我们可以用自然语言向 DeepSeek 提出要求，例如：

> **开发者** ：请修改 `factorial` 函数，使其正确计算阶乘并返回结果，而不是打印出来。

这相当于在对话中给 AI 提出了明确的重构需求。Aider 会将此指令连同代码上下文一起发送给 DeepSeek 模型。由于 DeepSeek 拥有优秀的代码理解和生成能力，它会“读懂”当前代码，识别出其中的 bug 和设计问题，然后生成一个修改方案。几秒后，Aider 收到 DeepSeek 的回复，并将其转换为补丁形式，直接在代码中显示出修改差异。例如 DeepSeek 可能会返回如下的代码编辑建议：


```
-def factorial(n):
+def factorial(n):
     result = 1
-    for i in range(1, n):
+    for i in range(1, n+1):
         result *= i
-    print("Factorial:", result)
+    return result

```


可以看到，DeepSeek 根据我们的要求进行了两处修改：将循环范围改为 `range(1, n+1)` 以包含 `n`，并将输出改为 `return result`。Aider 会高亮显示这两处改动，供开发者确认。确认无误后，我们让 Aider 应用这些改动，代码文件随即被更新完成。整个过程如同与一位智能同事结对编程：我们提出需求，DeepSeek 给出方案，Aider负责把方案落实到代码上。

通过这个简单的案例，我们体会到了 **DeepSeek 在代码补全和重构任务上的价值** 。在代码补全方面，DeepSeek 能根据已有的代码上下文与提示，智能地续写代码。例如在上例中，我们也可以只提示“计算阶乘并返回结果”，DeepSeek 就能自动补全整个函数的实现。在重构方面，DeepSeek 展现了对代码的理解和修改能力——它识别出了代码的逻辑错误，并按照更合理的方式改进了代码结构。这种能力延展到更复杂的场景下，意味着开发者可以让 DeepSeek 重构大型函数以提高性能，或在重构过程中保持程序行为不变等复杂要求。Aider 提供了便捷的界面来实现这一切，不需要手动复制粘贴代码，AI 给出的修改可以直接应用，大大减少了出错和遗漏的可能。

此外，Aider 结合 DeepSeek 还能支持**多轮对话** 式的代码演进。开发者可以一边查看 DeepSeek 提交的代码更改，一边继续提出进一步的改进要求。例如，在修复了阶乘函数后，我们可以继续让 DeepSeek 为这个函数添加输入参数校验（比如检查 n 是否为非负整数），DeepSeek 会基于修改后的新代码再给出增量的变更。如果对于代码不满意，"`\undo`"命令可以回退上一次修改。甚至git的管理Aider也可以代劳，所有修改都会写上合适的提交说明commit到git中。如此多次迭代，直到代码达到满意的状态。整个交互过程实时发生在本地的代码文件上，所见即所得。这种灵活、高效的工作模式展示了 AI 辅助编程的巨大潜力：**AI 不再只是被动地回答问题，而是积极参与代码的编写与演化** 。

## 使用第三方 DeepSeek API运行Aider

DeepSeek的官方API使用非常方便，继续使用Aider举例的话，就是`set DEEPSEEK_API_KEY=你的key`，然后`aider --deepseek`就可以了。但是因为当前DeepSeek服务火爆，所以有时会存在不稳定的情况，这时候可以使用第三方的API。Aider还没有正式支持国内第三方的DeepSeek，但经过简单配置依然是可以使用的。下面介绍下Aider使用硅基流动SiliconCloud的DeepSeek API的办法。

首先，你需要在硅基流动平台上**申请一个 API Key** 。在硅基流动的官网 (siliconflow.cn) 上注册并进入 DeepSeek 服务页面，可以生成专属的 API 密钥（DEEPSEEK\_API\_KEY）。拿到密钥后，我们只需要进行三步配置：

**1\. 配置 API Key** ：将获取的 DEEPSEEK\_API\_KEY 设置为环境变量，使 Aider 可以找到它。在 Linux/macOS 下，可以在终端中执行：


```
export DEEPSEEK_API_KEY="你的API密钥"
export DEEPSEEK_API_BASE=https://api.siliconflow.cn

```


在 Windows 下则使用 `setx DEEPSEEK_API_KEY "<你的API密钥>"`和`setx DEEPSEEK_API_BASE https://api.siliconflow.cn` 并重新打开终端。设置成功后，Aider 在运行时会自动读取该密钥用于调用 DeepSeek 服务。

**2\. 配置模型参数** ：在你的用户目录，也就是`$HOME`(Linux/Mac)，或者`%userprofile%`（Windows）下，建两个文件：

`.aider.model.metadata.json`，用来配置模型的基础参数：


```
{
    "deepseek/deepseek-ai/DeepSeek-V3":{
        "max_tokens":4096,
        "max_input_tokens":32000,
        "max_output_tokens":4096,
        "input_cost_per_token":0.00000014,
        "output_cost_per_token":0.00000028,
        "litellm_provider":"deepseek",
        "mode":"chat"
    }
}

```


`.aider.model.settings.yml`: 用来配置Aider使用模型的方式。


```
- name: deepseek/deepseek-ai/DeepSeek-V3
  edit_format: diff
  use_repo_map: true
  reminder: sys
  examples_as_sys_msg: true

```


**3\. 选择 DeepSeek 模型** ：Aider 提供了一键使用 DeepSeek 的选项，只需在命令行输入：


```
aider --model deepseek/deepseek-ai/DeepSeek-V3

```


完成以上三步后，Aider 就已经集成了由硅基流动提供的 DeepSeek 模型服务。在对话中你可以像以前一样提问和让它修改代码。DeepSeek 强大的代码编辑能力在 Aider 环境中能够充分发挥：由于 Aider 会自动提供当前项目的代码上下文，DeepSeek 可以基于完整的代码视图提出修改建议，这远比单纯复制一段代码到ChatGPT中要高效和准确。

### 常见问题和解决方案

在使用 DeepSeek API 的过程中，可能会遇到一些常见的问题，下面总结并提供解决方案：

* **响应延迟或超时** ：某些时候（尤其是在白天高峰期）调用 DeepSeek API 会感觉较慢。这可能由于服务器繁忙或网络原因。据社区反馈，DeepSeek 在高峰期的速度曾被诟病偏慢。解决方案：尽量使用硅基流动等国内代理服务提高速度；如果可能，避开高峰时段或者降低请求的输出长度（如上节所述限制 max\_tokens），以缩短响应时间。
* **上下文长度警告** ：当尝试让 DeepSeek 阅读非常大的文件时，Aider 可能警告上下文超过模型已知阈值。这通常是因为 metadata 配置没有更新。解决方案：使用`/drop`命令，去掉一些不需要的文件。实际上，DeepSeek 拥有超长的上下文窗口正好适合处理大型文件，配置正确后即可放心让它分析大段代码甚至整份文档。
* **API调用失败（鉴权错误等）** ：请检查是否正确设置了 API Key，以及 Base URL 是否对应正确的服务商（官方 vs 硅基流动）。若使用硅基流动，一定不要混淆官方的密钥和硅基流动的密钥，二者不可通用。同时，确保账户有足够的调用额度，硅基流动新用户往往会赠送一定免费额度，注意查看余额。

总的来说，DeepSeek API 的使用体验还是相当良好的，上述问题大多只需简单配置或规避即可解决。在Aider、DeepSeek官方团队的持续优化下，服务的稳定性也在不断提升。一旦配置到位，DeepSeek 将成为你开发过程中强有力且可靠的AI助手。

## DeepSeek 对比其他 AI 编程助手

当前市面上的 AI 编程助手繁多，DeepSeek 能在其中脱颖而出，自然有其独到之处。下面我们将 DeepSeek 与两款具有代表性的AI编程助手做对比：GitHub Copilot 和 ChatGPT (特别是其Code Interpreter模式)，看看 DeepSeek 在代码质量、支持语言和成本等方面的优势。

* **GitHub Copilot** ：作为最早走入开发者视野的AI编码助手，Copilot可以在代码编辑时实时给出续写建议。然而，Copilot的**上下文局限性** 较为明显：通常它只能基于当前文件的有限上下文进行补全，难以理解跨文件的需求。而 DeepSeek 拥有长达数万Token的上下文窗口，能够读取项目的更大范围，从而在理解全局意图上胜出。另外，Copilot主要面向英文开发注释，对于中文注释/描述支持不佳，而DeepSeek在中英文混合环境下依然表现优异，这对国内开发者是巨大福利。在代码质量方面，Copilot基于OpenAI早期的Codex模型，虽能生成多数场景的代码，但在复杂问题上正确率有限。而 DeepSeek 经大量高难度编程任务训练，在算法复杂度和边缘案例处理上往往给出更健壮的代码。如果说Copilot更像一个智能补全工具，那么DeepSeek更像一个深思熟虑的编码搭档，**不仅能续写代码，还善于发现代码中的隐患并优化** 。最后从成本看，Copilot需要订阅（月费制），而DeepSeek采用按量计费且价格低廉，对于使用频率不均的开发者而言更加经济实惠。
* **ChatGPT (Code Interpreter)** ：OpenAI的ChatGPT（尤其GPT-4）在代码对话方面能力极强，Code Interpreter更是可以直接执行代码完成数据分析等任务。相比之下，DeepSeek 与ChatGPT最大的区别在于**专精程度** 。ChatGPT是通用模型，编码是其众多功能之一；DeepSeek则是专门强化了编程技能的模型，在编程领域往往表现出色且稳定。例如在一些编程基准测试中，DeepSeek已经可以媲美甚至超过GPT-3.5。在实际使用中，ChatGPT/GPT-4 确实非常强大，但也存在**代价高** （GPT-4接口费用昂贵）和**可能上下文不够长** 的问题（GPT-4默认8K上下文，需要额外付费才有32K扩展，并且仍小于DeepSeek的64K）。DeepSeek 提供了一个高性能和高性价比的替代方案：对于大多数编码任务，其给出的答案质量与GPT-4处于同一梯队，但使用成本却低很多。同时，DeepSeek 的**多语言支持** 让它在处理非英文代码说明时更具优势。至于 Code Interpreter 所提供的代码执行能力，这是一个不同方向的功能：DeepSeek 专注于**代码本身的生成与修改** ，而不直接执行代码。不过，结合如Aider这类工具，DeepSeek 也可以间接触达执行和测试（例如Aider可以在应用修改后运行项目的测试用例，检查DeepSeek修改是否引入问题）。因此，在需要代码执行以辅助分析的数据科学任务上，ChatGPT Code Interpreter有独特优势；但在日常开发、代码创作和改进上，DeepSeek作为一个纯粹的编码模型，表现更加专业和高效。

除了以上两者，市面上还有如 Anthropic 的 Claude、Google 的 Codey 以及开源的 CodeLlama 等等。与这些相比，DeepSeek 也毫不逊色。例如 Anthropic Claude 强调长上下文和安全性，但在编程专项上据社区测试 DeepSeek 表现更优，尤其是复杂代码编辑任务的成功率更高。再比如最新的开源CodeLlama系列模型，虽然免费可自托管，但无论在性能还是中文支持上都无法与 DeepSeek 相提并论。可以说，**DeepSeek在代码质量、语言支持度、成本效率这三方面形成了独特的综合竞争力** 。对于追求高质量代码生成的专业开发者而言，它提供了一个值得信赖的选择；对于希望控制预算的团队来说，DeepSeek的性价比也使其成为有吸引力的方案。

当然，每款工具都有自己的适用场景和优势。Copilot 胜在无缝集成IDE、交互零散快捷；ChatGPT 胜在通用智能强、可处理非代码任务。而 DeepSeek 则胜在专注编程、高质量低成本。在理想的开发环境中，这些工具未尝不能取长补短、搭配使用。但如果关注点聚焦在**提升代码产出质量** 和**协助复杂编码任务** ，DeepSeek无疑是当前市面上最值得关注的AI助手之一。

## 结论

DeepSeek V3的R1作为通用和推理大模型，都展现出了令人瞩目的核心竞争力：**卓越的编程能力** 。无论是代码生成的准确性、多样性，还是代码理解与优化的深度，DeepSeek都达到了业内领先水平。在与其他主流AI助手的对比中，我们看到 DeepSeek 凭借超长的上下文处理、丰富的多语言支持以及高性价比，成功占据了一席之地。这背后离不开其强大的模型底座（如大规模的代码语料训练和Mixture-of-Experts架构等创新）以及本土团队的持续优化。

有了 DeepSeek 这样的助手，编程将变得更加充满创造力和乐趣。相信在不久的将来，DeepSeek 会成为众多开发者工作中不可或缺的一部分，助力软件创新。
