import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  title: string;
};

const Header = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    color: '#000',
  },
});

export default Header;
