"use client";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      "html, body": {
        minHeight: "100vh",
        margin: 0,
        display: "flex",
        flexDirection: "column",
      },
    }),
  },
  colors: {
    red: {
      "50": "#FCE8EB",
      "100": "#F8BFC7",
      "200": "#F396A3",
      "300": "#EE6D80",
      "400": "#EA435C",
      "500": "#E51A38",
      "600": "#B7152D",
      "700": "#891022",
      "800": "#5C0A16",
      "900": "#2E050B",
    },
    pink: {
      "50": "#FDE8EB",
      "100": "#F9BDC6",
      "200": "#F593A1",
      "300": "#F2697C",
      "400": "#EE3F58",
      "500": "#EF4B62",
      "600": "#BB1129",
      "700": "#8D0C1E",
      "800": "#5E0814",
      "900": "#2F040A",
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bgColor: "red.600",
          color: "white",
          borderRadius: "full",
          fontWeight: "700",
          px: 5,
          py: 5,
          height: 50,
          my: 3,
        },
        ghost: {
          color: "white",
          bgColor: "transparent",
        },
        outline: {
          borderRadius: "full",
          fontWeight: 400,
          px: 5,
          py: 5,
          height: 50,
          borderColor: "red.600",
          color: "red.600",
          borderWidth: 4,
        },
      },
    },
    Heading: {
      variants: {
        "1": {
          size: "2xl",
          fontWeight: "medium",
          color: "black",
          pt: 3,
          pb: 2,
        },
        "2": {
          size: "3xl",
          fontWeight: "bold",
          color: "red.600",
        },
      },
    },
    Text: {
      variants: {
        "1": {
          pl: 3,
          color: "pink.500",
          fontSize: "xl",
        },
        "2": {
          py: 2,
          fontSize: "lg",
          color: "black",
        },
        "3": {
          py: 2,
          fontSize: "md",
          color: "black",
        },
        "4": {
          fontSize: "xs",
          color: "red.600",
        },
      },
    },
  },
});

export default theme;
// #472B29
