import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../../../assets/css";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
const AssignButton = ({ selectedRole, complaintsList, screen }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[bodyStyles.assignButton]}
      disabled={selectedRole[0] == "Completed" ? true : false}
      onPress={() => {
        // setIsAssigning(true);
        // console.log(complaintsList, "hello");
        console.log(screen);
        switch(screen){
          case 'role': 
        navigation.navigate("ComplaintAssign", { complaintsList });
        case 'user': navigation.navigate("RegisterComplaint");
        }
      }}
    >
      <Text
        style={{
          fontSize: responsiveFontSize(2),
          color: "white",
          fontWeight: "500",
          alignSelf: "center",
        }}
      >
        {
          screen==='role'?"Assign":"Register Complaint"
        }
      </Text>
    </TouchableOpacity>
  );
};

const bodyStyles = StyleSheet.create({
  assignButton: {
    backgroundColor: colors.color,
    justifyContent: "center",
    alignContent: "center",
    paddingTop: responsiveHeight(1),
    paddingBottom: responsiveHeight(1),
    borderRadius: responsiveWidth(3),
  },
});

export default AssignButton;
