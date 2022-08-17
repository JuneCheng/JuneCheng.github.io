(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{423:function(t,l,s){"use strict";s.r(l);var a=s(55),i=Object(a.a)({},(function(){var t=this,l=t.$createElement,s=t._self._c||l;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[t._v("#")]),t._v(" 网络")]),t._v(" "),s("h2",{attrs:{id:"app-网络层有哪些优化策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-网络层有哪些优化策略"}},[t._v("#")]),t._v(" App 网络层有哪些优化策略")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("优化DNS解析和缓存")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("对传输的数据进行压缩，减少传输的数据")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("使用缓存手段减少请求的发起次数")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("使用策略来减少请求的发起次数，比如在上一个请求未着地之前，不进行新的请求")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("避免网络抖动，提供重发机制")])])])]),t._v(" "),s("h2",{attrs:{id:"https的加密原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https的加密原理"}},[t._v("#")]),t._v(" HTTPS的加密原理")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("服务器端用非对称加密(RSA)生成公钥和私钥或者跟CA机构购买证书")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("客户端发送请求，服务端把公钥发给客户端, 服务器则保存私钥")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("客户端拿到公钥，验证证书可信任后会生成一个随机密钥, 这个随机密钥就是将来客户端和服务器用来通信的钥匙")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("然后客户端用公钥对随机密钥进行加密, 再发给服务器")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("服务器拿到客户端发来的加密后的密钥后, 再使用私钥解密密钥, 到此双方都获得通信的钥匙")])])])]),t._v(" "),s("h2",{attrs:{id:"https中客户端验证公钥证书的过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https中客户端验证公钥证书的过程"}},[t._v("#")]),t._v(" https中客户端验证公钥证书的过程")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844903924760068103",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文献"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("服务器将公钥证书发送给客户端 客户端验证公钥证书 从而确保公钥的合法性")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("客户端取出提前内置在手机内部的认证机构的公钥")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("用认证机构的公钥去解密公钥证书里的数字签名 从而得到数字指纹")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("客户端对公钥证书的服务器公钥进行 数字摘要算法 从而生成数字指纹")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("对比客户端自己生成的数字指纹(第3步)和解密得到的数字指纹(第2步)是否一致 如果一致则公钥证书验证通过 就可以进行接下来的握手步骤了")])])])]),t._v(" "),s("h2",{attrs:{id:"数据安全及各种加密算法对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据安全及各种加密算法对比"}},[t._v("#")]),t._v(" 数据安全及各种加密算法对比")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/b44927161081",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文献"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"http协议包含那些内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http协议包含那些内容"}},[t._v("#")]),t._v(" http协议包含那些内容")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("http协议 包含  http协议的请求和http协议的响应")])]),t._v(" "),s("li",[s("p",[t._v("http协议的请求包含")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("请求方法-URL-协议/版本")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("请求头")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("请求正文")])])])])]),t._v(" "),s("li",[s("p",[t._v("http响应的请求包含")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("状态行HTTP-Version Status-Code Reason-Phrase CRLF")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("响应头")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("响应正文")])])])])])]),t._v(" "),s("h2",{attrs:{id:"http-1-0-1-1-2-0-3-0的特点及其区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-1-0-1-1-2-0-3-0的特点及其区别"}},[t._v("#")]),t._v(" http 1.0 1.1 2.0 3.0的特点及其区别")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("HTTP 1.0")]),t._v(" "),s("ul",[s("li",[t._v("短连接：每次发送请求都要重新建立tcp请求，即三次握手，非常浪费性能")]),t._v(" "),s("li",[t._v("无host头域，也就是http请求头里的host，")]),t._v(" "),s("li",[t._v("不允许断点续传，而且不能只传输对象的一部分，要求传输整个对象")])])]),t._v(" "),s("li",[s("p",[t._v("HTTP 1.1")]),t._v(" "),s("ul",[s("li",[t._v("长连接，流水线，使用connection:keep-alive使用长连接，与http 2.0不同的是， host头域由于长连接会给服务器造成压力")])])]),t._v(" "),s("li",[s("p",[t._v("HTTP 2.0")]),t._v(" "),s("ul",[s("li",[t._v("头部压缩，双方各自维护一个header的索引表，使得不需要直接发送值，通过发送key缩减头部大小")]),t._v(" "),s("li",[t._v("多路复用，使用多个stream，每个stream又分帧传输，使得一个tcp连接能够处理多个http请求")]),t._v(" "),s("li",[t._v("可以使用服务端推送")])])]),t._v(" "),s("li",[s("p",[t._v("HTTP 3.0")]),t._v(" "),s("ul",[s("li",[t._v("基于google的QUIC协议，而quic协议是使用udp实现的")]),t._v(" "),s("li",[t._v("减少了tcp三次握手时间，以及tls握手时间")]),t._v(" "),s("li",[t._v("解决了http 2.0中前一个stream丢包导致后一个stream被阻塞的问题")]),t._v(" "),s("li",[t._v("优化了重传策略，重传包和原包的编号不同，降低后续重传计算的消耗")]),t._v(" "),s("li",[t._v("连接迁移，不再用tcp四元组确定一个连接，而是用一个64位随机数来确定这个连接")]),t._v(" "),s("li",[t._v("更合适的流量控制")])])])]),t._v(" "),s("h2",{attrs:{id:"http请求头中各字段解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http请求头中各字段解释"}},[t._v("#")]),t._v(" HTTP请求头中各字段解释")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("Accept:可以接收的内容类型，例如text/plain")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("Accept-Encoding:浏览器可以处理的编码方式，例如gzip, deflate, br")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("Accept-Language:浏览器接收的语言，例如zh-CN")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("Connection:告诉服务器这个user agent（通常就是浏览器）想要使用怎样的连接方式。http1.1默认是keep-alive。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("Content-Length:一个请求的请求体的内存长度，单位为字节(byte)")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"6"}},[s("li",[t._v("Content-Type:请求体中的内容的mime类型，通常只会用在POST和PUT方法的请求中。例如：application/x-www-form-urlencoded")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"7"}},[s("li",[t._v("Cookie:浏览器向服务器发送请求时发送cookie，或者服务器向浏览器附加cookie")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"8"}},[s("li",[t._v("host:设置服务器域名和TCP端口号")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"9"}},[s("li",[t._v("Referer:指当前请求的URL是在什么地址引用的")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"10"}},[s("li",[t._v("User-Agent:用户的浏览器相关信息")])])])]),t._v(" "),s("h2",{attrs:{id:"tcp和udp的区别和优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp和udp的区别和优缺点"}},[t._v("#")]),t._v(" TCP和UDP的区别和优缺点")]),t._v(" "),s("p",[t._v("归为5点：连接、可靠性、实时性、交互方式、性能")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("TCP面向连接（如打电话要先拨号建立连接）;UDP是无连接的，即发送数据之前不需要建立连接")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达;UDP尽最大努力交付，即不保证可靠交付。Tcp通过校验和，重传控制，序号标识，滑动窗口、确认应答实现可靠传输。如丢包时的重发控制，还可以对次序乱掉的分包进行顺序控制。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("UDP具有较好的实时性，工作效率比TCP高，适用于对高速传输和实时性有较高的通信或广播通信。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("每一条TCP连接只能是点到点的;UDP支持一对一，一对多，多对一和多对多的交互通信")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("TCP对系统资源要求较多，UDP对系统资源要求较少")])])])]),t._v(" "),s("h2",{attrs:{id:"tcp三次握手和四次挥手全过程及为什么要三次握手解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手和四次挥手全过程及为什么要三次握手解答"}},[t._v("#")]),t._v(" TCP三次握手和四次挥手全过程及为什么要三次握手解答")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://yuanrengu.com/2020/77eef79f.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文献"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("三次握手：")]),t._v(" "),s("p",[t._v('SYN 的全称叫做 Synchronize Sequence Numbers，即"同步序列号"')]),t._v(" "),s("ul",[s("li",[s("p",[t._v("第一次握手：客户端发送syn包(syn=x)到服务器，并进入SYN_SEND状态，等待服务器确认；")])]),t._v(" "),s("li",[s("p",[t._v("第二次握手：服务器收到syn包，必须确认客户的SYN（ack=x+1），同时自己也发送一个SYN包（syn=y），即SYN+ACK包，此时服务器进入SYN_RECV状态；")])]),t._v(" "),s("li",[s("p",[t._v("第三次握手：客户端收到服务器的SYN＋ACK包，向服务器发送确认包ACK(ack=y+1)，此包发送完毕，客户端和服务器进入ESTABLISHED状态，完成三次握手。")]),t._v(" "),s("p",[t._v("握手过程中传送的包里不包含数据，三次握手完毕后，客户端与服务器才正式开始传送数据。理想状态下，TCP连接一旦建立，在通信双方中的任何一方主动关闭连接之前，TCP 连接都将被一直保持下去。\n确认号：其数值等于发送方的发送序号+1(即接收方期望接收的下一个序列号)。")])])]),t._v(" "),s("p",[t._v("四次挥手：")]),t._v(" "),s("p",[t._v("与建立连接的“三次握手”类似，断开一个TCP连接则需要“四次挥手”。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("第一次挥手：主动关闭方发送一个FIN，用来关闭主动方到被动关闭方的数据传送，也就是主动关闭方告诉被动关闭方：我已经不会再给你发数据了(当然，在fin包之前发送出去的数据，如果没有收到对应的ack确认报文，主动关闭方依然会重发这些数据)，但是，此时主动关闭方还可以接受数据。")])]),t._v(" "),s("li",[s("p",[t._v("第二次挥手：被动关闭方收到FIN包后，发送一个ACK给对方，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号）。")])]),t._v(" "),s("li",[s("p",[t._v("第三次挥手：被动关闭方发送一个FIN，用来关闭被动关闭方到主动关闭方的数据传送，也就是告诉主动关闭方，我的数据也发送完了，不会再给你发数据了。")])]),t._v(" "),s("li",[s("p",[t._v("第四次挥手：主动关闭方收到FIN后，发送一个ACK给被动关闭方，确认序号为收到序号+1，至此，完成四次挥手。")]),t._v(" "),s("p",[t._v("TCP的四次挥手过程（简言之）：主动关闭方向被动关闭方发送不会再给你发数据了的信息；被动关闭方对收到的主动关闭方的报文段进行确认；被动关闭方向主动关闭方发送我也不会再给你发数据了的信息；主动关闭方再次对被动关闭方的确认进行确认。")])])]),t._v(" "),s("h2",{attrs:{id:"为什么不能两次握手-防止已失效的连接请求又传送到服务器端-因而产生错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么不能两次握手-防止已失效的连接请求又传送到服务器端-因而产生错误"}},[t._v("#")]),t._v(" 为什么不能两次握手：防止已失效的连接请求又传送到服务器端，因而产生错误")]),t._v(" "),s("p",[t._v("假设改为两次握手，client端发送的一个连接请求在服务器滞留了，这个连接请求是无效的，client已经是closed的状态了，而服务器认为client想要建立\n一个新的连接，于是向client发送确认报文段，而client端是closed状态，无论收到什么报文都会丢弃。而如果是两次握手的话，此时就已经建立连接了。\n服务器此时会一直等到client端发来数据，这样就浪费掉很多server端的资源。")]),t._v(" "),s("p",[t._v("为什么要四次挥手：\n关闭连接时，当收到对方的FIN报文时，仅仅表示对方不再发送数据了但是还能接收数据，我们也未必全部数据都发送给对方了，所以我们不可以立即close，也可以发送一些数据给对方后，再发送FIN报文给对方来表示同意现在关闭连接，因此，我们的ACK和FIN一般都会分开发送。")]),t._v(" "),s("h2",{attrs:{id:"syn攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syn攻击"}},[t._v("#")]),t._v(" SYN攻击：")]),t._v(" "),s("p",[t._v("在三次握手过程中，Server发送SYN-ACK之后，收到Client的ACK之前的TCP连接称为半连接（half-open connect），此时Server处于SYN_RCVD状态，当收到ACK后，Server转入ESTABLISHED状态。SYN攻击就是Client在短时间内伪造大量不存在的IP地址，并向Server不断地发送SYN包，Server回复确认包，并等待Client的确认，由于源地址是不存在的，因此，Server需要不断重发直至超时，这些伪造的SYN包将长时间占用未连接队列，导致正常的SYN请求因为队列满而被丢弃，从而引起网络堵塞甚至系统瘫痪。")]),t._v(" "),s("h2",{attrs:{id:"cookie-和-session-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cookie-和-session-的区别"}},[t._v("#")]),t._v(" Cookie 和 Session 的区别：")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("cookie数据存放在客户的浏览器上，session数据放在服务器上。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。而session存储在服务端，可以无限量存储")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("cookie相比session不是很安全，别人可以分析存放在本地的cookie并进行cookie欺骗,考虑到安全应当使用session。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能,考虑到减轻服务器性能方面，应当使用cookie。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("所以：将登录信息等重要信息存放为session;其他信息如果需要保留，可以放在cookie中")])])])]),t._v(" "),s("h2",{attrs:{id:"osi七层协议模型、tcp-ip四层模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#osi七层协议模型、tcp-ip四层模型"}},[t._v("#")]),t._v(" OSI七层协议模型、TCP/IP四层模型")]),t._v(" "),s("ul",[s("li",[t._v("七层模型：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层。七层结构记忆方法：应、表、会、传、网、数、物")]),t._v(" "),s("li",[t._v("TCP/IP四层模型：应用层、传输层、网络层、数据链路层")])]),t._v(" "),s("h2",{attrs:{id:"afnetworking-底层原理分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#afnetworking-底层原理分析"}},[t._v("#")]),t._v(" AFNetworking 底层原理分析")]),t._v(" "),s("p",[t._v("AFNetworking主要是对NSURLSession和NSURLConnection(iOS9.0废弃)的封装,其中主要有以下类:")]),t._v(" "),s("ul",[s("li",[s("ol",[s("li",[t._v("AFHTTPRequestOperationManager：内部封装的是 NSURLConnection, 负责发送网络请求, 使用最多的一个类。(3.0废弃)")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"2"}},[s("li",[t._v("AFHTTPSessionManager：内部封装是 NSURLSession, 负责发送网络请求,使用最多的一个类。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"3"}},[s("li",[t._v("AFNetworkReachabilityManager：实时监测网络状态的工具类。当前的网络环境发生改变之后,这个工具类就可以检测到。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"4"}},[s("li",[t._v("AFSecurityPolicy：网络安全的工具类, 主要是针对 HTTPS 服务。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"5"}},[s("li",[t._v("AFURLRequestSerialization：序列化工具类,基类。上传的数据转换成JSON格式(AFJSONRequestSerializer).使用不多。")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"6"}},[s("li",[t._v("AFURLResponseSerialization：反序列化工具类;基类.使用比较多:")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"7"}},[s("li",[t._v("AFJSONResponseSerializer; JSON解析器,默认的解析器.")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"8"}},[s("li",[t._v("AFHTTPResponseSerializer; 万能解析器; JSON和XML之外的数据类型,直接返回二进制数据.对服务器返回的数据不做任何处理.")])])]),t._v(" "),s("li",[s("ol",{attrs:{start:"9"}},[s("li",[t._v("AFXMLParserResponseSerializer; XML解析器;")])])])])])}),[],!1,null,null,null);l.default=i.exports}}]);