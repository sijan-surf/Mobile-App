//import liraries
import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';

// create a component
const Get = ({ navigation }) => {
    const [user, setUser] = useState();

    const getUserData = async () => {
        try {
            let response = await fetch('http://localhost:44350/helloworldWebService1.asmx/GetEmployees');
            let json = await response.json();
            setUser(json);
        } catch (error) {
            console.error(error);
        }
    };

    useState(() => {
        getUserData();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {
                item: item,
                
            })}>
                <View
                    style={{
                        padding: 5,
                    }}>
                    <Text style={styles.staff}>{item.Name}</Text>
                    <Text style={styles.staff}>{item.Phone}</Text>
                    <Text style={styles.staff}>{item.Department.Name}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={user}
                renderItem={renderItem}
                keyExtractor={(item) => item.Id}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    staff: {
        backgroundColor: '#941a1d',
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: 6,
        textAlign: 'center',
        fontFamily: 'Arial',
    }
});

//make this component available to the app
export default Get;
