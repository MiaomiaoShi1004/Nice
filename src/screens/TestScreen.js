import React from "react";
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';
import TitleText from "../components/TitleText";

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <TitleText color={COLORS.BASE_BLACK}>This is a black title.</TitleText>
      <TitleText color={COLORS.BASE_YELLOW} style={styles.secondTitle}>This is a yellow title.</TitleText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondTitle: {
    marginTop: 0
  },
});

export default TestScreen;