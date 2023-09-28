const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: "weather",
  exposes: {
    "./WeatherComponent": "projects/weather/src/app/weather/weather.component.ts"
  },      

  shared: {
    ...shareAll({ singleton: true, requiredVersion: 'auto' }),
  },

});
