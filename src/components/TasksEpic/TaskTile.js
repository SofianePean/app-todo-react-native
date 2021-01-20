import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const TaskTile = ({id, title, onChangeStatus, completed, onDeleteTask}) => {
    return(
        <TouchableOpacity onPress={() => onChangeStatus(id)}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Image
                        style={styles.icon}
                        tintColor={completed ? 'green' : 'red'}
                        source={completed ? require('../../../assets/icon_check.png') : require('../../../assets/icon_circle.png')}
                    />
                    <Text style={[styles.title, {color: completed ? 'lightgrey' : 'black'}]}>{title}</Text>
                </View>
                <TouchableOpacity onPress={() => onDeleteTask(id)}>
                    <Image
                        style={styles.icon}
                        source={require('../../../assets/icon_trash.png')}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    subContainer: {
        flexDirection: 'row',
        // justifyContent: 'flex-start'
        alignItems: 'center',
    },
    title: {
        marginLeft:30,
        color: 'green'
    },
    icon: {
        width:30,
        height:30,
    }
})
export default TaskTile;