---
number headings: auto, first-level 1, max 6, 1.1
---
#开发工具
# 1 快捷键
- 缩进/反缩进:Ctrl+\[、Ctrl+]
- 注释/反注释：Ctrl+/
- 隐藏左边栏：Ctrl+B 
- F4：在交互窗口中运行选定代码
- F5：在交互窗口中运行全部代码
集成开发环境：Visual Studio Community
# 2 代码编辑器:VsCode

## 2.1 [官网Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)

## 2.2 [VSCode安装教程](https://www.bilibili.com/read/cv24154066/)

# 3 VCode配置：
自动保存、字体调大22。
行长设置：打开settings.json，加入：`"Editor.Rulers":[80,120]

## 3.1 虚拟环境配置
设置工作区：F1：Preferences: Open Workspace Settings，搜索python
[分别填写 anaconda 的路径 和 创建的虚拟环境的路径](https://blog.csdn.net/Friedrichor/article/details/127776909)
![[Pasted image 20240219201054.png]]

## 3.2 每次打开插件变没需要每次点信任：
### 3.2.1 设置里搜security
![[Pasted image 20240218032440.png]]

### 3.2.2 终端窗口右上菜单

![[Pasted image 20240218032500.png]]

![[Pasted image 20240218032523.png]]


### 3.2.3 unicode highlight
关闭特定中文标点的提示。
### 3.2.4 在外部终端输出

![[Pasted image 20240218032552.png]]

![[Pasted image 20240218032601.png]]

![[Pasted image 20240218032628.png]]

![[Pasted image 20240218032651.png]]
integratedTerminal "console":"externalTerminal"
### 3.2.5 3.2.5行长
```python
"editor.rulers": [
    80,120
    ],
```
# 4 卸载：

C:\Users\HUAWEI\AppData\Roaming\Code

用户文件夹下.Code

#插件
# 5 插件推荐：


| chinese  | Python | ruff | Path Intellisense | IntelliCode | Python Test Explorer |
| -------- | ------ | ---- | ----------------- | ----------- | -------------------- |
| Run Code |        |      | Python Indent     |             |                      |

[2023 Visual Studio Code 插件推荐:18 个提高开发效率的常用插件_visual studio code必备插件-CSDN博客](https://blog.csdn.net/2302_76489021/article/details/133874120)

## 5.1 Jupyter，预览调试。
输出结果不换行，解决办法：vscode设置里：
![[Pasted image 20240218032038.png]]
配置Jupyter：[无法导入已安装的包](https://zhuanlan.zhihu.com/p/390887467?utm_id=0)(运行jupyter kernelspec list，找到kernel.json修改
Jupyter Notebook 现已成为数据分析、机器学习的必备工具，因为它可以让数据分析师集中精力向用户解释整个分析过程[Jupyter Notebook介绍、安装及使用教程](https://zhuanlan.zhihu.com/p/33105153)

## 5.2 性能最快的代码分析工具 -- Ruff

必装：Python扩展：搜Python # 代码分析、高亮、规范化等基本功能，必备

Run Code，焦点到终端。

## 5.3 单词纠错:
Code Spell Checker

pip install flake8，pip install yapf[参考](https://zhuanlan.zhihu.com/p/672963498)：被Ruff取代

[Ruff](https://zhuanlan.zhihu.com/p/643439961)提升代码质量，确保代码风格的一致性和正确性。

ordered-set好像是个优化nuitka的东东，pip插件升级参数--upgrade

pip install wordcloud：词云展示第三方库（嵩天）

必装：[智普AI](https://open.bigmodel.cn/usercenter/apikeys)，[安装参考](https://zhuanlan.zhihu.com/p/678228971)
试用KPI：f91eddc3a4af12a20b384dce80b14141.JEsuNrIh1Ea0Dw1O

第三方集成库：[[Anaconda]] [下载](https://www.continuum.io)

标签自动闭合：auto close tag

标签自动重命名：auto rename tag

样式格式化：搜CSS formatter

颜色：color info

代码格式检查：搜ESLint

查看Git历史记录：搜Git History

引用路径智能提示：搜Path Intellisense

调试代码：搜LiveCode for python # 不需要执行，实时展示变量值，能识别print()并自动打印：

实时可视化代码结果，搜：Python Preview#不再维护已弃用

  Python Test Explorer：可视化代码测试，参考[edu.51cto.com](https://edu.51cto.com/lesson/538032.html)

  AREPL 参考：[AREPL安装和介绍-51CTO学堂-ide介绍 python](https://edu.51cto.com/lesson/538037.html)

排序神器：Sort lines

Git正主：[Vscode使用Git详解_vscode git-CSDN博客](https://blog.csdn.net/qq_61402485/article/details/128414029)

Git神器：Git Graph # 清楚当前分支的commit记录和变化，轻易创建或切换分支

  GitLens `#`Git代码管理，代码历史记录、分支管理、代码比较等功能。方便地管理Git代码库

示例代码：python snippets

注释神器：doxygen documentation generator

Better Comments `#`根据关键词用不同颜色高亮代码片段

自动生成函数的注释格式，通过Tab键切换填充块编写相应的注释：Python Docstring Generator

## 5.4 准确缩进：Python Indent

代码提示：Anaconda Extension Pack `#`只能官网下载

  IntelliCode `#`AI辅助生产力功能，其洞察力基于对代码的理解与机器学习相结合。

仅运行指定代码：Code Runner

project manager 轻松管理项目
## 5.5 [通义灵码](https://marker.dotalk.cn/#/?noteidx=H8DE5FM&wucairefx=WCREFX-2728766)
  

[Python数据分析实战① Python实现数据可视化_python数据分析与应用从数据获取到可视化-CSDN博客](https://blog.csdn.net/weixin_62985813/article/details/134459788)

npm模块导入智能提示：搜npm Intellisense

## 5.6 **ChatGPT** 
可绑自己的Key,免魔法,免注册,免费
**使用**：第一次可能让添加自己的key，忽略就行，不添加也能用。
代码上右键 --- chatGPT --- 右侧一系列的功能
# 6 编程工具：Spyder
嵩天老师推荐，非常优秀，Anaconda内自带

# 7 交互式编程环境：Ipython
嵩天老师推荐，Anaconda内自带

参考资料：
[VS Code配置使用 Python，超详细配置指南，看这一篇就够了_vscode python环境配置-CSDN博客](https://blog.csdn.net/weixin_49895216/article/details/131696960)

[[万字长文]Visual Studio Code 配置 C/C++ 开发环境的最佳实践(VSCode + Clangd + XMake)](https://zhuanlan.zhihu.com/p/398790625)

[VC常用快捷键](https://l8ee6a3c0z.feishu.cn/docx/JviQd1m2ioH5IHxYi74cMW1Sn2e)