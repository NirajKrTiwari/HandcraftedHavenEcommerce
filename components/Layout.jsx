import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout=({children})=>
{
    return(
        <>
        <Header/>
        <div style={{minHeight:"calc(100vh - 200px)",marginBottom:"4rem"}}>
        {children}
        </div>
        <Footer/>
        </>
    )
}
export default Layout;