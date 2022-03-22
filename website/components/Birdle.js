import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { urlFor } from "./sanity";
import { NavButton } from "./styling/Buttons";
import { displays } from "./styling/Display";
import { CustomTextInput } from "./styling/Inputs";
import { BodyText, PageTitle } from "./styling/TextStyles";
import { SmartLink } from "./utility/SmartLink";

const BirdImage = styled.img`
  border-radius: 10px;
  max-width: 80%;
  max-height: 50vh;

  @media (max-width: ${displays.mobileL}) {
    max-width: 100%;
  }
`;
const BirdDisplayStyle = styled.div`
  display: flex;
  justify-content: center;
`;
const BirdDisplay = ({ bird }) => {
  return (
    <BirdDisplayStyle>
      <BirdImage src={urlFor(bird.image).url()} alt={"Sorry, no clues!"} />
    </BirdDisplayStyle>
  );
};

const BirdGuesserStyle = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${displays.laptop}) {
    width: 50%;
    margin: auto;
  }
  p {
    text-align: center;
  }

  align-items: center;

  // thanks to https://erikmartinjordan.com/ for this
  input.shake {
    animation: shake 1s infinite;
  }

  @keyframes shake {
    0% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-2deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(3deg);
    }
    30% {
      transform: translate(0px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(2px, 1px) rotate(-2deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(4deg);
    }
    90% {
      transform: translate(2px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;
const max_guesses = 6;
const removeBlanks = (text) => text.replace(/\s+/g, " ").trim();

const getShareMessage = (guesses) => {
  return `Birdle!
${guesses > max_guesses ? "X" : guesses}/${max_guesses}
Think you know birds? Guess today's Birdle!
https://ashleyoldershaw.com/games/birdle`;
};

const getHelperMessage = (guess, options, message) => {
  if (guess.length < 3) return null;

  const possible_birds = options.filter(
    (option) =>
      option.toLowerCase() !== guess.toLowerCase() &&
      (option.toLowerCase().includes(guess.toLowerCase()) ||
        guess.toLowerCase().includes(option.toLowerCase()))
  );
  console.log(possible_birds);
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

  const onSubmit = (data, e) => {
    if (
      removeBlanks(data.guess.toLowerCase()) ===
      removeBlanks(answer.toLowerCase())
    ) {
      setWon(true);
    } else {
      setGuesses(guesses + 1);
      setHelperMessage(
        getHelperMessage(data.guess, options, birdle.helper_message)
      );
      setBadGuessMessage(<BodyText>{birdle.bad_guess_message}</BodyText>);
      setShake(true);
      setTimeout(() => setShake(false), 1000);
    }
    reset();
    e.preventDefault();
  };

  const charity_button = (
    <SmartLink href={charity.url}>
      <NavButton text={`${birdle.charity_prelude} ${charity.name}`} />
    </SmartLink>
  );
  const share_button = (
    <NavButton
      text={shareClicked ? "Copied to clipboard" : birdle.share_button}
      onClick={() => {
        setShareClicked(true);
        navigator.clipboard.writeText(getShareMessage(guesses));
      }}
    />
  );

  if (won) {
    return (
      <BirdGuesserStyle>
        <BodyText>{birdle.win_message}</BodyText>
        {share_button}
        {charity_button}
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
      </BirdGuesserStyle>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BirdGuesserStyle>
        {badGuessMessage}
        <CustomTextInput
          className={shake ? `shake` : null}
          register={register}
          placeholder={birdle.placeholder}
          validation={{ required: true, maxLength: 80 }}
          name="guess"
        />
        <NavButton text={birdle.button_text} type="submit"></NavButton>
        <BodyText>
          Guess {guesses} of {max_guesses}
        </BodyText>
        {helperMessage}
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
      <PageTitle>{birdle.title}</PageTitle>
      <BodyText>{birdle.subtitle}</BodyText>

      <BirdDisplay bird={todays_bird} />

      <BirdGuesser
        options={birdle.birds.map((bird) => bird.name).sort()}
        answer={todays_bird.name}
        birdle={birdle}
        charity={todays_charity}
      />
    </>
  );
};
