import { Chart } from 'react-google-charts'

export default function Charts({ cart }) {
  const byCategory = cart.reduce((acc, i) => {
    acc[i.category] = (acc[i.category] || 0) + i.quantity
    return acc
  }, {})

  const data = [['Categoria', 'Quantidade'], ...Object.entries(byCategory)]

  const options = {
    title: 'Itens por categoria',
    legend: { position: 'right' }
  }

  return (
    <div>
      <h2>Gráficos</h2>
      {data.length > 1 ? (
        <Chart chartType="PieChart" width={'100%'} height={'360px'} data={data} options={options} />
      ) : (
        <p>Adicione itens ao carrinho para visualizar os gráficos</p>
      )}
    </div>
  )
}
