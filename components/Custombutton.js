import { Text, Pressable } from "react-native";

const Custombutton = ({ title, textstyles, styles, ...others }) => {
  return (
    <Pressable {...others} className={`${styles}`}>
      <Text className={`${textstyles}`}>{title}</Text>
    </Pressable>
  );
};

export default Custombutton;
