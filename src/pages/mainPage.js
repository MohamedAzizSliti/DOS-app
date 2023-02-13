import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
const MainPage = () => {
  const [selectedValue, setSelectedValue] = useState("all");

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={styles.dropdown}
          >
            <Picker.Item label="Child 1" value="child1" />
            <Picker.Item label="Child 2" value="child2" />
            <Picker.Item label="Child 3" value="child3" />
            <Picker.Item label="Child 4" value="child4" />
          </Picker>
        </View>
      </View>
      <View></View>
      <View>
        <View style={styles.Kgcontainer}>
          <Text style={styles.KgTitle}>12.3</Text>
          <Text style={styles.text1}>KG</Text>
        </View>
        <View style={styles.Historycontainer}>
          <Text style={styles.text}>Dosage :</Text>
          <Text style={styles.text}>Age</Text>
          <Text style={styles.text}>Regular</Text>
          <Text style={styles.text}>Max</Text>
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.leftContainer}>
          <Text style={styles.leftText}>Paracetamol</Text>
          <View style={styles.leftSubContainer}>
            <Ionicons name="chevron-down" size={24} color="black" />

            <Text style={styles.leftSubText}>24mg/ml (120mg/5ml)</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.circleContainer}>
            <Text style={styles.circleText}>7.6 ml</Text>
          </View>
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.leftContainer}>
          <Text style={styles.leftText}>Paracetamol</Text>
          <View style={styles.leftSubContainer}>
            <Ionicons name="chevron-down" size={24} color="black" />

            <Text style={styles.leftSubText}>24mg/ml (120mg/5ml)</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.circleContainer}>
            <Text style={styles.circleText}>7.6 ml</Text>
          </View>
        </View>
      </View>
      <View style={styles.Buttonscontainer}>
        <View style={styles.alarmIconContainer}>
          <TouchableOpacity style={styles.alarmIcon}>
            <Text style={styles.buttonText1}>Alarm</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Take dose</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer1}>
          <Text style={styles.buttonText1}>Adjust</Text>
          <Text style={styles.buttonText1}>dose</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  Buttonscontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    marginTop: 30,
  },
  Kgcontainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
  },
  Historycontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 50,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },

  dropdownContainer: {
    flex: 0.5,
    marginLeft: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  dropdown: {
    width: "100%",
  },
  KgTitle: {
    marginRight: 4,
    fontSize: 72,
    fontWeight: "bold",
  },
  text1: {
    marginRight: 4,
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 30,
  },
  text: {
    marginRight: 4,
    fontSize: 20,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  buttonText1: {
    fontSize: 18,
    fontWeight: "bold",
  },
  leftContainer: {
    flex: 1,
    marginRight: 16,
  },
  leftText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  leftSubContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  leftSubText: {
    fontSize: 18,
  },
  rightContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  circleContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
  },
  circleText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: "#e5788e",
    paddingHorizontal: 50,
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonContainer1: {
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  alarmIconContainer: {
    width: 80,
    height: 80,
    borderTopEndRadius: 80,
    borderTopStartRadius: 80,
    borderBottomEndRadius: 80,
    borderBottomStartRadius: 20,

    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  
});
