import React from "react";
import { Route, Switch } from "react-router-dom";
import Box from "@material-ui/core/Box";

const Home = () => <Box>Home</Box>;
const About = () => <Box>About</Box>;
const Contact = () => <Box>Contact</Box>;

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Content;
