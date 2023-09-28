const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: "login",
  exposes: {
    './Login': './projects/login/src/app/login/login.module.ts',
  },      

  shared: {
    ...shareAll({ singleton: true, requiredVersion: 'auto' }),
  },

});
