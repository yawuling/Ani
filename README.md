### Hexo主题：Ani

---

> 1.1.1版本
> 完成页面：首页，文章详情页，归档， 关于\
> 可用插件：百度统计、不蒜子统计、畅言（网易云跟帖服务将于2017年8月1日关闭）、百度一键分享\
> 可用功能：站内搜索、打赏、第三方网站链接（github和新浪微博）、rss订阅、百度站长自动推送\
> 已实现自适应\
> 支持语言：简体中文，繁体中文，英文

> 2017.7.27更新  增加百度站长自动推送

预览：[涯无凌的个人博客](http://blog.ywulin.com/"涯无凌")

使用hexo-generator-json-content插件进行站内搜索，需在博客根目录下执行以下命令

`npm i -s hexo-generator-json-content`

订阅需在博客根目录下执行以下命令，并在主题配置文件_config.yml中进行配置，具体见下面

`npm i -s hexo-generator-feed`

#### 配置项

```yml

# html lang
language:

# main menu navigation
menu:
  Home: /
  Archives: /archives
  About: /about

# feed，rss订阅
feed:
  type: atom
  path: atom.xml
  limit: 20

# 第三方网站链接，目前只有github和新浪微博
github: 
sina: 

# About页面参数，需要在博客根目录执行“hexo new page "about"”
# 要添加链接，直接增添 'url' 字段
about:
  photo: /image/person.jpg
  items:
    - label: name
      title: #姓名
    - label: nickname
      title: #昵称
    - label: E-mail
      title: #email
    - label: Github
      title: #github名称
      url: #github地址

# 网站icon设置，网站顶部背景图
favicon: /favicon.ico
bg: /image/bg.jpg

# stylesheets loaded in the <head>
stylesheets:
- /css/Ani.css
- /css/github-markdown.css
- /css/highlight.css
- /css/jquery.fancybox.min.css

# scripts loaded in the end of the body
scripts:
- /js/Ani.js
- /js/jquery-3.2.1.min.js
- /js/search.js
- /js/jquery.fancybox.min.js

# toolbar setting
toolbar: right   #页面布局设置目前可设置成right，left以及toolbar处于底部，使用left的话自适应会隐藏掉toolbar，主要还是以right布局进行设计的
category_show_count: true   # 分类是否显示文章数
tag_show_count: true        # 标签是否显示文章数
archive_show_count: true    # 归档是否显示文章数

# toolbar-widgets，顺序可调
widgets:
- search           # 搜索栏
- toc              # 目录
- recent_posts     # 最新文章
- category         # 分类
- tag              # 标签
- archive          # 归档
- tagcloud         # 标签雲

# post setting
copyright: '转载请注明出处，谢谢！'  # 转载文字设置
tip:   # 是否开启打赏
  wepay: /image/wepay.JPG      # 微信支付二维码
  alipay: /image/alipay.JPG    # 支付宝二维码
  label: '您的支持将鼓励我继续创作！'  # 打赏文字设置

# totop，回到顶部
totop: true

# 插件设置
# 百度统计
baidu_analytics: 
# 不蒜子
busuanzi: true
# 畅言
changyan:
  appId: 
  conf: 
# 百度分享服务
share: true

```