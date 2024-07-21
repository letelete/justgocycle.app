'use server';

import { redirect, RedirectType } from 'next/navigation';

export default async function HomePage() {
  redirect('/dashboard', RedirectType.replace);
}
