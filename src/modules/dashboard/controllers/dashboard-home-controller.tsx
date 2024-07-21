'use client';

import { type Session } from 'next-auth';
import { signOut } from 'next-auth/react';

import { DashboardHome } from '~/modules/dashboard/views/dashboard-home';

/* -------------------------------------------------------------------------------------------------
 * DashboardHomeController
 * -----------------------------------------------------------------------------------------------*/

interface DashboardHomeControllerProps {
  user: Session['user'];
}

const DashboardHomeController = ({ user }: DashboardHomeControllerProps) => {
  return (
    <DashboardHome
      userName={user.name ?? 'User'}
      onSignOut={() =>
        signOut({ callbackUrl: `${window.location.origin}/login` })
      }
    />
  );
};

DashboardHomeController.displayName = 'DashboardHomeController';

/* -----------------------------------------------------------------------------------------------*/

export { DashboardHomeController };
export type { DashboardHomeControllerProps };
