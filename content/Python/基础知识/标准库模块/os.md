用于与操作系统进行交互，执行文件和目录操作
1. 获取当前工作目录：
```python
import os
current_directory = os.getcwd()
print(current_directory)
```
2. 切换工作目录：
```python
 os.chdir('/path/to/directory')
```
3. 列出目录中的文件和子目录：
```python
files_and_directories = os.listdir('/path/to/directory')
for item in files_and_directories:
    print(item)
```
4. 创建目录：
```python
os.mkdir('/path/to/directory')
```
5. 删除目录：
```python
os.rmdir('/path/to/directory')
```
6. 检查文件是否存在：
```python
if os.path.exists('/path/to/file'):
    print('File exists')
else:
    print('File does not exist')
```
7. 连接路径：
```python
path = os.path.join('/path', 'to', 'file.txt')
print(path)
```