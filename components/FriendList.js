import React, { useMemo } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Friend from "./Friend";

const FriendList = ({ friends }) => {
  const presentCount = useMemo(() => {
    console.log("Counting present friends...");
    return friends.filter((friend) => friend.present).length;
  }, [friends]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Teman</Text>
      <Text style={styles.presentCount}>Teman yang Hadir: {presentCount}</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Friend name={item.name} present={item.present} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 15,
    backgroundColor: "#f8f9fa",
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: 20,
    textAlign: "center",
  },
  presentCount: {
    fontSize: 20,
    color: "#6c757d",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default FriendList;
