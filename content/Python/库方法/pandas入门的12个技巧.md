---
标题: "pandas入门的12个技巧"
笔记ID: H87AAK9
笔记类型: page
星标: false
tags: 
域名: mp.weixin.qq.com
域名2: qq.com
作者: "哈希编程"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzkwMzYxODY0Mg==&mid=2247484150&idx=1&sn=72f4cae71db8a42a0354314a7de62e11&chksm=c092cbcbf7e542dd9b222ba95e33e0a4f23639c056920300c1743ba5d104e450dd5d75e1cbf5&mpshare=1&scene=24&srcid=0218USWAOKl0z8ZZcGazWdzs&sharer_shareinfo=8d395e3a518f0e9279f88c4590f48af4&sharer_shareinfo_first=8d395e3a518f0e9279f88c4590f48af4#rd"
五彩链接: "https://marker.dotalk.cn/#/?noteidx=H87AAK9"
划线数量: 0
创建时间: 2024-02-19 17:52
更新时间: 2024-02-19 17:55
---

## 0.1 pandas入门的12个技巧 


## 0.2 页面笔记


## 0.3 划线列表

## 0.4 全文剪藏
原创  PythonTip  哈希编程 

> Pandas 是一个非常流行的 Python 库，它提供了强大、灵活和高性能的数据处理工具。

今天，就为大家总结一下 “Pandas数据处理的12技巧”，拿来即用，随查随用。

