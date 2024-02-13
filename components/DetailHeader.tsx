import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ArrowLeft from '../icons/ArrowLeft';
import Heart from '../icons/Heart';

type Props = {
  title: string;
  active: boolean;
  backHandler: () => void;
  saveHandler: () => void;
};

const Header = ({title, backHandler, saveHandler, active}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={backHandler} style={styles.icon}>
        <ArrowLeft />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={saveHandler} style={styles.icon}>
        <Heart active={active} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    shadowColor: '#000',
    shadowOffset: {
      height: 3,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    flex: 1,
    color: '#000',
  },
  icon: {
    padding: 5,
  },
});

export default Header;
