/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import {BaseApp_decrement, BaseApp_increment, BaseApp_setValue} from '../reducers/CounterReducer';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from 'react-navigation';


import { HttpServices } from 'sharedLibs/src/services/http.services';
import { commonStyles } from 'sharedLibs/src/style';



interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>,
  counter:number,
  increment: any,
  decrement: any,
  setValue: any,
}

declare const global: {HermesInternal: null | {}};
class Landing extends React.Component<Props> {
  
  //httpService = new HttpServices();
  state = {
    title:"test"
  }
  getTitle() {
    let httpServices = new HttpServices();
    httpServices.getURL().then((response)=>{
      this.setState(() => ({
        title: response.data.title
      }));

    })
  }
  
  componentDidMount() {
    this.getTitle();
  }
  
  render() {

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">

            <View style={commonStyles.container}>
              <View>
                <Text style={commonStyles.titles}>BaseApp Home Page</Text>
              </View>

              <View style={commonStyles.container}>
                <Text style={commonStyles.content}>
                    Test Services : {this.state.title}
                </Text>
              </View>


              <View>
                <Text style={commonStyles.content}>
                    Test Redux Counter: {this.props.counter}
                </Text>
              </View>

              <Button
                title="Increase Counter"
                onPress={() =>
                  this.props.increment()
                }
              />

              <Button
                title="derease Counter"
                onPress={() =>
                  this.props.decrement()
                }
              />

              <Button
                title="set Counter"
                onPress={() =>
                  this.props.setValue(88)
                }
              />
              
              <Button
                title="Go to Container Step 2"
                onPress={() =>
                  this.props.navigation.navigate('BaseApp_Page2')
                }
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = (state:any) => {
  const { counter } = state.BaseApp.BaseApp
  return { counter }
};

const mapDispatchToProps = (dispatch: (arg0: { payload: number | undefined; type: string; }) => void) => {
  return {
    increment: () => {
      dispatch(BaseApp_increment())
    },
    decrement: () => {
      dispatch(BaseApp_decrement())
    },
    setValue: (val:number) => {
      dispatch(BaseApp_setValue(val))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
``