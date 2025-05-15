import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

class Aula03 extends Component {
    render() {
        return(
            <View style={ styles.container }>
                <TouchableOpacity style={styles.botao}>
                    <Text>Botão</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Aula03;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    botao: {
        backgroundColor: 'blue',
    }

})