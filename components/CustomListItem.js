import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = ({ id, chatName, enterChat }) => {
  console.log(id, chatName);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => enterChat(id, chatName)}
    >
      <ListItem key={id} bottomDivider={true}>
        <Avatar
          rounded
          source={{
            uri:
              'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg',
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: '700' }}>
            {chatName}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus nulla qui fugit officiis, rerum explicabo ducimus
            autem perferendis, corporis rem reprehenderit natus atque unde nemo
            porro iure ut sunt minima!
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
