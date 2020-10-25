import React, {useEffect, useState} from "react";
import TherapistCard from "./TherapistCard";
import {getTherapists} from "../../utils/utils"
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function TherapistList() {

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
