import { View } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingData from '@/assets/data/airbnb-listings.json'

const index = () => {
  const [category, setCategory] = useState('Tiny homes');
  //memoizing the data so it doesn't have to render every time the index gets updated. 
  const items = useMemo(() => listingData as any, [])

  const onDataChanged = (category: string) => {
    console.log('CHANGED_', category)
    setCategory(category)
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />

      <Listings listings={items} category={category}/>
    </View>
  );
};

export default index;
