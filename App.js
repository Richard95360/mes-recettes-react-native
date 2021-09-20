
import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store  from './src/redux/store';
import RecipesListScreen from './src/components/RecipesEpic/RecipesListScreen';
import RecipesDetailsScreen from './src/components/RecipesEpic/RecipesDetailsScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="RecipesList" component={RecipesListScreen}/>
          <Stack.Screen name="RecipeDetails" component={RecipesDetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
