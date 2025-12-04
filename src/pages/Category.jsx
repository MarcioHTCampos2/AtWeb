import { Link, useParams } from 'react-router-dom'
import './Category.css'

export default function Category({ menu, addToCart }) {
  const { id } = useParams()
  const category = menu.find((c) => c.id === id)

  if (!category) {
    return (
      <div>
        <p>Categoria não encontrada</p>
        <Link to="/">Voltar</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>{category.name}</h2>
      <div className="category-grid">
        {category.items.map((item) => (
          <div key={item.id} className="category-item">
            <div className="name">{item.name}</div>
            <div className="desc">{item.description}</div>
            <div className="price">R$ {item.price.toFixed(2)}</div>
            <button onClick={() => addToCart(item)}>Adicionar</button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/cart">Ir para o carrinho</Link>
      </div>
    </div>
  )
}
