import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";

import CreateAccount from "./src/components/CreateAccount";
import AssistantScreen from "./src/screens/Assistant/AssistantScreen";
("./src/screens/Assistant/AssistantScreen");
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./src/components/HomePage";
import LoginForm from "./src/components/LoginForm";
import Login from "./src/screens/Login";
import RegisterComplaint from "./src/screens/User/RegisterComplaint";
import Header from "./src/components/ComplaintPage/Header";
import ComplaintPage from "./src/components/ComplaintPage/ComplaintPage";
import User from "./src/screens/User/User";
import UserScreen from "./src/screens/User/UserScreen";
import ComplaintAssign from "./src/components/ComplaintAssign/ComplaintAssign";

const Stack = createStackNavigator();

const NavigatorComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Client"
        component={UserScreen}
        options={{headerShown:false}}/> */}
        <Stack.Screen
          name="HomePage"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ComplaintAssign"
          component={ComplaintAssign}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterComplaint"
          component={RegisterComplaint}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  // const [loggedin, setLoggedIn] = useState(false);
  // if (loggedin) {
  //   return <NavigatorComponent />;
  // }
  // return <Login setLoggedIn={setLoggedIn} />;
  // return <ComplaintAssign complaintIds={["#123", "#345"]} />;
  // return <Home />;
  // return <AssistantScreen />;
  // return <Filter />;
  // return <CreateAccount />;
  // return <DropDownSelector />;
  return <NavigatorComponent />;
  // return <UserScreen/>

  // return <ComplaintPage />;
  // return <RegisterComplaint />;
}