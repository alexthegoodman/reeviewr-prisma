import * as React from "react";

import { InputGroup } from "@blueprintjs/core";
import { BeyondSearchProps } from "./BeyondSearch.d";

const BeyondSearch: React.FC<BeyondSearchProps> = ({
  ref = null,
  className = "",
  onClick = () => console.info("Click"),
  inputRef = null,
  defaultValue = "",
  value = "",
  disabled = false,
  leftIcon = "search",
  rightElement = <></>,
  onChange = () => {},
  placeholder = "Search...",
}) => {
  const changeHandler = (e) => onChange(e.target.value);

  return (
    <InputGroup
      ref={ref}
      inputRef={inputRef}
      className={`beyondSearch ${className}`}
      large={true}
      type="search"
      round={true}
      // defaultValue={defaultValue}
      disabled={disabled}
      leftIcon={leftIcon}
      rightElement={rightElement}
      onChange={changeHandler}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default BeyondSearch;
