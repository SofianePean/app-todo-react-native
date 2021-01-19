import React, {useState} from 'react';
import { View, TextInput } from 'react-native';

const TaskForm = ({}) => {
    const [title, setTitle] = useState("")
    const onChangeText = value => {setTitle(value)}
    return(
        <View>
            <TextInput value={title} onChangeText={onChangeText}/>
        </View>
    )
}

export default TaskForm