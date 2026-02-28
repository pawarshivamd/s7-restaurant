import { styled } from "@mui/material/styles";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
const sizeStyles = {
  small: {
    padding: "6px 14px",
    fontSize: "0.8rem",
    iconBox: 24,
    iconFont: 14,
  },
  medium: {
    padding: "8px 18px",
    fontSize: "0.9rem",
    iconBox: 28,
    iconFont: 16,
  },
  large: {
    padding: "8.2px 20px",
    fontSize: "1rem",
    iconBox: 32,
    iconFont: 18,
  },
};
const AnimatedButton = styled(Button)(({ theme, variant, size = "large" }) => {
  const currentSize = sizeStyles[size];
  return {
    position: "relative",
    overflow: "hidden",
    color:
      variant === "outlined"
        ? theme.palette.text.primaryLight
        : theme.palette.text.black,
    textTransform: "capitalize",
    gap: "10px",
    zIndex: 0,
    transition: "all 0.3s ease",
    padding: currentSize.padding,
    fontSize: currentSize.fontSize,
    border:
      variant === "outlined"
        ? `1px solid ${theme.palette.custom.divider}`
        : `1px solid ${theme.palette.primary.main}`,

    "& .button-icon": {
      position: "relative",
      width: currentSize.iconBox,
      height: currentSize.iconBox,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color:
        variant === "outlined"
          ? theme.palette.text.primary
          : theme.palette.primary.main,
      transition: "all 0.3s ease",
    },

    "& .button-icon::after": {
      content: '""',
      position: "absolute",
      width: currentSize.iconBox,
      height: currentSize.iconBox,
      borderRadius: "100px",
      backgroundColor:
        variant === "outlined"
          ? "rgba(44,44,44,0.7)"
          : theme.palette.common.black,
      zIndex: -1,
      transition: "all 0.3s ease",
    },

    "& .button-icon svg": {
      fontsize: 18,
      transition: "all 0.5s ease",
    },

    "&:hover .button-icon svg": {
      transform: "rotate(45deg)",
    },

    "&:hover .button-icon::after": {
      transform: "scale(14)",
    },

    "&:hover": {
      color:
        variant === "outlined"
          ? theme.palette.primary.main
          : theme.palette.primary.main,
      border:
        variant === "outlined"
          ? `1px solid ${theme.palette.primary.main}`
          : `1px solid ${theme.palette.primary.main}`,
    },
  }

});

export default function AppButton({
  to,
  children,
  icon,
  variant = "contained",
  component = Link,
  size = "large",
  ...props
}) {
  return (
    <AnimatedButton
      component={component}
      to={to}
      variant={variant}
      size={size}
      {...props}
    >
      {children}
      {icon && <Box className="button-icon">{icon}</Box>}
    </AnimatedButton>
  );
}
