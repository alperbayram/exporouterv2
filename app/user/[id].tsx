import { View, Text, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router, usePathname } from "expo-router";
import { styles } from "../../styles/styles";

export default function Page() {
  const pathname = usePathname();
  const local = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>user</Text>
      <View style={styles.separator} />
      <Image source={{ uri: local.image }} style={styles.image} />
      <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <Text style={styles.subtitle}>id: {local.id}</Text>
        <Text style={styles.subtitle}>Name: {local.name}</Text>
        <Text style={styles.subtitle}>Company: {local.company}</Text>
        <Text style={styles.subtitle}>pathname: app{pathname}</Text>
      </View>
      <View style={styles.separator} />
      <TouchableOpacity onPress={router.back}>
        <Text style={styles.linktitle}>{"< "}back</Text>
      </TouchableOpacity>
    </View>
  );
}
