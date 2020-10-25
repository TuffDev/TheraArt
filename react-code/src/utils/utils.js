export default function getTherapists(lat, lon, radius) {
    fetch('/therapist/all')
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            return(data);
        })
    return([])
}

function addTherapist() {

}
