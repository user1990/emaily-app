const localtunnel = require('localtunnel');

localtunnel(5000, { subdomain: 'somerandomsubdomain' }, function(err, tunnel) {
  console.log('LT running');
});
