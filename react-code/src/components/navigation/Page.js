import React from "react";
import Navigation from "./Navigation";
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {useParams, withRouter} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    background: theme.palette.background.default
  }

}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        TheraArt
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Page = ({route}) => {
  const PageBody = route.component;
  const params = useParams();
  const classes = useStyles();
  return (
    <>
      {<Navigation route={route}/>}
      <main className={classes.content}>
        <Container maxWidth="xl" className={classes.container}>
          <PageBody params={params}/>
          <Box pt={4}>
            <Copyright/>
          </Box>
        </Container>
      </main>
    </>
  );
};

export default Page;