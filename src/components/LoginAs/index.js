import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { colors, styleFile } from "../../res";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginAs = () => {
  return (
    <View style={styleFile.socialIconContainer}>
      <View style={styleFile.lineThroughArea}>
        <View style={styleFile.lineThrough}></View>
        <View>
          <Text style={styleFile.lineThroughText}>Or Login Using</Text>
        </View>
        <View style={styleFile.lineThrough}></View>
      </View>
      <View style={styleFile.socialIconArea}>
        <TouchableOpacity style={styleFile.socialIcon}>
          <FontAwesome
            name="facebook-f"
            size={20}
            color={colors.lightGrey}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styleFile.socialIcon}>
          <FontAwesome name="google" size={20} color={colors.lightGrey} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginAs;