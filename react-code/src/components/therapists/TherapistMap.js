import React, {useEffect, useState} from "react";
import {Map, TileLayer, Marker, Popup} from "react-leaflet";
import GoogleMapReact from "google-map-react";
import "./map.css";
import {Icon} from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import {zoom} from "leaflet/src/control/Control.Zoom";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
      marginLeft: -20,
      margintop: -20
  },
}));

const LocationPin = ({text, name}) => {
    const classes = useStyles();
    return (
    <div className="pin">
        <Avatar aria-label="recipe" className={classes.avatar}>
            {name.substring(0, 2)}
        </Avatar>
        <p className="pin-text">{text}</p>
    </div>)
};

export default function TherapistMap({location, zoomLevel}) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/therapist/all')
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
    }, []);
    return (
        <div className="map">
            <h2 className="map-h2">Therapists near you</h2>

            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyDzfyVMpZz-VjaueHWDQ2vFs3LPf7Fs5hs"}}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    {data.map((loc) => (
                        <LocationPin
                            lat={parseFloat(loc.lat)}
                            lng={parseFloat(loc.lon)}
                            text={loc.address}
                            name={loc.name}
                        />))}
                </GoogleMapReact>
            </div>
        </div>
    );
}
