import { getCurrentSession } from '~/lib/session';

export default async function DashboardPage() {
  const session = await getCurrentSession();
  return (
    <main className='flex min-h-screen flex-col'>
      <h1>Dashboard</h1>

      <p>Hello, {session?.user.name} 👋</p>
    </main>
  );
}
