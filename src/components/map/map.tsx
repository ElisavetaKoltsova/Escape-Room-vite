import { useEffect, useRef } from 'react';
import { Coordinate } from '../../types/coordinate';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { UrlMarkers } from '../../const';

type MapProps = {
  coordinate: Coordinate;
}

function Map({coordinate}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, coordinate);

  useEffect(() => {
    if (map) {
      map.setView([
        coordinate.center.latitude,
        coordinate.center.longitude
      ], coordinate.zoom);

      const defaultCustomIcon = new Icon({
        iconUrl: UrlMarkers.URL_MARKER_DEFAULT
      });

      const marker = new Marker({
        lat: coordinate.center.latitude,
        lng: coordinate.center.longitude
      });

      marker
        .setIcon(defaultCustomIcon)
        .addTo(map);
    }
  }, [map, coordinate]);

  return (
    <div
      style={{
        height: '100%'
      }}
      ref={mapRef}
    >

    </div>
  );
}

export default Map;
