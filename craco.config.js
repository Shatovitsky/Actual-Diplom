const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@actions': resolvePath('./src/redux/actions/weather'),
      '@utils': resolvePath('./src/utils/setBackgroundMiddleImage'),
      '@constants': resolvePath('./src/constants'),
      '@statics/icons': resolvePath('./src/statics/assets/icons'),
      '@API': resolvePath('./src/API'),
      '@formatTime': resolvePath('./src/utils/formatTime'),
    },
  },
};
