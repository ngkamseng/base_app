import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing';
import Page2 from './screens/Page2';

const Stack = createStackNavigator();

const BaseApp_Navigation = () => {
  return (
        <Stack.Navigator>
          <Stack.Screen
            name="BaseApp_Home"
            component={Landing}
          />

          <Stack.Screen
            name="BaseApp_Page2"
            component={Page2}
          />
        </Stack.Navigator>
   
  );
};

export default BaseApp_Navigation;
