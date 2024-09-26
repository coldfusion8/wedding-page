/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-undef */

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-coverage'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome_wsl'],
        coverageReporter: {
            dir: 'coverage/',
            reporters: [{ type: 'lcovonly', subdir: '.', file: 'lcov.info' }]
        },
        customLaunchers: {
            Chrome_wsl: {
                base: 'ChromeHeadless',
                flags: ['--disable-gpu', '--no-sandbox']
            }
        },
        singleRun: false,
        restartOnFileChange: true
    });
};
