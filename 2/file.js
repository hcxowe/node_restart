const fs = require('fs')

let file = 'test.txt'

// 获取文件信息
console.log(fs.statSync(file))

// 读取文件全部内容
fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.mkdir('testDir', function (err) { 
    if (err) throw err;
    console.log('文件夹已创建');
})

console.log(fs.createReadStream(file, {
    start: 0,
    end: 5
}))

fs.copyFile(file, 'copy.txt', 'COPYFILE_EXCL', function (err) {
    if (err) throw err;
    console.log('源文件已拷贝到目标文件');
});

// 文件系统操作常用常量的对象
console.dir(fs.constants)

// 追加内容到文件末尾
fs.appendFile(file, '追加的数据', { encoding: 'utf8', /* mode: '0o666', */ flag: 'a' }, (err) => {
    if (err) {
        throw err
    } 

    console.log('数据已追加到文件')
})


fs.access(file, fs.constants.F_OK, (err) => {
    console.log(`${file} ${err ? '不存在' : '存在'}`)
})

try {
    // 报错则表明没有指定的权限
    fs.accessSync('test.txt', fs.constants.R_OK | fs.constants.W_OK);
    console.log('可以读写');
} catch (err) {
    console.error('无权访问');
}