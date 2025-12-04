import { Link } from 'react-router-dom'

export default function Home({ menu }) {
  return (
    <div>
      <h1>Bem-vindo</h1>
      <p>Escolha uma categoria</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {menu.map((cat) => (
          <Link key={cat.id} to={`/category/${cat.id}`} style={{ border: '1px solid #ccc', borderRadius: 8, padding: '1rem', textDecoration: 'none' }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>{cat.name}</div>
            <div style={{ color: '#666' }}>{cat.items.length} itens</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
