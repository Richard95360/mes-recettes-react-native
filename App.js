
import React from 'react';
import { StyleSheet , SafeAreaView} from 'react-native';
import { Provider as ReduxProvider  } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigation from './src/navigation';

import store  from './src/redux/store';

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
      <SafeAreaView style={styles.container}>
        <AppNavigation/>
      </SafeAreaView>
      </PaperProvider>
    </ReduxProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
});
