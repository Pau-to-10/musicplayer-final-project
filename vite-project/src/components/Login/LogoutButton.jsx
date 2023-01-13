import {useAuth0} from '@auth0/auth0-react'
import { ButtonShort } from '../../ui';
import React from 'react'

export const LogoutButton = () => {
    const { logout } = useAuth0();
  return (
    <button onClick={() =>logout({returnTo: window.location.origin})}>Logout</button >
  )
}

