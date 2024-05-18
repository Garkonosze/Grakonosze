import React from "react";
import { Pressable, Text } from "react-native";
import primaryColors from "properties/styles/colors";
import { ButtonProps } from "properties/types/ButtonProps";
import { buttonStyle } from "properties/styles/buttonStyle";

const PrimaryButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { handleOnClick, title } = props;

  return (
    <Pressable
      onPress={handleOnClick}
      style={[
        buttonStyle.buttonContainer,
        { backgroundColor: primaryColors.lightBlue },
      ]}
    >
      <Text style={[buttonStyle.buttonText]}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
