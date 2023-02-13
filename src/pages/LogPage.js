import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
const LogPage = () => {
  const [selectedValue, setSelectedValue] = useState('all');

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Ionicons name="arrow-down" size={24} color="black" />
        <Text style={styles.title}>See Log</Text>
      </View>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={styles.dropdown}
        >
          <Picker.Item label="All" value="all" />
          <Picker.Item label="Text1" value="text1" />
          <Picker.Item label="Text2" value="text2" />
          <Picker.Item label="Text3" value="text3" />
        </Picker>
        </View>
      </View>
      <View style={{marginTop:20}}>
      <View style={styles.Historycontainer}>
      <Text style={styles.text}>Klara Paracetamol</Text>
      <Text style={styles.text}>5ml</Text>
      <Text style={styles.text}>20:22</Text>
      <Text style={styles.text}>20jan</Text>
      <Text style={styles.text}>2023</Text>
    </View>
    <View style={styles.Historycontainer}>
      <Text style={styles.text}>Klara Paracetamol</Text>
      <Text style={styles.text}>5ml</Text>
      <Text style={styles.text}>20:22</Text>
      <Text style={styles.text}>20jan</Text>
      <Text style={styles.text}>2023</Text>
    </View>
    <View style={styles.Historycontainer}>
      <Text style={styles.text}>Klara Paracetamol</Text>
      <Text style={styles.text}>5ml</Text>
      <Text style={styles.text}>20:22</Text>
      <Text style={styles.text}>20jan</Text>
      <Text style={styles.text}>2023</Text>
    </View>
    <View style={styles.Historycontainer}>
      <Text style={styles.text}>Klara Paracetamol</Text>
      <Text style={styles.text}>5ml</Text>
      <Text style={styles.text}>20:22</Text>
      <Text style={styles.text}>20jan</Text>
      <Text style={styles.text}>2023</Text>
    </View>
    <View style={styles.Historycontainer}>
      <Text style={styles.text}>Klara Paracetamol</Text>
      <Text style={styles.text}>5ml</Text>
      <Text style={styles.text}>20:22</Text>
      <Text style={styles.text}>20jan</Text>
      <Text style={styles.text}>2023</Text>
    </View>
    </View>
    </ScrollView>
  )
}

export default LogPage

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      padding: 16,
    },
    Historycontainer: {
      flexDirection: 'row',
      justifyContent:"space-between",
      marginHorizontal:10,
      marginTop:10
    },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  dropdownContainer: {
    flex: 0.5,
    marginLeft: 16,
    borderWidth: 1,
    borderRadius: 8,
  },
  dropdown: {
    width: '100%',
  },
  text: {
    marginRight: 4,
    fontSize:18
  },
});