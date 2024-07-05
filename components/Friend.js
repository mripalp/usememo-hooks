import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Friend = ({ name, present }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/profil.png")} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={[styles.status, present ? styles.present : styles.absent]}>
          {present ? "Hadir" : "Absen"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#495057",
  },
  status: {
    fontSize: 16,
    marginTop: 5,
  },
  present: {
    color: "#28a745",
  },
  absent: {
    color: "#dc3545",
  },
});

export default Friend;
