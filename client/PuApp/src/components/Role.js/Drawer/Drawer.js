import { ScrollView, StyleSheet } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import DrawerTab from "./DrawerTab";

const Drawer = () => {
  return (
    <ScrollView style={styles.listStyle}>
      <DrawerTab title={"Edit Profile"} component="" iconName={"edit"} />
      <DrawerTab title={"Add Emoloyees"} iconName={"user-plus"} component={'AddEmployee'} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    paddingTop: responsiveHeight(10),
    backgroundColor: "#fae8d7",
  },
});

export default Drawer;
