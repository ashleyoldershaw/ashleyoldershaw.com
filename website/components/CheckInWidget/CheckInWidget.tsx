import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CustomButton } from "../styling/Buttons/Buttons";
import { ContentSection } from "../styling/Display";
import { CustomTextArea, CustomTextInput } from "../styling/Inputs/Inputs";
import { BodyText, SectionTitle, SubSectionTitle } from "../styling/TextStyles";

export const CheckInWidget = () => {
  const { register, handleSubmit, formState, reset } = useForm();
  const [checkedIn, setCheckedIn] = useState(false);

  const onSubmit = (data) => {
    setCheckedIn(true);
    axios
      .post("/api/check-in", data)
      .then(() => {
        reset();
      })
      .catch(() => {
        setCheckedIn(false);
      });
  };

  if (checkedIn) {
    return (
      <ContentSection>
        <SubSectionTitle>{`Thanks!`}</SubSectionTitle>
        <BodyText>{`Check your inbox for a confirmation email!`}</BodyText>
      </ContentSection>
    );
  }

  return (
    <ContentSection>
      <SectionTitle>Say hi!</SectionTitle>
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
        <CustomButton text="Submit" type="submit" />
      </form>
    </ContentSection>
  );
};
