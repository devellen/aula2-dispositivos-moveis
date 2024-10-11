import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from '@rneui/themed';

export default function Cadastro({navigation}) {
    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }
        ]}>
            <View style={styles.view2}>
                <Input
                    placeholder='Nome' inputContainerStyle={styles.inputContainer}
                />
                <Input
                    placeholder='Email' inputContainerStyle={styles.inputContainer}
                />
                <Input placeholder="Password" secureTextEntry={true} inputContainerStyle={styles.inputContainer} />
            </View>
            <View style={styles.view3}>
                <Button color="secondary" buttonStyle={styles.buttons} onPress={() => navigation.navigate('Login')}>Cadastrar</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff'
    },
    view2: {
        flex: 3,
        justifyContent: 'flex-end',
    },
    inputContainer: {
        borderBottomWidth: 0, // Remove a linha inferior padrão do input
        borderRadius: 25, // Define bordas arredondadas
        backgroundColor: '#f1f1f1', // Adiciona uma cor de fundo ao input
        paddingHorizontal: 10,
        marginBottom: 15,

    },
    view3: {
        flex: 3,
    },
    buttons: {
        padding: 10,
        borderRadius: 25
    }
});
