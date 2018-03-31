const trends = require('google-trends-api');

/**
* Utilize trends api to determine keyword ranking
* @param {string} keyword String to query against
* @returns {string}
*/
module.exports = (keyword, context, callback) => {
  const startTime = new Date();
  startTime.setMonth(startTime.getMonth() - 1);

  trends.interestOverTime({
    keyword,
    startTime,
    granularTimeResolution: true
  }, (error, result) => {
    if (error) {
      return callback(error);
    }
    return callback(null, result);
  })
};
