module.exports = factory;

function factory(options, callback) {
  return new Construct(options, callback);
}

function Construct(options, callback) {
  var self = this;
  self._apos = options.apos;
  // Mix in the ability to serve assets and templates
  self._apos.mixinModuleAssets(self, 'browser-requirements', __dirname, options);

  self.pushAsset('template', 'content', { when: 'always', data: { logo: options.logo, minimums: options.minimums } });

  self._apos.pushGlobalData({
    aposBrowserVersion: {
      minimums: options.minimums
    }
  });

  // Invoke the callback. This must happen on next tick or later!
  return process.nextTick(function() {
    return callback(null);
  });
}

// Export the constructor so others can subclass
factory.Construct = Construct;
