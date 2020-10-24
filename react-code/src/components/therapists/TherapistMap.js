import React, { useEffect, useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default function TherapistMap() {
  let attr = {
    lat: 37.7749,
    lng: -122.4194,
    zoom: 13,
  };
  return (
    <Map
      center={[attr.lat, attr.lng]}
      zoom={attr.zoom}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
}
