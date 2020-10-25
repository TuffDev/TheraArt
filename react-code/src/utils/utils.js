function getTherapists(lat, lon, radius) {
    fetch('/therapist/all')
        .then(resp => resp.jason())
        .then(data => {
            console.log(data);
            return(data);
        })
    return([])
}

function addTherapist() {

}
