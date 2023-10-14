import { createContext, React } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerComponent from "../../components/Role.js/Drawer/DrawerComponent";
import Drawer from "../../components/Role.js/Drawer/Drawer";
import User from "./User";
import { useRoute } from "@react-navigation/native";
import AddEmployee from "./AddEmployee";

const Draw = createDrawerNavigator();
export const userContext = createContext();

const UserScreen = () => {
  const route = useRoute();
  const {role, name, dept, _id} = route.params;
  console.log(name, dept, role);
  return (
    <userContext.Provider value={{ name, role, _id }}>
      <Draw.Navigator
        drawerContent={() => <DrawerComponent Component={Drawer} />}
      >
        <Draw.Screen
          name="User"
          options={{ headerShown: false }}
          component={User}
          initialParams={{ screen: "user"}}
        />
        <Draw.Screen 
          name="AddEmployee"
          options={{headerShown: false}}
          component={AddEmployee}
        />
      </Draw.Navigator>
    </userContext.Provider>
  );
};

export default UserScreen;
