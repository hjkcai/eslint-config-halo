const TSRules = require('./typescript');
const { warnToError } = require('../utils');

module.exports = warnToError(TSRules);
