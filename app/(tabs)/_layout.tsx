import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="user"
        options={{
          headerShown: false,
          tabBarLabel: "Users",
          headerTitle: "Users",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          headerTitle: "Settings",
          tabBarLabel: "settings",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          headerTitle: "Profile",
          tabBarLabel: "profile",
        }}
      />
    </Tabs>
  );
}
