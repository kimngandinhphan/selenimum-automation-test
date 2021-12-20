const { By, Builder } = require("selenium-webdriver");
const { assert } = require("chai");
require("chromedriver");
require("geckodriver");

function execute(browser, build, data, operation, intergerOnlyClick, clearClick) {
  describe(`${operation} Functionality Test - Build ${build}`, function () {
    this.timeout(30000);
    let driver;
    let operationSymbol = getOperationSymbol(operation);

    beforeEach(async function () {
      driver = await new Builder().forBrowser(browser).build();
      await driver.get("https://testsheepnz.github.io/BasicCalculator.html");

      await driver.findElement(By.id("selectBuild")).click();
      {
        await driver.findElement(By.id("selectBuild"))
          .findElement(By.xpath("//option[. = '" + build.toString() + "']"))
          .click();
      }
      return Promise.resolve();
    })

    afterEach(async function () {
      await driver.quit();
      return Promise.resolve();
    })

    data.forEach(({ firstNum, secondNum, expectedResult }) => {
      it(`Expected Result of Operation (${firstNum} ${operationSymbol} ${secondNum}): ${expectedResult}`, async function () {
        await driver.findElement(By.id("number1Field")).sendKeys(firstNum);
        await driver.findElement(By.id("number2Field")).sendKeys(secondNum);
        await driver.findElement(By.id("selectOperationDropdown")).click();
        {
          await driver.findElement(By.id("selectOperationDropdown"))
            .findElement(By.xpath(`//option[. = '${operation}']`))
            .click();
        }

        intergerOnlyClick && await driver.findElement(By.id("integerSelect")).click();

        await driver.findElement(By.id("calculateButton")).click();

        const errorMsg = await driver.findElement(By.id("errorMsgField")).getText();

        clearClick && await driver.findElement(By.id("clearButton")).click();
        
        if (errorMsg) {
          assert.equal(errorMsg, expectedResult);
        } else {
          const result = await driver.findElement(By.id("numberAnswerField")).getAttribute("value");
          assert.equal(result, expectedResult);
        }
        return Promise.resolve();
      })
    })
  })
}

function getOperationSymbol(operation) {
  switch (operation) {
    case 'Add': return '+'
    case 'Subtract': return '-'
    case 'Multiply': return '*'
    case 'Divide': return '/'
    case 'Concatenate': return '⧺'
    default: return '+'
  }
}

exports.execute = execute;
