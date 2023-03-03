import {Text, TouchableOpacity, View} from "react-native";
import styles from "./Post.style";
import {memo} from "react";

const Post = (props) => {
  const {item, onPress: onPressCb} = props;

  const {containerStyle, titleStyle} = styles;

  return <View style={containerStyle}>
    <TouchableOpacity onPress={() => onPressCb(item)}>
      <Text style={titleStyle}>{item?.title}</Text>
      <Text>{item?.body}</Text>
    </TouchableOpacity>
  </View>
}

export default memo(Post)
