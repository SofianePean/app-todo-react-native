import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CounterTaskCompleted = ({nbTasksCompleted}) => {
    return(
        <View>
            <Text style={styles.counter}>{nbTasksCompleted()}</Text>
            <Text>Tâches complétées</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    counter: {
        fontWeight: 'bold'
    }
})

export default CounterTaskCompleted;