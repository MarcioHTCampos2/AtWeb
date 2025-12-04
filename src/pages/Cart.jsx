export default function Cart({ cart, updateQuantity, removeItem }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0)

  if (!cart.length) {
    return <p>Seu carrinho está vazio</p>
  }

  return (
    <div>
      <h2>Carrinho</h2>
      <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
        {cart.map((i) => (
          <div key={i.id} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', alignItems: 'center', gap: '0.75rem', border: '1px solid #eee', borderRadius: 8, padding: '0.75rem' }}>
            <div>
              <div style={{ fontWeight: 600 }}>{i.name}</div>
              <div style={{ color: '#666' }}>R$ {i.price.toFixed(2)}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button onClick={() => updateQuantity(i.id, i.quantity - 1)}>-</button>
              <div>{i.quantity}</div>
              <button onClick={() => updateQuantity(i.id, i.quantity + 1)}>+</button>
            </div>
            <div>R$ {(i.price * i.quantity).toFixed(2)}</div>
            <button onClick={() => removeItem(i.id)}>Remover</button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1rem', fontWeight: 700 }}>Total: R$ {total.toFixed(2)}</div>
    </div>
  )
}
