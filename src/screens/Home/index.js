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
  TextInput,
  ScrollView,
} from 'react-native';
import {Button, LoginAs} from '../../components';
import {colors, IMG_StartUP, LogoLight, styleFile} from '../../res';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styleFile.screenContainer}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        source={IMG_StartUP}
        style={[styleFile.startUpImage, styles.startUpImage]}>
        <Image source={LogoLight} style={styleFile.logo} />
        <Text style={[styleFile.heading, styles.heading]}>Create Account</Text>
      </ImageBackground>
      <View style={[styleFile.lowerContainer, styles.lowerContainer]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.lowerContainerScroll}>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  startUpImage: {
    height: 250,
  },
  heading: {
    color: colors.white,
    marginTop: 55,
  },
  lowerContainerScroll: {
    height: windowHeight - 470,
  },
});
