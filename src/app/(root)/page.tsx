'use server';

import { RedirectType, redirect } from 'next/navigation';

export default async function HomePage() {
  redirect('/dashboard', RedirectType.replace);
}
