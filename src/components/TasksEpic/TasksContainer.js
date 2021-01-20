import React, {useState} from 'react';
import {View, Text} from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm';
import ContainerCounter from './ContainerCounter'


function TasksContainer() {
    const [tasks, setTasks] = useState([
        {id: new Date().getTime(), title: "Nouvelle tache", completed: false}
    ]);
    const [nbTasksCompleted, setnbTasksCompleted] = useState([])

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
    };

    const onDeleteTask = id => {
        let newTasks = [];

        tasks.forEach(task => {
            if (task.id !== id) {
                newTasks.push(task)
            }
        })
        setTasks(newTasks)
    }

    const countStatusCompleted = () => {
        let nb = 0;
        tasks.forEach(task => {
            if (task.completed) {
                nb++
            }
        })
        return nb
    }

    return(
        <View>
            <TaskForm onAddTask={onAddTask}/>
            <ContainerCounter nbTasksCompleted={countStatusCompleted} nbTasks={tasks}/>
            <TaskList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask}/>
        </View>
    )
}

export default TasksContainer;