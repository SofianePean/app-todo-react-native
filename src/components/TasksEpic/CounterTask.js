import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CounterTask = ({nbTasks}) => {
    return(
        <View>
            <Text style={styles.nbTasks}>{nbTasks}</Text>
            <Text>Tâches créées</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nbTasks: {
        fontWeight: "bold",
    }
})

export default CounterTask;