module.exports = {
  construct: function(self, options) {
    self.addHelpers({
      message: function() {
        return self.partial('content', { 
          logo: options.logo, 
          minimums: options.minimums,
          browseHappy: (options.browseHappy !== undefined) ? options.browseHappy : true
        });
      }
    });
  },
  alias: 'browserRequirements'
};

