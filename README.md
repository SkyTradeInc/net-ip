# net-ip [![Build Status](https://travis-ci.org/sindresorhus/public-ip.svg?branch=master)](https://travis-ci.org/sindresorhus/public-ip)

> Get your internal and public IP address - very fast!

## Install

```
$ npm install net-ip
```


## Usage

```js
const netip  = require('net-ip')

netip.publicIP().then((ip => {
  console.log(`Your public IP is: ${ip}`)
})

netip.internalIP().then((ip => {
  console.log(`Your internal IP is: ${ip}`)
})

netip.hostName().then((hostname => {
  console.log(`Your hostname is: ${hostname}`)
})

```

## API

### publicIP()
### privateIP()
### hostName()
