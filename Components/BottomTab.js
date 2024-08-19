import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homescreen from './Screens/Homescreen';
import Notificationscreen from './Screens/Notificationscreen';
import Chatscreen from './Screens/Chatscreen';
import Icon from 'react-native-vector-icons/Fontisto';
import Splitscreen from './Screens/Splitscreen';
import Booking from './Screens/Bookingscreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: true,
        }}>
        <Tab.Screen
          name="Home"
          component={Homescreen}
          options={{
            tabBarIcon: () => <Icon name="earth" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Booking"
          component={Booking}
          options={{
            tabBarIcon: () => <Icon name="suitcase" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notificationscreen}
          options={{
            tabBarIcon: () => <Icon name="bell-alt" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Chats"
          component={Chatscreen}
          options={{
            tabBarIcon: () => <Icon name="hangout" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Split Bill"
          component={Splitscreen}
          options={{
            tabBarIcon: () => <Icon name="persons" size={24} color="black" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
