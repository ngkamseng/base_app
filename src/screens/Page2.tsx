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

import { useAppDispatch, useAppSelector } from '../hooks';
import { BaseApp_decrement, BaseApp_increment, BaseApp_setValue } from '../reducers/CounterReducer';

const Page2 = () => {
  const counter = useAppSelector(state => state.BaseApp.BaseApp.counter)
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

            <Button
                title="Increase Counter"
                onPress={() =>
                  dispatch(BaseApp_increment())
                }
              />

              <Button
                title="derease Counter"
                onPress={() =>
                  dispatch(BaseApp_decrement())
                }
              />

              <Button
                title="set Counter"
                onPress={() =>
                  dispatch(BaseApp_setValue(99))
                }
              />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Page2;
