export default (ctx) => ({
  plugins: {
    'postcss-preset-env': {
      stage: 1,
      features: {
        'nesting-rules': true,
        'custom-properties': false,
      },
    },
    cssnano: ctx.mode === 'production' ? {} : false,
  },
});
