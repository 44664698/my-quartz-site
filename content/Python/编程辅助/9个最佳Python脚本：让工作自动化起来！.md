---
标题: "9个最佳Python脚本：让工作自动化起来！"
笔记ID: H87AAKD
笔记类型: page
星标: false
tags: 
域名: mp.weixin.qq.com
域名2: qq.com
作者: ""
原文链接: "http://mp.weixin.qq.com/s?__biz=Mzk0ODUxNDAxMQ==&mid=2247499571&idx=1&sn=9f18a161170cd0207a0071e5cd4c6197&chksm=c364c287f4134b91a5f1b6d71e9343b2c81822052eb35c1a957d543a37fbb235f4d5de951c3f&mpshare=1&scene=1&srcid=0121naQYyi2YEwD0jFhd9wzp&sharer_shareinfo=8699417bffadfa7e4b9390ea7cbe3183&sharer_shareinfo_first=8699417bffadfa7e4b9390ea7cbe3183#rd"
五彩链接: "https://marker.dotalk.cn/#/?noteidx=H87AAKD"
划线数量: 0
创建时间: 2024-02-19 17:53
更新时间: 2024-02-19 17:55
---

## 0.1 9个最佳Python脚本：让工作自动化起来！ 


## 0.2 页面笔记


## 0.3 划线列表

## 0.4 全文剪藏
原创  编程君  Python必修指南 

