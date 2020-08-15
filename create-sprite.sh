mkdir icons
cd icons
git clone https://github.com/mapbox/maki.git
git clone https://github.com/nakuruwater/water-icons.git
git clone https://github.com/narwassco/mapbox-street-icons.git
git clone https://github.com/narwassco/mapbox-satellite-icons.git
cd ..
npm run sprite
