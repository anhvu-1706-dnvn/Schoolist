import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {BaseColor, useTheme, useFont} from '@config';
import {useTranslation} from 'react-i18next';
import {Icon} from '@components';
/* Stack Screen */
import Walkthrough from '@screens/Walkthrough';
import SignUp from '@screens/SignUp';
import SignIn from '@screens/SignIn';
/* Bottom Screen */
import Home from '@screens/Home';
import Booking from '@screens/Booking';
import Messenger from '@screens/Messenger';
import Post from '@screens/Post';
import Profile from '@screens/Profile';
import Search from '@screens/Search';
import Setting from '@screens/Setting';
import ChangeLanguage from '@screens/ChangeLanguage';
import HotelDetail from '@screens/HotelDetail';
import TopSchool from '@screens/TopSchool';
import TourDetail from '@screens/TourDetail';
import PostDetail from '@screens/PostDetail';

// import AsyncStorage from '@react-native-community/async-storage';
import SchoolDetail from '@screens/SchoolDetail';
import ListSchool from '@screens/ListSchool';
import SearchHistory from '@screens/SearchHistory';
import ReviewSchool from '@screens/ReviewSchool';
import Map from '@screens/ListSchool/map';
import CriteriaComments from '@screens/CriteriaComments';
import UpdateReviewSchool from '../screens/UpdateReviewSchool';
const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Main() {
  return (
    <MainStack.Navigator
      headerMode="none"
      initialRouteName="BottomTabNavigator">
      <MainStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
      <MainStack.Screen name="SignUp" component={SignUp} />
      <MainStack.Screen name="SignIn" component={SignIn} />
      <MainStack.Screen name="Search" component={Search} />
      <MainStack.Screen name="Setting" component={Setting} />
      <MainStack.Screen name="HotelDetail" component={HotelDetail} />
      <MainStack.Screen name="TopSchool" component={TopSchool} />
      <MainStack.Screen name="ChangeLanguage" component={ChangeLanguage} />
      <MainStack.Screen name="TourDetail" component={TourDetail} />
      <MainStack.Screen name="SchoolDetail" component={SchoolDetail} />
      <MainStack.Screen name="Map" component={Map} />
      <MainStack.Screen name="PostDetail" component={PostDetail} />
      <MainStack.Screen name="SearchHistory" component={SearchHistory} />
      <MainStack.Screen name="CriteriaComments" component={CriteriaComments} />

      <MainStack.Screen name="ReviewSchool" component={ReviewSchool} />
      <MainStack.Screen
        name="UpdateReviewSchool"
        component={UpdateReviewSchool}
      />
    </MainStack.Navigator>
  );
}
// function logCurrentStorage() {
//   AsyncStorage.getAllKeys((err, keys) => {
//     AsyncStorage.multiGet(keys, (error, stores) => {
//       stores.map((result, i, store) => {
//         console.log({[store[i][0]]: store[i][1]});
//         return true;
//       });
//     });
//   });
// }
// ****************************TAB NAVIGATOR ***************************************************
function BottomTabNavigator() {
  // console.log('BEFORE LOG STORAGE: ');
  //logCurrentStorage();

  const {t} = useTranslation();
  const {colors} = useTheme();
  const font = useFont();
  const auth = useSelector((state) => state.auth);
  //console.log('AUTH:', auth);
  const login = auth.isAuthenticated;
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      headerMode="none"
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.primary,
        inactiveTintColor: BaseColor.grayColor,
        style: {borderTopWidth: 1},
        labelStyle: {
          fontSize: 12,
          fontFamily: font,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: t('home'),
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="home" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={Map}
        options={{
          title: t('Map'),
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="map" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="ListSchool"
        component={ListSchool}
        options={{
          title: 'Universities',
          tabBarIcon: ({color}) => {
            return <Icon solid color={color} name="university" size={20} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Post"
        component={Post}
        options={{
          title: 'Posts',
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="copy" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={login ? Profile : Walkthrough}
        options={{
          title: t('account'),
          tabBarIcon: ({color}) => {
            return <Icon solid color={color} name="user-circle" size={20} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
