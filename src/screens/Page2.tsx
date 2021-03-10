import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { HttpServices } from 'sharedLibs/src/services/http.services';
import { commonStyles } from 'sharedLibs/src/style'
import { LoginAction } from '../actions/login.action';
import { TransactionAction } from '../actions/transaction.action';

import { useAppDispatch, useAppSelector } from '../hooks';
import { getLoginAction } from '../reducers/LoginReducer';
import { getAction } from '../reducers/TransactionReducer';

const Page2 = () => {
  const counter = useAppSelector(state => state.BaseApp_transaction.counter)
  const {userId, token } = useAppSelector(state => state.BaseApp_login)
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState("Test");

  function getTitle() {
    let httpServices = new HttpServices();
    httpServices.getURL().then((response)=>{
      setTitle(response.data.title)
    })
  }
  
  getTitle();

  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={commonStyles.container}>
            <View>
              <Text style={commonStyles.titles}>BaseApp Page 2</Text>
            </View>

            <View style={commonStyles.container}>
              <Text style={commonStyles.content}>
                  Test Services : {title}
              </Text>
            </View>


            <View>
              <Text style={commonStyles.content}>
                  Test Redux Counter: {counter}
              </Text>
            </View>

            <View>
              <Text style={commonStyles.content}>
                  UserId: {userId}
              </Text>
            </View>

            <View>
              <Text style={commonStyles.content}>
                  Token: {token}
              </Text>
            </View>


            <Button
                title="Increase Counter"
                onPress={() =>
                  dispatch(getAction(TransactionAction.increaseCounter))
                }
              />

              <Button
                title="derease Counter"
                onPress={() =>
                  dispatch(getAction(TransactionAction.decreseCounter))
                }
              />

              <Button
                title="set Counter"
                onPress={() =>
                  dispatch(getAction(TransactionAction.setCounter, 99))
                }
              />

              <Button
                title="set Transaction"
                onPress={() =>
                  dispatch(getAction(TransactionAction.setTransaction, {counter:9999, transactionId:1234567890}))
                }
              />

              <Button
                title="set Token"
                onPress={() =>
                  dispatch(getLoginAction(LoginAction.setToken, "asdfghjkl"))
                }
              />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Page2;
