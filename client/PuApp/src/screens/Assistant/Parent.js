import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Assistant";
import ComplaintAssign from "../../components/ComplaintAssign/ComplaintAssign";
import { useRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

const Parent = () => {
  const route = useRoute();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        // initialParams={{ ...route.params }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Complaint Assign"
        component={ComplaintAssign}
        // initialParams={{ complaintsList }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Parent;
