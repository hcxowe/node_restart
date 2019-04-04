const path = require('path')

console.log(path.basename('/foo/bar/baz/test.html'))
console.log(path.basename('/foo/bar/baz/test.html', '.html'))

console.log(path.dirname('/foo/bar/baz/test.html'))

console.dir(path.parse('/foo/bar/baz/test.html'))

console.log(path.normalize('/foo/bar//baz/asdf/quux/..')) // /foo/bar/baz/asdf/

console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb')) //'../../impl/bbb'

path.resolve('/foo/bar', './baz') //'/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/') // '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录是 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'