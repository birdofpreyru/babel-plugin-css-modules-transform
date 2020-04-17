module.exports = {
  presets: [
    ['@babel/env'],
  ],
  env: {
    test: {
      plugins: [
        'istanbul',
      ],
    },
  },
};
