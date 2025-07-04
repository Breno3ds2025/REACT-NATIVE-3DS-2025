import React, {Component} from "react";
import {View, Text, StyleSheet, Image} from "react-native";


class Aula02 extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Aula02</Text>
                <Image
                    source={{uri:('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwb-sjuCUJSzG5K79FKAIWaIA6S9ymlX4Wzg&s')}}
                    style={{width: 100, height: 100}}
                />

                <View style={styles.caixa}>1</View>
                <View style={styles.caixa}>2</View>
                <View style={styles.caixa}>3</View>
            </View>
        );
    }
}

export default Aula02;

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    caixa: {
        width: '80%',
        height: 100,
        backgroundColor: 'green',
        borderRadius: 5,
        margin: 5,
    }

})