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
    maxHeight: 850,
    overflow: "auto"
  },
}));

const location = {
  address: "1 E Jackson Blvd, Chicago, IL 60605",
  lat: 41.8770902,
  lng: -87.6310575,
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
          <TherapistMap location={location} zoomLevel={10} />
        </Paper>
      </Grid>
    </Grid>
  );
}
