module.exports = {
  plugins: [
    require.resolve('babel-plugin-transform-decorators-legacy'),
    require.resolve('babel-plugin-transform-class-properties'),
    require.resolve('babel-plugin-syntax-dynamic-import'),
    [
      require.resolve('babel-plugin-transform-es2015-template-literals'),
      { loose: true }
    ],
    require.resolve('babel-plugin-transform-es2015-literals'),
    require.resolve('babel-plugin-transform-es2015-function-name'),
    require.resolve('babel-plugin-transform-es2015-arrow-functions'),
    require.resolve('babel-plugin-transform-es2015-block-scoped-functions'),
    [require.resolve('babel-plugin-transform-es2015-classes'), { loose: true }],
    require.resolve('babel-plugin-transform-es2015-object-super'),
    require.resolve('babel-plugin-transform-es2015-shorthand-properties'),
    [
      require.resolve('babel-plugin-transform-es2015-computed-properties'),
      { loose: true }
    ],
    [require.resolve('babel-plugin-transform-es2015-for-of'), { loose: true }],
    require.resolve('babel-plugin-transform-es2015-sticky-regex'),
    require.resolve('babel-plugin-transform-es2015-unicode-regex'),
    require.resolve('babel-plugin-check-es2015-constants'),
    [require.resolve('babel-plugin-transform-es2015-spread'), { loose: true }],
    require.resolve('babel-plugin-transform-es2015-parameters'),
    [require.resolve('babel-plugin-transform-es2015-destructuring'), { loose: true }],
    require.resolve('babel-plugin-transform-es2015-block-scoping'),
    require.resolve('babel-plugin-transform-es2015-typeof-symbol'),
    require.resolve('babel-plugin-transform-object-rest-spread'),
    [
      require.resolve('babel-plugin-transform-regenerator'),
      { async: false, asyncGenerators: false }
    ]
  ]
};
