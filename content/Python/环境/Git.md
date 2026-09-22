# 1 [我的仓库/code at 练习 (github.com)](https://github.com/bukaicn/code/tree/%E7%BB%83%E4%B9%A0)
git官网：https://git-scm.com/download/win 镜像：[CNPM Binaries Mirror](https://npm.taobao.org/mirrors/git-for-windows/)
# 2 连接

右键桌面：Open Git Bash here 打开 CMD
```python
git config --global user.name "bukaicn"
git config --global user.email "44664698@qq.com"
```
--glabal为全局设置，如果只想在本项目设置，去掉该参数
# 3 建立本地仓库

## 3.1 方法 1、
克隆：进入要建立仓库的位置：
```
git clone https://github.com/bukaicn/code.git
```

## 3.2 方法 2、
新建：进入要建立仓库的位置：
git init(初始化，自动新建一个“.git”的文件，当前文件夹为仓库)

# 4 VSCode

打开本地仓库
左下角连接上云端分支：练习

git安装配置资料：[8.git基本操作_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1ua41167Ma/?p=8&spm_id_from=pageDriver&vd_source=be29c2566a6b8ed086f7ffc01ad95a4e)

## 4.1 报错：
SSL certificate problem: unable to get local issuer certificate

出现这种错误，大部分原因是开了如 fastgithub 等 github 加速工具（它们的原理似乎是把 github.com 解析为 127.0.0.1），导致 git 无法识别 127.0.0.1 的 SSL 证书，所以报错

### 4.1.1 解决方法：

1、关掉加速器

2、禁用 SSL 证书即可：

git config --global http.sslVerify false
# 5 忽略文件
```
目录__pycache__中的临时文件忽略法：
创建.gitignore的文件，写入一行代码：__pycache__
```
# 6 检查状态
```python
git status
```
On branch main
main是分支名，分支是项目的一个版本，主要版本命名最好用main

# 7 上传文件
## 7.1 加入仓库
git add .
所有文件加入仓库

## 7.2 执行提交
```python
git commit -m "message"
On branch main,nothing to commit,working tree clean
```

# 8 查看提交记录
git log
只显示提交的引用ID和提交记录的消息：git log --pretty=oneline

# 9 第二次提交
## 9.1 后面再有修改时，A方案：第二次提交
```python
git commit -am "提交的记录消息"#-a全部，-m消息
```
## 9.2 B方案，不提交，放弃修改
·```python
git restore .#放弃所有修改，指定文件放弃：git restore filename
```
检出以前的提交
```python
git checkout 123456 # 检出该提交的引用ID的前6个字符
```
检出后，跳出分支，这时候不要对项目做任何修改
继续下一步即可回到分支：
```python
git switch -
```
将项目重置到以前的提交：
```python
git status # 查看状态
git log --pretty=oneline # 查看提交记录
git reset --hard 123456 # 指定要永久恢复到的提交的引用ID前6个字符
```
# 10 删除仓库
```python
rm -rf .git/ # 删除目录.git
git init # 初始化仓库
```