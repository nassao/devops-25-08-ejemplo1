// Ensure Karma uses Puppeteer's Chromium when CHROME_BIN isn't provided by the environment
try {
  if (!process.env.CHROME_BIN) {
    // Lazy require puppeteer to avoid throwing if not installed
    const puppeteer = require('puppeteer');
    const chromePath = puppeteer.executablePath();
    if (chromePath && typeof chromePath === 'string') {
      process.env.CHROME_BIN = chromePath;
      // console.log(`[karma] Using Puppeteer Chromium at: ${chromePath}`);
    }
  }
} catch (e) {
  // If puppeteer is not available, leave CHROME_BIN as-is and let Karma report the error.
}

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-junit-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    reporters: ['progress', 'junit', 'coverage'],
    junitReporter: {
      outputDir: 'reports/junit',
      outputFile: 'junit-report.xml',
      useBrowserName: false
    },
    coverageReporter: {
      dir: 'coverage',
      reporters: [{ type: 'lcov', subdir: '.' }, { type: 'text-summary' }]
    },
    browsers: ['ChromeHeadlessCI', 'ChromeHeadless'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage'
        ]
      }
    },
    singleRun: true,
    restartOnFileChange: false
  });
};
