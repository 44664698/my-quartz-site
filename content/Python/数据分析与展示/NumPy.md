# [[文件和数据格式化#3 数据的维度|数据的维度]]
# 介绍
Python科学计算基础库
NumPy是SciPy、Pandas等数据处理或科学计算库的基础。
数组对象可以去掉元素间运算所需的循环，使一维向量更像单个数据。
设置专门的数组对象，可以经过优化来提升运算速度。 
# 包括
## N维数组对象：ndarray
实际的数据
描述这些数据的元数据（数据维度、类型等）
ndarray数组一般要求所有元素类型相同，下标从0开始。
## 广播功能函数，用于数组计算
整合了C/C++/Fortran代码，并提供整合工具
线性代数、傅里叶变换、随机数生成等功能

```
import numpy as np
a=np.array([[0,1,2,3,4],[9,8,7,6,5]])
a
print(a)
```
np.array()生成一个ndarray数组，ndarray在程序中的别名是：array
输出成[]形式，元素由空格分割。
轴(axis)：保存数据的维度，每个元素存储在其中
秩(rank)：轴的数量
.ndim
秩，即轴/维度的数量。
.shape
ndarray对象的尺度，对于矩阵，n行m列。
.size
ndarray对象元素的个数，相当于.shape中n*m的值
.dtype
ndarray对象的元素类型
.itemsize
ndarray对象中每个元素的大小，以字节为单位。
```
import numpy as np
a=np.array([[0,1,2,3,4],[9,8,7,6,5]])
a.ndim
a.shape
a.size
a.dtype
a.itemsize
```
