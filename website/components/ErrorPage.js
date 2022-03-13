import { NavButton } from "./styling/Buttons";
import {
  BodyText,
  PageSubtitle,
  PageTitle,
  SectionTitle,
} from "./styling/TextStyles";
import { useRouter } from "next/router";

export const ErrorPage = ({ info }) => {
  const { push } = useRouter();
  return (
    <>
      <PageTitle>{info.title}</PageTitle>
      <PageSubtitle>{info.subtitle}</PageSubtitle>
      <BodyText>{info.extra_info}</BodyText>
      <NavButton onClick={() => push("/")} text={"Head back"} />
    </>
  );
};
