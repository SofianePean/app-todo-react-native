import React from 'react';
import {FlatList, Text} from 'react-native';

import TaskTile from './TaskTile';

const TaskList = ({tasks, onChangeStatus, completed}) => {

    const _renderItem = ({ item }) => <TaskTile id={item.id} completed={item.completed} title={item.title} onChangeStatus={onChangeStatus}></TaskTile>

    return(
        <FlatList
          data={tasks}
          renderItem={ _renderItem }
          keyExtractor={item => item.id}
        />
    )
}

export default TaskList;