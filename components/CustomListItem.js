import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <ListItem>
        <Avatar
          rounded
          source={{
            uri:
              "https://lh3.googleusercontent.com/proxy/56NLsnrA1YUHbhw7s9v84KsabPTLx34UH7aFwSsI2vjhQaklVd20A_gF_eqZw0JdS0Hb7aDxaoWd5Hnncu8MfDo5I6AqaVLogcS9Iq-rtcaF0XcZ--TKZikgcc90",
          }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ fontWeight: "700" }}>
            YouTube Chat
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
