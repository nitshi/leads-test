import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      This is home page. Navigate to <Link href='/leads/new' className='text-blue-600'>`/leads/new`</Link> to view leads.
    </main>
  )
}
