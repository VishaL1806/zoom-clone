"use client"
import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React from 'react'

 const metadata: Metadata = {
  title: "Vroom",
  description: "Zoom like Meeting app",
  icons :{
    icon : "/icons/logo.svg",
  }
};


const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
      {children}
      </StreamVideoProvider>
      </main>
  )
}

export default layout