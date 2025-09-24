import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="主頁"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTitle: 'Sport Game GO',
        headerRight: () => <Button title="發起球賽" onPress={() => {}} />,
      }}
    >
      <Drawer.Screen name="主頁" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
