import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
// stolen from https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/blog
const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h5',
        align: "center"
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' , align: "center"} },
    h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true, color: "secondary", align: "center" },
    },
    p: { component: Typography, props: { paragraph: true, align: "center" } },
    a: { component: Link, props: {color: "secondary"}},
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
};

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}