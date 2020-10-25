import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Markdown from "./Markdown";
import motd from "./motd.md";
import { makeStyles } from "@material-ui/core/styles";

import ReactDOM from "react-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  markdown: {
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();
  const [message, setMessage] = useState("loading...");

  useEffect(() => {
    fetch(motd)
      .then((res) => res.text())
      .then((post) => setMessage(post))
      .catch((err) => console.error(err));
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Markdown className={classes.markdown}>{message}</Markdown>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
