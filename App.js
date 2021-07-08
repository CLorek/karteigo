import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from  "react-native-splash-screen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';


import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import CreateScreen from './screens/Create';
import QueryScreen from './screens/Query';

import AddCollectionScreen from './screens/create/addCollection';
import AddCardScreen from './screens/create/addCard';

import ShowCardsScreen from './screens/create/showCards';
import ShowCollectionsScreen from './screens/create/showCollections';


// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName={HomeScreen} 
            drawerType="front"
            overlayColor='pink'
            drawerStyle={{
              // style
            }}
            screenOptions= {{
              headerShown: true,
              swipeEnabled: true,
              gestureEnabled: true,
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: '#0080ff'
              },
              headerTintColor: 'white',
              headerTitleStyle:{
                fontSize: 25,
                fontWeight: '300'
              }
            }}
          >
            <Drawer.Screen 
              name="Home" 
              component={ HomeScreen } 
              options={{
                title: "DEV_HOME",
                drawerIcon: ({focused}) => (
                  <Icon
                  name="home"
                  size={focused ? 25 : 20}
                  color={focused? '#0080ff' : '#999999'}
                  />
                )
              }}    
            />
            <Drawer.Screen 
              name="Settings" 
              component={ SettingsScreen } 
              options={{
                drawerIcon: ({focused}) => (
                  <Icon
                  name="cog"
                  size={focused ? 25 : 20}
                  color={focused? '#0080ff' : '#999999'}
                  />
                )
              }}
            />
            <Drawer.Screen 
              name="Create" 
              component={ CreateScreen }
              options={{
                drawerIcon: ({focused}) => (
                  <Icon
                  name="plus"
                  size={focused ? 25 : 20}
                  color={focused? '#0080ff' : '#999999'}
                  />
                )
              }}
              />
            <Drawer.Screen 
            name="Query" 
            component={ QueryScreen} 
            options={{
              drawerIcon: ({focused}) => (
                <Icon
                name="paragraph"
                size={focused ? 25 : 20}
                color={focused? '#0080ff' : '#999999'}
                />
              )
            }}
            />
            <Drawer.Screen 
            name="ShowCards" 
            component={ ShowCardsScreen } 
            options={{
              drawerIcon: ({focused}) => (
                <Icon
                name="eye"
                size={focused ? 25 : 20}
                color={focused? '#0080ff' : '#999999'}
                />
              )
            }}
            />
            <Drawer.Screen 
            name="ShowCollections" 
            component={ ShowCollectionsScreen } 
            options={{
              drawerIcon: ({focused}) => (
                <Icon
                name="eye"
                size={focused ? 25 : 20}
                color={focused? '#0080ff' : '#999999'}
                />
              )
            }}
            />
            <Drawer.Screen 
            name="AddCard" 
            component={ AddCardScreen } 
            options={{
              drawerIcon: ({focused}) => (
                <Icon
                name="plus"
                size={focused ? 25 : 20}
                color={focused? '#0080ff' : '#999999'}
                />
              )
            }}
            />
            <Drawer.Screen 
            name="AddCollection" 
            component={ AddCollectionScreen } 
            options={{
              drawerIcon: ({focused}) => (
                <Icon
                name="plus"
                size={focused ? 25 : 20}
                color={focused? '#0080ff' : '#999999'}
                />
              )
            }}
            />
          </Drawer.Navigator>
        </NavigationContainer>


  );
};

export default App;
