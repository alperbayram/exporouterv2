import { View, Text } from "react-native";
import { Link } from "expo-router";
import { styles } from "../../styles/styles";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>settings</Text>
      <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <Text style={styles.subtitle}>app/settings/index.tsx</Text>
      </View>
      <Link href="/">
        <Text style={styles.linktitle}>index</Text>
      </Link>
    </View>
  );
}