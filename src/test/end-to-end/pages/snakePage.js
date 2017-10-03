const commands = {
  inputTestValues: function inputTestValues(browser) {
    this.api.pause(1000);
    browser.keys(browser.Keys.ARROW_DOWN);
    this.api.pause(1000);
    browser.keys(browser.Keys.ARROW_LEFT);
    this.api.pause(1000);
    this.waitForElementNotPresent('#infoWrapper', 1000, 'Game is working ok.');
    this.api.pause(4000);
    this.waitForElementPresent('#infoWrapper', 1000, 'Game ended correctly.');
    this.click("#playAgain");
    this.waitForElementNotPresent('#infoWrapper', 1000, 'Game restarted correctly.');
    this.api.pause(1000);
    browser.keys(browser.Keys.ARROW_DOWN);
    this.api.pause(1000);
    browser.keys(browser.Keys.ARROW_LEFT);
    this.api.pause(1000);
    this.waitForElementNotPresent('#infoWrapper', 1000, 'Game is working ok.');
    browser.keys(browser.Keys.ARROW_UP);
    this.api.pause(1000);
    browser.keys(browser.Keys.ARROW_RIGHT);
    this.api.pause(4000);
    this.waitForElementPresent('#infoWrapper', 1000, 'Game ended correctly again.');
    return this;
  },
};

module.exports = {
  commands: [commands],
  elements: {},
};
