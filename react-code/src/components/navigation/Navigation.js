import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {routes} from "../../constants/routes"

// stolen from: https://github.com/sneas/react-nested-routes-example

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    }},
    tabs: {
        margin: 'auto'
    }
}));

const Navigation = ({route}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <nav className="breadcrumbs">
            <AppBar position="static">
                <Toolbar className={classes.grow}>
                    <Typography className={classes.title} variant="h6" noWrap>
                        TheraArt-2020
                    </Typography>
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered className={classes.tabs}>
                        {routes.map(route => (
                            <Tab label={typeof(route.name) !== "undefined" ? route.name : "add a name!"} href={route.path}/>
                        ))}
                </Tabs>
                </Toolbar>
            </AppBar>
        </nav>
    );
}

export default Navigation;
