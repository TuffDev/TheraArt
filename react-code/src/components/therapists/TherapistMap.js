import React, { useEffect, useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import GoogleMapReact from "google-map-react";
import "./map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

export default function TherapistMap({ location, zoomLevel }) {
  return (
    <div className="map">
      <h2 className="map-h2">Therapists near you</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDzfyVMpZz-VjaueHWDQ2vFs3LPf7Fs5hs" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}
