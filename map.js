var map = {

  _map: null,

  create: function() {
    var baseLayer = L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 18
      }
    );

    this._map = new L.Map('map', {
      center: new L.LatLng(-41.2865, 174.7762),
      zoom: 10,
      layers: [baseLayer]
    });
  },

  destroy: function() {
    if (this._map != null) {
      this._map.remove();
      this._map = null;
    }
  }

};