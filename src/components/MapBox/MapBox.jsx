import './MapBox.scss'

// import data
import contactData from 'data/contactData'

function MapBox() {
  return (
    <div className="mapBoxContainer">
      <iframe 
        className="map" 
        src={contactData.googleMapSrc} 
        title="Google Map" 
        loading="lazy">
      </iframe>
    </div>
  )
}

export default MapBox