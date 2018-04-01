# trendify-saul

Saul is a endpoint hosted using [stdlib/lib-node](https://github.com/stdlib/lib-node) that queries Google Trends Api.


## Usage

```
const lib = require('lib');

module.exports = (keywords = []) => {
  return lib.trendify['trendify-saul']['@dev'](keywords)
}
```
