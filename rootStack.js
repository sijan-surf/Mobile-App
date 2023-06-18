import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import {Image} from 'react-native'
const Stack = createStackNavigator();

import Post from '../components/Post';
import Get from '../components/Get';
import Detail from '../components/Detail';

const rootStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'white',
                },
                headerTintColor: 'black',
            }}>
            <Stack.Screen
                name="Get"
                component={Get}
                options={({ navigation, route }) => ({
                    title: 'STAFF DIRECTORY',
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <Image
                          source={require('../assets/logo.png')}
                          style={{ width: 100, height: 50, marginLeft: 30 }}
                        />
                      ),
                    headerRight: () => (
                        <Ionicons
                            name={'add-outline'}
                            size={45}
                            color={'black'}
                            style={{ marginRight: 15 }}
                            onPress={() => navigation.navigate('Post')}
                        />
                    ),
                })}
            />
            <Stack.Screen name="Post" component={Post} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
};

export default rootStack;
