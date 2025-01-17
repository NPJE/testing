/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectBlindsIntervalComponent from './src/select-blinds-Interval/controller/SelectBlindsIntervalComponent';
import PreviewBlindsStructureComponent from './src/preview-blinds-structure/controller/PreviewBlindsStructureComponent';
import jsontext from '../numerblinds/src/global/global.json'

const Stack = createStackNavigator();


const ParentComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={SelectBlindsIntervalComponent} options={{ title: jsontext.globalTexts.Welcomeheader }}/>
        <Stack.Screen name="PreviewBlindsStructure" component={PreviewBlindsStructureComponent} options={{ title: 'Preview Blinds Structure' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ParentComponent;
