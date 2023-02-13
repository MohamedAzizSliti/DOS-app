import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AboutDOSPage from '../pages/AboutDOSPage';
import LogPage from '../pages/LogPage';
import WarningPrecausioPage from '../pages/WarningPrecausioPage';
import ChildrenPage from '../pages/ChildrenPage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainPage from '../pages/mainPage';
const DrawelMenu = () => {
    const Drawer = createDrawerNavigator();

  return (
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
  )
}

export default DrawelMenu

const styles = StyleSheet.create({})