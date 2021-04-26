import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
import { auth } from '../firebase';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Signal',
      headerStyle: { backgroundColor: '#fff' },
      headerTitleStyle: { color: 'black', alignItems: 'center' },
      headerTintColor: 'black',
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.7}>
            <AntDesign name='camerao' size={24} color='black' />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <SimpleLineIcons name='pencil' size={24} color='black' />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace('Login');
    });
  };
  return (
    <SafeAreaView>
      <StatusBar style='dark' />
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({});
