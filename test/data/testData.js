
exports.addTestData = [
    { firstNum: 0, secondNum: 0, expectedResult: 0 },
    { firstNum: -2, secondNum: 3, expectedResult: 1 },
    { firstNum: 2, secondNum: -3, expectedResult: -1 },
    { firstNum: 1000000000, secondNum: 3, expectedResult: 1000000003 },
    { firstNum: 2, secondNum: 1000000000, expectedResult: 1000000002 },
    { firstNum: 2.00000009, secondNum: 3.99999999, expectedResult: 6.00000008 },
    { firstNum: '', secondNum: 3, expectedResult: 3 },
    { firstNum: 2, secondNum: '', expectedResult: 2 },
    { firstNum: '@', secondNum: 3, expectedResult: 'Number 1 is not a number' },
    { firstNum: 2, secondNum: '@', expectedResult: 'Number 2 is not a number' },
    { firstNum: 'abc', secondNum: 'xyz', expectedResult: 'Number 1 is not a number' },
]

exports.subtractTestData = [
    { firstNum: 2, secondNum: 3, expectedResult: -1 },
    { firstNum: -2, secondNum: 3, expectedResult: -5 },
    { firstNum: 2, secondNum: -3, expectedResult: 5 },
    { firstNum: 1000000000, secondNum: 3, expectedResult: 999999997 },
    { firstNum: 2, secondNum: 1000000000, expectedResult: -999999998 },
]

exports.multiplyTestData = [
    { firstNum: 0, secondNum: 1, expectedResult: 0 },
    { firstNum: -2, secondNum: 3, expectedResult: -5 },
    { firstNum: 1000000000, secondNum: 1000000000, expectedResult: 1000000000000000000 },
]

exports.divideTestData = [
    { firstNum: 1000000000, secondNum: 1000000000, expectedResult: 1 },
    { firstNum: 1, secondNum: 1000000000, expectedResult: 1e-9 },
    { firstNum: 0, secondNum: 0, expectedResult: 'Divide by zero error!' },
]

exports.concatenateTestData = [
    { firstNum: 2, secondNum: 3, expectedResult: '23' },
    { firstNum: -2, secondNum: 3, expectedResult: '-23' },
    { firstNum: 1000000000, secondNum: 3, expectedResult: '1000000003' },
    { firstNum: 2.00000009, secondNum: 3.99999999, expectedResult: '2.000000093.99999999' },
    { firstNum: '@', secondNum: 3, expectedResult: '@3' },
    { firstNum: 'abc', secondNum: 'xyz', expectedResult: 'abcxyz' },
]

exports.intergersOnlyTestData = [
    { firstNum: 2.00000009, secondNum: 3.99999999, expectedResult: '6' },
]

exports.clearBtnTestData = [
    { firstNum: 2.00000009, secondNum: 3.99999999, expectedResult: '' },
]

