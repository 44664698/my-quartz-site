---
标题: "超详细！图解NumPy教程（一）"
笔记ID: H8D2HC7
笔记类型: page
星标: false
tags: 
域名: mp.weixin.qq.com
域名2: qq.com
作者: "愤怒的it男"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzkxOTQyNjU3Ng==&mid=2247484452&idx=1&sn=352f87efd04d14b183ff70b54c0144e6&chksm=c1a3075bf6d48e4de03f646932635b0a185d2e015099f6acf3f5b2f92c0dd63a938fa20ec58a&mpshare=1&scene=1&srcid=03102leqjTwQwU0Pshygpa5s&sharer_shareinfo=c641cd193cbc000d16a56bb600a6d092&sharer_shareinfo_first=c641cd193cbc000d16a56bb600a6d092#rd"
五彩链接: "https://marker.dotalk.cn/#/?noteidx=H8D2HC7"
划线数量: 0
创建时间: 2024-03-10 00:27
更新时间: 2024-03-10 00:28
---

## 0.1 超详细！图解NumPy教程（一） 


## 0.2 页面笔记


## 0.3 划线列表

## 0.4 全文剪藏
原创 愤怒的it男  愤怒的it男 

NumPy的全称是“Numeric Python”，它是Python的第三方扩展包，主要用来计算、处理一维或多维数组。在数组算术计算方面，NumPy提供了大量的数学函数。NumPy的底层主要用C语言编写，因此它能够高速地执行数值计算。NumPy还提供了多种数据结构，这些数据结构能够非常契合的应用在数组和矩阵的运算上。

