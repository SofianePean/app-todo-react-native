import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const TaskTile = ({title}) => {
    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
            <Image
                style={styles.icon}
                source={require('../../../assets/icon_check.png')}
                />
            <Text style={styles.title}>{title}</Text>
            </View>
            <Image
                style={styles.icon}
                source={require('../../../assets/icon_trash.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subContainer: {
        flexDirection: 'row',
        // justifyContent: 'flex-start'
        alignItems: 'center',
    },
    title: {
        marginLeft:30
    },
    icon: {
        width:30,
        height:30
    }
})
export default TaskTile;