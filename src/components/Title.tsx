import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="xl:text-4xl lg:text-2xl text-xl font-bold text-center relative flex justify-center pb-4 title">
      {children}
    </h1>
  );
};

export default Title;
