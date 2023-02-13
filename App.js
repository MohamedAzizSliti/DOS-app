import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AboutDOSPage from './src/pages/AboutDOSPage';
import LogPage from './src/pages/LogPage';
import WarningPrecausioPage from './src/pages/WarningPrecausioPage';
import ChildrenPage from './src/pages/ChildrenPage';
import { DrawerContent, createDrawerNavigator } from '@react-navigation/drawer';
import MainPage from './src/pages/mainPage';
import LoginPage from './src/pages/LoginPage';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
            <StatusBar backgroundColor="#b35166" barStyle="dark-content" />

         <Drawer.Navigator initialRouteName="Main Page" 
  screenOptions={{
    headerStyle: {
      backgroundColor: '#b35166', // Change this to the desired color
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    drawerStyle: {
      backgroundColor: '#e5788e',
      width: 240,
      
    },
    drawerActiveTintColor: '#661821', // Change the selected color to desired color
    drawerLabelStyle: {
      color: 'white', // Change the color of menu item to white
    },
 
  }}
  >
         <Drawer.Screen name="Main Page" component={MainPage} />

    <Drawer.Screen name="About Dos" component={AboutDOSPage} />
    <Drawer.Screen name="Log" component={LogPage} />
    <Drawer.Screen name="Warning and Precausio" component={WarningPrecausioPage} />
    <Drawer.Screen name="Children" component={ChildrenPage} />

  </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
