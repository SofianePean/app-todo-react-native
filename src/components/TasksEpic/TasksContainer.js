import React, {useState} from 'react';
import {View, Text} from 'react-native';
import TaskList from './TaskList';

function TasksContainer() {
    const [tasks, setTasks] = useState([
        {title: "Nouvelle tache", completed: false}
    ]);
    return(
        <View>
            <TaskList tasks={tasks}/>
        </View>
    )
}

export default TasksContainer;