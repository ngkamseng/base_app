import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Landing from './screens/Landing';
import store from './store';
import {Provider} from 'react-redux';
import Navigation from './navigation';


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Navigation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
   
  );
};

export default App;
