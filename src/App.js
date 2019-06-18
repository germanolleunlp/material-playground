import React, { Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Paper from "@material-ui/core/Paper";

import Layout from "./Layout";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    maxWidth: "100vw",
    padding: "0",
    margin: "0",
  },
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    minHeight: "100vh",
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <Container className={classes.container} fixed>
        <Router>
          <Box className={classes.root}>
            <Paper elevation={0} className={classes.paper}>
              <Breadcrumbs aria-label="Breadcrumb">
                <Link color="inherit" to="/">
                  Home
                </Link>
                <Link color="inherit" to="/about">
                  About
                </Link>
                <Link color="inherit" to="/contact">
                  Contact
                </Link>
              </Breadcrumbs>
            </Paper>
            <Layout />
          </Box>
        </Router>
      </Container>
    </Fragment>
  );
};

export default App;
