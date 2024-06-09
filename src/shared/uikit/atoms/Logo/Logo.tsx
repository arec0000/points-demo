import React from 'react';

import classes from './Logo.module.scss';

export function Logo() {
  return (
    <div className={classes.logo}>
      <span className={classes.logo__text}>POINTS</span>
    </div>
  );
}
