import {Dimensions} from 'react-native';
import {colors} from '../colors';
import {fonts} from '../fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styleFile = {
  screenContainer: {
    flex: 1,
    position: 'relative',
  },
  startUpImage: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: windowHeight - 350,
    overflow: 'hidden',
    paddingTop: 60,
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
  },
  heading: {
    textAlign: 'center',
    fontFamily: fonts.SemiBold,
    fontSize: 30,
    color: colors.black,
  },
  subheading: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.lightGrey,
    marginBottom: 30,
  },
  lowerContainer: {
    width: windowWidth - 45,
    paddingVertical: 30,
    paddingHorizontal: 15,
    alignSelf: 'center',
  },
  socialIconContainer: {
    marginTop: 25,
  },
  socialIconArea: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.lightGrey,
    borderRadius: 50,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  inputField: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.lightGrey,
    marginBottom: 15,
  },
  lineThroughArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -35,
    marginRight: -35,
    marginBottom: 20,
  },
  lineThrough: {
    height: 1,
    width: 75,
    backgroundColor: colors.lightGrey,
  },
  lineThroughText: {
    color: colors.lightGrey,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
};
