export const SmartLink = ({ href, children }) => {
  return (
    <a href={href} {...(href.charAt(0) === "/" ? {} : { target: "_blank" })}>
      {children}
    </a>
  );
};
