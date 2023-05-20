import React from "react";

import classes from "./LinkItem.module.scss";

const LinkItem = ({ src, href, content, anchorProps = {} }) => {
  return (
    <div className={classes.container}>
      <img className={classes.icon} src={src} alt="" />
      {href ? (
        <a href={href} {...anchorProps}>
          <p className={classes.value}>{content}</p>
        </a>
      ) : (
        <p className={classes.value}>{content}</p>
      )}
    </div>
  );
};

export default LinkItem;
