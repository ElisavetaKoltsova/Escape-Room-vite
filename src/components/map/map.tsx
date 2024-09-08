import { useEffect, useRef } from 'react';
import { Coordinate } from '../../types/coordinate';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { UrlMarkers } from '../../const';

type MapProps = {
  coordinate: Coordinate;
  zoom?: number;
}

const DEFAULT_ZOOM = 13;

function Map({coordinate, zoom}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, coordinate, zoom ? zoom : DEFAULT_ZOOM);

  useEffect(() => {
    if (map) {
      map.setView([
        coordinate.coords[0],
        coordinate.coords[1]
      ], zoom ? zoom : DEFAULT_ZOOM);

      const defaultCustomIcon = new Icon({
        iconUrl: UrlMarkers.URL_MARKER_DEFAULT
      });

      const marker = new Marker({
        lat: coordinate.coords[0],
        lng: coordinate.coords[1]
      });

      marker
        .setIcon(defaultCustomIcon)
        .addTo(map);
    }
  }, [map, coordinate, zoom]);

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