![](https://g1proxy.wimg.site/saSz0RBkF-db3TKh6-9kg_qli-TLrRmgLIrR0G3Xob6Q/https://mmbiz.qpic.cn/mmbiz_png/1T16jHpb3huicFog7sZLuAOGG73tdxFNGL6NKGoia9MfE55mG4UaBDYmzhTSWbqeG0EMCicwiaMKoibISeN0W9JVupQ/640?wx_fmt=png&from=appmsg)

今天，就为大家总结一下 “Pandas数据处理的12技巧”，拿来即用，随查随用。

## 0.5 1\. 安装

你还可以使用内置的 Python 工具 pip 安装 Pandas 并运行以下命令:

`$ pip install pandas  
`

安装完成后的提示成功，则可以环境中使用`pandas`包了。

`import pandas  
`

## 0.6 2\. 创建数据列

Pandas一维数组(`数据列`)可以保存任何数据类型。一般通过调用 `pd.Series()` 方法实现，不指定index，默认为0,1,2,3...。

`import pandas  
import numpy

S = pandas.Series(  
    [1, 2, 3, 4],  # 数据  
    index=["a", "b", "c", "d"],  # 指定索引  
    dtype=numpy.int8,  # 指定数据类型  
)  
S.name = "test"  # 创建一维数组的名称  
S.index.name = "index"  # 创建一维数组的索引名称  
print(S)

`

输出:

`index  
a    1  
b    2  
c    3  
d    4  
Name: test, dtype: int8  
`

## 0.7 3\. 创建数据框

创建具有列的二维数据结构的对象(数据框)。一般通过调用 `pd.DataFrame()` 方法实现，不指定index，默认为0,1,2,3...。

`import pandas

dat_list = [  
    [1, 2, 3],  
    [4, 6, 8],  
    [10, 11, 12],  
]  
df = pandas.DataFrame(  
    dat_list,  
    index=["i1", "i3", "i2"],  
    columns=["a", "b", "c"],  
)  
print(df)

`

输出:

`     a   b   c  
i1   1   2   3  
i3   4   6   8  
i2  10  11  12  
`

## 0.8 4\. CSV文件的读写

Pandas 支持从 CSV的读写，我们用 `pd.read_csv()` 和 `pd.to_csv()` 方法来实现。

`import pandas

d = {  
    "A": [1, 2, 3],  
    "B": [4, 5, 6],  
    "C": [7, 8, 9],  
    "D": [10, 11, 12],  
}  
df = pandas.DataFrame(d, index=["i2", "i1", "i3"])  
print(df)  
df.to_csv("output/test.csv") # 导出到CSV文件  
dfnew = pandas.read_csv("output/test.csv", index_col=0) # index_col=0 表示第一列为索引  
print(dfnew)

`

## 0.9 5\. Excel文件的读写

Pandas 支持从 Excel的读写，我们用 `pd.read_excel()` 和 `pd.to_excel()` 方法来实现。

`import pandas

d = {  
    "A": [1, 2, 3],  
    "B": [4, 5, 6],  
    "C": [7, 8, 9],  
    "D": [10, 11, 12],  
}  
df = pandas.DataFrame(d, index=["i2", "i1", "i3"])  
print(df)  
df.to_excel("output/test.xlsx") # 导出到excel  
dfnew = pandas.read_excel("output/test.xlsx", index_col=0) # index_col=0 表示第一列为索引  
print(dfnew)

`

## 0.10 6\. 通过位置选择值

Pandas 支持通过位置选择值，我们用 `df.iloc[row_index, column_index]` 来实现。

`import pandas

d = {  
    "A": [1, 2, 3],  
    "B": [4, 5, 6],  
    "C": [7, 8, 9],  
    "D": [10, 11, 12],  
}  
df = pandas.DataFrame(d, index=["i2", "i1", "i3"])  
print(df)

print(df.iloc[2, 1])  # 6 结果为一个值  
print(df.iloc[[2], [1]])  # 结果为一个元素的数据框  
print(df.iloc[1:3, :])  # 结果为一个数据框

`

输出:

`    A  B  C   D  
i2  1  4  7  10  
i1  2  5  8  11  
i3  3  6  9  12  
6  
    B  
i3  6  
    A  B  C   D  
i1  2  5  8  11  
i3  3  6  9  12  
`

## 0.11 7\. 通过名称选择值

Pandas 支持通过名称选择值，我们用 `df.loc[row_name, column_name]` 来实现。

`import pandas

d = {  
    "A": [1, 2, 3],  
    "B": [4, 5, 6],  
    "C": [7, 8, 9],  
    "D": [10, 11, 12],  
}  
df = pandas.DataFrame(d, index=["i2", "i1", "i3"])  
print(df)

print(df.loc["i2", "C"])  # 6 结果为一个值  
print(df.loc[["i2"], ["C"]])  # 结果为一个元素的数据框  
print(df.loc[["i2", "i3"], ["A", "D"]])  # 切片

`

输出:

`    A  B  C   D  
i2  1  4  7  10  
i1  2  5  8  11  
i3  3  6  9  12  
7  
    C  
i2  7  
    A   D  
i2  1  10  
i3  3  12  
`

## 0.12 8\. 标签可以重复么？

这是一个有意思的问题，如果重复了如何取值呢，如何去掉重复呢？

`import pandas

d = {  
    "A": [1, 2, 3],  
    "B": [4, 5, 6],  
    "C": [7, 8, 9],  
    "D": [10, 11, 12],  
}  
df = pandas.DataFrame(d, index=["i2", "i1", "i2"])  
print(df)  
print(df.loc["i2", "C"])  
df.columns = ["A", "B", "B", "D"]  
print(df)  
print(df.loc["i2", "B"])

`

输出:

`    A  B  C   D  
i2  1  4  7  10  
i1  2  5  8  11  
i2  3  6  9  12  
i2    7  
i2    9  
Name: C, dtype: int64  
    A  B  B   D  
i2  1  4  7  10  
i1  2  5  8  11  
i2  3  6  9  12  
    B  B  
i2  4  7  
i2  6  9  
`

## 0.13 9\. 删除行/列

Pandas 支持删除行/列，我们用 `df.drop([col/row name], axis=0/1)` 来实现。

`import pandas

d = {  
    "A": [1, 2, 3],  
    "B": [4, 5, 6],  
    "C": [7, 8, 9],  
    "D": [10, 11, 12],  
}  
df = pandas.DataFrame(d, index=["i2", "i1", "i3"])  
print(df)  
df.drop(  
    ["i2", "i1"],  
    axis=0,  # axis=0删除行，axis=1删除列  
    inplace=True, # 如果为True，则在原数据上进行操作，否则，创建一个新的数据对象  
    errors="ignore",  # 忽略不存在的列  
)  
print(df)

`

输出:

`    A  B  C   D  
i2  1  4  7  10  
i1  2  5  8  11  
i3  3  6  9  12  
    A  B  C   D  
i3  3  6  9  12  
`

## 0.14 10\. 在最后增加列

`import pandas

d = {  
    "A": [1, 2, 3],  
    "B": [4, 5, 6],  
    "C": [7, 8, 9],  
    "D": [10, 11, 12]  
}  
df = pandas.DataFrame(d, index=["i2", "i1", "i3"])  
print(df)  
df['E'] = 0  
print(df)

`

输出为:

`    A  B  C   D  
i2  1  4  7  10  
i1  2  5  8  11  
i3  3  6  9  12  
    A  B  C   D  E  
i2  1  4  7  10  0  
i1  2  5  8  11  0  
i3  3  6  9  12  0  
`

## 0.15 11\. 在最后增加行

`import pandas

d = {  
    "A": [1, 2, 3],  
    "B": [4, 5, 6],  
    "C": [7, 8, 9],  
    "D": [10, 11, 12],  
}  
df = pandas.DataFrame(d, index=["i2", "i1", "i3"])  
print(df)  
df = df.append(  
    pandas.DataFrame({"A": 13, "B": 14, "C": 15, "D": 16}, index=["i4"]),  
    ignore_index=True,  
)  
print(df)

`

输出：

`    A  B  C   D  
i2  1  4  7  10  
i1  2  5  8  11  
i3  3  6  9  12  
    A   B   C   D  
0   1   4   7  10  
1   2   5   8  11  
2   3   6   9  12  
3  13  14  15  16  
`

## 0.16 12\. 通过标签(索引或列名)排序

`import pandas

d = {  
    "A": [1, 2, 3],  
    "B": [4, 5, 6],  
    "C": [7, 8, 9],  
    "D": [10, 11, 12]  
}

df = pandas.DataFrame(d, index=["i2", "i1", "i3"])  
print(df)  
df = df.sort_index(  
    axis=0, # axis=0 按行标签排序，axis=1 按列标签排序  
    level=None,  
    ascending=True, # 是否升序  
    inplace=False, # 是否修改原数据  
    kind="quicksort", # 排序算法  
    na_position="last", # 如果有NA值，放在最后  
    sort_remaining=True, # 是否排序剩余列  
)  
print(df)

`

输出:

`    A  B  C   D  
i2  1  4  7  10  
i1  2  5  8  11  
i3  3  6  9  12  
    A  B  C   D  
i1  2  5  8  11  
i2  1  4  7  10  
i3  3  6  9  12  
`

## 0.17 总结

上面分享的pandas入门的12个技巧，希望对你有所帮助。

欢迎大家点赞、收藏，支持！

**PythonTip** 出品，Happy Coding！
