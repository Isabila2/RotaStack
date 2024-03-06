import { View, Button } from "react-native";
import styles from "../styles/StyleSheet";

export default function LoginButton() {
  pressButton = () => {
    alert("O botão não funciona ainda...");
  };

  return (
    <View style={styles.container}>
      {/* Botão de 'Click here' */}
      <View style={{ margin: 20, height: 50 }}>
        <Button onPress={pressButton} title="Click here" color="black" />
      </View>
    </View>
  );
}
