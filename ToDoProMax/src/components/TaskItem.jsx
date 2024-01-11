import  { Component } from 'react'

export default class TaskItem extends Component {

    constructor(taskItem){
        super(taskItem)
        this.state = {
            taskItem : taskItem
        }
    }

    render() {
    //   console.log(document.getElementsByTagName(input).value)

    return (
      <div>
        <label htmlFor="checklist">{this.state.taskItem.taskItem}</label>
        <input type="checkbox" name="checklist" id="checklist" />
        </div>
      
    )
  }
}

