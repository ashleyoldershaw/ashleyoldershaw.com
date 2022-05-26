import { useRouter } from "next/router";
import { NavButton } from "./styling/Buttons";
import { BodyText, PageSubtitle, PageTitle } from "./styling/TextStyles";

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
