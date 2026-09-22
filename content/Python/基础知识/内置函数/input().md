# 1 输入函数 input()

- 从控制台获得用户输入
- 格式：`<`变量>=input(`<`提示信息字符串>) `#`用户输入的信息以字符串类型保存在`<`变量>中
	例：TempStr=input("请输入") `#`TempStr 用来保存用户输入的信息
	x,y=input("M","N")，获得多个输入赋值给多个变量
## 1.1 输入常规处理
- 单行输入单个字符串>>数字 #精彩代码
  ```python
x=int(input())
y=eval(input())
```
- 单行输入多个字符串(空格分隔)>>数字列表 #精彩代码
```python
ages=input().split()
lists=[int(age) for age in ages] # 方法等非函数(如果int是方法)，用列表推导式
lists=list(map(int,ages)) # 函数用map
```
- 多行输入
- 每行一个字符串，用次数限制行数， #精彩代码
  ```python
  li=[]
  i=2
  while i>0: 
      i-=1
	    li.append(age) #单个输入字符
```
- 每行多个字符串，用输入q来限制行数，以空格分隔 #精彩代码
  ```python
ls=[]
while True:
    age = input("请输入(空格分隔，'q'结束)：") # 截止设计
    if age == 'q'or age=='Q': # 截止设计
        break # 截止设计
    else:
        age=age.split() #多个输入字符
        lists=[int(a) for a in age] 
        ls.append(lists)
        print(ls)
```
- 123
  ```Python
  # 1 把用户输入分割到列表
# 2 列表转整数，并赋值给四个变量
ages = input("请输入四个整数，以空格分隔：").split()
a, b, c, d = map(int, ages)
# 3 map是高阶函数，它接受一个函数和一个或多个可迭代对象（如列表、元组等）作为参数
# 4 并将传入的函数逐个应用到序列的所有元素上，产生一个新的映射后的数据结构。
```