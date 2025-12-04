import { Chart } from 'react-google-charts'
import './Charts.css'

export default function Charts({ cart }) {
  const byCategory = cart.reduce((acc, i) => {
    acc[i.category] = (acc[i.category] || 0) + i.quantity
    return acc
  }, {})

  const data = [['Categoria', 'Quantidade'], ...Object.entries(byCategory)]

  const options = {
    title: 'Itens por categoria',
    titleTextStyle: { color: '#ffffff' },
    legend: { position: 'right', textStyle: { color: '#ffffff' } },
    backgroundColor: { fill: 'transparent' },
    chartArea: { width: '75%', height: '75%' },
    pieSliceTextStyle: { color: '#ffffff' },
    colors: ['#646cff', '#535bf2', '#ff6b6b', '#ffa94d', '#51cf66', '#15aabf']
  }

  return (
    <div className="charts-page">
      <h2>Gráficos</h2>
      {data.length > 1 ? (
        <div className="chart-wrapper">
          <Chart chartType="PieChart" width={'100%'} height={'100%'} data={data} options={options} />
        </div>
      ) : (
        <p>Adicione itens ao carrinho para visualizar os gráficos</p>
      )}
    </div>
  )
}
