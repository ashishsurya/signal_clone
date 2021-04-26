import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { db } from '../firebase';

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a new Chat',
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection('chats')
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder='Enter a Chat Name'
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={<AntDesign name='wechat' size={24} color='black' />}
      />
      <Button title='Create new Chat' onPress={createChat} />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 30,
    height: '100%',
  },
});
