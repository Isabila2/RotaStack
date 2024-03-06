import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
{
  /* Chamando a página de Login */
}
import Login from "./src/pages/Login";
import Home from "./src/pages/home";
{
  /* Chamando Styles */
}
import styles from "./src/styles/StyleSheet";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <Login />
        <Home />
      </View>
    </View>
  );
}
