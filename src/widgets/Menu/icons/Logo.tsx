import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 170 65" {...props}>
      <image width="150" height="60" href={isDark ? '/images/egg/20.png' : '/images/egg/20.png'}/>
    </Svg>
  )
};

export default Logo;
