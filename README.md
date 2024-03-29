# mapbox-stylefiles
![GitHub](https://img.shields.io/github/license/narwassco/mapbox-stylefiles)

This repository manages Mapbox Stylefile for the applicaiton.

These sprite files were created by Mapbox Studio. However, some layers of style file under `unvt` folder were designed by `United Nation Vector Tile Toolkit`.

## About Sprite files
### Download ICONs

Download the following repositories under the directory of `icons`.
```
mkdir icons
cd icons
git clone https://github.com/mapbox/maki.git
git clone https://github.com/narwassco/water-icons.git
git clone https://github.com/openmaptiles/osm-bright-gl-style.git
git clone https://github.com/narwassco/mapbox-street-icons.git
git clone https://github.com/narwassco/mapbox-satellite-icons.git
```

### Install & Generate Sprite files
```
git clone https://github.com/narwassco/mapbox-stylefiles.git
cd mapbox-stylefiles
npm i
npm run sprite
```

### Build style.yml to style.json by charites

```
npm i @unvt/charites -g
```

- Live preview

```
charites serve charites/style-unvt.yml
charites serve charites/style-buildings.yml
charites serve charites/style-unvt-terrain.yml --provider mapbox --mapbox-access-token XXXX
charites serve charites/style-mapbox-street.yml --provider mapbox --mapbox-access-token XXXX
charites serve charites/style-mapbox-satellite.yml --provider mapbox --mapbox-access-token XXXX
charites serve charites/style-mapbox-street-terrain.yml --provider mapbox --mapbox-access-token XXXX
charites serve charites/style-mapbox-satellite-terrain.yml --provider mapbox --mapbox-access-token XXXX
```

- build

```
npm run build
```

### Configuration
Please configure your icons and output direcoties settings in [config.js](./test/config.js).

## Deploy
Once you are ready all the stylefiles and sprite files under `docs` directory. You can push it to Github repository.

Then, make `docs` folder as Github pages.
