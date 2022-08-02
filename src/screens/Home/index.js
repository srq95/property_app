import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  StatusBar,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import {colors, LogoWhite, styleFile} from '../../res';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Picker } from '@react-native-picker/picker';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {

  const [tabSelected, setTabSelected] = useState(0);
  
  const searchTabs = ['Buy', 'Rent'];

  return (
    <SafeAreaView style={styleFile.screenContainer}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <View style={[styleFile.startUpImage, styles.startUpImage]}>
        <Image source={LogoWhite} style={[styleFile.logo, styles.logo]} />

        <View style={styles.searchTabArea}>
          {searchTabs.map((item, key) => {

            const tabActive = tabSelected === key ? styles.searchTabBoxActive : '';
            
            return (
              <Pressable
                style={[styles.searchTabBox, tabActive]}
                key={key}
                onPress={() => setTabSelected(key)}>
                <Text>{item}</Text>
              </Pressable>
            );
          })}
        </View>
        <View style={styles.searchAreaContainer}>
          <View style={styles.searchArea}>
            <FontAwesome name="search" style={styles.searchIcon}/>
            <TextInput placeholder='Search' style={styles.searchField} />
          </View>
          <View>
            
          </View>
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
    alignItems: 'flex-start',
    paddingHorizontal: 30,
  },
  logo: {
    alignSelf: 'center',
  },
  heading: {
    color: colors.white,
    marginTop: 55,
  },
  lowerContainerScroll: {
    height: windowHeight - 270,
  },
  searchTabArea: {
    marginTop: 30,
    backgroundColor: 'rgba(255,255,255,.5)',
    padding: 5,
    borderRadius: 50,
    flexDirection: 'row',
  },
  searchTabBox: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50,
  },
  searchTabBoxActive: {
    backgroundColor: colors.white,
  },
  searchAreaContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  searchArea: {
    position: 'relative',
    flexDirection: "row",
  },
  searchField: {
    borderRadius: 50,
    backgroundColor: colors.white,
    width: "100%",
    paddingLeft: 35,
    paddingRight: 15,
  },
  searchIcon: {
    position: 'absolute',
    zIndex: 1,
    top: 17,
    left: 15,
  }
});
