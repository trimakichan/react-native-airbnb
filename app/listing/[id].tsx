import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import listingData from '@/assets/data/airbnb-listings.json';

const Page = () => {
    const {id} = useLocalSearchParams<{id: string}>();
    const listing = (listingData as any[]).find((item) => item.id === id)
    // console.log(listing)
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default Page