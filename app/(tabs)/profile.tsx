import { View, Text } from "react-native";
import { styles } from "../../styles/styles";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>app/(tabs)/profile.tsx</Text>
      </View>
      <Link href="/">
        <Text style={styles.linktitle}>logout</Text>
      </Link>
    </View>
  );
}
