# Buffer

- Buffer 的大小在创建时确定，且无法更改
- 使用 --zero-fill-buffers 命令行选项时， new Buffer(size)、Buffer.allocUnsafe() 、Buffer.allocUnsafeSlow() 或 new SlowBuffer(size) 返回的 Buffer 在创建时会用 0 填充
- 当使用 Buffer.allocUnsafe() 创建 Buffer 时，如果要分配的内存小于 4KB，则会从一个预分配的 Buffer 切割出来。 这可以避免垃圾回收机制因创建太多独立的 Buffer 而过度使用。当需要在内存池保留一小块内存时，可以使用 Buffer.allocUnsafeSlow() 创建一个非内存池的 Buffer 并拷贝出来
- Buffer 越界访问的处理与 UInt8Array 相同（取值时返回 undefined，赋值时不作为）

### Node.js 当前支持的字符编码有：
- 'ascii' - 仅适用于 7 位 ASCII 数据。此编码速度很快，如果设置则会剥离高位。
- 'utf8' - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8。
- 'utf16le' - 2 或 4 个字节，小端序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
- 'ucs2' - 'utf16le' 的别名。
- 'base64' - Base64 编码。当从字符串创建 Buffer 时，此编码也会正确地接受 RFC4648 第 5 节中指定的 “URL 和文件名安全字母”。
- 'latin1' - 一种将 Buffer 编码成单字节编码字符串的方法（由 RFC1345 中的 IANA 定义，第 63 页，作为 Latin-1 的补充块和 C0/C1 控制码）。
- 'binary' - 'latin1' 的别名。
- 'hex' - 将每个字节编码成两个十六进制的字符