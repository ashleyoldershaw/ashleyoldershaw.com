import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { HomepageSectionStyle } from "../HomePage/HomePage.style";
import { NavButton } from "../styling/Buttons/Buttons";
import { CustomTextArea, CustomTextInput } from "../styling/Inputs/Inputs";
import { BodyText, SubSectionTitle } from "../styling/TextStyles";

export const CheckInWidget = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const [checkedIn, setCheckedIn] = useState(false);

  const onSubmit = (data) => {
    axios
      .post("/api/check-in", data)
      .then(() => {
        setCheckedIn(true);
        reset();
      })
      .catch(() => {});
  };

  if (checkedIn) {
    return (
      <HomepageSectionStyle>
        <SubSectionTitle>{`Thanks!`}</SubSectionTitle>
        <BodyText>{`Check your inbox for a confirmation email!`}</BodyText>
      </HomepageSectionStyle>
    );
  }

  return (
    <HomepageSectionStyle>
      <SubSectionTitle>Say hi!</SubSectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <BodyText>Pop in your name and email and leave a message!</BodyText>
          <CustomTextInput
            placeholder="Email"
            register={register}
            validation={{
              required: "required",
            }}
            name="email"
            type="email"
          />
          <CustomTextInput
            placeholder="Name"
            register={register}
            name="name"
            validation={{
              required: "required",
            }}
          />
          <CustomTextArea
            placeholder="Message"
            register={register}
            validation={{
              required: "required",
            }}
            name="message"
          />
        </div>
        <NavButton text="Submit" type="submit" />
      </form>
    </HomepageSectionStyle>
  );
};
