import './App.css'
import Chart from './components/Chart'
import Pie from './components/Pie'
function App() {

  return (
    <div className='container'>
        {/* <h4
          style={{
            fontSize:'2.5rem'
          }}
        >
          Bar graphs , shows how each compnay scores against one of the criteria
        </h4> */}
      <div className='chart'>
        <Chart/>
      </div>
      {/* <h4
          style={{
            fontSize:'2.5rem'
          }}
        >
          Pie Chart, the total criterion score for each company
        </h4>
      <div className='pie'>
        <Pie/>
      </div> */}
    </div>
  )
}

export default App
