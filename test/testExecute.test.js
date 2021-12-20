require("chromedriver");
require("geckodriver");
const { subtractTestData, addTestData, multiplyTestData, divideTestData, concatenateTestData, intergersOnlyTestData, clearBtnTestData } = require('./data/testData');
const { execute } = require('./testScript.spec');

const browsers = ["chrome", "firefox"];
const builds = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// Add Test Functionality of Build Prototype with Chrome Browser
execute(browsers[0], builds[0], addTestData, 'Add', false, false);

// // UNCOMMENT THIS TO RUN FULL TEST
// browsers.forEach(browser => {
//     builds.forEach(build => {
//         execute(browser, build, addTestData, 'Add', false, false);
//         execute(browser, build, subtractTestData, 'Subtract', false, false);
//         execute(browser, build, multiplyTestData, 'Multiply', false, false);
//         execute(browser, build, divideTestData, 'Divide', false, false);
//         execute(browser, build, concatenateTestData, 'Concatenate', false, false);
//         execute(browser, build, intergersOnlyTestData, 'Add', true, false);
//         execute(browser, build, clearBtnTestData, 'Add', false, true);
//     })
// })