![](https://g1proxy.wimg.site/sQmevGZWbho1XfHh6OUaWtindpT623M8O91b30T-7l9c/https://mmbiz.qpic.cn/mmbiz_png/A0ZibbDbu5Mfz5S5jPUqdDyicq7rfr4Gx1MPgXobHrLEATxhxyZbqZ6YmzicAwpxkibiaomLCY2a6zEDptiaDT8LNT3w/640?wx_fmt=png&from=appmsg)

## 0.5 一、数组的创建

NumPy中的数组对象称为ndarray。你可以使用array()函数创建一个NumPy的ndarray对象。

![](https://g1proxy.wimg.site/sr1xbTSlGoEl6RQtodfcKqg8NErvNc049Fgnp5VU6cKQ/https://mmbiz.qpic.cn/mmbiz_png/A0ZibbDbu5Mfz5S5jPUqdDyicq7rfr4Gx1ibcLicxJ9ibrs7n5M6GfUbBicrAicM0pFelxfkCfpgHAfZFl6ZTiayyofuZg/640?wx_fmt=png&from=appmsg)

```
import numpy as np
arr0 = np.array(1)
arr1 = np.array([1, 2, 3, 4])
arr2 = np.array([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]])
arr3 = np.array(
[[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]])

```

NumPy数组提供了ndim属性，该属性返回一个整数，该整数会告诉你数组有多少维。

![](https://g1proxy.wimg.site/sAqvln9x4mGa-HdZ4qg9dO02pR8mWE4qETeDy4BgkehU/https://mmbiz.qpic.cn/mmbiz_png/A0ZibbDbu5Mfz5S5jPUqdDyicq7rfr4Gx1ylLnvoKicTO5ibR3EuS4smj6iaquZkGKshmU1tR91CVFP1M6GGhHoJgZg/640?wx_fmt=png&from=appmsg)

```
print(arr0.ndim) 
print(arr1.ndim) 
print(arr2.ndim) 
print(arr3.ndim)

```

## 0.6 二、数组的索引

数组索引等同于访问数组元素，您可以通过引用其索引号来访问数组元素。NumPy数组中的索引以0开头，这意味着第一个元素的索引为0，第二个元素的索引为1，以此类推。

![](https://g1proxy.wimg.site/sVrIclDcWCA21XbZy2f5j-QRnbS-XcQq51jceKksJNtA/https://mmbiz.qpic.cn/mmbiz_png/A0ZibbDbu5Mfz5S5jPUqdDyicq7rfr4Gx1iaftdEPT8NCDPLGEibKfv5RGTrcXUgAYyia96iblTMyj5DwdVbU3icgVrgg/640?wx_fmt=png&from=appmsg)

```
import numpy as np
arr0 = np.array(1)
arr1 = np.array([1, 2, 3, 4])
arr2 = np.array([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]])
arr3 = np.array(
[[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]])
print(arr1[2]) 
print(arr2[1,3]) 
print(arr3[1,2,3])

```

## 0.7 三、数组的裁切

python中裁切的意思是将元素从一个给定的索引带到另一个给定的索引，你可以像这样传递切片而不是索引：\[start：end：step\]。

* start：起始值，默认为0。
* end：终止值，默认为该维度内数组的长度。
* step：步长，默认为1。

注意：结果包括了开始索引，但不包括结束索引。

![](https://g1proxy.wimg.site/sHTIZ2gE8RCN3eMrGuoDUz6nPIBNqaP6ug5NQxC4gr1w/https://mmbiz.qpic.cn/mmbiz_png/A0ZibbDbu5Mfz5S5jPUqdDyicq7rfr4Gx1exgAh3RVl0IG5HwnCadmqlncWAKPLoXl3V5dmpQn5Us168MIN0NmcA/640?wx_fmt=png&from=appmsg)

```
import numpy as np
arr = np.array([1, 2, 3, 4, 5, 6, 7])
print(arr[1:5])
print(arr[4:])
print(arr[:4])
print(arr[-3:-1])
print(arr[1:5:2])

```

裁切多维数组与一维数组类似。

![](https://g1proxy.wimg.site/sJB-h1_iFEtMHjbOCyolmSTETWlhuhb7--bCV5RxM7RI/https://mmbiz.qpic.cn/mmbiz_png/A0ZibbDbu5Mfz5S5jPUqdDyicq7rfr4Gx1N5yGQ7qZJfQ1eWxPXpFic9pTiaGKbyOeuTzslLHyc2KPQOMaVdxR6nsw/640?wx_fmt=png&from=appmsg)

```
import numpy as np
arr = np.array(
[[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]])
print(arr[1:, 1:, 1:3])

```

## 0.8 四、数组的重塑

重塑意味着更改数组的形状，数组的形状是每个维中元素的数量。通过重塑，你可以添加或删除维度或更改每个维度中的元素数量。

![](https://g1proxy.wimg.site/sXtQQqVy97jN-fl4s405z2byLThw-OhP6AqGvFOaA6AE/https://mmbiz.qpic.cn/mmbiz_png/A0ZibbDbu5Mfz5S5jPUqdDyicq7rfr4Gx1dENb52pljyAdNVics4jXdSIh9YrkDhS3lEvr3UNXmpkJPwtODDoR7iaQ/640?wx_fmt=png&from=appmsg)

```
import numpy as np
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
arr2 = arr.reshape(3, 4)
arr3 = arr.reshape(2, 3, 2)
print(arr2)
print(arr3)

```

你可以使用一个“未知”维度，这意味着您不必在reshape方法中为维度之一指定确切的数字。传递-1作为值，NumPy将为您计算该数字。

## 0.9 五、数组的副本与视图

副本是对原始数组的完整拷贝，二者互相独立，并不互相影响，但是物理内存的开销会加倍。而视图是对原始数据的一种映射，物理内存的开销相对小一些，NumPy的裁切操作就是返回原数据的视图。

![](https://g1proxy.wimg.site/sHXjW3PZocUggPoOjCxc19P47itgY8izhW-0B5wlXs6M/https://mmbiz.qpic.cn/mmbiz_png/A0ZibbDbu5Mfz5S5jPUqdDyicq7rfr4Gx1u2yEY8ePMH8zn94PR7QhQYKTozYXP5ya5doC4ke21YjnaxAakfChyQ/640?wx_fmt=png&from=appmsg)

* 副本拥有数据，对副本所做的任何更改都不会影响原始数组，对原始数组所做的任何更改也不会影响副本。
* 视图不拥有数据，对视图所做的任何更改都会影响原始数组，而对原始数组所做的任何更改都会影响视图。
