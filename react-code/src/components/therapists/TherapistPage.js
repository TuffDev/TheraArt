import React, { useEffect, useState } from "react";
import TherapistList from "./TherapistList";
import TherapistMap from "./TherapistMap";
import { makeStyles } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    bacground: theme.palette.success.light,
  },
}));

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

export default function TherapistPage() {
  const classes = useStyles();
  //<TherapistList />
  //<TherapistMap location={location} zoomLevel={17} />
  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={6} md={3}>
        <Paper className={classes.paper}>
          <TherapistList />
        </Paper>
      </Grid>
      <Grid item xs={6} md={9}>
        <Paper className={classes.paper}>
          <TherapistMap location={location} zoomLevel={17} />
        </Paper>
      </Grid>
    </Grid>
  );
}
