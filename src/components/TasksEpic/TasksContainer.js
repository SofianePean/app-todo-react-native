import React, {useState} from 'react';
import {View, Text} from 'react-native';
import TaskList from './TaskList';
import TaskForm from './TaskForm'

function TasksContainer() {
    const [tasks, setTasks] = useState([
        {title: "Nouvelle tache", completed: false}
    ]);
    return(
        <View>
            <TaskForm />
            <TaskList tasks={tasks}/>
        </View>
    )
}

export default TasksContainer;