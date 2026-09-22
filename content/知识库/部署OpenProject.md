在 **WSL（Windows Subsystem for Linux）** 中使用 Docker 部署 OpenProject 是可行的，但需要注意 WSL 与 Docker 的兼容性配置。以下是详细步骤：

---

### 0.1.1 **前提条件**
1. **启用 WSL 2**  
   - 确保已安装 **WSL 2**（推荐使用 Ubuntu 发行版）。  
   - [x] 在 PowerShell 中运行以下命令启用 WSL 2：  
     ```powershell
     wsl --set-default-version 2
     ```
   - [x] 安装 Linux 发行版（如 Ubuntu）通过 Microsoft Store。

2. **安装 Docker Desktop for Windows**  
   - [x] 下载并安装 [Docker Desktop](https://www.docker.com/products/docker-desktop)。  
   - [x] 在 Docker Desktop 设置中勾选 **“Use WSL 2 based engine”**，并关联你的 WSL 发行版。

---

### 0.1.2 **步骤 1：在 WSL 中安装 Docker**
1. [x] 启动 WSL 终端（如 Ubuntu）。  
2. [x] 更新软件包并安装 Docker 依赖：  
   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y docker.io
   ```
3. 启动 Docker 服务并设为开机自启：  
   ```bash
   sudo service docker start
   sudo systemctl enable docker
   ```
4. [x] 将当前用户加入 `docker` 组（避免每次输入 `sudo`）：  
   ```bash
   sudo usermod -aG docker $USER
   newgrp docker  # 刷新组权限
   ```

---

### 0.1.3 **步骤 2：部署 OpenProject**
OpenProject 官方提供了 Docker Compose 配置，以下是部署流程：

1. **创建项目目录并下载 `docker-compose.yml`**  
   ```bash
   mkdir openproject && cd openproject
   curl -o docker-compose.yml https://raw.githubusercontent.com/opf/openproject-deploy/main/docker-compose/docker-compose.yml
   ```

2. **修改配置（可选）**  
   - 编辑 `docker-compose.yml`，根据需要调整以下参数：  
     ```yaml
     environment:
       OPENPROJECT_SECRET_KEY_BASE: "your-secret-key"  # 建议生成随机字符串替换
       OPENPROJECT_HOST__NAME: "localhost"             # 改为你的域名或IP
       OPENPROJECT_HTTPS: "false"                     # 若需HTTPS则设为true
     ```

3. **启动容器**  
   ```bash
   docker compose up -d
   ```
   - 首次启动会下载镜像并初始化数据库，耗时约 5-10 分钟。
- 下载不动，部署阿里去中转站
四个环境变量：
命名空间：ALIYUN_NAME_SPACE：michael_k
访问凭证：
`用户名：ALIYUN_REGISTRY_USER：bbb_bk@163.com
仓库地址：
ALIYUN_REGISTRY：crpi-0umidirng1wga87k.cn-guangzhou.personal.cr.aliyuncs.com
ALIYUN_REGISTRY_PASSWORD，通用
- 换成部署到WSL
```
# 1. 更新软件包索引并安装必要的依赖
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates wget
# 2. 导入 OpenProject 的 PGP 密钥
sudo wget -O /etc/apt/trusted.gpg.d/openproject.asc https://dl.packager.io/srv/opf/openproject/key
# 3. 添加 OpenProject 软件源
sudo wget -O /etc/apt/sources.list.d/openproject.list \
  https://dl.packager.io/srv/opf/openproject/stable/15/installer/ubuntu/22.04.repo
# 4. 更新软件包索引并安装 OpenProject
sudo apt-get update
sudo apt-get install openproject
# 5. 运行配置向导
sudo openproject configure
# 6.启动 OpenProject 服务
sudo systemctl start openproject
# 设置开机自启
sudo systemctl enable openproject
# 检查服务状态
sudo systemctl status openproject
# 卸载 OpenProject
sudo apt-get remove --purge openproject
# 删除配置文件和数据
sudo rm -rf /etc/openproject /var/db/openproject /var/log/openproject
```

---

### 0.1.4 **步骤 3：访问 OpenProject**
1. 在浏览器中访问：  
   ```
   http://localhost:8080
   ```
   - 默认管理员账号：  
     - **用户名**: `admin`  
     - **密码**: `admin`（首次登录后需修改）

2. **配置中文界面**：  
   - 登录后进入 `Administration → Settings → Display`，将语言改为 **简体中文**。

---

### 0.1.5 **常见问题解决**
#### 0.1.5.1 **1. 端口冲突**
- 若端口 `8080` 被占用，修改 `docker-compose.yml` 中的端口映射：  
  ```yaml
  ports:
    - "自定义端口:8080"  # 例如 "9000:8080"
  ```

#### 0.1.5.2 **2. 数据持久化**
- Docker 默认会将数据存储在 WSL 的虚拟磁盘中。若需备份数据：  
  - 数据库：`/var/lib/docker/volumes/openproject_pgdata`  
  - 附件：`/var/lib/docker/volumes/openproject_assets`

#### 0.1.5.3 **3. WSL 2 性能优化**
- 在 `%UserProfile%\.wslconfig` 中增加资源限制（示例）：  
  ```ini
  [wsl2]
  memory=4GB   # 根据主机配置调整
  processors=2
  ```

#### 0.1.5.4 **4. 容器启动失败**
- 检查日志：  
  ```bash
  docker-compose logs openproject
  ```
  - 常见问题：  
    - **磁盘空间不足**：WSL 2 默认最大 256GB，可通过 `wsl --shutdown` 后调整。  
    - **权限问题**：确保 WSL 中的 Docker 服务正常运行（`sudo service docker status`）。

---

### 0.1.6 **升级与维护**
- **升级 OpenProject**：  
  ```bash
  docker-compose pull && docker-compose up -d
  ```
- **停止服务**：  
  ```bash
  docker-compose down
  ```

---

通过以上步骤，你可以在 WSL 2 中快速部署一个功能完整的 OpenProject 实例。如果需要 HTTPS 或更复杂的配置（如 SMTP 邮件通知），可参考 [OpenProject 官方文档](https://www.openproject.org/docs/installation/docker/)。