// config-overrides.js
const { override } = require('customize-cra');

module.exports = override((config) => {
  // Add fallbacks for Node.js core modules
  config.resolve.fallback = {
    ...config.resolve.fallback, // Preserve existing fallbacks
    stream: require.resolve('stream-browserify'), // Add stream fallback
    http: require.resolve('stream-http'), // Add http fallback
    https: require.resolve('https-browserify'), // Add https fallback
    url: require.resolve('url/'), // Add url fallback
    buffer: require.resolve('buffer/'), // Add buffer fallback
    timers: require.resolve('timers-browserify'), // Add timers fallback
  };

  return config; // Return modified config
});
