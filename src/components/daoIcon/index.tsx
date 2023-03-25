"use client";
import { IconButton } from "@chakra-ui/react";
import { ReactElement } from "react";

type iconProps = {
  onClick?: any;
  icon: ReactElement;
  ariaLabel: string;
  color?: "white" | "red.600";
};

const DaoIcon = (props: iconProps) => {
  return (
    <IconButton
      aria-label={props.ariaLabel}
      variant={"ghost"}
      color={props.color || "white"}
      fontSize="3xl"
      icon={props.icon}
    />
  );
};

export default DaoIcon;
