import React from 'react';
import type { FC } from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const WelcomeLayout: FC = () => {
  const location = useLocation();

  console.log(location.key)
  return (
    <>
      <nav>
        <Link to="rules">Rules</Link>
        <br />
        <Link to="/">Welcome</Link>
      </nav>
      <div>
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Outlet />
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
};
