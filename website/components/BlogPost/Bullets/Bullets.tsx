import { BodyText } from "../../styling/TextStyles";

const BulletPoint = ({ point }) => {
  return (
    <BodyText>
      <li>{point.text}</li>
    </BodyText>
  );
};

const ListWrapper = ({ children, numbered }) => {
  if (numbered) {
    return <ol>{children}</ol>;
  } else {
    return <ul>{children}</ul>;
  }
};

export const Bullets = ({ item }) => {
  return (
    <ListWrapper numbered={item.numbered}>
      {item.points.map((point) => (
        <BulletPoint point={point} />
      ))}
    </ListWrapper>
  );
};
