import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import { initializeApp } from "@react-native-firebase/app";
import { getFirestore, collection, addDoc, onSnapshot } from "@react-native-firebase/firestore";

const configuracaoFirebase = {
    apiKey: "Sua chave api",
    authDomain: "SEU_projeto.firebase.com",
    projectId: "ID_PROJETO",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appID: "SEU_APP_ID"
}

class Aula04 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>Conexão com firebase</Text>
            </View>
        );
    }
}

export default Aula04;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})