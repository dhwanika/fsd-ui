import React, { Component } from 'react';
import { connect } from 'react-redux'
import AddTask from '../components/AddTask'
import ViewTask from '../components/ViewTask'

class Tasky extends Component {
    constructor(){
        super();
        this.state={
            addTask:false,
            viewTask:false
        }
        this.selectTask=this.selectTask.bind(this);
    }
    selectTask=(event,type) =>{
        if(type==='add'){
        this.setState({
            addTask:true,
            viewTask:false
        });
    }
    else if(type==='view'){
        this.setState({
            addTask:false,
            viewTask:true
        });
    }else{
this.setState({
            addTask:true,
            viewTask:false
        });
    }
    }
    render() {

        return (
            <div>
                <h1>Task Manager</h1>
                <div className="row">
    <div className="col-md-6">
      <h2 onClick={event=>this.selectTask(event,'add')}>Add Task</h2>
    </div>
    <div className="col-md-6">
      <h2 onClick={event=>this.selectTask(event,'view')}>View task</h2>
    </div>
    <div className="row paddingLeft30">
    <div className="col-md-12">
{this.state.addTask?<AddTask/>:this.state.viewTask?<ViewTask/>:''}
        </div>
        </div>
  </div>
                </div>
        );
    }
}
const mapStateToProps = (state) => ({
});


const mapActionToProps = ({
    /*createTask,updateTask,setPriorityFilter,setSearchText,deleteTask,*/
});

export default connect(mapStateToProps, mapActionToProps)(Tasky);

