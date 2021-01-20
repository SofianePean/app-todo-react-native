import React, {useState} from 'react';
import {View, Text} from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm'

function TasksContainer() {
    const [tasks, setTasks] = useState([
        {id: new Date().getTime(), title: "Nouvelle tache", completed: false}
    ]);

    const onAddTask = (title) => {
        const newTask = {id:new Date().getTime(), title: title, completed: false}
        setTasks([newTask, ...tasks])
    }

    const onChangeStatus = (id) => {
        let newTasks = [];

        tasks.forEach(task => {
            if (task.id === id) {
                newTasks.push({id:id, title: task.title, completed: !task.completed})
            } else {
                newTasks.push(task)
            }
        })
        setTasks(newTasks);
    }
    return(
        <View>
            <TaskForm onAddTask={onAddTask}/>
            <TaskList tasks={tasks} onChangeStatus={onChangeStatus}/>
        </View>
    )
}

export default TasksContainer;