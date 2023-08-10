export const BackgroundImage = ({ className, image, children }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
  };

    // backgroundSize: size,
  return (
    <div className={`${className}`} style={backgroundImageStyle}>
      {children}
    </div>
  );
};
