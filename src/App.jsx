import { useMemo } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { MENU } from './data/menu'
import { useLocalStorage } from './hooks/useLocalStorage'
import Home from './pages/Home'
import Category from './pages/Category'
import Cart from './pages/Cart'
import Charts from './pages/Charts'

function App() {
  const [cart, setCart] = useLocalStorage('cart', [])

  const addToCart = (item) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id)
      if (idx >= 0) {
        const next = [...prev]
        next[idx] = { ...next[idx], quantity: next[idx].quantity + 1 }
        return next
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, category: item.category, quantity: 1 }]
    })
  }

  const updateQuantity = (id, quantity) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity } : p)).filter((p) => p.quantity > 0))
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id))
  }

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.quantity, 0), [cart])

    return (
    <BrowserRouter>
      <div className="app-container">
        <header className="app-header">
          <Link to="/" className="app-logo">Cardápio Digital</Link>
          <nav className="app-nav">
            <Link to="/">Início</Link>
            <Link to="/cart">Carrinho ({cartCount})</Link>
            <Link to="/charts">Gráficos</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home menu={MENU} />} />
          <Route path="/category/:id" element={<Category menu={MENU} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />} />
          <Route path="/charts" element={<Charts cart={cart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
