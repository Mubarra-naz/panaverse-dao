"use client";
import { Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

interface linkProps extends LinkProps {
  href: string;
  children: any;
}

const DaoLink = ({ href, children, ...rest }: linkProps) => {
  return (
    <Link as={NextLink} href={href} {...rest}>
      {children}
    </Link>
  );
};

export default DaoLink;
