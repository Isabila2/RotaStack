import { StatusBar } from "expo-status-bar";
import { View, ImageBackground } from "react-native";

{
  /* Chamando Background */
}
import LoginBackground from "../components/LoginImageBackground";

{
  /* Chamando Styles */
}
import styles from "../styles/StyleSheet";

export default function Login() {
  return (
    <View style={styles.container}>
      {/* Chamando tudo o que está na página de LoginBackGround */}
      <LoginBackground />
    </View>
  );
}
