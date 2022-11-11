import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { context } from '../Context'

export default function NavBar() {
  const Context = useContext(context)

  return (
    <div className="bg-neutral-900 text-stone-100 py-12 px-10 flex items-center justify-between">
      <div>
        <h1 className="text-2xl">Logo</h1>
      </div>
      <div>
        <a href="#" className="mx-5 hover:border-b hover:border-stone-100">
          Home
        </a>
        <a href="#" className="mx-5 hover:border-b hover:border-stone-100">
          All products
        </a>
        <a 
          className="mx-5 hover:cursor-pointer" 
          onClick={() => Context.setShowCart('right-0')}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
      </div>
    </div>
  )
}
