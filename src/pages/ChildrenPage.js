import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { RadioButton } from "react-native-paper";

const ChildrenPage = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelection = (value) => {
    setSelectedValue(value);
  };
  const handleGenderSelect = (gender) => {
    if (gender === selectedGender) {
      // If the same gender is selected again, clear the selection
      setSelectedGender(null);
    } else {
      // Otherwise, select the new gender
      setSelectedGender(gender);
    }
  };
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter text"
          placeholderTextColor="#bfbfbf"
          keyboardType="default"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter text"
          placeholderTextColor="#bfbfbf"
          keyboardType="default"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Date of Birth:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter text"
          placeholderTextColor="#bfbfbf"
          keyboardType="default"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
        />
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedGender === "boy" && styles.activeButton,
        ]}
        onPress={() => handleGenderSelect("boy")}
      >
        <Text
          style={[
            styles.buttonText,
            selectedGender === "boy" && styles.activeButtonText,
          ]}
        >
          Boy
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedGender === "girl" && styles.activeButton,
        ]}
        onPress={() => handleGenderSelect("girl")}
      >
        <Text
          style={[
            styles.buttonText,
            selectedGender === "girl" && styles.activeButtonText,
          ]}
        >
          Girl
        </Text>
      </TouchableOpacity>
    </View>
      <TouchableOpacity style={styles.addChildContainer}>
        <Text style={styles.addChildText}>Add child</Text>
      </TouchableOpacity>
      <View style={styles.radioContainer}>
      <View style={styles.radio}>
        <RadioButton.Android
          value="klara"
          status={selectedValue === 'klara' ? 'checked' : 'unchecked'}
          onPress={() => handleSelection('klara')}
        />
        <Text>Klara Nilsso</Text>
      </View>
      <View style={styles.radio}>
        <RadioButton.Android
          value="pontus"
          status={selectedValue === 'pontus' ? 'checked' : 'unchecked'}
          onPress={() => handleSelection('pontus')}
        />
        <Text>Pontus Nilsso</Text>
      </View>
      </View>
    </ScrollView>
  );
};

export default ChildrenPage;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 10,
  },
  radioContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderColor: "#d6d6d6",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
    color: "#444444",
    backgroundColor: "#f6f6f6",
    marginBottom: 20,
    marginLeft: 20,
    width: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#000",
  },
  buttonText: {
    fontSize: 16,
  },
  addChildContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  addChildText: {
    fontSize: 16,
    color: "#007AFF",
    textDecorationLine: "underline",
  },


  buttonText: {
    color: "#333",
    textAlign: "center",
    fontSize:18
    
  },
  activeButton: {
    backgroundColor: "#007aff",
  },
  activeButtonText: {
    color: "#fff",
  },
});
