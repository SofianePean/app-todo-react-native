import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { StyleSheet, SafeAreaView, Text, View, Platform } from 'react-native';
import Header from './src/components/_Shared/Header';
import TasksContainer from './src/components/TasksEpic/TasksContainer';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Header />
        <TasksContainer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    paddingLeft:20,
    paddingRight:20
  },
});
