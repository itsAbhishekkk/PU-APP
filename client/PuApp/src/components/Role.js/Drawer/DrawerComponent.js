import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";

import DrawerTab from "./DrawerTab";

const DrawerComponent = ({ Component }) => {
  return (
    <View style={styles.container}>
      <Component />
      <DrawerTab title={"Log Out"} iconName={"log-out"} />
    </View>
  );
};

// const Tab = ({ title, iconName }) => {
//   return (
//     <TouchableOpacity style={styles.buttonStyle}>
//       <View
//         style={[
//           styles.featureWrapper,
//           { flexGrow: 1, paddingLeft: responsiveWidth(2) },
//         ]}
//       >
//         <Feather name={iconName} size={responsiveWidth(6)} />
//       </View>
//       <View style={[styles.featureWrapper, { flex: 1, flexGrow: 5 }]}>
//         <Text style={styles.buttonText}>{title}</Text>
//       </View>
//       <View style={[styles.featureWrapper, { flexGrow: 1 }]}>
//         <Feather name="chevron-right" size={responsiveWidth(4)} />
//       </View>
//     </TouchableOpacity>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default DrawerComponent;
