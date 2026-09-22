# 1 Requests 自动爬取 HTML 页面，自动网络请求提交

www.python-requests.org

## 1.1 Requests 库入门

### 1.1.1 HTTP 协议

#### 1.1.1.1 定义

##### 1.1.1.1.1 HTTP 协议 HTTP，HypertextTransferProtocol，超文本传输协议。

##### 1.1.1.1.2 HTTP 是一个基于“请求与响应”模式的、无状态的应用层协议。

##### 1.1.1.1.3 HTTP 协议采用 URL 作为定位网络资源的标识。

##### 1.1.1.1.4 URL 是通过 HTTP 协议存取资源的 Internet 路径，一个 URL 对应一个数据资源。

#### 1.1.1.2 定位/格式

###### 1.1.1.2.1.1 URL 格式 http://host:port]|path]

###### 1.1.1.2.1.2 host：合法的 Internet 主机域名或 IP 地址

###### 1.1.1.2.1.3 port：端口号，缺省端口为 80

##### 1.1.1.2.2 path：请求资源的路径

#### 1.1.1.3 HTTP 协议对资源的操作

##### 1.1.1.3.1 GET 请求获取 URL 位置的资源

##### 1.1.1.3.2 HEAD 请求获取 URL 位置资源的响应消息报告，即获得该资源的头部信息

###### 1.1.1.3.2.1 >>>r=requests.head('http://httpbin.org/get')

###### 1.1.1.3.2.2 >>>r.headers

###### 1.1.1.3.2.3 {'Content-Length':'238','Access-Control-Allow-Origin':$**$'\

###### 1.1.1.3.2.4 ,'Access-Control-Allow-Credentials':'true','Content-Type':\

###### 1.1.1.3.2.5 'application/json','Server':'nginx'，'Connection':'keep-alive',\

###### 1.1.1.3.2.6 'Date':'Sat,18 Feb 2017 12:07:44 GMT'}

###### 1.1.1.3.2.7 >>>r.text

##### 1.1.1.3.3 POST 请求向 URL 位置的资源后附加新的数据

###### 1.1.1.3.3.1 向 URLPOST 一个字典自动编码为 form（表单）

```
>>>payload={'key1':'value1'，"key2':'value2'}
>>>r=requests.post('http://httpbin.org/post',data=payload)>>>
print(r.text)
{..."form":{
"key2":"value2",
"keyi":"valuei"
},
}
向URL POST一个字符串自动编码为data
```

```
r=requests.post('http://httpbin.org/post',data='ABc')
print(r.text)
{ ...
"data":"ABC"
"form":{},
 }
```

##### 1.1.1.3.4 PUT 请求向 URL 位置存储一个资源，覆盖原 URL 位置的资源

###### 1.1.1.3.4.1 同 POST，只不过会覆盖

###### 1.1.1.3.4.2 采用 PUT，必须将所有 20 个字段一并提交到 URL，末提交字段被删除。

##### 1.1.1.3.5 PATCH 请求局部更新 URL 位置的资源，即改变该处资源的部分内容

###### 1.1.1.3.5.1 采用 PATCH，仅向 URL 提交 UserName 的局部更新请求。

##### 1.1.1.3.6 DELETE 请求删除 URL 位置存储的资源

### 1.1.2 Requests 库方法

#### 1.1.2.1 requests.request()构造一个请求，支撑以下各方法的基础方法

##### 1.1.2.1.1 requests.request(method,url,$**$kwargs)

###### 1.1.2.1.1.1 method:请求方式

r=requests.request('GET',url,*kwargs)
r=requests.request('HEAD',url,$**$kwargs)
r=requests.request('POST',url,$**$kwargs)
r=requests.request('PUT',url,*kwargs)
r=requests.request('PATCH',url,$**$kwargs)
r=requests.request('delete',url,*kwargs)
r=requests.request('OPTIONS',url,*kwargs)
向服务器获取一些服务器跟客户端打交道的参数，与获取资源无关

###### 1.1.2.1.1.2 url:拟获取页面的 url 链接

