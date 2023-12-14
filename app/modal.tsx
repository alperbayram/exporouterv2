import { View, Text } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/styles";

export default function Page() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>app/modal.tsx</Text>
      </View>
    </View>
  );
}
