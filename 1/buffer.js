

const str = '\u00bd + \u00bc = \u00be';
console.log(`${str}: ${str.length} 个字符, ` + `${Buffer.byteLength(str, 'utf8')} 个字节`);

const buf7 = Buffer.from('hello world', 'ascii');
console.log(buf7)
for (var chr of buf7) { 
    console.log(String.fromCharCode(chr))
}

const buf6 = Buffer.from('tést', 'latin1');
console.log(buf6) // <Buffer 74 e9 73 74>

const buf5 = Buffer.from('tést');
console.log(buf5) // <Buffer 74 c3 a9 73 74>

const buf4 = Buffer.from([1, 2, 3])
console.log(buf4) // <Buffer 01 02 03>

const buf3 = Buffer.allocUnsafe(10) // 未格式化的Buffer
console.log(buf3) // <Buffer 0e 00 00 00 06 02 ff ff 06 00>

const buf2 = Buffer.alloc(10, 1)
console.log(buf2) // <Buffer 01 01 01 01 01 01 01 01 01 01>

const buf1 = Buffer.alloc(10) // 创建长度为10的用0填充的Buffer
console.log(buf1) // <Buffer 00 00 00 00 00 00 00 00 00 00>

