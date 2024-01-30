import React from "react";
import NextLink from 'next/link';
import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from "react";

export interface ButtonProps {
  children: ReactNode;
} 

type PolymorphicComponentProps<
  T extends ElementType,
  Props = Record<string, unknown>,
> = { component?: T } & ComponentPropsWithoutRef<T> &
  Props & {
    ref?: ComponentPropsWithRef<T>["ref"];
  };
  
const Button = <T extends ElementType = "button">({
  component, 
  children,
  ...otherProps
}: PolymorphicComponentProps<T, ButtonProps>) => {
  const Component = component || "button";
  return (
    <Component
      {...(Component === "button" && { type: "button" })}
      {...otherProps}
    >
      {children}
    </Component>
  );
};

const handleClick = () => {};



export default Button;