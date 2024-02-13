import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import DetailHeader from '../components/DetailHeader';
import {useTranslation} from 'react-i18next';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import useLanguage from '../hooks/useLanguage';
import useStore from '../store';
import {TabTypes} from './Tabs';

type Props = BottomTabScreenProps<TabTypes, 'Detail'>;

const Detail = ({route, navigation}: Props) => {
  const {t} = useTranslation();
  const {saved, setSaved, removeSaved} = useStore();
  const {item} = route.params;
  const {language} = useLanguage();

  const backHandler = () => {
    navigation.goBack();
  };

  const isSaved = saved.find(el => el.id === item.id);

  const saveHandler = () => {
    if (isSaved) {
      removeSaved(item.id);
    } else {
      setSaved(item);
    }
  };

  return (
    <View style={styles.container}>
      <DetailHeader
        backHandler={backHandler}
        saveHandler={saveHandler}
        title={t('Ortga qaytish')}
        active={!!isSaved}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item[`title_${language}`]}</Text>
        <Text style={styles.desc}>{item[`description_${language}`]}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollView: {
    paddingBottom: 30,
  },
  image: {
    width: '100%',
    height: 240,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Nunito-Bold',
    marginHorizontal: 15,
    marginBottom: 14,
    marginTop: 12,
    color: '#000',
  },
  desc: {
    fontSize: 13,
    fontFamily: 'Nunito-Regular',
    marginHorizontal: 15,
    lineHeight: 22,
    color: '#000',
  },
});

export default Detail;
