import './MapBox.scss'

// import data
import contactData from 'data/contactData'

export default function MapBox() {
  const address = '100台北市藍藍路二段13-7號'

  return (
    <div className="mapBoxContainer">
      <div className="address">{address}</div>
      <iframe 
        className="map" 
        src={contactData.googleMapSrc} 
        title="Google Map" 
        loading="lazy">
      </iframe>
    </div>
  )
}