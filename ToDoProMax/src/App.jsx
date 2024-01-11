import Data from './resources/Data'
import './App.css'
import TaskItem from './components/TaskItem'

function App() {


  return (
    <div className='container'>
      <div className='ToDo'>
        <p>To be Done</p>
        {
          Data.map((element,i) => <TaskItem key={i} taskItem = {element}/>)
        }
      </div>

      <div className='Done'>
        <p>Done</p>
        
      </div>
    </div>
  )
}

export default App
