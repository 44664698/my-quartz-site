---
number headings: auto, first-level 1, max 6, 1.1
---
----安装目录必须拥有所有权限。
# 1 环境

## 1.1 创建环境：自带Python
```
conda create --name&-n <env_name环境名> <包名> <python==版本号>
```

## 1.2 切换环境：
activate `<`env_name>

## 1.3 退出环境：
deactivate
## 1.4 系统环境变量
![[Pasted image 20240217053009.png]]
# 2 Conda库

## 2.1 更新版本：
conda update conda

## 2.2 环境操作

### 2.2.1 显示环境：
conda env list&conda info --envs

### 2.2.2 复制环境：
conda create --name `<`新名> --clone `<`copied_env_name>

### 2.2.3 删除环境：
conda remove --name `<`env_name> --all

### 2.2.4 更改虚拟环境默认安装位置：
conda config --add envs_dirs D:\Programs\anaconda3\envs

### 2.2.5 分享代码与环境：
场景：当分享代码的时候，将你的运行环境分享给对方。执行如下命令可以将当前环境下的 package 信息存入名为 environment 的 YAML 文件中。
conda env export > environment.yaml
当执行他人的代码时，也需要配置相应的环境。这时你可以用对方分享的 YAML 文件来创建一摸一样的运行环境。
conda env create -f environment.yaml
  
## 2.3 包操作：

### 2.3.1 搜索资源(所有版本)：
#### 2.3.1.1 精确查找：
conda search --full-name `<`package_full_name要查找的包全名>

#### 2.3.1.2 模糊查找：
conda search `<`text>

### 2.3.2 安装包：

#### 2.3.2.1 已安装的包：conda list

#### 2.3.2.2 指定环境中安装包：conda install --name `<`env_name> `<`package_name>

#### 2.3.2.3 在当前环境中安装包：conda install `<`package_name>

### 2.3.3 卸载包：

#### 2.3.3.1 卸载指定环境中的包：
conda remove --name `<`env_name> `<`package_name>

#### 2.3.3.2 卸载当前环境中的包：
conda remove `<`package_name>

### 2.3.4 更新包：

#### 2.3.4.1 更新所有包:
conda update --all&conda upgrade --all

#### 2.3.4.2 更新指定包:
conda update `<`包名，多个时用空格隔开>&conda upgrade `<`package_name>

# 3 pip(conda无法安装的包)：
## 3.1 [升级pip](https://blog.csdn.net/u014739136/article/details/135989296)：
python -m pip install --upgrade pip -i https://pypi.douban.com/simple
## 3.2 安装&升级：
pip install `<`package_name>&pip install --upgrade `<`package_name>
## 3.3 pip批量导出、安装：

### 3.3.1 生成requirements.txt文件：
pip freeze > requirements.txt
### 3.3.2 安装requirements.txt文件依赖：
pip install -r requirements.txt 文件名`==`版本号
# 4 从Anaconda安装
从http://Anaconda.org中获取安装包，或直接点击Anaconda Cloud再搜索点击， 复制“To install this package with conda run:”下方的命令，在终端中执行。

  

# 5 anaconda换源：

## 5.1 换源：
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --add channels https://mirrors.aliyun.com/anaconda/pkgs/msys2/
conda config --add channels https://mirrors.aliyun.com/anaconda/pkgs/free/
conda config --add channels https://mirrors.aliyun.com/anaconda/pkgs/main/
conda config --add channels https://mirrors.bfsu.edu.cn/anaconda/pkgs/main
原：
https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/win-64
https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/noarch
https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/win-64
https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/noarch
https://repo.anaconda.com/pkgs/main/win-64
https://repo.anaconda.com/pkgs/main/noarch
https://repo.anaconda.com/pkgs/r/win-64
https://repo.anaconda.com/pkgs/r/noarch
https://repo.anaconda.com/pkgs/msys2/win-64
https://repo.anaconda.com/pkgs/msys2/noarch~

## 5.2 设置搜索时显示通道地址
conda config --set show_channel_urls yes
## 5.3 临时指定源安装：
pip install opencv-python -i https://pypi.tuna.tsinghua.edu.cn/simple
## 5.4 pip国内源：
https://www.jb51.net/article/274129.htm
## 5.5 安装包时显示channel的url(三行并行)：
conda config --set show_channel_urls yes
## 5.6 查看当前源、默认安装路径：
conda info

## 5.7 参考资料：
[Anaconda介绍、安装及使用教程](https://zhuanlan.zhihu.com/p/32925500/)

## 5.8 conda init
这是一个命令，主要用于初始化 conda shell。它会将 conda 的环境变量添加到 shell 的配置文件中，以便在打开新终端时自动激活 conda 环境并加载 conda 相关的命令和工具。这样可以方便地管理和切换项目所需的不同 Python 版本和包依赖。同时，conda init 也支持在不同的 shell 中进行配置，例如 bash、zsh、fish 等。