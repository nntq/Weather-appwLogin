const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: "quote",
  exposes: {
    "./QuoteComponent": "projects/quote/src/app/quote/quote.component.ts"
  },      

  shared: {
    ...shareAll({ singleton: true, requiredVersion: 'auto' }),
  },

});
