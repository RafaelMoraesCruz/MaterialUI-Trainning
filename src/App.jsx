import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@mui/material";
import React from "react";
import Header from "./components/Header";
import About from "./components/About";

const App = () => {
  return (
    <>
        <CssBaseline />
        <Header />
        <About />
    </>
  );
};

export default App;
