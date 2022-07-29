import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../res/";
import { fonts } from "../../res";

const Button = ({onPress, text, bgColor}) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: bgColor ? bgColor : colors.darkGrey} ]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  container: {backgroundColor: colors.darkGrey, height: 50, width: '100%', borderRadius: 50, justifyContent: 'center', alignSelf: 'center'},
  text: {fontSize: 18, fontFamily: fonts.Medium, color: colors.white, textAlign: 'center'}
});