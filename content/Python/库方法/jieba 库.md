### 2.7.2 介绍

#### 2.7.2.1 中文文本需要通过分词获得单个词语

#### 2.7.2.2 jieba 是优秀的中文分词第三方库

#### 2.7.2.3 jieba 提供三种分词模式，只需掌握一个函数

### 2.7.3 使用

#### 2.7.3.1 jieba.lcut(s)精确模式，返回一个列表类型的分词结果![[Pasted image 20240217042727.png]]

#### 2.7.3.2 jieba.lcut(s,cut_all=True)全模式，返回一个列表类型的分词结果，存在冗余![[Pasted image 20240217042740.png]]

#### 2.7.3.3 jieba.lcut_for_search(s)搜索引擎模式，返回一个列表类型的分词结果，存在冗余![[Pasted image 20240217042754.png]]

#### 2.7.3.4 jieba.add_word(w)向分词词典增加新词 w

##### 2.7.3.4.1 jieba.add_word("蟒蛇语言")

## 2.8 实例：文本词频统计

### 2.8.1 读取文本：txt=open("\*.txt","r").read()

#### 2.8.1.1 txt=open("threekingdoms.txt","r",encoding="utf-8").read()

### 2.8.2 多元列表排序，以第 1 列为依据，reverse=True 大到小

#### 2.8.2.1 items.sort(key=lambda x:x``[``1],reverse=True)

