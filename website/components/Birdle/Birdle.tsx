import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { urlFor } from "../sanity";
import { CustomButton } from "../styling/Buttons/Buttons";
import {
  ContentSection,
  PageTitleSection,
  TextBasedWidth,
} from "../styling/Display";
import { CustomTextInput } from "../styling/Inputs/Inputs";
import { BodyText, PageTitle } from "../styling/TextStyles";
import { SmartLink } from "../utility/SmartLink";
import { BirdDisplayStyle, BirdGuesserStyle, BirdImage } from "./Birdle.style";

const BirdDisplay = ({ bird }) => {
  return (
    <BirdDisplayStyle>
      <BirdImage src={urlFor(bird.image).url()} alt={"Sorry, no clues!"} />
    </BirdDisplayStyle>
  );
};

const max_guesses = 6;
export const removeBlanks = (text) => text.replace(/\s+/g, " ").trim();

const getShareMessage = (guesses) => {
  return `Birdle!
${guesses > max_guesses ? "X" : guesses}/${max_guesses}
Think you know birds? Guess today's Birdle!
https://ashleyoldershaw.com/games/birdle`;
};

const getHelperMessage = (guess, options, message) => {
  if (guess.length < 3) return null;

  const possible_birds = options.filter((option) => {
    const lower_option = option.toLowerCase();
    const lower_guess = guess.toLowerCase();

    return (
      lower_option !== lower_guess &&
      (lower_option.includes(lower_guess) || lower_guess.includes(lower_option))
    );
  });
  if (possible_birds.length === 0) return null;
  return (
    <div>
      <BodyText>{message}</BodyText>
      <div>
        {possible_birds.map((bird, i) => (
          <BodyText key={i}>{bird}</BodyText>
        ))}
      </div>
    </div>
  );
};

export const hasWon = (guess, answer) => {
  return (
    removeBlanks(guess.toLowerCase()) === removeBlanks(answer.toLowerCase())
  );
};

const BirdGuesser = ({ options, answer, birdle, charity }) => {
  const [guesses, setGuesses] = useState(1);
  const [won, setWon] = useState(false);
  const [shareClicked, setShareClicked] = useState(false);
  const [helperMessage, setHelperMessage] = useState(null);
  const [badGuessMessage, setBadGuessMessage] = useState(null);
  const [shake, setShake] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = ({ guess }, e) => {
    e.preventDefault();
    if (hasWon(guess, answer)) {
      setWon(true);
    } else {
      setGuesses(guesses + 1);
      setHelperMessage(getHelperMessage(guess, options, birdle.helper_message));
      setBadGuessMessage(<BodyText>{birdle.bad_guess_message}</BodyText>);
      setShake(true);
      setTimeout(() => setShake(false), 1000);
    }
    reset();
  };

  const charity_button = (
    <SmartLink href={charity.url}>
      <CustomButton text={`${birdle.charity_prelude} ${charity.name}`} />
    </SmartLink>
  );
  const share_button = (
    <CustomButton
      text={shareClicked ? "Copied to clipboard" : birdle.share_button}
      onClick={() => {
        setShareClicked(true);
        navigator.clipboard.writeText(getShareMessage(guesses));
      }}
    />
  );

  const dedication = <BodyText>{birdle.dedication}</BodyText>;

  if (won) {
    return (
      <BirdGuesserStyle>
        <BodyText>{birdle.win_message}</BodyText>
        {share_button}
        {charity_button}
        {dedication}
      </BirdGuesserStyle>
    );
  }

  if (guesses > max_guesses) {
    return (
      <BirdGuesserStyle>
        <BodyText>
          {birdle.lose_prelude} {answer}.
        </BodyText>
        {share_button}
        {charity_button}
        {dedication}
      </BirdGuesserStyle>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Head>
        <title>{birdle.title}</title>
      </Head>
      <BirdGuesserStyle>
        <BodyText>
          Guess {guesses} of {max_guesses}
        </BodyText>
        {badGuessMessage}
        {helperMessage}
        <CustomTextInput
          className={shake ? `shake` : null}
          register={register}
          placeholder={birdle.placeholder}
          validation={{ required: true, maxLength: 80 }}
          name="guess"
        />
        <CustomButton text={birdle.button_text} type="submit"></CustomButton>
      </BirdGuesserStyle>
    </form>
  );
};

const getTodaysItem = (items, time) => {
  var fullDaysSinceEpoch = Math.floor(time / 8.64e7);
  return items[fullDaysSinceEpoch % items.length];
};

export const BirdlePage = ({ birdle, time }) => {
  const todays_bird = getTodaysItem(birdle.birds, time);
  const todays_charity = getTodaysItem(birdle.charities, time);

  return (
    <>
      <PageTitleSection>
        <PageTitle>{birdle.title}</PageTitle>
        <TextBasedWidth>
          <BodyText>{birdle.subtitle}</BodyText>
        </TextBasedWidth>
      </PageTitleSection>

      <TextBasedWidth>
        <ContentSection>
          <div>
            <BirdDisplay bird={todays_bird} />

            <BirdGuesser
              options={birdle.birds.map((bird) => bird.name).sort()}
              answer={todays_bird.name}
              birdle={birdle}
              charity={todays_charity}
            />
          </div>
        </ContentSection>
      </TextBasedWidth>
    </>
  );
};
