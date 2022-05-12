import { useState } from "react";
import videoSource from "../../videoSource";
import { Logo } from "./SubComponents/Logo";
import { Profile } from "./SubComponents/Profile";
import { Search } from "./SubComponents/Search";

export default function Header(props) {
  const { onSearch } = props;

  return (
    <div className="Header">
      <Logo />
      <Search onSearch={onSearch} />
      <Profile />
    </div>
  );
}
