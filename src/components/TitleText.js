import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';


const TitleText = ({ children, color = 'black', style }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      try {
        await Font.loadAsync({
          'castoro-regular': require('../assets/fonts/Castoro-Regular.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.log("Error loading font", error);
      }
    };

    loadFont();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <Text style={[styles.text, { color }, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'castoro-regular',
    fontSize: 30,
    marginLeft: 80,
    marginRight: 80,
  },
});

export default TitleText;