###### 1.1.2.1.1.3 $**$kwargs:控制访问的参数，均为可选参数 13 个

可选参数调用方法：命名
对 Url 进行修改
params：字典或字节序列，作为参数增加到 url 中

```
>> kv = {'key1': 'value1', 'key2': 'value2'}
>> r = requests.request('GET', 'http://python123.io/ws', params=kv)
>> print(r.url)
http://python123.io/ws?key1=value1&key2=value2
```

访问网页时适当使用
data：向服务器提交字典、字节序列或文件对象，作为 Request 的内容

```
>> kv = {'key1': 'value1', 'key2': 'value2'}``
>>> r = requests.request('POST', 'http: /python123.io/ws', data=kv)``
>>body='主体内容'``
>> r = requests.request('POST', 'http: //python123.io/ws', data=body)
```

json:JSON 格式的数据，作为 Request 的内容

```
>>>kv={'key1': 'value1'}
>> r=requests.request('POST', 'http://python123.io/ws', json=kv)
headers：字典，HTTP定制头，可模拟浏览器
>>>hd={'user-agent':'Chrome/10'}
>>>r=requests.request('POST','http://python123.io/ws',headers=hd)
```

cookies：字典或 CookieJar，Request 中的 cookie
auth：元组，支持 HTTP 认证功能
files:字典类型，传输文件
`>>>fs={'file':open('data.xls','rb')}`
`>>>r=requests.request('POST','http://python123.io/ws',files=fs)`

超时
timeout:设定超时时间，秒为单位，超时产生异常 timeout
`>>>r=requests.request('GET','http://www.baidu.com',timeout=10)`
代理
proxies：字典类型，设定访问代理服务器，可以增加登录认证
`>>>pxs={'http':'http://user:pass@10.10.10.1:1234' 'https':'https://10.10.10.1:4321'}`
`>>>r=requests.request('GET','http://www.baidu.com',proxies=pxs)`

开关字段
allow_redirects：True/False，默认 True，对 Url 重定向开关
stream：True/False，默认为 True，获取内容立即下载开关
Verify：True/False，默认为 True，认证 SSL 证书开关
vert：保存本地 SSL 证书路径

#### 1.1.2.2 requests.get(url) 获取 HTML 网页的主要方法，对应于 HTTP 的 GET

##### 1.1.2.2.1 构造一个向服务器请求资源的 Request 对象

##### 1.1.2.2.2 返回一个包含服务器资源的 Response 对象

###### 1.1.2.2.2.1 r.status_code

HTTP 请求的返回状态，200 表示连接成功，404 表示失败

###### 1.1.2.2.2.2 r.text

HTTP 响应内容的字符串形式，即，url 对应的页面内容

###### 1.1.2.2.2.3 r.encoding

从 HTTP header 中猜测的响应内容编码方式

###### 1.1.2.2.2.4 r.apparent_encoding

从内容中分析出的响应内容编码方式（备选编码方式）

###### 1.1.2.2.2.5 r.content

HTTP 响应内容的二进制形式
从 url 获得一个图片，图片资源以二进制形式存储，用此可以还原图片

###### 1.1.2.2.2.6 r.request.headers

查看从我方发给对方的 Request 对象的 head 内容

###### 1.1.2.2.2.7 r.request.url

查看我方发给对方的 Request 对象包含的 Url 是什么

##### 1.1.2.2.3 requests.get(url,params=None, $**$kwargs)

###### 1.1.2.2.3.1 url:拟获取页面的 url 链接

###### 1.1.2.2.3.2 params:url 中的额外参数，字典或字节流格式，可选

###### 1.1.2.2.3.3 $**$kwargs:12 个控制访问的参数-同.request()

##### 1.1.2.2.4 封装

![[Pasted image 20240217030749.png]]

##### 1.1.2.2.5 异常处理

###### 1.1.2.2.5.1 requests.ConnectionError 网络连接错误异常，如 DNS 查询失败、拒绝连接等

###### 1.1.2.2.5.2 requests.HTTPError HTTP 错误异常

