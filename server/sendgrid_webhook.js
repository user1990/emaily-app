var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'somerandomchars' }, function(err, tunnel) {
  console.log('LT running');
});
