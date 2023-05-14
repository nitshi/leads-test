'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LeadsLayout({
    children,
  }: {
    children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <main>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <Link
            href="/leads/new"
            className={`flex-1 text-center whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
              ${pathname === '/leads/new' ?
                'border-orange-500 text-orange-600' :
                'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>Invited</Link>
          <Link
            href="/leads/accepted"
            className={`flex-1 text-center whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
              ${pathname === '/leads/accepted' ?
                'border-orange-500 text-orange-600' :
                'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>Accepted</Link>
        </nav>
      </div>
      {children}
    </main>
  )
}
