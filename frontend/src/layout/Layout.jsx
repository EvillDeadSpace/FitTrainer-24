import React, { useEffect } from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'

const Layout = ({ setProgress }) => {

  useEffect(() => {
    setProgress(0)
    setProgress(30)
    setTimeout(() => {
      setProgress(100)
    }, 1600);
  }, [])

  return (<>
    <Header />
    <main>
      <Routers />
    </main>
    <Footer />
  </>
  )
}

export default Layout;