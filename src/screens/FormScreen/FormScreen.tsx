import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useContext, useLayoutEffect, useMemo, useState} from "react";
import styles from "./FormScreen.style";
import Context from "../../context/context";

export default function FormScreen({navigation, route}) {
  const {params} = route;
  const {item = {}} = params || {};
  const {id = 0, title: itemTitle = "", body: itemBody = ""} = item;

  const context = useContext(Context);
  const [title, setTitle] = useState(itemTitle);
  const [body, setBody] = useState(itemBody)

  const {containerStyle, titleStyle, bodyStyle, labelStyle, buttonStyle, buttonTextStyle} = styles

  const isEdit = useMemo(() => !!params, [])

  useLayoutEffect(() => {
    if (!params) {
      return;
    }
    navigation.setOptions({
      title: "Update post"
    });
  }, [])

  const handleButtonPress = () => {
    isEdit ? context?.updatePost({
        id,
        title,
        body
      }) :
      context?.addNewPost({
      id: context?.posts?.length + 1,
      title,
      body
    })
    navigation.goBack();
  }
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        Title
      </Text>
      <TextInput
        style={titleStyle}
        placeholder={"Title"}
        onChangeText={setTitle}
        value={title}/>
      <Text style={labelStyle}>
        Body
      </Text>
      <TextInput
        multiline
        numberOfLines={10}
        style={bodyStyle}
        placeholder={"Body"}
        onChangeText={setBody}
        value={body}/>
      <Context.Consumer>
        {context => <TouchableOpacity onPress={handleButtonPress}
                                      style={buttonStyle}>
          <Text style={buttonTextStyle}>{isEdit ? "Update" : "Add"}</Text>
        </TouchableOpacity>}
      </Context.Consumer>
    </View>
  );
}
