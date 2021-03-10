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
import {getAction} from '../reducers/TransactionReducer';

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
import { RootState } from '../store';
import { navigationList } from '../navigationList';
import { TransactionAction } from '../actions/transaction.action';
import { TransactionModel } from '../interface/transaction.interface';



interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>,
  counter:number,
  increment: any,
  decrement: any,
  setValue: any,
  setTransaction:Function,
  transactionId:any
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
                <Text style={commonStyles.content}>
                    Test Redux TransactionId: {this.props.transactionId}
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
                title="set Transaction"
                onPress={() =>
                  this.props.setTransaction({counter:999, transactionId:12312312})
                }
              />
              
              <Button
                title="Go to Container Step 2"
                onPress={() =>
                  this.props.navigation.navigate(navigationList.page2)
                }
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const mapStateToProps = (state:RootState) => {
  const { counter, transactionId } = state.BaseApp_transaction
  return { counter, transactionId }
};

const mapDispatchToProps = (dispatch: (arg0: { payload: number | undefined; type: string; }) => void) => {
  return {
    increment: () => {
      dispatch(getAction(TransactionAction.increaseCounter))
    },
    decrement: () => {
      dispatch(getAction(TransactionAction.decreseCounter))
    },
    setValue: (val:number) => {
      dispatch(getAction(TransactionAction.setCounter,val))
    },
    setTransaction: (val:TransactionModel) => {
      dispatch(getAction(TransactionAction.setTransaction,{counter:999, transactionId:12312312}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
``