import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableOpacityProps,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const categories = [
  {
    name: "Tiny homes",
    icon: "home",
  },
  {
    name: "Cabins",
    icon: "house-siding",
  },
  {
    name: "Trending",
    icon: "local-fire-department",
  },
  {
    name: "Play",
    icon: "videogame-asset",
  },
  {
    name: "City",
    icon: "apartment",
  },
  {
    name: "Beachfront",
    icon: "beach-access",
  },
  {
    name: "Countryside",
    icon: "nature-people",
  },
];

const ExploreHeader = () => {
    const itemsRef = useRef<Array<TouchableOpacity>>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const selectCategory = (index: number) => {
        setActiveIndex(index)
    }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={"/(modals)/booking"} asChild>
            <TouchableOpacity style={styles.searchBtn}>
              <Ionicons name="search" size={24} />
              <View>
                <Text style={{ fontFamily: "mon-sb" }}>Where to?</Text>
                <Text style={{ fontFamily: "mon", color: Colors.grey }}>
                  Anywhere Any week
                </Text>
              </View>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={24} />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            alignItems: 'center',
            gap: 20,
            paddingHorizontal: 16,
        }}
        >
          {categories.map((item, index) => (
            <TouchableOpacity key={index}
            onPress={() => selectCategory(index)}
            //understand this code as below
            ref={(el => itemsRef.current[index] = el)}
            style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}
            >
              <MaterialIcons name={item.icon} size={24} />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 150,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 10,
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 24,
  },
  searchBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderColor: "#c2c2c2",
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
    padding: 14,
    borderRadius: 30,
    backgroundColor: "#fff",

    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: Colors.grey
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: 'mon-sb',
    color: '#000'
  },
  categoriesBtn: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    paddingBottom: 8
  },
  categoriesBtnActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
    paddingBottom: 8,
  }
});

export default ExploreHeader;
