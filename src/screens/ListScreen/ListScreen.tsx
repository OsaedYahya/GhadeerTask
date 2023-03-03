import {FlatList, Text, TouchableOpacity} from 'react-native';
import {memo, useCallback, useLayoutEffect} from "react";
import {Post} from "../../components/ListScreen";
import Context from "../../context/context";

const ListScreen = ({navigation}) => {
  const keyExtractor = useCallback((item) => item?.id, []);

  const handleNavigateToForm = (item) => {
    navigation.navigate("FormScreen", {
      item
    })
  }

  const renderItem = useCallback(({item}) => {
    return <Post item={item} onPress={handleNavigateToForm}/>
  }, [])

  const handleNavigateToAddPost = () => {
    navigation.navigate("FormScreen")
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={handleNavigateToAddPost}>
            <Text style={{fontSize: 40}}>
              +
            </Text>
          </TouchableOpacity>
        );
      }
    });
  }, [])

  return (
    <Context.Consumer>
      {context => {
        return <FlatList
          contentContainerStyle={{paddingHorizontal: 10, paddingTop: 6}}
          data={context?.posts}
          keyExtractor={keyExtractor}
          renderItem={renderItem}/>
      }}
    </Context.Consumer>
  );
}

export default memo(ListScreen)
