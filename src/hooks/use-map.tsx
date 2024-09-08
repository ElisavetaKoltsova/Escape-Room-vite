import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Coordinate } from '../types/coordinate';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, coordinate: Coordinate, zoom: number): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: coordinate.coords[0],
          lng: coordinate.coords[1]
        },
        zoom: zoom
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
  }, [coordinate, mapRef, zoom]);

  return map;
}

export default useMap;
