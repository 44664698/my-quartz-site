---
tags:
  - Python
---
# 1 Beautiful Soup

## 1.1 解析、遍历、维护“标签树”的功能库

![[Pasted image 20240217031343.png]]

## 1.2 库解析器

### 1.2.1 bs4 的 HTML 解析器 BeautifulSoup(mk,'html.parser') 安装 bs4 库

#### 1.2.1.1 soup=BeautifulSoup(demo, "html.parser")

##### 1.2.1.1.1 soup：解析后存储的变量

### 1.2.2 lxml 的 HTML 解析器 BeautifulSoup(mk,'lxml') pip install lxml

### 1.2.3 lxml 的 XML 解析器 BeautifulSoup(mk,'xml') pip install lxml

### 1.2.4 html5lib 的解析器 BeautifulSoup(mk,'html5lib') pip install html5lib

## 1.3 类的基本元素

### 1.3.1 Tag

#### 1.3.1.1 标签，最基本的信息组织单元，分别用<>和<$/$>标明开头和结尾

##### 1.3.1.1.1 soup.title

##### 1.3.1.1.2 soup.a

###### 1.3.1.1.2.1 获得第一个 a 的标签内容

##### 1.3.1.1.3 类型：bs4.element.Tag

#### 1.3.1.2 html 所有标签都可用 soup.tag 访问获得

### 1.3.2 Name

#### 1.3.2.1 标签的名字，<`p`>...<`/p`>的名字是'p',格式：<`tag`>.name

##### 1.3.2.1.1 soup.a.name

###### 1.3.2.1.1.1 获得第一个 a 的标签名字

##### 1.3.2.1.2 soup.a.parent.name

###### 1.3.2.1.2.1 获得 a 标签的父标签的名字

##### 1.3.2.1.3 soup.a.parent.parent.name

###### 1.3.2.1.3.1 获得 a 标签的爷标签的名字

### 1.3.3 Attributes

#### 1.3.3.1 标签的属性，字典形式组织，格式：<`tag`>.attrs

##### 1.3.3.1.1 tag=soup.a

###### 1.3.3.1.1.1 type(tag)展示标签的类型：

###### 1.3.3.1.1.2 ​bs4.element.Tag

###### 1.3.3.1.1.3 这是 Beautiful Soup 的特有类型

###### 1.3.3.1.1.4 标签内容存放

##### 1.3.3.1.2 tag.attrs

###### 1.3.3.1.2.1 type(tag.attrs)展示标签属性的类型

###### 1.3.3.1.2.2 dict

###### 1.3.3.1.2.3 标签全属性展示

##### 1.3.3.1.3 tag.attrs`['class']`

###### 1.3.3.1.3.1 标签单属性展示

##### 1.3.3.1.4 tag.attrs`['href']`

###### 1.3.3.1.4.1 标签单属性展示

##### 1.3.3.1.5 类型：dict

### 1.3.4 NavigableString

#### 1.3.4.1 标签内非属性字符串，<>...<$/$>中字符串，格式：<`tag`>.string

##### 1.3.4.1.1 soup.p.string

###### 1.3.4.1.1.1 type(soup.p.string)展示格式：

###### 1.3.4.1.1.2 bs4.element.NavigableString

##### 1.3.4.1.2 可以跨越层次：<b></b>没有展示

##### 1.3.4.1.3 类型：根据内容不同而不同

### 1.3.5 Comment

#### 1.3.5.1 标签内字符串的注释部分，一种特殊的 Comment 类型

##### 1.3.5.1.1 注释符号被忽视，只取内容<!xxx>

##### 1.3.5.1.2 只能通过类型来判断：bs4.element.Comment

![[Pasted image 20240217031406.png]]

## 1.4 运用只需两行代码

### 1.4.1 from bs4 import BeautifulSoup

### 1.4.2 存入变量 = BeautifulSoup(html 格式的信息, "html.parser")

## 1.5 .prettify()

### 1.5.1 print(存入变量.prettify())