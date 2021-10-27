import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { UserLogIn } from '../components/Registration/UserLogIn';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function LogInScreen({ navigation }: RootTabScreenProps<'Login'>) {
  return (
    <UserLogIn />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
