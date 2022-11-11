import Card from '../components/Card'
import ShoppingCart from '../components/ShoppingCart'

export default function Home() {
  return (
    <div>
      <div className="px-20 pb-16">
        <h1 className="py-16 text-center text-white text-4xl font-bold">New</h1>
        <Card />
        <ShoppingCart styleCart="fixed" />
      </div>
    </div>
  )
}
