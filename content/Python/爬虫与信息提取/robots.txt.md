# robots.txt

## Robots Exclusion Standard 网络爬虫排除标准

## 作用：网站告知网络爬虫哪些页面可以抓取，哪些不行

## Robots 协议基本语法

### `#`注释，$*$？通配符，

### User-agent:\*

### Disallow:/?$*$

### Disallow:/pop/$*$.html

### Disallow:/pinpai/$*$.html?$*$

### User-agent:EtaoSpider

### Disallow:/

### User-agent:HuihuiSpider

### Disallow:/

### User-agent:GwdangSpider

### Disallow:/

### User-agent:WochachaSpider

### Disallow:/

### User-agent：不允许访问的爬虫类型

### Disallow：不允许访问的路径

## Robots 协议的使用

### 网络爬虫：自动或人工识别 Robots.txt，再进行内容爬取。

### 约束性：Robots 协议是建议但非约束性，网络爬虫可以不遵守，但存在法律风险。