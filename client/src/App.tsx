import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'

import Context from './Context'

export default function App(): JSX.Element {
  const [showCart, setShowCart] = useState('right-[-460px]')

  const values = {
    showCart,
    setShowCart
  }

  return(
    <div className="bg-neutral-700 h-full">
      <Context contextValues={values}>
        <Header />
        <Outlet />
      </Context>
    </div>
  )
}