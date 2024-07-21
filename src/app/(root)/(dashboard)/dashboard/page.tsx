'use server';

import { type Session } from 'next-auth';

import { getCurrentSession } from '~lib/session';
import { DashboardHomeController } from '~modules/dashboard/controllers/dashboard-home-controller';

export default async function DashboardPage() {
  const session = await getCurrentSession();

  if (!session?.user) {
    return null;
  }

  return <DashboardHomeController user={session.user as Session['user']} />;
}
