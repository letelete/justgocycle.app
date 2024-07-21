/* -------------------------------------------------------------------------------------------------
 * DashboardHome
 * -----------------------------------------------------------------------------------------------*/

interface DashboardHomeProps {
  userName: string;
  onSignOut: () => void;
}

const DashboardHome = ({ userName, onSignOut }: DashboardHomeProps) => {
  return (
    <main className='layout-base flex min-h-screen flex-col'>
      <h1>Dashboard</h1>

      <p>Hello, {userName} 👋</p>

      <button className='w-fit rounded-md border px-4 py-2' onClick={onSignOut}>
        Logout
      </button>
    </main>
  );
};

DashboardHome.displayName = 'DashboardHome';

/* -----------------------------------------------------------------------------------------------*/

export { DashboardHome };
export type { DashboardHomeProps };
