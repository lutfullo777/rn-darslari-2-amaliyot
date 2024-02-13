/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Header from '../components/Header';
import useLanguage from '../hooks/useLanguage';
import useStore from '../store';

function Saved({navigation}: {navigation: any}) {
  const {t} = useTranslation();
  const {language} = useLanguage();
  const {saved} = useStore();

  return (
    <View style={styles.container}>
      <Header title={t('Saqlanganlar')} />
      <FlatList
        data={saved}
        contentContainerStyle={styles.list}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', {item})}
            key={index}
            style={styles.childView}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.title}>{item[`title_${language}`]}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  childView: {
    width: '100%',
    aspectRatio: 1.6,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    //Ios uchun
    shadowColor: '#000',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 8,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
  },
  title: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Nunito-SemiBold',
    margin: 12,
  },
});

export default Saved;
