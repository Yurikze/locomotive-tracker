import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { iconLoco } from '../components/icon';
import data from '../mock/data.json';

const Map = () => {
  const mapCenter = [53.676876, 84.989619];

  return (
    <MapContainer center={mapCenter} zoom={17} scrollWheelZoom={true} attributionControl={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((locomotive) => (
        <Marker
          position={[
            locomotive.coordinates.latitude,
            locomotive.coordinates.longitude,
          ]}
          icon={iconLoco}
        >
          <Popup>
            {`Локомотив серии: ${locomotive.locotype} под номером ${locomotive.loconumber}`}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
