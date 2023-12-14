import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/styles";

export default function Page() {
  const avatar1 = "https://avatars.githubusercontent.com/u/9664363?v=4";
  const avatar2 = "https://avatars.githubusercontent.com/u/43719324?v=4";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>users</Text>
      <View>
        <Text style={styles.subtitle}>app/users.tsx</Text>
        <Text style={styles.subtitle}>Users</Text>
        <View style={styles.screencontainer}>
          <Link
            href={{
              pathname: "/user/[id]",
              params: {
                id: "111",
                name: "bacon",
                company: "expo",
                image: avatar1,
              },
            }}
          >
            <View>
              <Image source={{ uri: avatar1 }} style={styles.image} />
            </View>
          </Link>
          <Link
            href={{
              pathname: "/user/[id]",
              params: {
                id: "222",
                name: "alper",
                company: "open to work",
                image: avatar2,
              },
            }}
          >
            <View>
              <Image source={{ uri: avatar2 }} style={styles.image} />
            </View>
          </Link>
        </View>
      </View>
      <Link href="/">
        <Text style={styles.linktitle}>index</Text>
      </Link>
    </View>
  );
}
