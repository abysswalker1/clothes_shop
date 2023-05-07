import React from 'react';
import { withGoogleMap, GoogleMap, Marker, GoogleMapProps } from 'react-google-maps';

type Props = {
  isMarkerShown: boolean
  googleMapURL: string
  loadingElement: JSX.Element
  containerElement: JSX.Element
  mapElement: JSX.Element
}


// const GoogleMapComponent = withGoogleMap((props: Props) => (
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
    
//     {props.isMarkerShown && (
//       <Marker position={{ lat: -34.397, lng: 150.644 }} />
//     )}
//   </GoogleMap>
  
// ));

// export default GoogleMapComponent;
