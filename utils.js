const mapObj = require('map-obj');

exports.warnToError = base => ({
  ...base,

  // 将所有 warn 级别的规则转换为 error
  rules: mapObj(base.rules, (rule, config) => {
    if (config === 'warn') return [rule, 'error'];
    if (Array.isArray(config) && config[0] === 'warn') {
      return [rule, ['error', ...config.slice(1)]];
    }

    return [rule, config];
  }),
});
