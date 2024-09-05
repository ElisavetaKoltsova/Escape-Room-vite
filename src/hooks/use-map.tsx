import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Coordinate } from '../types/coordinate';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, coordinate: Coordinate): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: coordinate.center.latitude,
          lng: coordinate.center.longitude
        },
        zoom: coordinate.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <Link to="https://www.openstreetmap.org/copyright">OpenStreetMap</Link> contributors &copy; <Link to="https://carto.com/attributions">CARTO</Link>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [coordinate, mapRef]);

  return map;
}

export default useMap;
