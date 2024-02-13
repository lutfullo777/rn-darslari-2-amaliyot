import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import Header from '../components/Header';
import CheckIcon from '../icons/Check';
import i18next from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = () => {
  const {t} = useTranslation();

  const languages = [
    {
      title: 'O‘zbekcha',
      code: 'uz',
      image: require('../assets/uz.png'),
    },
    {
      title: 'English',
      code: 'en',
      image: require('../assets/en.png'),
    },
    {
      title: 'Русский',
      code: 'ru',
      image: require('../assets/ru.png'),
    },
  ];

  const changeLan = (lan: string) => {
    i18next.changeLanguage(lan);
    AsyncStorage.setItem('language', lan);
  };

  return (
    <View style={styles.container}>
      <Header title={t('Sozlamalar')} />
      {languages.map(item => {
        return (
          <TouchableOpacity
            key={item.code}
            onPress={() => changeLan(item.code)}
            style={[
              styles.item,
              i18next.language === item.code && styles.active,
            ]}>
            <Image style={styles.image} source={item.image} />
            <Text style={styles.title}>{item.title}</Text>
            {i18next.language === item.code && <CheckIcon />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    marginHorizontal: 15,
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EAEFF3',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  active: {
    borderColor: '#1F8B24',
  },
  image: {
    width: 35,
    height: 20,
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Nunito-Medium',
    color: '#000',
  },
});

export default Setting;
