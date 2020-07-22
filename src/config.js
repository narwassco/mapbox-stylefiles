const path = require('path');
const export_dir = __dirname;

module.exports = {
    sprites:[
      {
        output_dir: path.resolve(export_dir,'../docs/unvt/sprite'),
        icons: [
          path.resolve(export_dir,'../../maki/icons'),
          path.resolve(export_dir,'../../water-icons/icons'),
        ],
      },
      {
        output_dir: path.resolve(export_dir, '../docs/street/sprite'),
        icons: [
          path.resolve(export_dir,'../../mapbox-street-icons/icons'),
        ],
      },
      {
        output_dir: path.resolve(export_dir, '../docs/satellite/sprite'),
        icons: [
          path.resolve(export_dir,'../../mapbox-satellite-icons/icons'),
        ],
      },
    ]
};
