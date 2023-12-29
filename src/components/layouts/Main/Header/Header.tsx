import Button from "@/components/common/Button/Button";
import React from "react";
import { VscSymbolColor } from "react-icons/vsc";
import * as Style from "./index.styled";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          <Style.Img src="https://img.freepik.com/premium-photo/young-woman-headed-by-antique-statue-holding-mobile-phone-with-photo-camera-in-hands-taking-picture_407348-2037.jpg?w=996"></Style.Img>
          <Style.Name>Immersion in the world of the film</Style.Name>
        </Style.Logo>

      </Style.Content>
    </Style.Header>
  );
};
export default Header;
