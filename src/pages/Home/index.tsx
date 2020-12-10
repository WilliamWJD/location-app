import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import New from '../../components/New';

const Home: React.FC = () => {
  const navigation = useNavigation();

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

      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingHorizontal:15, }}>
        <New
          cover={require('../../assets/house1.jpg')}
          name="Casa de praia"
          description="Casa nova com quadra do mar, lugar seguro e monitorado 24horas"
          onPress={()=>navigation.navigate('detail')}
        />

        <New
          cover={require('../../assets/house2.jpg')}
          name="Casa de praia"
          description="Casa nova com quadra do mar, lugar seguro e monitorado 24horas"
          onPress={()=>navigation.navigate('detail')}
        />

        <New
          cover={require('../../assets/house3.jpg')}
          name="Casa de praia"
          description="Casa nova com quadra do mar, lugar seguro e monitorado 24horas"
          onPress={()=>navigation.navigate('detail')}
        />
      </ScrollView>

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
  },

  contentNew:{
    flexDirection:'row',
    width:'100%',
    alignItems:'center'
  },

  title:{
    paddingHorizontal:15,
    fontFamily:'Montserrat_700Bold',
    fontSize:18,
    color:'#4f4a4a'
  }
})

export default Home;