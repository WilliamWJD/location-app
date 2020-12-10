import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const Home: React.FC = () => {
  return(
    <ScrollView showsHorizontalScrollIndicator={false} style={{ backgroundColor:'#fff' }}>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder="O que está procurando?"
            style={styles.input}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header:{
    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    marginVertical:20,
  },

  inputArea:{
    paddingHorizontal:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'98%',
    backgroundColor:'#fff',
    elevation:2,
    height:37,
    borderRadius:10,
  },

  input:{
    fontFamily:'Montserrat_500Medium',
    paddingHorizontal:10,
    fontSize:13,
    width:'90%'
  }
})

export default Home;