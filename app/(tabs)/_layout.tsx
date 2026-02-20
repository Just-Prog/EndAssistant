import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "首页",
        }}
      />
      <Tabs.Screen
        name="record"
        options={{
          headerShown: false,
          title: "记录",
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          headerShown: false,
          title: "我的",
        }}
      />
    </Tabs>
  );
}
