import { Button, ButtonProps } from "@chakra-ui/react";

interface buttonProps extends ButtonProps {
  variant?: "ghost" | "solid" | "outline";
  children: any;
}

const DaoButton = ({ variant = "solid", children, ...rest }: buttonProps) => {
  return (
    <Button variant={variant} {...rest}>
      {children}
    </Button>
  );
};

export default DaoButton;
