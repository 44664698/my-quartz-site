---
标题: "图解 Numpy，看这一篇就够了！"
笔记ID: H87AAAD
笔记类型: page
星标: false
tags: 
域名: mp.weixin.qq.com
域名2: qq.com
作者: "笑傲算法江湖"
原文链接: "http://mp.weixin.qq.com/s?__biz=MzU5NzkyMTYzNw==&mid=2247508571&idx=1&sn=eef93dd087b3f72d834ba7fff7a8a7fb&chksm=fe4ef851c939714774546884c22e1389e1aab1cfa9b925689c907f3e93e36425e63b2054c243&mpshare=1&scene=24&srcid=0218EGlaSOaRFktsiIMviWIL&sharer_shareinfo=159f0a24842e23d34e3f0a501391e29b&sharer_shareinfo_first=159f0a24842e23d34e3f0a501391e29b#rd"
五彩链接: "https://marker.dotalk.cn/#/?noteidx=H87AAAD"
划线数量: 0
创建时间: 2024-02-19 17:54
更新时间: 2024-02-19 18:05
---
![](https://g1proxy.wimg.site/sjAZ9DyDa5LYBImiILQFUwSfj3_2i6o3h-R1T45iikFg/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FcmS6UH4YpDZKYhG8GwmWXQB7jDjt8xUOmokBdGia7nOgF8ISFCc6EUQ/640?wx_fmt=png&from=appmsg)

教程内容分为**向量 （一维数组）**、**矩阵 （二维数组）**、**三维与更高维数组**3个部分。
![](https://g1proxy.wimg.site/sZu2X6KYr5MPIB-8ZIh7_CV5qfdi01xcDjcfDbvZMBlw/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FnPgmAiamyzhUTo6lEx8Awgw1FMhB4E3qiafpJibO7RsBLfJV4kJRBKnCg/640?wx_fmt=png&from=appmsg)
## 0.1 Numpy数组与Python列表

在介绍正式内容之前，先让我们先来了解一下Numpy数组与Python列表的区别。

乍一看，NumPy数组类似于Python列表。它们都可以用作容器，具有获取（getting）和设置（setting）元素以及插入和移除元素的功能。

两者有很多相似之处，以下是二者在运算时的一个示例：



和Python列表相比，Numpy数组具有以下特点：

更紧凑，尤其是在一维以上的维度；向量化操作时比Python列表快，但在末尾添加元素比Python列表慢。

![](https://g1proxy.wimg.site/spRV7Uaa8ohtzRoiMWuzqM6FekrHyuOJJArJkDrglCQo/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7F5HxNZUdIkNst6I57mOwtAxFrtc4p6cSkqw4ryRm3KxhaOvWVeDlfSA/640?wx_fmt=png&from=appmsg)

△在末尾添加元素时，Python列表复杂度为O(1)，NumPy复杂度为O(N)

## 0.2 向量运算

## 0.3 向量初始化

创建NumPy数组的一种方法是从Python列表直接转换，数组元素的类型与列表元素类型相同。

![](https://g1proxy.wimg.site/sa0msqyyLxV7Z8l-9tp7WhkHIhCn-9LMenBAAsvVKiZo/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FkmyzKmiaV3LcqOZfz2GtejfTJ44r2icWLnlyrlic8icozJIpFUf65X6KkA/640?wx_fmt=png&from=appmsg)

NumPy数组无法像Python列表那样加长，因为在数组末尾没有保留空间。

因此，常见的做法是定义一个Python列表，对它进行操作，然后再转换为NumPy数组，或者用np.zeros和np.empty初始化数组，预分配必要的空间：

![](https://g1proxy.wimg.site/sz52kl5_e1i4w7YntXk1dGsienL8a2nJSg-EPqa5BySU/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FUOKRWPh7fxibzpIIibb6viamoUuoSIx6krtSN6fPA4xKAkcghFDxDHAUw/640?wx_fmt=png&from=appmsg)

有时我们需要创建一个空数组，大小和元素类型与现有数组相同：

![](https://g1proxy.wimg.site/sPPDvaZui5RWNdoS1lzorIPAmoenC2IbG0Ml9uo_-BOA/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7Fic4RhMosVIIag771vzsqzkntufkprjmfXG3R3yzVDXLqR8tlbNWDoqQ/640?wx_fmt=png&from=appmsg)

实际上，所有用常量填充创建的数组的函数都有一个\_like对应项，来创建相同类型的常数数组：

![](https://g1proxy.wimg.site/snLgaTRHuRYtdGqUhUE5NpU5wYNeKv360_vZ_3l7Tv8Y/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FYBBrib3CDjhAg9pqIQ537AyPp70fCWxpLIB7o4qjzyMfmicZrqkdSBmQ/640?wx_fmt=png&from=appmsg)

在NumPy中，可以用arange或者linspace来初始化单调序列数组：

![](https://g1proxy.wimg.site/sidDUl6_SDoE0z77RSaSsTYYVOipqJp2Q9WrPdMgaCg4/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7Fy4pjeF6t9MwDCEXhkagBQ4uw8DjJvMBH49g69yyIKxKcicUv8DKmTpg/640?wx_fmt=png&from=appmsg)

如果需要类似\[0., 1., 2.\]的浮点数组，可以更改arange输出的类型：arange(3).astype(float)。

但是有更好的方法：arange函数对数据类型敏感，如果将整数作为参数，生成整数数组；如果输入浮点数（例如arange(3.)），则生成浮点数组。

但是arange在处理浮点数方面并不是特别擅长：

![](https://g1proxy.wimg.site/scvZar8qi5mc5240Hkcc46ue7pK5viXk-h2Q3DTiS5AA/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FPX1bKsP4o9GXDS9BjdTxPX86iafXibSL3bfbFvzEDoczo0B9P9Xqmv2g/640?wx_fmt=png&from=appmsg)

这是因为0.1对于我们来说是一个有限的十进制数，但对计算机而言却不是。在二进制下，0.1是一个无穷小数，必须在某处截断。

这就是为什么将小数部分加到步骤arange通常是一个不太好的方法：我们可能会遇到一个bug，导致数组的元素个数不是我们想要的数，这会降低代码的可读性和可维护性。

这时候，linspace会派上用场。它不受舍入错误的影响，并始终生成要求的元素数。

出于测试目的，通常需要生成随机数组，NumPy提供随机整数、均匀分布、正态分布等几种随机数形式：

![](https://g1proxy.wimg.site/st05K-qgQwY6Ql_5mv9TVQu5MI-0GEsK_VuAEvO7wPF8/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7F2vtK0T2IBq2EmJvt2ff5ucG7dxrYjkxPuibd7meqropic8rpvic8effpA/640?wx_fmt=png&from=appmsg)

## 0.4 向量索引

一旦将数据存储在数组中，NumPy便会提供简单的方法将其取出：

![](https://g1proxy.wimg.site/sOkI3ZRFlr6_mEqBDusZXamgoaeZO5donh7CM7j0MR88/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FKqLpE6hnmHibFRWticEdoQz5ibIK0UiaKT7RgtxSc8etnQzZsIYCq4QK8Q/640?wx_fmt=png&from=appmsg)

上面展示了各式各样的索引，例如取出某个特定区间，从右往左索引、只取出奇数位等等。

但它们都是所谓的view，也就是不存储原始数据。并且如果原始数组在被索引后进行更改，则不会反映原始数组的改变。

这些索引方法允许分配修改原始数组的内容，因此需要特别注意：只有下面最后一种方法才是复制数组，如果用其他方法都可能破坏原始数据：

![](https://g1proxy.wimg.site/spDNRvRfCl0DMH3bSNFx0zfr22OqFeEAXOxFkBM8B8B0/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7Fsu2Ise6BGliasRP5uEFJvVcic22n3wg4ljcn5WHtYtw3sHSs1yYZQbog/640?wx_fmt=png&from=appmsg)

从NumPy数组中获取数据的另一种超级有用的方法是布尔索引，它允许使用各种逻辑运算符，来检索符合条件的元素：

注意：Python中的三元比较3<=a<=5在NumPy数组中不起作用。

如上所述，布尔索引也会改写数组。它有两个常见的函数，分别是np.where和np.clip：

![](https://g1proxy.wimg.site/sX3pYKtrM8NsXrf1JO9xhic_wV6DEpDPRpEmFaNDKKUk/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FPvlPls5LGlRALzJTTsia5ZLbzAX7XJ0kx75zicPcH2grHgfRZzZ5Cl6Q/640?wx_fmt=png&from=appmsg)

## 0.5 向量运算

算术运算是NumPy速度最引入注目的地方之一。NumPy的向量运算符已达到C++级别，避免了Python的慢循环。

NumPy允许像普通数字一样操作整个数组（加减乘除、整除、幂）：

![](https://g1proxy.wimg.site/sb9W2bEM_fX6ZAEOEGShJEWEKQ_PJ5Zv--s-y91oyDdk/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7F1uqHCk2hDicF3S54O9Zbq7sNcGOjT3ibj3R2ducLRQdqCzpzl8mp2alQ/640?wx_fmt=png&from=appmsg)

△ 和Python中一样，a//b表示div b（整除），x\*\*n表示xⁿ 向量还可以与标量进行类似的运算，方法相同：

![](https://g1proxy.wimg.site/sYI4zxLUVlddlMwNcMr-tbEk7PONmp49381yXlZ8l4Xs/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7F86baSuWZ3hwLicF8jFmLgnZPcBNSUUNPG9fmcgqAUwtEylwibgDsw78g/640?wx_fmt=png&from=appmsg)

大多数的数学函数都有NumPy对应项用于处理向量：

![](https://g1proxy.wimg.site/sBCKQ6UCkJ1XagN5GDp8aOgUnGY3Cb8-vo4NSe1CM8Y8/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7F7UZw4ibJY96Kia0uruVQ0LAq4XoJ8BKwDfDhUGOxQxGNGttIVuBahibjg/640?wx_fmt=png&from=appmsg)

向量的点积、叉积也有运算符：

![](https://g1proxy.wimg.site/s66uPYyK7tMuhGhIdGsTaGwnFpDpYNYM3gxRI5Teqbww/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7F0BkS8hAsPIcyibeDScicMTgZ4IhhQnDRpZ5629M5zWgaiacUtvgABRrOg/640?wx_fmt=png&from=appmsg)

我们也可以进行三角函数、反三角函数、求斜边运算：

![](https://g1proxy.wimg.site/sraMC0F21qDLf9Bgnhra9Z6W6rlxP3HBBYi0cQg_fAHE/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FKV7tGCBjXsjnFqOqs4kibJcEuD5hmRIjLicD6JC95xFqneSGuN8eicusQ/640?wx_fmt=png&from=appmsg)

数组可以四舍五入为整数：

![](https://g1proxy.wimg.site/sTN5vrS3ttKJXrzYtf9xklPQBhLNDFUZcYGdrBmExc28/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7F6lMdWTQtsrbSYPkWCTSEsrl0mfQ8BEX9FWX1EfWaWftALUbFrvW3sA/640?wx_fmt=png&from=appmsg)

△ floor取下界；ceil取上界；round为四舍六入五取偶

NumPy还可以执行以下基本的统计运算（最大最小值、平均值、方差、标准差）：

![](https://g1proxy.wimg.site/s-FdMa70wROZ0DLug1zgs5lsxVC7woKNKAGJIzhWat4g/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7F8CF7PbxF9hjl08GgkSbwzNYpzwsfO1SmEcaMKb9Io7ECYfVmtmIADw/640?wx_fmt=png&from=appmsg)

不过排序函数的功能比Python列表对应函数更少：

![](https://g1proxy.wimg.site/sxDmlkvr_jdP8hveXpr800rq8bh2_Xfefz-pu0swKrlQ/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7Fbz973xQkiborleXlcm3vJjNbowF0PnhDyWyibW8Fyc44KUygtpjxDicLw/640?wx_fmt=png&from=appmsg)

## 0.6 搜索向量中的元素

与Python列表相反，NumPy数组没有index方法。

![](https://g1proxy.wimg.site/sgDVAljWdhU_31-v9M-mcbsyBeGlt_xHy270MtA4bZdg/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FiadNDnkhSFgthJmHiaia8s0rx6uU0axZfDdWtjsQL4BzAUeEHiaeZib3CVg/640?wx_fmt=png&from=appmsg)

* 查找元素的一种方法是np.where(a==x)\[0\]\[0\]，它既不优雅也不快速，因为要查找的项需要从开头遍历数组的所有元素。
* 更快的方式是通过Numba中的next((i\[0\] for i, v in np.ndenumerate(a) if v==x), -1)来加速。
* 一旦对数组进行排序，情况就会变得更好：v = np.searchsorted(a, x); return v if a\[v\]==x else -1的复杂度为O(log N)，确实非常快，但是首先需要O(N log N)的排序时间。

## 0.7 比较浮点数

函数np.allclose(a, b)用于比较具有给定公差的浮点数组：

![](https://g1proxy.wimg.site/szSK_i2tW45NoMBo9PNdfa00ZZCHOOKAJRAVp2PbyS1g/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7Fom6NicdcHAvLEdS1ibIaFvewurs5mGYgVv7eI9HAXoR3odmicf6ZpreaQ/640?wx_fmt=png&from=appmsg)

* np.allclose假设所有的比较数字的等级是1个单位。例如在上图中，它就认为1e-9和2e-9相同，如果要进行更细致的比较，需要通过atol指定比较等级1：np.allclose(1e-9, 2e-9, atol=1e-17) == False。
* math.isclose进行比较没有假设前提，而是基于用户给出的一个合理abs\_tol值：math.isclose(0.1+0.2–0.3, abs\_tol=1e-8) == True。

除此之外np.allclose在绝对和相对公差公式中还存在一些小问题，例如，对某些数存在allclose(a, b) != allclose(b, a)。这些问题已在math.isclose函数中得到解决。

## 0.8 矩阵运算

NumPy中曾经有一个专用的类matrix，但现在已弃用，因此下面将交替使用矩阵和2D数组两个词。

矩阵初始化语法与向量相似：

![](https://g1proxy.wimg.site/smyK8D7uVr8B0KMGR351vOcpyX2iaLSiOk2O80QIsHYU/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7Fa1Vu73S44iaZdX41KhkCyBu8LiabqJ9vibsCiaXXQJWPO0xplcRSl9s1Wg/640?wx_fmt=png&from=appmsg)

这里需要双括号，因为第二个位置参数是为dtype保留的。

随机矩阵的生成也类似于向量的生成：

![](https://g1proxy.wimg.site/sgJKxj7CipQoEXNs3b75WtR4vo27aKUK-QJPehOCJ-D8/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FsUpKTQc9dH2tI03pmnBHdR7rMsmH8FlyMw6VNqZhIS1wASZ8XkzTwA/640?wx_fmt=png&from=appmsg)

二维索引语法比嵌套列表更方便：

![](https://g1proxy.wimg.site/sa5BuRFn5O2gFW4WzbWqCxdBWKLFs-cQa0EWTZQPfNkM/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FKv2KklPft9gNGFbibkbIJo7q6gEBicIHqzggZXKlyrq9tLLVIVmqm6Iw/640?wx_fmt=png&from=appmsg)

和一维数组一样，上图的view表示，切片数组实际上并未进行任何复制。修改数组后，更改也将反映在切片中。

## 0.9 axis参数

在许多操作（例如求和）中，我们需要告诉NumPy是否要跨行或跨列进行操作。为了使用任意维数的通用表示法，NumPy引入了axis的概念：axis参数实际上是所讨论索引的数量：第一个索引是axis=0，第二个索引是axis=1，等等。

因此在二维数组中，如果axis=0是按列，那么axis=1就是按行。

![](https://g1proxy.wimg.site/sLam2pteIyIJvQtsJpjx299CmJQMVSf3Q50muiwGBGmg/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7F8fQ21ROOeT1OJA0PMP3BQibHS1UINhDOcZfaMgKw1nqm9jONpzyiaibjg/640?wx_fmt=png&from=appmsg)

## 0.10 矩阵运算

除了普通的运算符（如+，-，\*，/，//和\*\*）以元素方式计算外，还有一个@运算符可计算矩阵乘积：

![](https://g1proxy.wimg.site/sLuT1ON3SLEmcpuEwHu0VOoIDk7rILiGguoPBzLxYhc8/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7F9XaDUlPpaJpLY6Irk9OZWXiaTVAwwZJGmlYYdDZAMNvuRib968E3EPFA/640?wx_fmt=png&from=appmsg)

在第一部分中，我们已经看到向量乘积的运算，NumPy允许向量和矩阵之间，甚至两个向量之间进行元素的混合运算：

## 0.11 行向量与列向量

从上面的示例可以看出，在二维数组中，行向量和列向量被不同地对待。

默认情况下，一维数组在二维操作中被视为行向量。因此，将矩阵乘以行向量时，可以使用(n，)或(1，n)，结果将相同。

如果需要列向量，则有转置方法对其进行操作：

![](https://g1proxy.wimg.site/sFmsSU1IEcUyA37S4I63FYaQ0D5mKIFNa7K5VyhXHlEw/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FNMPGPAgLZww2jUsAWQB0zLVT2y7MyJYfxqu5p5W9O2mwQdyBhzIqzA/640?wx_fmt=png&from=appmsg)

能够从一维数组中生成二位数组列向量的两个操作是使用命令reshape重排和newaxis建立新索引：

![](https://g1proxy.wimg.site/saN3Om0SlLUwsI06OfpPVlBXGH2JXiRu2x4t5TTnP6Lw/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FH0K4ZkFK1M7GRFmBU63o6V0PXPMY6HUyDHVvzWfCUuTqTdI45Q1S3w/640?wx_fmt=png&from=appmsg)

这里的-1参数表示reshape自动计算第二个维度上的数组长度，None在方括号中充当np.newaxis的快捷方式，该快捷方式在指定位置添加了一个空axis。

因此，NumPy中总共有三种类型的向量：一维数组，二维行向量和二维列向量。这是两者之间显式转换的示意图：

![](https://g1proxy.wimg.site/sSv_OcnyBKH8FWIiQ1j366wMqi0ZcmJNNB-adu42d7kk/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7Fqxkjg3VJuAobzuR4ONM7cmcwubQI9uLViaETak0rgkPquOBupSQQsNw/640?wx_fmt=png&from=appmsg)

根据规则，一维数组被隐式解释为二维行向量，因此通常不必在这两个数组之间进行转换，相应区域用灰色标出。

## 0.12 矩阵操作

连接矩阵有两个主要函数：

![](https://g1proxy.wimg.site/sk8w1ZeRZ6x2jN7ueK2ofYTAcb4eRGNJlJhzSMp6BaVM/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FdQ6eP5I3NwcWn3Bl5pdFwEia7j5w3DJiaqt1W6S5ialsSsGFAEspVAtBg/640?wx_fmt=png&from=appmsg)

这两个函数只堆叠矩阵或只堆叠向量时，都可以正常工作。但是当涉及一维数组与矩阵之间的混合堆叠时，vstack可以正常工作：hstack会出现尺寸不匹配错误。

因为如上所述，一维数组被解释为行向量，而不是列向量。解决方法是将其转换为列向量，或者使用column\_stack自动执行：

![](https://g1proxy.wimg.site/so2FT3ZlL9PalSMGWyXnF5FjkHcxFjsEx76rmot2du-Q/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FvEeHnw7nGb94hpu0qqIPryzibFiaqlibzrwVLAibUfXQ1mcPkbqzeD7bnA/640?wx_fmt=png&from=appmsg)

堆叠的逆向操作是分裂：

![](https://g1proxy.wimg.site/sT6-Ns0inIFTWhW89nd0Rq0Eq6GNFJlzSVkdw-g6ohlc/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FV5SzlCxnTyVDkXzymqxh2bibKXTN0D8aYiaSVuEbOqrY4UicH0V4rcF9Q/640?wx_fmt=png&from=appmsg)

矩阵可以通过两种方式完成复制：tile类似于复制粘贴，repeat类似于分页打印。

![](https://g1proxy.wimg.site/sFE4T5SPP3V6gDUU2F-L4lfHPs8J-p1Wf33yFqOX_HMU/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FXR6jmMxXwAnOOzibJhQ0ZuPYpPvJ73tSc8ZibuwibVOwrj6vicOqPJNRlQ/640?wx_fmt=png&from=appmsg)

特定的列和行可以用delete进行删除：

![](https://g1proxy.wimg.site/sOQiAyplM8Sub6I6E7fwr1OVIZriPdTDAUN6V6_Y5txs/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FicD4QDQib0HMANrJ1ibia4ek5kfibxVDLGBibic5jaGXG7gUqHyibFQ5CPB6hA/640?wx_fmt=png&from=appmsg)

逆运算为插入：

![](https://g1proxy.wimg.site/sZ3vxW1YptHtPTrKtyIdSbUUP_wZ75yMqcdJn2fAJIsY/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FZO1B3ialOptnlSd1EgibblTQ5ngF2f8Tw1p327LwsibI9UjTb0ib6Cs3vg/640?wx_fmt=png&from=appmsg)

append就像hstack一样，该函数无法自动转置一维数组，因此再次需要对向量进行转置或添加长度，或者使用column\_stack代替：

![](https://g1proxy.wimg.site/sbuovJwSuvVTsXYsbaX7WzOmZVjpMeJDN6McJEY3jF8s/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FSIr84iaKGWK6Kbu6V7OxbHEWoUnl0HlJjyMkJLJRchzxo1ElggOKkqw/640?wx_fmt=png&from=appmsg)

实际上，如果我们需要做的就是向数组的边界添加常量值，那么pad函数就足够了：

![](https://g1proxy.wimg.site/sndvYyhIJZELoSd3L8ZCHgv5ReFQaVwCdadEZjuPELkU/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FKzEV2Nwlzfe9MAqialwrib500I7Uxz1VJAic5J1o5nOFTgdrZTzZ2qF4g/640?wx_fmt=png&from=appmsg)

## 0.13 Meshgrid

如果我们要创建以下矩阵：

![](https://g1proxy.wimg.site/s7LYfAnqlGosMb_lrm9lFCJIPDeUojpkM7RADnSMvwmg/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FUtl5X4Atx6I6vDl8Faama4XKibpZhGWKepVKFkgrXkhQC70yXdm3thA/640?wx_fmt=png&from=appmsg)

两种方法都很慢，因为它们使用的是Python循环。在MATLAB处理这类问题的方法是创建一个meshgrid：

![](https://g1proxy.wimg.site/sDNR9PajUT4mzN5_OhJhdEB_MWd3mAVHmiTDpW9RQOmU/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7F1FicPgWTLhzsXBYn4eyYicAvSWVA2J9zzOBMbvOaeiaH2AFPockjKUtJw/640?wx_fmt=png&from=appmsg)

该meshgrid函数接受任意一组索引，mgrid仅是切片，indices只能生成完整的索引范围。fromfunction如上所述，仅使用I和J参数一次调用提供的函数。

但是实际上，在NumPy中有一种更好的方法。无需在整个矩阵上耗费存储空间。仅存储大小正确的矢量就足够了，运算规则将处理其余的内容：

![](https://g1proxy.wimg.site/sTzTRfRvPNTG4rZai-N9_Y-V95XO1DWud5T1jfAxbhAs/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FdGRT5xWJ6FfBTyEiapeJo5EkfMZiaK0uPo8GVNyQxHKuVNiaXP0r1h0CA/640?wx_fmt=png&from=appmsg)

在没有indexing=’ij’参数的情况下，meshgrid将更改参数的顺序：J, I= np.meshgrid(j, i)—这是一种“ xy”模式，用于可视化3D图。

除了在二维或三维数组上初始化外，meshgrid还可以用于索引数组：

![](https://g1proxy.wimg.site/sFHNL8RbbsGU8VC41t2aqzr_xWUa_I_2pnBs76ZRe7e8/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FqHyGicj0nIFeK0FqS5XFQS1fGLvBRlCXXowbgE3H1eNU5MK3pDxXtzA/640?wx_fmt=png&from=appmsg)

## 0.14 矩阵统计

就像之前提到的统计函数一样，二维数组接受到axis参数后，会采取相应的统计运算：

![](https://g1proxy.wimg.site/sbwgCzrYeDuTPXaf4ICDFvFmwKcsNlzYZvZepJX_JAXg/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FVvO1AKApsoI0QoUe6PauPjxTmnos9lqCiaE8ufjvpwFn7ZsYN6GzuiaA/640?wx_fmt=png&from=appmsg)

二维及更高维度中，argmin和argmax函数返回最大最小值的索引：

![](https://g1proxy.wimg.site/s45Djf3ERg-YnxA7g22QJhLp53FTM3W8XkhVNSbGF8_g/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FdlsfQVTy9P8pfWkMFiadtGzIahCU6gu4N7HsfVYS0G5H6jGF5WHg69A/640?wx_fmt=png&from=appmsg)

all和any两个函数也能使用axis参数：

![](https://g1proxy.wimg.site/sSxelA9MUXEM00wpS4BuMYM7Q37KkmRfe5me1_6oxTGw/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FMic0fx2qM2xZkuHPWGG5yysVXR3UddwGRAZlfXP2miaXcpXQIkIjlMEQ/640?wx_fmt=png&from=appmsg)

## 0.15 矩阵排序

尽管axis参数对上面列出的函数很有用，但对二维排序却没有帮助：

![](https://g1proxy.wimg.site/sam7jDYNkUxx6hZoMVNUa0WLO_DzBgieSOTh0Bi6HVdY/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FTCaSicZx0dJQBGicHh8viaiajGzb4S5EQVt4akNE2TQMFgoCSO59xauTew/640?wx_fmt=png&from=appmsg)

axis绝不是Python列表key参数的替代。不过NumPy具有多个函数，允许按列进行排序：

1、按第一列对数组排序：a\[a\[:,0\].argsort()\]

![](https://g1proxy.wimg.site/sLyCizLGUS47AF6atFEWxAhw8-YUjMjuGAum_4DVc2b0/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7Fj7bJnibvGKqrcsQwQXb4iaxYXc1tIByWVZr5K4OicvqRMFKK8IpcWzpfg/640?wx_fmt=png&from=appmsg)

argsort排序后，此处返回原始数组的索引数组。

此技巧可以重复，但是必须小心，以免下一个排序混淆前一个排序的结果：

```
a = a[a[:,2].argsort()]
a = a[a[:,1].argsort(kind='stable')]
a = a[a[:,0].argsort(kind='stable')]

```

![](https://g1proxy.wimg.site/spr0rCvb0Q0mXOCv5FewJZMQ-MucGXhqbPKL4T3fzejo/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FXDB5tWsBxbicW3YWLqCItNiarukibB1yLEZLlBTIFG7VKLWofibZuF1wrw/640?wx_fmt=png&from=appmsg)

2、有一个辅助函数lexsort，该函数按上述方式对所有可用列进行排序，但始终按行执行，例如：

* a\[np.lexsort(np.flipud(a\[2,5\].T))\]：先通过第2列排序，再通过第5列排序；
* a\[np.lexsort(np.flipud(a.T))\]：按从左到右所有列依次进行排序。

![](https://g1proxy.wimg.site/s6zfumH3g-ZOP8WVYIbm8CB6cajI6_PReCws-SH3GJN4/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FR0GAubKjBia41ia801YK75G1XasmtrWqJ1K0Y7eESzD2uuiaLgXa0TmUg/640?wx_fmt=png&from=appmsg)

3、还有一个参数order，但是如果从普通（非结构化）数组开始，则既不快速也不容易使用。

4、因为这个特殊的操作方式更具可读性和它可能是一个更好的选择，这样做的pandas不易出错：

* pd.DataFrame(a).sort\_values(by=\[2,5\]).to\_numpy()：通过第2列再通过第5列进行排序。
* pd.DataFrame(a).sort\_values().to\_numpy()：通过从左向右所有列进行排序

## 0.16 高维数组运算

通过重排一维向量或转换嵌套的Python列表来创建3D数组时，索引的含义为（z，y，x）。

第一个索引是平面的编号，然后才是在该平面上的移动：

![](https://g1proxy.wimg.site/sSMrWcIPmOy_ur2fO36htBzlRlWibaDHOIXi2fYaHY7A/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FEUbr2ZxkW4IgVZ92Kkm0adEsCanbIzNw0HvqMP46NqQ6yFfiaKyNU5w/640?wx_fmt=png&from=appmsg)

这种索引顺序很方便，例如用于保留一堆灰度图像：这a\[i\]是引用第i个图像的快捷方式。

但是此索引顺序不是通用的。处理RGB图像时，通常使用（y，x，z）顺序：前两个是像素坐标，最后一个是颜色坐标（Matplotlib中是RGB ，OpenCV中是BGR ）：

![](https://g1proxy.wimg.site/slOByKOOiLtEKhjUuS1p_ARdtl9RjTwmdUR_YbpiU8bs/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FwkFoyB7bMjsSiaav317HDGz3fn2GBqkIdibLJ7WzeDQCy8mMSjzzM7lQ/640?wx_fmt=png&from=appmsg)

这样，可以方便地引用特定像素：a\[i,j\]给出像素的RGB元组(i,j)。

因此，创建特定几何形状的实际命令取决于正在处理的域的约定：

![](https://g1proxy.wimg.site/sFqlJtoC_d6B3oOljUnjrHVRPpoCLZL-OGyjQpoTHP1M/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FqgHJiapsIgibnVgwkTEn06An7bA9Eep64rlO2Z1lG8Fp31w1M6sfWHNQ/640?wx_fmt=png&from=appmsg)

显然，NumPy函数像hstack、vstack或dstack不知道这些约定。其中硬编码的索引顺序是（y，x，z），RGB图像顺序是：

![](https://g1proxy.wimg.site/shr_37trkNRfHwgG71uOMU8QwmduRtidb-RVCGb-45V4/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FSjz6VAwMyz8hxBOfELfoXzf92MHg3a0ZHgNCg19mAKFgaVC2OwJBnA/640?wx_fmt=png&from=appmsg)

△RGB图像数组（为简便起见，上图仅2种颜色）

如果数据的布局不同，则使用concatenate命令堆叠图像，并在axis参数中提供显式索引数会更方便：

![](https://g1proxy.wimg.site/sBCWD5aOm1yVmCBM8mlno9TSG15HEV2Yss_cBXn1Wqxo/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7FRbXCxtLPxiaYhNlkpOcF1ibsAxfWP0qkEtnUG3c0OFNbJUqbcDFv3lWA/640?wx_fmt=png&from=appmsg)

如果不方便使用axis，可以将数组转换硬编码为hstack的形式：

![](https://g1proxy.wimg.site/sKUIBefFiEyIi-HJ-Dra_HvZFeZ1kw99hQMSJN4fGe-k/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7F7ygondAZ2DAQsXrzgBziaMibd3H5CbkhliaoqXs0AeqYPbUgD6FAwFI7Q/640?wx_fmt=png&from=appmsg)

这种转换没有实际的复制发生。它只是混合索引的顺序。

混合索引顺序的另一个操作是数组转置。检查它可能会让我们对三维数组更加熟悉。

根据我们决定的axis顺序，转置数组所有平面的实际命令将有所不同：对于通用数组，它交换索引1和2，对于RGB图像，它交换0和1：

![](https://g1proxy.wimg.site/s1bpyjYAt1Ms8nI2TR-_DEy5qez0_DJw-7UvKziQS61c/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7F4ibhCoAqal6hLZzic7zvmk0gc4Gqc0Fns3FssnqHC9AVZz2kfM1z4bYg/640?wx_fmt=png&from=appmsg)

有趣的是，（和唯一的操作模式）默认的axes参数颠倒了索引顺序，这与上述两个索引顺序约定都不相符。

最后，还有一个函数，可以在处理多维数组时节省很多Python循环，并使代码更简洁，这就是爱因斯坦求和函数einsum：

![](https://g1proxy.wimg.site/sTYelVVFgKPBHuQ8vW4q4AzRA1R1DGdonBmfWGhvOZFM/https://mmbiz.qpic.cn/sz_mmbiz_png/qvMIdhEic7Rekpbpqyymas7qdSaOEZib7Fc6Fp3EJZdLopUw2C93ozP7HcgdPbiaLFhWj8kFP8YOuRHJjd0IQOT8A/640?wx_fmt=png&from=appmsg)

点击👇卡片关注我，第一时间获取干货～
