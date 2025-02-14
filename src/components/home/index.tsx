"use client";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, Box, Container, InputBase, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => (
  <Container sx={{ textAlign: "center", marginTop: 8 }}>
    <Typography variant="h6" color="textSecondary">
      Search, Connect, and Build
    </Typography>
    <Typography variant="h4" fontWeight={700} sx={{ marginTop: 1 }}>
      Discover Global Construction Opportunities
    </Typography>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 4,
        backgroundColor: alpha("#000", 0.05),
        padding: "8px 16px",
        borderRadius: "24px",
        maxWidth: 500,
        marginX: "auto",
      }}
    >
      <InputBase
        placeholder="Search for New Construction projects in your area"
        sx={{ flex: 1, marginLeft: 2 }}
      />
      <SearchIcon color="primary" />
    </Box>
    <Box
      component="img"
      src="images/globe.png"
      alt="Globe"
      sx={{ marginTop: 6, maxWidth: "100%" }}
    />
  </Container>
);

export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
