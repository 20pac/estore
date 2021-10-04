import React from "react";

import { Typography } from "@material-ui/core";
import type { NextPage } from "next";

import { Box } from "@common/components/box";

const Home: NextPage = () => {
  return (
    <Box flexDirection="column" height="100vh" width="100vw" display="flex" justifyContent="center" alignItems="center">
      <Typography variant="h1">Hello</Typography>
      <Typography>Stop looking at the boilerplate and start writing some code. Seriously.</Typography>
    </Box>
  );
};

export default Home;
