import { createContext, ReactNode } from 'react'

interface ContextComponent {
    contextValues:any,
    children:ReactNode
}

interface ContextValues {
    showCart:string
    setShowCart:Function
}

export const context = createContext<ContextValues>({
    showCart: '',
    setShowCart: () => {}
})

export default function Context(
    { contextValues, children }:ContextComponent
): JSX.Element {

    return (
        <context.Provider value={contextValues}>
            {children}
        </context.Provider>
    )
}
