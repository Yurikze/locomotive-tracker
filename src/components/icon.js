import L from 'leaflet';
import icon from '../assets/images/Circle-icons-train.svg';

const iconLoco = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconSize: new L.Point(50, 50),
});

export { iconLoco };
