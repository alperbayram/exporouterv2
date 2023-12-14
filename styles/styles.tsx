import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screencontainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 15,
    fontWeight: "bold",
  },
  linktitle: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "cover",
  },
});
