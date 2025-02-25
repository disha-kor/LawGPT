import React, {ReactNode} from 'react'
import Navbar from '@/components/Frontend/Navbar'
import MegaMenu from '@/components/Frontend/MegaMenu'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div className='bg-blue-950'>
        <Navbar/>
        <div className="max-w-5xl mx-auto py-6">
        <MegaMenu />
      </div>
        {children}
    </div>
  )
}
 