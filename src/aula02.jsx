import React, {Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Animated, Easing} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

// cria componente animated para aceitar cores animadas
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

class TelaPlanta extends Component{
    render() {
        return(
            <View style={styles.container}>

            </View>
        );
    }
}

export default TelaPlanta;

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: '#b3e5fc',
        alignItems: 'center',
        justifyContent: 'center',
    },

})