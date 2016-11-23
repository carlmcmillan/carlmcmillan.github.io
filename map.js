var map = {

  _map: null,

  run: function() {
    var baseLayer = L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 18
      }
    );

    this._map = new L.Map('map', {
      center: new L.LatLng(-41.2877, 174.7780),
      zoom: 18,
      layers: [baseLayer]
    });

    var marker = L.marker([-41.2877, 174.7780]).addTo(this._map);
  },

  stop: function() {
    if (this._map != null) {
      this._map.remove();
      this._map = null;
    }
  }

};