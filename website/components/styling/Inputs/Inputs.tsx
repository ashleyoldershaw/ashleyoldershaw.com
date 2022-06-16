import { InputStyle } from "./Inputs.style";

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
