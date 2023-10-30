import { Text, Pressable } from "react-native";

const Custombutton = ({
  title,
  subtitle,
  subtitlestyles,
  textstyles,
  styles,
  ...others
}) => {
  return (
    <Pressable {...others} className={`${styles}`}>
      <Text className={`${textstyles}`}>{title}</Text>
      <Text className={`${subtitlestyles}`}>{subtitle}</Text>
    </Pressable>
  );
};

export default Custombutton;
