import { View, Text, Image } from "react-native";
import { useLocalSearchParams, Stack, usePathname } from "expo-router";
import { styles } from "../../../styles/styles";

export default function Page() {
  const pathname = usePathname();
  const local = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerTitle: `user/${local.id}` }} />
      <Text style={styles.title}>user</Text>
      <Image source={{ uri: local.image }} style={styles.image} />
      <View>
        <Text style={styles.subtitle}>id: {local.id}</Text>
        <Text style={styles.subtitle}>Name: {local.name}</Text>
        <Text style={styles.subtitle}>Company: {local.company}</Text>
        <Text style={styles.subtitle}>pathname: app{pathname}</Text>
      </View>
    </View>
  );
}
