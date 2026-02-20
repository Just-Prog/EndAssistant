import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "dodgerblue" }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "首页",
          tabBarIcon: (props) => (
            <Ionicons
              name="home-outline"
              size={24}
              color={props.focused ? "dodgerblue" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="record"
        options={{
          headerShown: false,
          title: "记录",
          tabBarIcon: (props) => (
            <Ionicons
              name="bar-chart-outline"
              size={24}
              color={props.focused ? "dodgerblue" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          headerShown: false,
          title: "我的",
          tabBarIcon: (props) => (
            <Ionicons
              name="person-circle-outline"
              size={24}
              color={props.focused ? "dodgerblue" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
