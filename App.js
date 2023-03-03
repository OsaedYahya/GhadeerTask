import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ListScreen, FormScreen } from './src/screens'
import GlobalState from './src/context/globalState'

export default function App() {
  return (
    <GlobalState>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    </GlobalState>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListScreen" component={ListScreen} options={{
        title: "Post list"
      }} />
      <Stack.Screen name="FormScreen" component={FormScreen} options={{
        title: "Add new post"
      }}/>
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
