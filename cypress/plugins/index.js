/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, _config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--disable-web-security');
    }

    return launchOptions;
  });
}
