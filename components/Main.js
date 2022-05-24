import React, { useCallback, useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text,  
  TouchableOpacity, 
  FlatList, 
  Image,
  Modal
} from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import Form from './Form';

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {name: 'Google', anons: 'Google!', full: 'Googlool!', key: '1', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4i-wHGz0IVadbHW-B0a6ZQHaEK%26pid%3DApi&f=1'},
    {name: 'Apple', anons: 'Apple!', full: 'Applcool!', key: '2', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rzx0Hjr-cBh8EZMWpjr1CAHaE8%26pid%3DApi&f=1'},
    {name: 'FaceBook', anons: 'FaceBook!', full: 'FaceBooool!',  key: '3', img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ndB_kscSEYxnN-JEkEN1lgHaE9%26pid%3DApi&f=1'}
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [
        article,
        ...list
      ]
    });
    setModalWindow(false);
  }

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <EvilIcons name="close" size={34} color="black" style={styles.iconClose} onPress={() => 
            setModalWindow(false)
          }/> 
          <Text style={styles.title}>Form</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons name="add" size={34} color="black" style={styles.iconAdd} onPress={() => 
        setModalWindow(true)
      }/>
        <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
          <FlatList data={news} renderItem={({item}) => (
            <TouchableOpacity style={styles.item} onPress={() => 
              navigation.navigate('FullInfo', item)
            }>
            <Image style={styles.image} source={{uri: item.img}}/>
              <Text style={styles.title}>{ item.name }</Text>
              <Text style={styles.anons}>{ item.anons }</Text>
            </TouchableOpacity>
          )}/>
    </View>
  );
} 

const styles = StyleSheet.create({
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15
  },
  iconClose: {
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 200
  },
  header: {
    marginBottom: 30
  },
  item: {
    width: '100%',
    marginBottom: 30,

  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'
  }
});