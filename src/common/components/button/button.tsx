import React from "react";

import { Button as LibButton, ButtonProps as LibButtonProps } from "@material-ui/core";

export type ButtonProps = LibButtonProps;

const Button: React.FC<ButtonProps> = ({ ...rest }) => {
  const { variant } = rest;

  if (variant === "contained") {
    return (
      <LibButton
        {...rest}
        style={{
          textDecoration: "none",
          textTransform: "none",
          color: "#fff",
          boxShadow: "none",
          padding: "10px 20px",
          fontWeight: 600,
          ...rest.style,
        }}
      />
    );
  }

  if (variant === "outlined") {
    return (
      <LibButton
        {...rest}
        style={{
          textDecoration: "none",
          textTransform: "none",
          padding: "5px 20px",
          fontWeight: 600,
          ...rest.style,
        }}
      />
    );
  }
  if (variant === "text") {
    return (
      <LibButton
        {...rest}
        style={{
          textDecoration: "none",
          textTransform: "none",
          padding: "0",
          fontWeight: 600,
          ...rest.style,
        }}
      />
    );
  }
  return (
    <LibButton
      {...rest}
      color="primary"
      variant="contained"
      style={{
        textDecoration: "none",
        textTransform: "none",
        color: "#fff",
        boxShadow: "none",
        padding: "10px 20px",
        fontWeight: 600,
        ...rest.style,
      }}
    />
  );
};

export default Button;
