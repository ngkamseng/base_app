import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing';
import Page2 from './screens/Page2';
import { navigationList } from './navigationList';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
        <Stack.Navigator>
          <Stack.Screen
            name={navigationList.home}
            component={Landing}
          />

          <Stack.Screen
            name={navigationList.page2}
            component={Page2}
          />
        </Stack.Navigator>
   
  );
};

export default Navigation;
