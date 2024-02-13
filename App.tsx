/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './i18n';
import 'react-native-gesture-handler';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs, {ItemType} from './src/Tabs';
import Detail from './src/Detail';
import {TabTypes} from './src/Tabs';

export type StackType = {
  Tabs: TabTypes;
  Detail: {
    item: ItemType;
  };
};

function App() {
  const Stack = createStackNavigator<StackType>();

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <SafeAreaView edges={['top']} style={{flex: 1, backgroundColor: '#fff'}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Detail" component={Detail} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
  },
});

export default App;
