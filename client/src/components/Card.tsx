import { useState, useEffect } from 'react';

export default function Card() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const url = await fetch('http://localhost:3000/api/products');
        const res = await url.json();

        setProducts(res);
    }

    useEffect(() => {
        getProducts();
    }, []);
    
    return(
        <div className="grid grid-cols-3 gap-y-10 justify-items-center content-center">
            {
                products.map((p:any) => (
                    <div 
                        className="text-white grid grid-rows-[280px_100px] rounded-md overflow-hidden" 
                        key={p.id}
                    >
                        <div className="w-72">
                            <img className="w-full h-full" src={p.product_image} />
                        </div>
                        <div className="bg-neutral-900 flex justify-around items-center">
                            <div>
                                <p>{p.product_name}</p>
                                <p>${p.product_price}</p>
                            </div>
                            <button className="bg-neutral-100 p-2 text-black rounded-sm hover:bg-neutral-200">Add cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}