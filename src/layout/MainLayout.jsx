import { Outlet, Navigate } from "react-router-dom";
import { Container } from "@mui/material";

import Header from "./../components/header/Header";

import { useAuthContext } from "./../context/AuthContextProvider";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const MainLayout = () => {
  const { token } = useAuthContext();
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#ffffff" : "#172A46",
        color: theme === "dark" && "#ffffff",
      }}
    >
      {token ? null : <Navigate to="/auth/signin" replace />}
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default MainLayout;
