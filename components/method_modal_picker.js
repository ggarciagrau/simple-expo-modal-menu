import { size } from 'lodash';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const METHODS = ['Cámara', 'Galería', 'Documento']
const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height

const MethodModalPicker = (props) => {
    const option = METHODS.map((option, index) => {
        return(
            <TouchableOpacity
                style={styles.option}
            >
                <Text
                    style={styles.text}
                >{option}</Text>
            </TouchableOpacity>
        ) 
    })

    return (
        <TouchableOpacity
            onPress={ () => props.changeMethodsModalVisibility(false)}
            style={styles.container}
        >
            <View style={[styles.modal, {height: HEIGHT/4}]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    option: {
        alignItems: "flex-start",
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: "bold"
    }
});
export {MethodModalPicker}