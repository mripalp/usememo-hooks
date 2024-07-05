import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import FriendList from "./components/FriendList";

export default function App() {
  const [friends, setFriends] = useState([
    { id: "1", name: "Saipul", present: true },
    { id: "2", name: "Ahmad", present: false },
    { id: "3", name: "Dandi", present: true },
  ]);

  const addFriend = () => {
    const newFriend = {
      id: (friends.length + 1).toString(),
      name: `Friend ${friends.length + 1}`,
      present: Math.random() > 0.5,
    };
    setFriends([...friends, newFriend]);
  };

  return (
    <View style={styles.container}>
      <FriendList friends={friends} />
      <View style={styles.buttons}>
        <Button title="Add Friend" onPress={addFriend} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 20,
  },
});
