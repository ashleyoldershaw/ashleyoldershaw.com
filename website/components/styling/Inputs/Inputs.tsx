import { InputStyle, TextAreaStyle } from "./Inputs.style";

export const CustomTextInput = ({
  placeholder = "",
  register,
  validation = {},
  name,
  className = "",
  type = "text",
}) => {
  return (
    <InputStyle
      className={className}
      type={type}
      placeholder={placeholder}
      {...register(name, validation)}
    />
  );
};

export const CustomTextArea = ({
  placeholder = "",
  register,
  validation = {},
  name,
}) => {
  return (
    <TextAreaStyle placeholder={placeholder} {...register(name, validation)} />
  );
};
