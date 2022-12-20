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
import Adjectives from "./components/Adjectives";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <div style={{backgroundImage: 'linear-gradient(135deg, #1976d2, lightblue)'}}>
        <About />
        <Adjectives />
      </div>
    </>
  );
};

export default App;
