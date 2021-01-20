import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CounterTask from './CounterTask';
import CounterTaskCompleted from './CounterTaskCompleted';

const ContainerCounter = ({nbTasks, nbTasksCompleted}) => {

    return(
        <View style={styles.container}>
            <CounterTask nbTasks={nbTasks.length}/>
            <CounterTaskCompleted nbTasksCompleted={nbTasksCompleted}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:20
    }
})

export default ContainerCounter;