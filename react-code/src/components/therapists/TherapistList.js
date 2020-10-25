import React, {useEffect, useState} from "react";
import TherapistCard from "./TherapistCard";
import {getTherapists} from "../../utils/utils"
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function TherapistList() {
    const THERAPISTS = [
        {
            image:
                "https://www.google.com/search?q=lakers+logo&sxsrf=ALeKk03R1dqT3wotpod3ZXRerYTcyxfu_A:1603584385295&tbm=isch&source=iu&ictx=1&fir=mZ_u-r5XDqvGmM%252CrSS84B2RY-FutM%252C_&vet=1&usg=AI4_-kSJ2LXLGuM7B8UtIb1WGMCWY-HMyw&sa=X&ved=2ahUKEwjBiJytuc7sAhUJKawKHdBPDuQQ9QF6BAgGEFo#imgrc=mZ_u-r5XDqvGmM",
            name: "Bob Ross",
            rating: "3.7",
            address: "123 Art Ave.",
        },
        {image: "", name: "Monet", rating: "3.8", address: "456 Art St."},
        {image: "", name: "Frida Kahlo", rating: "3.5", address: "789 Art Ln."},
    ];

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/therapist/all')
            .then(resp => resp.json())
            .then(data => {
                setData(data);
            })
    }, []);


    return (
        <div className="TherapistList">
            {/*<IconButton aria-label="delete">*/}
            {/*    <SvgIcon>*/}
            {/*        <AddCircleIcon/>*/}
            {/*    </SvgIcon>*/}
            {/*</IconButton>*/}
            {data.map((therapist) => (
                <TherapistCard therapist={therapist}/>
            ))}
        </div>
    );
}
