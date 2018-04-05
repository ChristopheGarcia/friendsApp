import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import CameraScreen from '../screens/CameraScreen';
import GalleryScreen from '../screens/GalleryScreen';
import AccountScreen from '../screens/AccountScreen';


export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Map: {
      screen: MapScreen,
    },
    Camera: {
      screen: CameraScreen,
    },
    Gallery: {
      screen: GalleryScreen,
    },
    Account: {
      screen: AccountScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;

          case 'Map':
            iconName =
              Platform.OS === 'ios' ? `ios-navigate${focused ? '' : '-outline'}` : 'md-navigate';
              break;

          case 'Camera':
            iconName =
              Platform.OS === 'ios' ? `ios-camera${focused ? '' : '-outline'}` : 'md-camera';
              break;

          case 'Gallery':
            iconName =
              Platform.OS === 'ios' ? `ios-images${focused ? '' : '-outline'}` : 'md-images';
              break;

          case 'Account':
            iconName = Platform.OS === 'ios' ? `ios-settings{focused ? '' : '-outline'}` : 'md-settings';
        }

        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
