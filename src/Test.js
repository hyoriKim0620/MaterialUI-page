import React from "react";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AdbIcon from "@mui/icons-material/Adb";
import { Box, Stack, Typography, styled } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

const test = () => {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          flex={1}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7], // 반응형 스타일링 (max-width에 따라)
            },
          }}
        />
        <Box
          flex={2}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7], // 반응형 스타일링 (max-width에 따라)
            },
          }}
        />
        <Box
          flex={3}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7], // 반응형 스타일링 (max-width에 따라)
            },
          }}
        />
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          flex={1}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7], // 반응형 스타일링 (max-width에 따라)
            },
          }}
        />
        <Box
          flex={2}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            display: { xs: "none", sm: "block" },
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7], // 반응형 스타일링 (max-width에 따라)
            },
          }}
        />
        <Box
          flex={3}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7], // 반응형 스타일링 (max-width에 따라)
            },
          }}
        />
      </Stack>

      <Button variant="text">Hello World</Button>
      <Button
        startIcon={<AcUnitIcon />}
        fullWidth
        size="large"
        variant="contained"
      >
        Hello World
      </Button>
      <Button endIcon={<AdbIcon />} variant="outlined">
        Hello World
      </Button>
      <Button
        sx={{
          backgroundColor: "gray",
          color: "white",
          margin: 10,
          "&:hover": {
            backgroundColor: "black",
          },
          "&:disabled": {
            backgroundColor: "white",
            color: "black",
          },
        }}
      >
        Custom Style
      </Button>
      <CustomButton>Custom Button Style</CustomButton>
      <Typography variant="h1" gutterBottom>
        h1. Heading
      </Typography>
      <Button color="secondary">Theme Button</Button>

      <CustomThemeButton>Custom Theme Button</CustomThemeButton>

      <Root>
        <Typography>down(md): red</Typography>
        <Typography>up(md): blue</Typography>
        <Typography>up(lg): green</Typography>
      </Root>
    </div>
  );
};

const Root = styled(`div`)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up("large")]: {
    backgroundColor: green[500],
  },
}));

const CustomThemeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  margin: 10,
  "&:hover": {
    backgroundColor: "black",
  },
  "&:disabled": {
    backgroundColor: "white",
    color: "black",
  },
}));

const CustomButton = styled(Button)({
  backgroundColor: "gray",
  color: "white",
  margin: 10,
  "&:hover": {
    backgroundColor: "black",
  },
  "&:disabled": {
    backgroundColor: "white",
    color: "black",
  },
});

export default test;
