import { Props } from 'framer-motion/types/types';
import React, { useEffect, Fragment } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }: RouteComponentProps & Props) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  });

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);