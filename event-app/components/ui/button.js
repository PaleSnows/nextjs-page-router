import Link from "next/link";
import React from "react";
import classes from "./button.module.css";

const Button = ({ link, children,onClick }) => {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }
  return <button className={classes.btn} onClick={onClick}>{children}</button>
};

export default Button;
