import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { context } from '../Context'

export default function ShoppingCart(): JSX.Element {
    const Context = useContext(context)

    /* STYLES */
    const stylesShoppingCart = `bg-neutral-300 w-1/3 h-screen grid grid-rows-[80px_50px_minmax(350px,_1fr)_100px] justify-items-center items-center transition-all duration-150 ease-in-out fixed top-0 ${Context.showCart}`;
    /*-/-*/

    return(
        <div className={stylesShoppingCart}>
            <button 
                className="ml-80 text-3xl" 
                onClick={() => Context.setShowCart('right-[-460px]')}
            >
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <h2 className="text-3xl font-bold">Products</h2>
            <div className="border-2 border-slate-700">
                Products
            </div>
            <div className="w-72 text-2xl flex justify-between items-center">
                <p>Total: $14.66</p>
                <button className="bg-neutral-900 px-4 py-1 text-white rounded-sm">
                    Sale
                </button>
            </div>
        </div>
    )
}