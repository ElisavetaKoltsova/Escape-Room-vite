import { useEffect, useRef } from 'react';
import { Coordinate } from '../../types/coordinate';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLng, layerGroup, Marker } from 'leaflet';
import { UrlMarkers } from '../../const';
import { BookingQuest } from '../../types/quest';

type MapProps = {
  places?: BookingQuest[];
  selectedPlace?: BookingQuest;
  coordinate: Coordinate;
  zoom?: number;
}

const DEFAULT_ZOOM = 11;

function Map({coordinate, places, selectedPlace, zoom}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, coordinate, zoom ? zoom : DEFAULT_ZOOM);
  const markers: Marker[] = [];

  const defaultCustomIcon = new Icon({
    iconUrl: UrlMarkers.URL_MARKER_DEFAULT
  });

  const currentCustomIcon = new Icon({
    iconUrl: UrlMarkers.URL_MARKER_CURRENT,
  });

  useEffect(() => {
    if (map) {
      map.setView([coordinate.coords[0], coordinate.coords[1]], zoom ? zoom : DEFAULT_ZOOM);

      const markerLayer = layerGroup().addTo(map);
      if (places) {
        places.forEach((place) => {
          const marker = new Marker({
            lat: place.location.coords[0],
            lng: place.location.coords[1]
          });

          marker
            .setIcon(
              selectedPlace !== undefined && place.id === selectedPlace.id
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(map);

          markers.push(marker);
        });

        return () => {
          map.removeLayer(markerLayer);
          markers.forEach((marker) => {
            marker.remove();
          });
          map.setView(new LatLng(coordinate.coords[0], coordinate.coords[1]), zoom ? zoom : DEFAULT_ZOOM);
        };
      } else {
        const marker = new Marker({
          lat: coordinate.coords[0],
          lng: coordinate.coords[1]
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      }
    }
  }, [map, coordinate, zoom, places, selectedPlace, markers]);

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
