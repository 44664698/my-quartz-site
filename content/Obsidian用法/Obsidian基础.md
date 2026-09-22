#Obsidian #基础 
# 1 每一篇笔记，双链与标签，必须有其一！
# 2 快捷键清单：
[Obsidian 快捷方式总结](https://blog.csdn.net/qq_57329395/article/details/135278518)
Ctrl+E，阅读模式<==>编辑模式
Ctrl+P，命令面板
Ctrl+L，ToDo
1.加空格：数字列表，可以和ToDo组合使用
Alt+Z，内部链接
# 3 列表加粗
1. 打开你的主题文件夹：
	 在Obsidian的“设置”中，找到“外观”部分，然后点击“主题”选项。
	 在“主题”设置中，选择“浏览”以打开你当前主题的文件夹。
2. 编辑或创建CSS文件：
	 在主题文件夹中，找到名为`obsidian.css`的文件。如果不存在，你可以创建一个新文件并命名为`obsidian.css`。
	 使用文本编辑器打开`obsidian.css`文件。
3. 添加CSS规则：
	在obsidian.css文件中，添加以下CSS规则来加粗列表项：
	```CSS
	.HyperMD-list-line:not(.HyperMD-list-line-nobullet.cm-line), .has-list-bullet{
font-weight: bold;
}
```
4. 保存并在设置中切换文件应用更改。

# 4 双向链接

## 4.1 基本用法：

`[[]]，或快捷键，设置“插入内部链接”
展示名：`[[原展示名|现展示名]]`

## 4.2 标题链接：

`[[笔记名#标题]]`

## 4.3 块链接：

`[[笔记名#^块]]`

## 4.4 别名：

`[[笔记名#^块|别名]]`

## 4.5 展示原文：

`![[笔记名#^块]]`

# 5 MarkDown 语法：

## 5.1 **标签**：

`#接标签名，标签是一个可点击的检索按钮，找到所有同名标签，能组织大量笔记。
不能有空格，不能全数字。符号只允许："-"、"\_"、"/"

## 5.2 嵌套标签：

格式：`#maintag/subtag`前面是主标签，后面是子标签

## 5.3 **标题**：

行首#加空格，几个#代表几号标题，如：

## 5.4 **段落** ：一个空行=多个空行

## 5.5 **序号**：行首减号加空格，如：
- 
## 5.6 **加粗**：**Ctrl+B**，首尾加\*\*

## 5.7 **斜体**：_Ctrl+i_，首尾加\*

## 5.8 **删除线**：前加~~

## 5.9 引用：

### 5.9.1 **块引用**：行首加>，如：

> 协同式项目管理工具

### 5.9.2 **多个段落的块引用**：连空行前也要加>

### 5.9.3 **嵌套块引用**：加多一个>

## 5.10 **注释**：首尾各加 2 个%，阅读时会隐藏
## 5.11 转义符：\
## 5.12 公式：$a*10^{b}$

## 5.13 嵌入

### 5.13.1 **嵌入图片**：
- 方法一：!\[](Base64图片码)
	- PixPin截图保存>>Quicker压缩、下载>>长按Ctrl+C转码。
- 方法二：!\[图片名称](图片地址)，其中，图片名片为可选。
- 方法三：直接拖拽，图片存入根目录/photo 中，也适用于视频、音频等等

### 5.13.2 **嵌入链接**：

方法一：复制、粘贴链接地址 http://www.baidu.com
方法二：拖拽[百度](http://www.baidu.com/?tn=sitehao123_15)

## 5.14 代码展示

**代码**：代码前加反引号
**代码块**：首尾加 3 个反引号，跳出块：Tab 键
**将插入内容嵌入文本中**：`$xxx$`  如：`$\frac{1}{as+1}$`： $\frac{1}{as+1}$
**将内容单独成行**：`$$xxx$$

## 5.15 脚注

方括号内添加插入符(^)和标识符(数字或和字母)。`[^1]`。
**说明**：
1、标识符将脚注参考与脚注关联，输出时将按先后顺序而不按数字。
2、脚注内容前必须有空行。
3、脚注双链。
4、脚注自动展示到文尾。
完整格式：左中括号接插入符接标识符接右中括号接冒号接空格接内容。如： `[^2]: Hello World!`
![[Pasted image 20240216021513.png|800]]
脚注内容为**多段落**时[^2]，换行后先来个制表符：

[^2]: balbalba

    balabala
    balabala

## 5.16 分割

分隔线：单独行，三个或以上星号`(\*\*\*)或减号(---)或下划线(\_\_\_)，不能有其他内容，用减号的话，必须上一行为空。

---

---

---

# 6 Obsidian 扩展语法

## 6.1 **图片大小**：

']'前加'|'，接宽度数值，为等比例调整，再接'x'接高度数值，为不等比例。

## 6.2 **callout 语法**：
`>[!参数]标题内容。参数百度去，花里胡哨的。

```
> [!NOTE] Title
> Content
```

分为四个部分：

- 开头的 >
- 标明 callout 类型的 NOTE
- Callout 的标题 Title
- Callout 的正文 Content

### 6.2.1 Callout 的展开与折叠

> [!NOTE]+ 左边多了个加号
> 代表 Callout 默认展开

> [!NOTE]- 左边多了个减号
> 代表 Callout 默认折叠

### 6.2.2 Callout 的嵌套使用

每到下一层多加个一个  `>`  即可，例如：[[PMP 项目管理]]

> [!question] Can callouts be nested?
>
> > [!todo] Yes!, they can.
> >
> > > [!example] You can even use multiple layers of nesting.

### 6.2.3 种 NOTE：

> [!NOTE]

---

> [!abstract, summary, tld]

---

> [!info]

---

> [!todo]

---

> [!tip, hint, important]

---

> [!success, check, done]

---

> [!question, help, faq]

---

> [!warning, caution, attention]

---

> [!failure, fail, missing]

---

> [!danger, error]

---

> [!bug]

---

> [!example]

---

> [!quote, cite]

## 6.3 **插入视频**：

`<iframe src="https://www.bilibili.com/video/BV1wp4y1c7jp/?p=6&share_source=copy_web&vd_source=304f9d8aae3a339f4776db16707a24f7" scrolling="no" border="0" framespacing="0" allowfullscreen="true" width="500" height="300"></iframe>`

## 6.4 **注释语法**：

<!--这种注释
可以换行-->

%%这种注释不能换行%%

## 6.5 附件

设置：文件与链接：“当前文件所在文件夹下指定的子文件夹中”并设置子文件夹名

## 6.6 分享

1、插件：简单，不支持图片，管理不便
quickshare，不需要设置，右上菜单，点 create share link
2、Obsidian+flowus/notion，其他笔记类软件，对小白友好，需要复制粘贴，注意图片代码语法不同
3、Obsidian+docsify/gitbook/vuepress hexo/hugo，文档博客类，自定义强，对小白不友好

## 6.7 PPT 幻灯片

需要在核心插件中开启，注意分割

