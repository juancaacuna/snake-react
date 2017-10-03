module.exports = {
  'Snake page': function snakeGameShouldPlay(browser) {
    browser
      .url('http://localhost:3002')
      .windowMaximize();

    const snakePage = browser.page.snakePage();
    snakePage.inputTestValues(browser);

    browser.end();
  },
};
