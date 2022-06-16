import { useWatch } from "react-hook-form";
import { BodyText } from "../TextStyles";
import { CustomRangeStyle, CustomRangeWrapper } from "./Range.style";

export const CustomRange = ({
  register,
  control,
  name,
  min = 0.0,
  max = 1.0,
  step = 0.01,
}) => {
  const value = useWatch({
    control,
    name,
  });

  return (
    <CustomRangeWrapper>
      <CustomRangeStyle
        type="range"
        min={min}
        max={max}
        step={step}
        {...register(name)}
      />
      <BodyText>{value}</BodyText>
    </CustomRangeWrapper>
  );
};
