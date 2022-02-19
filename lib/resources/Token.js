'use strict';

var resource = require('../apiResources');

var tokens = function(config) {
  return resource.resourceActions('tokens',
    ['create', 'retrieve'],
    {
      'key':          config['publicKey'],
      'omiseVersion': config['omiseVersion'],
      'host':         'vault.staging-omise.co',
    }
  );
};

module.exports = tokens;
