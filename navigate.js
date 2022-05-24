import React from 'react';
import Main from './components/Main';
import FullInfo from './components/FullInfo';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={
                    {              
                        title: 'Главная',
                        headerTitleAlign: 'center',
                        headerStyle: { 
                            backgroundColor: '#eb5d3d',
                            height: 90
                        },
                        headerTitleStyle: {
                            fontWeight: '400',
                            paddingTop: 0,
                            alignSelf: 'center'
                        }
                    }
                }
            />
            <Stack.Screen
                name="FullInfo"
                component={FullInfo}
                options={{title: 'Статья'}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}