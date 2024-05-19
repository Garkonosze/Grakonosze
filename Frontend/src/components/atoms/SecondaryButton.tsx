import React from "react";
import { Pressable, Text } from "react-native";
import primaryColors from "properties/styles/colors";
import { ButtonProps } from "properties/types/ButtonProps";
import { buttonStyle } from "properties/styles/buttonStyle";

const SecondaryButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { handleOnClick, title, inactive } = props;

  return (
    <Pressable
      disabled={inactive ? true : false}
      onPress={handleOnClick}
      style={[
        buttonStyle.buttonContainer,
        {
          backgroundColor: inactive
            ? primaryColors.lightGrey
            : primaryColors.middleBlue,
        },
      ]}
    >
      <Text style={[buttonStyle.buttonText]}>{title}</Text>
    </Pressable>
  );
};

export default SecondaryButton;
