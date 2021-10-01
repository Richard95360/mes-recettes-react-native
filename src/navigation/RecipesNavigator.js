import React from 'react'
import RecipesDetailsScreen from '../components/RecipesEpic/RecipesDetailsScreen'
import RecipesListScreen  from '../components/RecipesEpic/RecipesListScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function RecipesNavigator () {
    return (
        <Stack.Navigator>
          <Stack.Screen name="RecipesList" component={RecipesListScreen}/>
          <Stack.Screen name="RecipeDetails" component={RecipesDetailsScreen}/>
        </Stack.Navigator>
        
        )
}

export default RecipesNavigator;