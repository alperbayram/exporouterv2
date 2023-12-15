import { Stack, router } from "expo-router";
import { Button } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="users"
        options={{
          headerTitle: "Users",
          headerRight: () => (
            <Button title="modal" onPress={() => router.push("/modal")} />
          ),
        }}
      />
    </Stack>
  );
}
