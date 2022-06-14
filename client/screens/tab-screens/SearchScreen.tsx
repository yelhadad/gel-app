import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import { StyleSheet } from "react-native";
import SearchBar from "../../components/SearchBar";

export default function SearchScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  return <SearchBar />;
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
