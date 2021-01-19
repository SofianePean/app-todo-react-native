import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const TaskTile = ({title}) => {
    return(
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={require('../../../assets/icon_check.png')}
            />
            <Text>{title}</Text>
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
        justifyContent: 'space-between'
    },
    icon: {
        width:30,
        height:30
    }
})
export default TaskTile;