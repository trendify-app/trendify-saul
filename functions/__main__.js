const trends = require('google-trends-api');

/**
* Utilize trends api to determine keyword ranking
* @param {array} keyword List of keywords to query
* @returns {string}
*/
module.exports = (keyword, context, callback) => {
  const startTime = new Date();
  startTime.setMonth(startTime.getMonth() - 1);

  trends.interestOverTime({
    keyword,
    startTime
  }, (error, result) => {
    if (error) {
      return callback(error);
    }
    return callback(null, result);
  })
};
