<template>
    <div class="mapContainer">
      <l-map
        :zoom="zoom"
        :center="center"
        style="z-index:1"
        :useGlobalLeaflet="false"
      >
        <l-tile-layer
          :url="url"
          :attribution="attribution"
        />
        <l-geo-json
          v-if="show"
          :geojson="geojson"
          :options="options"
        />
        
      </l-map>
    </div>
  </template>
  
  <script>
  import { LMap, LTileLayer, LMarker, LGeoJson, LPopup } from "@vue-leaflet/vue-leaflet";
  
  export default {
    name: "Travel Map",
    components: {
      LMap,
      LTileLayer,
      LGeoJson,
      LMarker,
      LPopup
    },
    data() {
      return {
        zoom: 12,
        show: true,
        enableTooltip: true,
        showParagraph: false,
        center: [48.85,2.3321],
        url: 'https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3lwIiwiYSI6InQySWpxd00ifQ.wbJfVp6V63lOB52hHwWeVA',
        attribution:
          'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        geojson: {
            type: "FeatureCollection",
            features: [
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Bouillon-Chartier'>Bouillon-Chartier 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3430535,48.8719198]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Les parigots'>Les parigots 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3618058,48.8692052]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Le Dénicheur'>Le Dénicheur 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.349733,48.8644464]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Le tambour'>Le tambour 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3455718,48.8637465]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Le Pérraudin'>Le Pérraudin 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3432308,48.8463646]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Addis Abeba'>Addis Abeba 🇪🇹</a>"},"geometry":{"type":"Point","coordinates":[2.3358712,48.8798875]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Thaïs'>Thaïs 🇲🇦</a>"},"geometry":{"type":"Point","coordinates":[2.3833,48.8662719]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Restaurant du Lycée'>Restaurant du Lycée 🇲🇦</a>"},"geometry":{"type":"Point","coordinates":[2.3890569,48.8597456]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Mi Perú'>Mi Perú 🇵🇪</a>"},"geometry":{"type":"Point","coordinates":[2.3853018,48.8467245]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Les funambules'>Les funambules 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3842073,48.8511616]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#El Chalan'>El Chalan 🇵🇪</a>"},"geometry":{"type":"Point","coordinates":[2.2921115,48.8316365]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#L'Imprimerie'>L'Imprimerie 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3416105,48.8641421]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Le bistrotters'>Le bistrotters 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3148509,48.8328233]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Le 14 Juillet'>Le 14 Juillet 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3161986,48.8283992]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Il Farniente'>Il Far’niente 🇪🇸</a>"},"geometry":{"type":"Point","coordinates":[2.3304558,48.8235239]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#L'aubergeade'>L'aubergeade 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3835485,48.846586]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#La Feria'>La Feria 🇪🇸</a>"},"geometry":{"type":"Point","coordinates":[2.3882557,48.8438022]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Yoom Rive Droite'>Yoom Rive Droite 🇨🇳</a>"},"geometry":{"type":"Point","coordinates":[2.3399028,48.8788029]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#La Méditerranée'>La Méditerranée 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3385143,48.8500778]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Chez Friloux'>Chez Friloux 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3176154,48.8154975]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Le Comptoir'>Le Comptoir 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.395031,48.8662374]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#A la Fontaine'>A la Fontaine 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.2759017,48.8529931]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Chez Filiberto'>Chez Filiberto 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.2746436,48.8575115]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Pizza Clip'>Pizza Clip 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3981792,48.8645575]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Friends & Family Restaurant'>Friends & Family Restaurant 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3448668,48.8721157]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Le café de l'époque'>Le café de l'époque 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3398154,48.8630569]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Sakura Teppanyaki'>Sakura Teppanyaki 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3226337,48.8841055]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Le Pot de Vins'>Le Pot de Vins 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.3403451,48.8642781]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Le lys d'or'>Le lys d'or 🇨🇳</a>"},"geometry":{"type":"Point","coordinates":[2.3835964,48.8452007]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Pacifique'>Pacifique 🇨🇳</a>"},"geometry":{"type":"Point","coordinates":[2.379849,48.8731596]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#O Fil Rouge'>O Fil Rouge 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.2869808,48.8481999]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Le temps des cerises'>Le temps des cerises 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.363962506697641, 48.853627380433295]}},
            {"type":"Feature","properties":{"_icon": "/img/maker-icon.png", "name":"<a href='#Bouillon Racine'>Bouillon Racine 🇫🇷</a>"},"geometry":{"type":"Point","coordinates":[2.342043454946119, 48.85036658824408]}},
            ],
        },
        geojsonOptions: {
            // Options that don't rely on Leaflet methods.
        },
      };
    },
    computed: {
      options() {
        return {
          onEachFeature: this.onEachFeatureFunction
        };
      },
      onEachFeatureFunction() {
        if (!this.enableTooltip) {
          return () => {};
        }
        return (feature, layer) => {  
            layer.bindPopup(
                "<div>" + feature.properties.name + "</div>",
                { permanent: false, sticky: true }
            );
        };
      }
    }
  };
</script>
  
<style scoped>
    @media all {
        .mapContainer {
            width: 100%;
            height: 500px;
            z-index: 0;
        }
    }
    @media (max-width: 719px) {
        .mapContainer {
            width: 100%;
            height: 300px;
            z-index: 0;
        }
    }
</style>