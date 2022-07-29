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
import {colors, LogoWhite, styleFile} from '../../res';

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
      <View style={[styleFile.startUpImage, styles.startUpImage]}>
        <Image source={LogoWhite} style={styleFile.logo} />
        <View>
          
        </View>
      </View>
      <View style={[styleFile.lowerContainer, styles.lowerContainer]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.lowerContainerScroll}></ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  startUpImage: {
    height: 250,
    backgroundColor: colors.primary,
  },
  heading: {
    color: colors.white,
    marginTop: 55,
  },
  lowerContainerScroll: {
    height: windowHeight - 270,
  },
});