###### 1.1.2.2.5.3 requests.URLRequired URL 缺失异常

###### 1.1.2.2.5.4 requests.TooManyRedirects 超过最大重定向次数，产生重定向异常

###### 1.1.2.2.5.5 requests.ConnectTimeout 连接远程服务器超时异常

###### 1.1.2.2.5.6 requests.Timeout 请求 URL 超时，产生超时异常

###### 1.1.2.2.5.7 r.raise_for_status()如果不是 200，产生异常 requests.HTTPError

```
import requests
def getHTMLText(url):
try:
r=requests.get(url,timeout=30)
r.raise_for_status()
r.encoding=r.apparent_encoding
return r.text
except:
return "产生异常"
if __name__=="__main__":
url="http://www.baidu.com"
print(getHTMLText(url))
```

#### 1.1.2.3 requests.head() 获取 HTML 网页头信息的方法，对应于 HTTP 的 HEAD

##### 1.1.2.3.1 requests.head(url,$**$kwargs)

###### 1.1.2.3.1.1 url：拟获取页面的 url 链接

###### 1.1.2.3.1.2 $**$kwargs:13 个控制访问的参数-同.request()

#### 1.1.2.4 requests.post() 向 HTML 网页提交 POST 请求的方法，对应于 HTTP 的 POST

##### 1.1.2.4.1 requests.post(url,data=None,json=None,$**$kwargs)

###### 1.1.2.4.1.1 url：拟更新页面的 url 链接

###### 1.1.2.4.1.2 data：字典、字节序列或文件，Request 的内容

###### 1.1.2.4.1.3 json:JSON 格式的数据，Request 的内容

###### 1.1.2.4.1.4 $**$kwargs:11 个控制访问的参数-同.request()

#### 1.1.2.5 requests.put() 向 HTML 网页提交 PUT 请求的方法，对应于 HTTP 的 PUT

##### 1.1.2.5.1 requests.put(url,data=None,$**$kwargs)

###### 1.1.2.5.1.1 url：拟更新页面的 url 链接

###### 1.1.2.5.1.2 data：字典、字节序列或文件，Request 的内容

###### 1.1.2.5.1.3 $**$kwargs:12 个控制访问的参数-同.request()

#### 1.1.2.6 requests.patch() 向 HTML 网页提交局部修改请求，对应于 HTTP 的 PATCH

##### 1.1.2.6.1 requests.patch(url, data=None, $**$kwargs)

###### 1.1.2.6.1.1 url：拟更新页面的 url 链接

###### 1.1.2.6.1.2 data：字典、字节序列或文件，Request 的内容

###### 1.1.2.6.1.3 $**$kwargs:12 个控制访问的参数-同.request()

#### 1.1.2.7 requests.delete() 向 HTML 页面提交删除请求，对应于 HTTP 的 DELETE

##### 1.1.2.7.1 requests.delete(url, $**$kwargs)

###### 1.1.2.7.1.1 url:拟删除页面的 url 链接

###### 1.1.2.7.1.2 $**$kwargs:13 个控制访问的参数-同.request()

### 1.1.3 爬取网页通用代码框架

```
#### import requests
#### def p():
#### try:
#### r=requests.get(url,timeout=30)
#### r.raise_for_statur()
#### r.encoding=r.apparent_encoding
#### return r.text
#### except:
#### return "产生异常"
```

## 1.2 网络爬虫的盗亦有道

## 1.3 Requests 库爬取实例

### 1.3.1 百度关键词接口：`http://www.baidu.com/s?wd=keyword`

### 1.3.2 关键词接口：`http://www.baidu.com/s?q=keyword`

### 1.3.3 网络图片爬取

#### 1.3.3.1 网络图片链接的格式

##### 1.3.3.1.1 http://www.example.com/picture.jpg

#### 1.3.3.2 国家地理：

##### 1.3.3.2.1 http://natgeo.com.cn/

#### 1.3.3.3 选择一个图片的 Web 页面

http://www.nationalgeographic.com.cn/photography/photo_of_the_day/3921.html