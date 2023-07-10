import React from 'react'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/globals.css'

const Rootlayout = ({children}) => {
  return (
    <html>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout