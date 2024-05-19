import { InputProps } from "../../properties/types/InputProps";
import primaryColors from "../../properties/styles/colors";
import {
  borderRadiusSize,
  fontSize,
  paddingSize,
} from "../../properties/styles/vars";
import React, { useEffect } from "react";
import { StyleSheet, TextInput } from "react-native";

const TextInputPersonalized: React.FC<InputProps> = (props: InputProps) => {
  const { placeholder, maxLength, getInputElement } = props;
  const [text, onChangeText] = React.useState("");

  useEffect(() => {
    getInputElement(text);
  }, [text]);

  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      padding: paddingSize.small,
      borderRadius: borderRadiusSize.medium,
      fontSize: fontSize.baseMobileFontSize,
      color: primaryColors.darkGrey,
      borderColor: primaryColors.darkBlue,
    },
  });

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        placeholderTextColor={primaryColors.lightGrey}
        maxLength={maxLength}
      />
    </>
  );
};

export default TextInputPersonalized;
