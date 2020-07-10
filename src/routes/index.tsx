import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import UserDetail from '../pages/UserDetail';
import UserList from '../pages/UserList';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="UserList" component={UserList} />
    <Stack.Screen name="UserDetail" component={UserDetail} />
  </Stack.Navigator>
);

export default Routes;
