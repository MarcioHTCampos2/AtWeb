import { Link } from 'react-router-dom'
import './Home.css'

// ...existing code...
export default function Home({ menu }) {
  return (
    <div>
      <h1>Bem-vindo</h1>
      <p>Escolha uma categoria</p>
      <div className="categories-grid">
        {menu.map((cat) => (
          <Link key={cat.id} to={`/category/${cat.id}`} className="category-link">
            <div style={{ fontWeight: 600, marginBottom: 4 }}>{cat.name}</div>
            <div style={{ color: '#666' }}>{cat.items.length} itens</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
// ...existing code...