****![](https://g1proxy.wimg.site/ssX4vEAb50hIJSxkUm-bzGAfVMFmxOjKUgjEJ86yqvrs/https://mmbiz.qpic.cn/sz_mmbiz_gif/koa6YxqWTHx7Qib16kQuEaa6GQibx2lDGa27tX3t9hXjQlUXXJ4icz9delJSKCcIRTWVC6MBj2D921kS65So691mQ/640?wx_fmt=gif&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)**

Python是一种流行的编程语言，**以其简洁和易读性而闻名。**它提供了大量的库和模块，**使其成为自动化各种任务的绝佳选择。**

我们将探讨9个Python脚本及其代码，**可以帮助您自动化各种任务并提高工作效率。**无论您是开发人员、数据分析师还是只是想简化工作流程的人，这些脚本都能满足您的需求。

Python是当下最大众化的编程语言，**但其基本概念、基础知识还是比较多的**，对于小白来说，一时间要掌握这么多还是有些吃力，甚至学完就忘！

因此，编程君为大家准备了**《Python数据科学速查表》**，帮助你提高效率，查漏补缺！限时扫码，免费领取！  

![](https://g1proxy.wimg.site/sMxYEGxPRtqf739vhpbw3Lfn3UT84AT8qkXHEuym1JRA/https://mmbiz.qpic.cn/sz_mmbiz_gif/koa6YxqWTHzqWkpFOcV75b0IiavLJ1EaLSH0GLRagicEpgcqrt5fQsWyG8SalibLe5M6NzzzcM2cVydPiazsqHkL1g/640?wx_fmt=png&from=appmsg)

![](https://g1proxy.wimg.site/sLFdp0RcNndiL-rn5nk5cWT9DT5db2my-lpZ7c2mJLXY/https://mmbiz.qpic.cn/mmbiz_png/N2vfpRNU8pAITZd4qAicYWBGcjeG2hbn2cXouRp6Ss1Js0yXYyHhhCFL1SOLNMyftpLUSicVlKmdte5B0WrVfzCg/640?wx_fmt=png)

一、自动化文件管理

**1.在目录中对文件进行排序**

# 1 Python脚本用于按文件扩展名对目录中的文件进行排序  
import os  
from shutil import move  
def sort_files(directory_path):  
    for filename in os.listdir(directory_path):  
        if os.path.isfile(os.path.join(directory_path, filename)):  
            file_extension = filename.split('.')[-1]  
            destination_directory = os.path.join(directory_path, file_extension)  
            if not os.path.exists(destination_directory):  
                os.makedirs(destination_directory)  
                move(os.path.join(directory_path, filename),   
                     os.path.join(destination_directory, filename)

这个Python脚本通过根据文件扩展名将文件分类到子目录中来整理目录中的文件。

它识别文件扩展名并将文件移动到相应的子目录中。这对于清理下载文件夹或为特定项目组织文件非常有用。

**2.删除空文件**

```
# 用Python脚本删除目录中的空文件夹
import os
def remove_empty_folders(directory_path):
    for root, dirs, files in os.walk(directory_path, topdown=False):
        for folder in dirs:
            folder_path = os.path.join(root, folder)
            if not os.listdir(folder_path):
                os.rmdir(folder_path)
```

此Python脚本在指定目录中搜索并删除空文件夹。它可以帮助您保持整洁的文件夹结构，特别是在处理大量数据集时。  

**3.重命名多个文件**

# 2 用Python脚本重命名目录中的多个文件  
import os  
def rename_files(directory_path, old_name, new_name):  
    for filename in os.listdir(directory_path):  
        if old_name in filename:  
            new_filename = filename.replace(old_name, new_name)  
            os.rename(os.path.join(directory_path, filename),  
                      os.path.join(directory_path, new_filename))

这个Python脚本允许您同时重命名目录中的多个文件。它接受旧名称和新名称作为输入，并将符合指定条件的所有文件的旧名称替换为新名称。

![](https://g1proxy.wimg.site/sLFdp0RcNndiL-rn5nk5cWT9DT5db2my-lpZ7c2mJLXY/https://mmbiz.qpic.cn/mmbiz_png/N2vfpRNU8pAITZd4qAicYWBGcjeG2hbn2cXouRp6Ss1Js0yXYyHhhCFL1SOLNMyftpLUSicVlKmdte5B0WrVfzCg/640?wx_fmt=png)

二、用Python进行网络爬虫

**1.从网站提取数据**

# 3 用于网页抓取的Python脚本，从一个网站中提取数据。  
import requests  
from bs4 import BeautifulSoup  
def scrape_data(url):  
    response = requests.get(url)  
    soup = BeautifulSoup(response.text, 'html.parser')  
    # 提取网站中相关数据的代码在这里

这个Python脚本利用requests和BeautifulSoup库从一个网站上爬取数据。它获取网页的内容，并使用BeautifulSoup解析HTML。

您可以自定义脚本以提取特定的数据，如标题、产品信息或价格。

**2.批量下载图片**

# 4 从网站批量下载图像的Python脚本  
import requests  
def download_images(url, save_directory):  
    response = requests.get(url)  
    if response.status_code == 200:  
        images = response.json() # 假设API返回一个图片URL的JSON数组  
        for index, image_url in enumerate(images):  
            image_response = requests.get(image_url)  
            if image_response.status_code == 200:  
                with open(f"{save_directory}/image_{index}.jpg", "wb") as f:  
                    f.write(image_response.content)

这个Python脚本旨在从网站批量下载图片。它假设该网站提供一个返回图像URL数组的JSON API。

然后，脚本遍历这些URL并下载图片，将其保存到指定目录中。

**3.自动化表单提交**

# 5 用Python脚本自动化网站上的表单提交  
import requests  
def submit_form(url, form_data):  
    response = requests.post(url, data=form_data)  
    if response.status_code == 200:  
        # 在表单提交后处理响应的代码放在这里

这个Python脚本通过发送带有表单数据的POST请求来自动化网站上的表单提交。

您可以通过提供URL和需要提交的必要表单数据来定制脚本。

紧急！如果你是刚刚接触Python，那你一定要领取这本**《Python学习手册》**，它可以让你迅速高效的精通**Python核心语言基础**。**限时扫码，免费领取！**

![](https://g1proxy.wimg.site/sOAcWuFSuUFSk08BQxDLf7XkPhVPXBvzjjFF3PwcvUFQ/https://mmbiz.qpic.cn/sz_mmbiz_jpg/koa6YxqWTHwA8AAJou9cmnpvMFp9DD80DHC94vjW02culczWicWKpnQ0vmonkkAVfX3StL9ibqjoezGYgibhfGjAQ/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://g1proxy.wimg.site/sLFdp0RcNndiL-rn5nk5cWT9DT5db2my-lpZ7c2mJLXY/https://mmbiz.qpic.cn/mmbiz_png/N2vfpRNU8pAITZd4qAicYWBGcjeG2hbn2cXouRp6Ss1Js0yXYyHhhCFL1SOLNMyftpLUSicVlKmdte5B0WrVfzCg/640?wx_fmt=png)

三、文本处理和操作

**1.在文本文件中计算单词数**

# 6 Python脚本用于统计文本文件中的单词数量  
def count_words(file_path):  
    with open(file_path, 'r') as f:  
        text = f.read()  
        word_count = len(text.split())  
        return word_count

这个 Python 脚本读取一个文本文件并计算其中包含的单词数量。

它可以用于快速分析文本文档的内容，或者跟踪写作项目中的字数统计。

**2.查找和替换文本**

# 7 在文件中查找和替换文本的Python脚本  
def find_replace(file_path, search_text, replace_text):  
    with open(file_path, 'r') as f:  
        text = f.read()  
        modified_text = text.replace(search_text, replace_text)  
    with open(file_path, 'w') as f:  
        f.write(modified_text)

这个Python脚本在文件中搜索特定文本，并将其替换为所需的文本。

它可以帮助批量替换某些短语或纠正大型文本文件中的错误。

**3.生成随机文本**

# 8 生成随机文本的Python脚本  
import random  
import string  
def generate_random_text(length):  
    letters = string.ascii_letters + string.digits + string.punctuation  
    random_text = ''.join(random.choice(letters) for i in range(length))  
    return random_text

这个Python脚本生成指定长度的随机文本。它可以用于测试和模拟，甚至可以作为创意写作的随机内容来源。

![](https://g1proxy.wimg.site/sLFdp0RcNndiL-rn5nk5cWT9DT5db2my-lpZ7c2mJLXY/https://mmbiz.qpic.cn/mmbiz_png/N2vfpRNU8pAITZd4qAicYWBGcjeG2hbn2cXouRp6Ss1Js0yXYyHhhCFL1SOLNMyftpLUSicVlKmdte5B0WrVfzCg/640?wx_fmt=png)

四、自动化电子邮件

**1.发送个性化电子邮件**

# 9 用Python脚本向收件人列表发送个性化电子邮件  
import smtplib  
from email.mime.text import MIMEText  
from email.mime.multipart import MIMEMultipart  
def send_personalized_email(sender_email, sender_password, recipients, subject, body):  
    server = smtplib.SMTP('smtp.gmail.com', 587)  
    server.starttls()  
    server.login(sender_email, sender_password)  
    for recipient_email in recipients:  
        message = MIMEMultipart()  
        message['From'] = sender_email  
        message['To'] = recipient_email  
        message['Subject'] = subject  
        message.attach(MIMEText(body, 'plain'))  
        server.sendmail(sender_email, recipient_email, message.as_string())  
        server.quit()

此Python脚本使您能够向一组收件人发送个性化的电子邮件。您可以自定义发件人的电子邮件、密码、主题、正文以及收件人电子邮件列表。

请注意，出于安全原因，在使用Gmail时应使用特定于应用程序的密码。

**2.发送电子邮件附件**

# 10 使用Python脚本发送带有文件附件的电子邮件  
import smtplib  
from email.mime.multipart import MIMEMultipart  
from email.mime.base import MIMEBase  
from email import encoders  
def send_email_with_attachment(sender_email, sender_password, recipient_email, subject, body, file_path):  
    server = smtplib.SMTP('smtp.gmail.com', 587)  
    server.starttls()  
    server.login(sender_email, sender_password)  
    message = MIMEMultipart()  
    message['From'] = sender_email  
    message['To'] = recipient_email  
    message['Subject'] = subject  
    message.attach(MIMEText(body, 'plain'))  
    with open(file_path, "rb") as attachment:  
        part = MIMEBase('application', 'octet-stream')  
        part.set_payload(attachment.read())  
        encoders.encode_base64(part)  
        part.add_header('Content-Disposition', f"attachment; filename= {file_path}")  
        message.attach(part)  
    server.sendmail(sender_email, recipient_email, message.as_string())  
    server.quit()

这个Python脚本允许您发送带有文件附件的电子邮件。只需提供发件人的电子邮件、密码、收件人的电子邮件、主题、正文以及要附加的文件路径即可。

**3.自动电子邮件提醒**

# 11 Python脚本发送自动电子邮件提醒  
import smtplib  
from email.mime.text import MIMEText  
from datetime import datetime, timedelta  
def send_reminder_email(sender_email, sender_password, recipient_email, subject, body, reminder_date):  
    server = smtplib.SMTP('smtp.gmail.com', 587)  
    server.starttls()  
    server.login(sender_email, sender_password)  
    now = datetime.now()  
    reminder_date = datetime.strptime(reminder_date, '%Y-%m-%d')  
    if now.date() == reminder_date.date():  
        message = MIMEText(body, 'plain')  
        message['From'] = sender_email  
        message['To'] = recipient_email  
        message['Subject'] = subject  
        server.sendmail(sender_email, recipient_email, message.as_string())  
        server.quit()

此Python脚本根据指定日期发送自动电子邮件提醒。它对于设置重要任务或事件的提醒非常有用，确保您永远不会错过截止日期。  

![](https://g1proxy.wimg.site/sLFdp0RcNndiL-rn5nk5cWT9DT5db2my-lpZ7c2mJLXY/https://mmbiz.qpic.cn/mmbiz_png/N2vfpRNU8pAITZd4qAicYWBGcjeG2hbn2cXouRp6Ss1Js0yXYyHhhCFL1SOLNMyftpLUSicVlKmdte5B0WrVfzCg/640?wx_fmt=png)

五、自动化Excel电子表格

**1.读写Excel**

```
# Python脚本用于读取和写入数据到Excel电子表格
import pandas as pd
def read_excel(file_path):
    df = pd.read_excel(file_path)
    return df
def write_to_excel(data, file_path):
    df = pd.DataFrame(data)
    df.to_excel(file_path, index=False)
```

此Python脚本使用pandas库从Excel电子表格中读取数据，并将数据写入新的Excel文件。

它使您能够以编程方式处理Excel文件，从而提高数据操作和分析效率。

**2.数据分析和可视化**

# 12 使用pandas和matplotlib进行数据分析和可视化的Python脚本  
import pandas as pd  
import matplotlib.pyplot as plt  
def analyze_and_visualize_data(data):  
    # 您的代码在这里用于数据分析和可视化  
    pass

这个Python脚本使用pandas和matplotlib库进行数据分析和可视化。

  
它使您能够探索数据集，得出洞察，并创建数据的可视化表示。

**3.合并多个工作表**

# 13 将多个Excel表格合并成一个表格的Python脚本  
import pandas as pd  
def merge_sheets(file_path, output_file_path):  
    xls = pd.ExcelFile(file_path)  
    df = pd.DataFrame()  
    for sheet_name in xls.sheet_names:  
        sheet_df = pd.read_excel(xls, sheet_name)  
        df = df.append(sheet_df)  
        df.to_excel(output_file_path, index=False)

这个Python脚本将来自Excel文件中多个工作表的数据合并到一个工作表中。

当您的数据分散在不同的工作表中，但希望将它们整合以进行进一步分析时，这非常方便。

当下**Python已经成为人工智能领域中最受欢迎的编程语言之一**，为了帮助大家更好的学习AI人工智能技术。

编程君为大家准备了**《AI人工智能技术的应用范围和案例》**。干货满满，**限时扫码免费领取！**

![](https://g1proxy.wimg.site/s8rag_uoD1xGuMfxNpDDJtLRvBMIdKU2ABxWq7PhVIes/https://mmbiz.qpic.cn/sz_mmbiz_jpg/koa6YxqWTHw65NnZ1dDVgfHBgTeSPnH9vnhIkxqicFBezWYoAeQl8E3eia6VcYJNWv6e1mBqOGHQ0Gbg4sStdXEw/640?wx_fmt=jpeg&from=appmsg)

![](https://g1proxy.wimg.site/sLFdp0RcNndiL-rn5nk5cWT9DT5db2my-lpZ7c2mJLXY/https://mmbiz.qpic.cn/mmbiz_png/N2vfpRNU8pAITZd4qAicYWBGcjeG2hbn2cXouRp6Ss1Js0yXYyHhhCFL1SOLNMyftpLUSicVlKmdte5B0WrVfzCg/640?wx_fmt=png)

六、与数据库交互

**1.连接到数据库**

# 14 Python脚本连接到数据库并执行查询  
import sqlite3  
def connect_to_database(database_path):  
    connection = sqlite3.connect(database_path)  
    return connection  
def execute_query(connection, query):  
    cursor = connection.cursor()  
    cursor.execute(query)  
    result = cursor.fetchall()  
    return result

这个Python脚本允许您连接到SQLite数据库并执行查询。

您可以通过使用适当的Python数据库驱动程序将其调整为与其他数据库管理系统（如MySQL或PostgreSQL）一起使用。

**2.执行SQL查询**

# 15 在数据库上执行SQL查询的Python脚本  
import sqlite3  
def execute_query(connection, query):  
    cursor = connection.cursor()  
    cursor.execute(query)  
    result = cursor.fetchall()  
    return result

这个Python脚本是一个通用的函数，用于在数据库上执行SQL查询。

  
您可以将查询作为参数传递给该函数，并与数据库连接对象一起使用，它将返回查询的结果。

**3.数据备份和恢复**

import shutil  
def backup_database(database_path, backup_directory):  
    shutil.copy(database_path, backup_directory)  
def restore_database(backup_path, database_directory):  
    shutil.copy(backup_path, database_directory)

这个Python脚本允许您在需要时创建数据库备份并恢复它们。这是一项预防措施，用于保护您的宝贵数据免受意外丢失。

![](https://g1proxy.wimg.site/sLFdp0RcNndiL-rn5nk5cWT9DT5db2my-lpZ7c2mJLXY/https://mmbiz.qpic.cn/mmbiz_png/N2vfpRNU8pAITZd4qAicYWBGcjeG2hbn2cXouRp6Ss1Js0yXYyHhhCFL1SOLNMyftpLUSicVlKmdte5B0WrVfzCg/640?wx_fmt=png)

七、自动化图像编辑

**1.图像调整大小和裁剪**

# 16 Python脚本用于调整大小和裁剪图像  
from PIL import Image  
def resize_image(input_path, output_path, width, height):  
    image = Image.open(input_path)  
    resized_image = image.resize((width, height), Image.ANTIALIAS)  
    resized_image.save(output_path)  
def crop_image(input_path, output_path, left, top, right, bottom):  
    image = Image.open(input_path)  
    cropped_image = image.crop((left, top, right, bottom))  
    cropped_image.save(output_path)

此Python脚本使用Python Imaging Library（PIL）来调整大小和裁剪图像。

它可以帮助准备不同显示分辨率或特定用途的图像。

**2.向图像添加水印**

# 17 Python脚本用于给图像添加水印  
from PIL import Image  
from PIL import ImageDraw  
from PIL import ImageFont  
def add_watermark(input_path, output_path, watermark_text):  
    image = Image.open(input_path)  
    draw = ImageDraw.Draw(image)  
    font = ImageFont.truetype('arial.ttf', 36)  
    draw.text((10, 10), watermark_text, fill=(255, 255, 255, 128), font=font)  
    image.save(output_path)

这个Python脚本给图像添加水印。您可以自定义水印文本、字体和位置，以个性化您的图片。

**3.创建图像缩略图**

# 18 Python脚本用于创建图像缩略图  
from PIL import Image  
def create_thumbnail(input_path, output_path, size=(128, 128)):  
    image = Image.open(input_path)  
    image.thumbnail(size)  
    image.save(output_path)

这个Python脚本从原始图像创建缩略图，可以用于生成预览图像或减小图像大小以便在网站上更快加载。

编程君为大家准备了Python思维导图，**搭建知识网络，快速梳理知识点**，限时0元，免费领取!  

![](https://g1proxy.wimg.site/sJUJkLa5Mlcdu2V26Uy3DGDtHxVqfGrnF9f-qDDPwKbA/https://mmbiz.qpic.cn/sz_mmbiz_jpg/koa6YxqWTHx7Qib16kQuEaa6GQibx2lDGaxB8GwlicNXrksV7KQvNYKcAyjCqPheYPEuKia575dLFvxlibn1CpktwUA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://g1proxy.wimg.site/sLFdp0RcNndiL-rn5nk5cWT9DT5db2my-lpZ7c2mJLXY/https://mmbiz.qpic.cn/mmbiz_png/N2vfpRNU8pAITZd4qAicYWBGcjeG2hbn2cXouRp6Ss1Js0yXYyHhhCFL1SOLNMyftpLUSicVlKmdte5B0WrVfzCg/640?wx_fmt=png)

八、数据清洗和转换

**1.从数据中删除重复项**

# 19 Python脚本以从数据中删除重复项  
import pandas as pd  
def remove_duplicates(data_frame):  
    cleaned_data = data_frame.drop_duplicates()  
    return cleaned_data

这个Python脚本利用pandas从数据集中删除重复行。这是一种简单而有效的方法，可以确保数据完整性并改善数据分析。

**2.数据规范化**

# 20 数据归一化的Python脚本  
import pandas as pd  
def normalize_data(data_frame):  
    normalized_data = (data_frame - data_frame.min()) / (data_frame.max() - data_frame.min())  
    return normalized_data

这个Python脚本使用最小-最大归一化技术对数据进行规范化。

它将数据集中的值缩放到0和1之间的范围，使得比较不同特征更加容易。

**3.处理缺失值**

# 21 处理数据中缺失值的Python脚本  
import pandas as pd  
def handle_missing_values(data_frame):  
    filled_data = data_frame.fillna(method='ffill')  
    return filled_data

这个 Python 脚本使用 pandas 处理数据集中的缺失值。

它使用前向填充方法，将缺失值填充为前一个非缺失值。

![](https://g1proxy.wimg.site/sLFdp0RcNndiL-rn5nk5cWT9DT5db2my-lpZ7c2mJLXY/https://mmbiz.qpic.cn/mmbiz_png/N2vfpRNU8pAITZd4qAicYWBGcjeG2hbn2cXouRp6Ss1Js0yXYyHhhCFL1SOLNMyftpLUSicVlKmdte5B0WrVfzCg/640?wx_fmt=png)

九、自动化PDF操作

**1.从PDF中提取文本**

# 22 从PDF中提取文本的Python脚本  
import PyPDF2  
def extract_text_from_pdf(file_path):  
    with open(file_path, 'rb') as f:  
        pdf_reader = PyPDF2.PdfFileReader(f)  
        text = ''  
        for page_num in range(pdf_reader.numPages):  
            page = pdf_reader.getPage(page_num)  
            text += page.extractText()  
        return text

这个Python脚本使用PyPDF2库从PDF文件中提取文本。

它读取PDF的每一页，并将提取的文本编译成一个字符串。

**2.合并多个PDF文件**

# 23 将多个PDF合并为一个PDF的Python脚本  
import PyPDF2  
def merge_pdfs(input_paths, output_path):  
    pdf_merger = PyPDF2.PdfMerger()  
    for path in input_paths:  
        with open(path, 'rb') as f:  
            pdf_merger.append(f)  
    with open(output_path, 'wb') as f:  
        pdf_merger.write(f)

这个Python脚本将多个PDF文件合并成一个单独的PDF文档。

它非常方便，可以将独立的PDF报告、演示文稿或其他文档合并为一个统一的文件。

**3.添加密码保护**

# 24 Python脚本用于为PDF添加密码保护。  
import PyPDF2  
def add_password_protection(input_path, output_path, password):  
    with open(input_path, 'rb') as f:  
        pdf_reader = PyPDF2.PdfFileReader(f)  
        pdf_writer = PyPDF2.PdfFileWriter()  
        for page_num in range(pdf_reader.numPages):  
            page = pdf_reader.getPage(page_num)  
            pdf_writer.addPage(page)  
            pdf_writer.encrypt(password)  
    with open(output_path, 'wb') as output_file:  
        pdf_writer.write(output_file)

此Python脚本为PDF文件添加密码保护。

它使用密码对PDF进行加密，确保只有拥有正确密码的人才能访问内容。

当前Python依旧是**大趋势、大热门**，相信对于很多初学者，好的资料必不可少。

因此，编程君为大家准备了**《Python网页爬虫、文本处理、科学计算、机器学习、和数据挖掘工具集》**，希望对你有些帮助，**限时扫码免费领取！**

![](https://g1proxy.wimg.site/sAmTYF2BeJOtNJTlx9KJ3JGnspO6LzH5YjlyYOjAVByk/https://mmbiz.qpic.cn/sz_mmbiz_gif/koa6YxqWTHxoUlExwT7GuwKZckTWrfY6gtqSqC7avTh2XIIzRvAmH4ib5YlSkZBl4jeRSiaW1GRkmmC6OVzyI5Cw/640?wx_fmt=png&from=appmsg)

**扫码回复** **【Python工具集】**

**免费领取完整版pdf资料** 

![](https://g1proxy.wimg.site/sFEMRBXLDWkk-cRwKhxPzVu57RfFSFZhyJQQPWcpNpM8/https://mmbiz.qpic.cn/sz_mmbiz_png/koa6YxqWTHy702fuHdyrbucqahUn1KIQf9Mqt82RXyib5BfCqwISA6eVap9R9ia3Z0iaF9c66ibsS1DOEyEZFkguSw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

（内部学员联系专属辅导员即可）

> 你是否想**探索Python奥秘**？
> 
> 你是否困惑**难以系统性** **学习Python**？
> 
> 你是否在学习过程中遇到问题却**无人可请教**？
> 
> ……

如果你有以上问题，那就**快来免费参与Python数据可视化课程**！**限时0元学习课程。**  

**扫码回复** **【可视化】**

**免费学习课程及代码资料**

**![](https://g1proxy.wimg.site/sion2bI2L2Ks798se6OCGvDRz6MO4TKJ93szVpL1lDWQ/https://mmbiz.qpic.cn/mmbiz_png/b96CibCt70iaajvl7fD4ZCicMcjhXMp1v6U6vbsPknCPWoOsW4clIeuW6C3d09vsJnjeH6VNq5W9kTMbft5xRIflA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)![](https://g1proxy.wimg.site/sion2bI2L2Ks798se6OCGvDRz6MO4TKJ93szVpL1lDWQ/https://mmbiz.qpic.cn/mmbiz_png/b96CibCt70iaajvl7fD4ZCicMcjhXMp1v6U6vbsPknCPWoOsW4clIeuW6C3d09vsJnjeH6VNq5W9kTMbft5xRIflA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)![](https://g1proxy.wimg.site/sion2bI2L2Ks798se6OCGvDRz6MO4TKJ93szVpL1lDWQ/https://mmbiz.qpic.cn/mmbiz_png/b96CibCt70iaajvl7fD4ZCicMcjhXMp1v6U6vbsPknCPWoOsW4clIeuW6C3d09vsJnjeH6VNq5W9kTMbft5xRIflA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)**  

![](https://g1proxy.wimg.site/s9cRTpg-C2NDcOHnR4c2eRtXRyz5S2Jx1YdGHB92t1qg/https://mmbiz.qpic.cn/sz_mmbiz_jpg/koa6YxqWTHz9ibicKAbtbVLGAkXbMeFeP3dVTAgoFaOILf6VIGIdYvHAvAJpuXHeXufPxHe6hzYD5lFHXql4NHQQ/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://g1proxy.wimg.site/s-HSacrc22YrQvZz_8oEEasBYTGmgcRQg8pSUOFCfrgc/https://mmbiz.qpic.cn/sz_mmbiz_png/nfAe2vQ6KWmX1ADJxicuKfNIcAiaZBxnqojYDx7iaHeyAT1wbNHSeQY78FkUegKMcu0wichciaUzaqPbhia9AdeWlnvw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

END

**Python学习交流群**

欢迎大家加入我们的**Python学习交流群**。除了有**Python学习、技能提升、工作**各个环节的指导交流外，群内会定期**分享行业资讯、实用工具资料包、书籍推荐、大咖分享会**等等信息，Python干货信息不断发送！

**扫描下方二维码快速加群**

![](https://g1proxy.wimg.site/sion2bI2L2Ks798se6OCGvDRz6MO4TKJ93szVpL1lDWQ/https://mmbiz.qpic.cn/mmbiz_png/b96CibCt70iaajvl7fD4ZCicMcjhXMp1v6U6vbsPknCPWoOsW4clIeuW6C3d09vsJnjeH6VNq5W9kTMbft5xRIflA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)![](https://g1proxy.wimg.site/sion2bI2L2Ks798se6OCGvDRz6MO4TKJ93szVpL1lDWQ/https://mmbiz.qpic.cn/mmbiz_png/b96CibCt70iaajvl7fD4ZCicMcjhXMp1v6U6vbsPknCPWoOsW4clIeuW6C3d09vsJnjeH6VNq5W9kTMbft5xRIflA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)![](https://g1proxy.wimg.site/sion2bI2L2Ks798se6OCGvDRz6MO4TKJ93szVpL1lDWQ/https://mmbiz.qpic.cn/mmbiz_png/b96CibCt70iaajvl7fD4ZCicMcjhXMp1v6U6vbsPknCPWoOsW4clIeuW6C3d09vsJnjeH6VNq5W9kTMbft5xRIflA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://g1proxy.wimg.site/sQglP6j5PzkAKz2Cco3bE5xS2T2qxKeCfHIoAsCQwUzw/https://mmbiz.qpic.cn/sz_mmbiz_png/koa6YxqWTHyxvD1icDrnm5PRYDylAqsKA4icU8xye5khjskBdqveqmyBq4OicTHiaXBicBW1JDXHyibhFDsgvJWYemzQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)
