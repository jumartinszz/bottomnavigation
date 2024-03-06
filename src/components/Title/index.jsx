import { View, Text } from "react-native";
import styles from "./style;"

const Title = ({ texto }) => {
    return (
        <View styles={styles.container}>
            <Text styles={styles.title}>{texto}</Text>
        </View>
    );
};

export default Title;