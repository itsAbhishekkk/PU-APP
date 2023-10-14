import { useEffect, useState, createContext } from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./Header";
import Body from "./Body";
import Gallery from "./Gallery/Gallery";

export const ComplaintContext = createContext();

const Stack = createStackNavigator();
const ComplaintPage = () => {
  const [image, setImage] = useState([]);

  return (
    <ComplaintContext.Provider value={{ image, setImage }}>
      <NavigationContainer>
        <View style={styles.container}>
          <Header
            text={"Water tap not working"}
            date={new Date(Date.now())}
            st={styles.header}
          />

          <Stack.Navigator>
            <Stack.Screen
              name={"Body"}
              component={Body}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={"Gallery"}
              component={Gallery}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </ComplaintContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: "15%",
  },
});
export default ComplaintPage;
