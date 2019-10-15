const execSync    = require('child_process').execSync;
const os          = require('os')
const interfaces  = require('os').networkInterfaces();

exports.publicIP = function() {
  return new Promise((resolve, reject) => {
    try {
      resolve(String(execSync('curl -s https://api.ipify.org')))
    } catch(error) {
      return reject(error.message || error);
      fallBackMethod();
    }
  })
}

exports.internalIP = function () {
  return new Promise((resolve, reject) => {
    try {
      Object.keys(interfaces).forEach(dev => {
        interfaces[dev].filter(details => {
          if (details.family === 'IPv4' && details.internal === false) {
            resolve(details.address);
          }
        });
      });
    } catch {
      return reject(error.message || error);
      fallBackMethod();
    }
  })
}

exports.hostName = function() {
  return new Promise((resolve, reject) => {
    try {
      resolve(os.hostname());
    } catch (error) {
      return reject(error.message || error);
      fallBackMethod();
    }
  })
}
