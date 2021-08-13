const CracoSvgSpritePlugin = require("craco-plugin-svg-sprite");

module.exports = {
  plugins: [
    {
      plugin: CracoSvgSpritePlugin,
      options:{
        include: 'src'
      }
    },
  ],
};
