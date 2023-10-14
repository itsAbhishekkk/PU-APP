import { createContext, React } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Parent from "./Parent";
import DrawerComponent from "../../components/Role.js/Drawer/DrawerComponent";
import Drawer from "../../components/Role.js/Drawer/Drawer";

const Draw = createDrawerNavigator();
export const roleContext = createContext();

const AssistantScreen = ({
  name = "Saurav Tiwari",
  dept = "Water Department",
  role = "Assistant",
}) => {
  return (
    <roleContext.Provider value={{ name, dept, role }}>
      <Draw.Navigator
        drawerContent={() => <DrawerComponent Component={Drawer} />}
      >
        <Draw.Screen
          name="Parent"
          options={{ headerShown: false }}
          component={Parent}
          initialParams={{ name, dept, role }}
        />
      </Draw.Navigator>
    </roleContext.Provider>
  );
};

export default AssistantScreen;
