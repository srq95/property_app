import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Button, LoginAs} from '../../components';
import {colors, fonts, IMG_StartUP, LogoLight, styleFile} from '../../res';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styleFile.screenContainer}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground source={IMG_StartUP} style={styleFile.startUpImage}>
        <Image source={LogoLight} style={styleFile.logo} />
      </ImageBackground>
      <View style={styleFile.lowerContainer}>
        <Text style={styleFile.heading}>Welcome To Home Id</Text>
        <Text style={styleFile.subheading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Text>
        <Button text="Login" />

        <View style={styles.registerArea}>
          <Text style={styles.registerLeftText}>Not A User Yet?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>

        <LoginAs />
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  registerArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerLeftText: {
    color: colors.lightGrey,
  },
  registerText: {
    paddingHorizontal: 5,
    color: colors.primary,
  },
});
