//import liraries
import React, { Component, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

// create a component
const Detail = ({ route, navigation }) => {
    const { item } = route.params;

    const [user, setUser] = useState({
        id: item.Id,
        name: item.Name,
        phone: item.Phone,
        department: item.Department.Name,
        state: item.State,
        city: item.City,
        street: item.Street,
        zip: item.Zip,
        country: item.Country,
    });

    const onChangeId = (value) => {
        setUser({...user, id: value});
    };

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

    const onChangeStreet = (value) => {
        setUser({ ...user, street: value });
    };

    const onChangeZip = (value) => {
        setUser({ ...user, zip: value });
    };

    const onChangeCountry = (value) => {
        setUser({ ...user, country: value });
    };

    const updateData = () => {
        var myHeaders = new Headers();
        let info= `id=${item.id}&=${item.phone}&=${item.department}&=${item.state}&=${item.city}&=${item.street}&=${item.zip}&=${item.country}`;

        console.log(info);
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

        fetch('https://gorest.co.in/public-api/users/' + item.id, {
            method: 'PATCH',
            headers: myHeaders,
            body: JSON.stringify({
                name: user.name,
                gender: user.gender,
                email: user.email,
                status: user.status,
            }),
        })
            .then((response) => {
                response.text();
                navigation.push('Get')
            })
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    };

    const deleteData = () => {
        var myHeaders = new Headers();

        myHeaders.append('Content-Type', 'application/json');

        fetch('http://localhost:44350/helloworldWebService1.asmx/DeleteEmployee' + item.id, {
            method: 'DELETE',
            headers: myHeaders,
            body: JSON.stringify({
                name: user.name,
                gender: user.gender,
                email: user.email,
                status: user.status,
            }),
        })
            .then((response) => {
                response.text();
                navigation.push('Get')
            })
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={'Id'}
                onChangeText={(value) => onChangeId(value)}
                style={styles.input}
                value={user.id}
            />
            <TextInput
                placeholder={'Name'}
                onChangeText={(value) => onChangeName(value)}
                style={styles.input}
                value={user.name}
            />
            <TextInput
                placeholder={'Phone'}
                onChangeText={(value) => onChangePhone(value)}
                style={styles.input}
                value={user.phone}
            />
            <TextInput
                placeholder={'Department'}
                onChangeText={(value) => onChangeDepartment(value)}
                style={styles.input}
                value={user.department}
            />
            <TextInput
                placeholder={'State'}
                onChangeText={(value) => onChangeState(value)}
                style={styles.input}
                value={user.state}
            />
            <TextInput
                placeholder={'City'}
                onChangeText={(value) => onChangeCity(value)}
                style={styles.input}
                value={user.city}
            />
            <TextInput
                placeholder={'Street'}
                onChangeText={(value) => onChangeStreet(value)}
                style={styles.input}
                value={user.street}
            />
            <TextInput
                placeholder={'Zip'}
                onChangeText={(value) => onChangeZip(value)}
                style={styles.input}
                value={user.zip}
            />
            <TextInput
                placeholder={'Country'}
                onChangeText={(value) => onChangeCountry(value)}
                style={styles.input}
                value={user.country}
            />
<View style={styles.space}></View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={updateData}>
                    <View style={{ flex: 1, backgroundColor: '#262626', padding: 10, borderRadius: 3, width: 92, height: 38 }}>
                        <Text style={{ color: 'white', justifyContent: 'center', fontWeight: 500 }}>Update</Text>
                    </View>
                </TouchableOpacity>
<View style={styles.space}></View>
                <TouchableOpacity onPress={deleteData}>
                    <View style={{ flex: 1, backgroundColor: '#941a1d', padding: 10, borderRadius: 3, width: 92, height: 38 }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontWeight: 500 }}>Delete</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    input: {
        height: 30,
        width: 280,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
    },
    space: {
        height: 10,
        width: 15,
    },
    spaceTwo: {
        height: 40,
        
    },
    headingOne: {
        fontFamily: 'Arial',
        fontSize: 21,
        fontWeight: 'bold',
    }
});

//make this component available to the app
export default Detail;
