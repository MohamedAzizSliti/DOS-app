import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WarningPrecausioPage = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.textContainer}>
      <Text style={styles.title}>Precausion
</Text>

        <Text style={styles.text}>
          This is some information about the dos.
          This is some information about the dos.
          This is some information about the dos.
          This is some information about the dos.
          This is some information about the dos.
          This is some information about the dos.
          This is some information about the dos.
          This is some information about the dos.
       
        </Text>
      </View>
    </View>
  )
}

export default WarningPrecausioPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
    paddingHorizontal:20
  },

  textContainer: {
   marginTop:50,
    paddingHorizontal: 50,
    borderWidth:2,
    padding:16
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    fontSize:18
  },
});
