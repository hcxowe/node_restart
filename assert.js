const assert = require('assert')
const strict = require('assert').strict // 严格模式

// 其他方法
/* assert.doesNotReject(asyncFn[, error][, message])
assert.doesNotThrow(fn[, error][, message])
assert.equal(actual, expected[, message])
assert.fail([message])
assert.fail(actual, expected[, message[, operator[, stackStartFn]]])
assert.ifError(value)
assert.notDeepEqual(actual, expected[, message])
assert.notDeepStrictEqual(actual, expected[, message])
assert.notEqual(actual, expected[, message])
assert.notStrictEqual(actual, expected[, message])
assert.ok(value[, message])
assert.rejects(asyncFn[, error][, message])
assert.strictEqual(actual, expected[, message])
assert.throws(fn[, error][, message]) */

// 深度判断
assert.deepStrictEqual([1, [2, 3]], [1, [2, '3']], 'not equal') // not equal
assert.deepEqual([1, [2, 3]], [1, [2, '3']], 'not equal') // 
strict.deepEqual([1, [2, 3]], [1, [2, '3']], 'not equal') // not equal


// 真值判断
assert('', 'False value')  // False value

assert.equal(1, '1')
strict.equal(1, '1') // error


