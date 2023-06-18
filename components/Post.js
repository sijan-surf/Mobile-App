import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

export default function Post({ route, navigation }) {
    const [user, setUser] = useState({
        name: '',
        phone: '',
        department: '',
        state: '',
        city: '',
        street: '',
        zip: '',
        country: '',
    });

    const [loading, setLoading] = useState(false);

    const onChangeName = (value) => {
        setUser({ ...user, name: value });
    };

    const onChangePhone = (value) => {
        setUser({ ...user, phone: value });
    };

    const onChangeDepartment = (value) => {
        setUser({ ...user, department: value });
    };

    const onChangeState = (value) => {
        setUser({ ...user, state: value });
    };

    const onChangeCity = (value) => {
        setUser({ ...user, city: value });
    };

    const onChangeStreet = (value) => {
        setUser({ ...user, street: value });
    };

    const onChangeZip = (value) => {
        setUser({ ...user, zip: value });
    };

    const onChangeCountry = (value) => {
        setUser({ ...user, country: value });
    };

    const saveData = () => {
        setLoading(true);
        var myHeaders = new Headers();

        myHeaders.append(
            'Authorization',
            'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
        );

        myHeaders.append('Content-Type', 'application/json');

        fetch('https://gorest.co.in/public-api/users', {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                name: user.name,
                gender: user.gender,
                email: user.email,
                status: user.status,
            }),
        })
            .then((response) => {
                setLoading(false)
                response.text();
            })
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={'Name'}
                onChangeText={(value) => onChangeName(value)}
                style={styles.input}
            />
            <TextInput
                placeholder={'Phone'}
                onChangeText={(value) => onChangePhone(value)}
                style={styles.input}
            />
            <TextInput
                placeholder={'Department'}
                onChangeText={(value) => onChangeDepartment(value)}
                style={styles.input}
            />
            <TextInput
                placeholder={'State'}
                onChangeText={(value) => onChangeState(value)}
                style={styles.input}
            />

            <TouchableOpacity onPress={saveData}>
                <View style={{ backgroundColor: 'white', padding: 10 }}>
                    <Text style={styles.input}>
                        {loading ? 'Loading' : 'Add'}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        margin: 15,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
    },
});
