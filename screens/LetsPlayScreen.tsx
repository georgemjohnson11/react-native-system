import * as React from 'react';
import { StyleSheet } from 'react-native';

import { CarouselComponent } from '../components/Carousel';
import { Text, View } from '../components/Themed';
export default function LetsPlayScreen() {
  return (
    <View style={styles.container}>
      <CarouselComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
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
