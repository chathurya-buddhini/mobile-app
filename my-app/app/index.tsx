import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
const PlaceholderImage = require('../assets/images/Fm.jpg');
import { useRouter } from 'expo-router';
import { Text } from 'react-native-reanimated/lib/typescript/Animated';

export default function index() {
  const router = useRouter();
  return (
    <View
      style={
        styles.container
      }
    >
      <TouchableOpacity style={styles.imageContainer} onPress={() => router.push('/home')}>
        <Image source={PlaceholderImage} style={styles.image} />
        
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 350,

  },
  image: {
    width: 300,
    height: 235,

  },
});

