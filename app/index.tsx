import { View, Text } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/styles";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>index</Text>
      <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <Text style={styles.subtitle}>app/index.tsx</Text>
      </View>
      <View style={styles.screencontainer}>
        <Link href="/users">
          <Text style={styles.linktitle}>users</Text>
        </Link>
        <Link href="/settings">
          <Text style={styles.linktitle}>settings</Text>
        </Link>
      </View>
    </View>
  );
}
