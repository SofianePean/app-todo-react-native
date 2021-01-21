import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';

const FloatingButton = ({toggleForm, isFormOpened}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={toggleForm}>
            {isFormOpened ? 
            <Text style={styles.title}>
                +
            </Text> 
            :
            <Text style={styles.title}>
            x
            </Text> 
            }
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width:50,
        height:50,
        borderRadius:100,
        backgroundColor: 'orange',
        justifyContent: 'center',
        
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        // alignItems: 'center'
        textAlign: 'center'
    }
});

export default FloatingButton;