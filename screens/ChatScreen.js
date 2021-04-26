import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ChatScreen = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.chatName,
      headerTitleALign: 'left',
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name='arrow-back' size={24} color='white' />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.7}>
            <FontAwesome name='video-camera' size={24} color='white' />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <FontAwesome name='phone' size={24} color='white' />
          </TouchableOpacity>
        </View>
      ),
    });
  });
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <Text>{route.params.chatName}</Text>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
