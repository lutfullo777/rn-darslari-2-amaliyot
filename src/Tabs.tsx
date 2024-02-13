import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Saved from './Saved';
import Setting from './Setting';

//icons
import HomeIcon from '../icons/Home';
import SavedIcon from '../icons/Saved';
import SettingIcon from '../icons/Setting';
import {ImageSourcePropType} from 'react-native';

export type ItemType = {
  id: number;
  image: ImageSourcePropType;
  title_uz: string;
  title_en: string;
  title_ru: string;
  description_uz: string;
  description_en: string;
  description_ru: string;
};

export type TabTypes = {
  Home: undefined;
  Saved: undefined;
  Setting: undefined;
  Detail: {
    item: ItemType;
  };
};

const Tabs = () => {
  const Tab = createBottomTabNavigator<TabTypes>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1F8B24',
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Nunito-SemiBold',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => <HomeIcon active={focused} />,
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => <SavedIcon active={focused} />,
        }}
        name="Saved"
        component={Saved}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => <SettingIcon active={focused} />,
        }}
        name="Setting"
        component={Setting}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
