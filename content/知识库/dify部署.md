# 1 Dify 安装与配置指南

根据您的电脑配置和现有环境，以下是安装 Dify 的详细步骤：

## 1.1 系统要求检查

您的配置完全满足 Dify 的运行要求：
- NVIDIA RTX A2000 12GB 显卡（支持 CUDA）
- 32GB 内存
- 已安装 WSL2 (Ubuntu 22.04) 和 Docker
- 已配置 CUDA 12.2 和 cuDNN 8.9

## 1.2 安装步骤

### 1.2.1 克隆 Dify 仓库

- [x] 在 WSL2 的 Ubuntu 22.04 中执行：
```bash
git clone https://github.com/langgenius/dify.git
cd dify/docker
```

### 1.2.2 配置 Docker 镜像加速

- [x] 由于国内拉取 Docker 镜像可能较慢，建议配置镜像加速源：
```bash
sudo nano /etc/docker/daemon.json
```
- [x] 添加以下内容（选择最快的2-3个镜像源即可）：
```json
{
  "registry-mirrors": [
    "https://docker.m.daocloud.io",
    "https://dockerproxy.com",
    "https://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://registry.docker-cn.com"
  ]
}
```
- [x] 然后重启 Docker 服务：
```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

### 1.2.3 启动 Dify 服务
- [x] 
```bash
cp .env.example .env
docker compose up -d
```

### 1.2.4 验证安装

- [x] 检查容器是否正常运行：
```bash
docker ps
```
应该能看到 dify-web 和 dify-api 等容器正在运行。

## 1.3 访问 Dify

- [x] 前端界面：`http://localhost:18080`
- [x] 首次访问需要设置管理员账号（邮箱、用户名和密码）

## 1.4 配置 GPU 支持（可选）

如果您需要在 Dify 中使用本地 GPU 运行模型，可以修改 `docker-compose.yml` 文件，在相关服务下添加 GPU 支持：
```yaml
services:
  dify-api:
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]
```

## 1.5 常见问题解决

1. [x] **端口冲突**：如果 80 端口被占用，可以修改 `.env` 文件中的 `NGINX_PORT` 和 `EXPOSE_NGINX_PORT` 为其他端口（如 18080）

2. **镜像拉取失败**：尝试更换 Docker 镜像源或手动拉取镜像：
   ```bash
   docker pull langgenius/dify-web:latest
   docker pull langgenius/dify-api:latest
   ```

3. **WSL2 内存不足**：确保您的 WSL2 配置有足够内存（您已配置 28GB，足够使用）

## 1.6 集成已有环境

您已经安装了 RAGFlow 和 Milvus，Dify 可以与这些组件配合使用：
- 在 Dify 设置中配置 Milvus 作为向量数据库
- 通过 API 调用 RAGFlow 的服务

## 1.7 后续步骤

1. 在 Dify 中创建您的第一个 AI 应用
2. 配置模型供应商（如 OpenAI、Ollama 等）
3. 设置知识库并上传文档
4. 设计工作流和提示词

您的硬件配置非常适合运行 Dify，特别是 RTX A2000 显卡可以很好地支持本地模型推理。如果遇到任何问题，可以检查容器日志：
```bash
docker logs <container_name>
```