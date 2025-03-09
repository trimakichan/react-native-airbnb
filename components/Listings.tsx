import { View, Text, FlatList, ListRenderItem, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import { Listing } from "@/Interfaces/listing";

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings: items, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    console.log("RELOAD LISTINGS: ", items.length);
    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [category]);

  const renderRow: ListRenderItem<Listing> = ({item}) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.listings}>
          <Image source={{uri:item.medium_url}} style={styles.image}/>

        </View>
      </TouchableOpacity>
    </Link> 
  )

  return (
    <View style={defaultStyles.container}>
      <FlatList 
      ref={listRef}
      data={loading ? [] : items }
      renderItem={renderRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listings: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10
  }
})

export default Listings;
