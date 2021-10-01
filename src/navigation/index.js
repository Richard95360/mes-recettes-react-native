import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TasksContainer from '../TasksEpic/TasksContainer'
import RecipesNavigator from './RecipesNavigator';

const Tabs = createBottomTabNavigator();



function AppNavigation() {
    return (
    
     <NavigationContainer>
      <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon:({focused, color,size}) => {
          let icon;
          if(route.name === 'Recettes'){
            icon = focused ? 'ios-list-circle' : 'ios-list';
          }else{
            icon = 'ios-cart'
          }
          return <Ionicons name={icon} size={size} color={color}/>
        }
      })}
      tabBarOptions = {{
        activeTintColor:'red',
        inactiveTintColor:'blue',
      }}
      >
      <Tabs.Screen name="Recettes" component={RecipesNavigator} />
      <Tabs.Screen name="Listes" component={TasksContainer} />
    </Tabs.Navigator>
      </NavigationContainer>
       
    )
}

export default AppNavigation
