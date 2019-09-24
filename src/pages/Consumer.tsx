import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { LoginButton, LogoutButton, LoggedIn, LoggedOut, Value } from '@solid/react';

type Props = RouteComponentProps;

export const Consumer: React.FC<Props> = (props) => {
  return <>
    <LoggedOut>
      <LoginButton
        popup="popup.html"
      />
    </LoggedOut>
    <LoggedIn>
      Hi <Value src="user.name"/>
      <LogoutButton/>
    </LoggedIn>
  </>;
};
