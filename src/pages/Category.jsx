import { Link, useParams } from 'react-router-dom'

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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {category.items.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: 8, padding: '1rem' }}>
            <div style={{ fontWeight: 600 }}>{item.name}</div>
            <div style={{ color: '#666', margin: '0.5rem 0' }}>{item.description}</div>
            <div style={{ marginBottom: '0.75rem' }}>R$ {item.price.toFixed(2)}</div>
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
