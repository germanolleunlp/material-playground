import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Content from "./Content";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column nowrap",
    flexGrow: 1,
  },
  tab: {
    padding: theme.spacing(2),
    flexGrow: 1,
  },
}));

const Layout = () => {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  const handleChange = (_event, value) => {
    setTab(value);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={tab}
        onChange={handleChange}
      >
        <Tab label="Tab One" disableFocusRipple disableRipple />
        <Tab label="Tab Two" disableFocusRipple disableRipple />
        <Tab label="Tab Three" disableFocusRipple disableRipple />
      </Tabs>
      <Box className={classes.tab}>
        {tab === 0 && <Content />}
        {tab === 1 && <Box>Tab 2</Box>}
        {tab === 2 && <Box>Tab 3</Box>}
      </Box>
    </Paper>
  );
};

export default Layout;
