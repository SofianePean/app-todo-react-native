import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const TaskForm = ({}) => {
    const [title, setTitle] = useState("")
    const onChangeText = value => {setTitle(value)}
    const onPressButton = () => {}
    return(
        <View style={style.container}>
            <View style={style.containerInput}>
                <TextInput value={title} onChangeText={onChangeText}/>
            </View>
            <Button
                title="Ajouter"
                onPress={onPressButton}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerInput : {
        borderWidth: 1,
        borderColor: "black",
        borderRadius:4,
        paddingLeft: 7,
        marginBottom: 15,
        marginTop: 15,
        width: "75%",
    },
})

export default TaskForm