import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import tasksData from "./tasksData";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import Header from "../../components/Role.js/Header/Header";
import Body from "../../components/Role.js/Body/Body";
import { userContext } from "./UserScreen";

const User = () => {
  const route = useRoute();
  const screen = route.params.screen;
  const {dept, _id} = useContext(userContext);
  const [complaintsList, setComplaintsList] = useState([]);
  const [tasks, setTasks] = useState(tasksData);
  console.log(screen);
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setComplaintsList([]);
      };
    }, [])
  );

  const uri = "http://192.168.133.67:4000/task/getAllTaskByUser";
  // const id = "64dc907f480fa2b4e93931bc"
  useEffect(() => {
    const handle = async () => {
      console.log('here');
      try {
        const response = await fetch(uri, {
          method: "POST",
          body: JSON.stringify({id: _id, dept}),
          // body: {id: _id, dept},
          headers: { "Content-Type": "application/json" },
        });
        // console.log(res);
        const res = await response.json();
        if (res.ok) {
            console.log(res.data);
            let completed=[], pending=[], ongoing=[];
            res.data.forEach((item)=>{
                const temp  = {id: item._id, description: item.details};
                switch(item.status){
                    case "Completed":
                    completed.push(temp);
                    break;
                    case "Pending": 
                    pending.push(temp);
                    break;
                    case "Ongoing": 
                    ongoing.push(temp);
                    break;

                }
            })
            // console.log(completed, pending, ongoing)
            setTasks({completed, pending, ongoing});
            // console.log(tasks)
        } else {
          throw Error("failed");
        }
      } catch (err) {
        alert(err);
      }
    };
    handle();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Body
        complaintsList={complaintsList}
        setComplaintsList={setComplaintsList}
        tasks={tasks}
        data={data}
        screen={screen}
      />
    </SafeAreaView>
  );
  let completedCount, pendingCount;
  tasks.forEach((item) => {
    if (item.status === "completed") completedCount++;
    else if (item.status === "pending") pendingCount++;
  });
  const data = [
    {
      name: "Completed",
      value: completedCount,
    },
    { name: "Pending", value: pendingCount },
    { name: "Ongoing", value: "-" },
  ];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default User;
