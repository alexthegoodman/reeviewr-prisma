import * as React from "react";

import { BeyondSearchProps } from "./BeyondSearch.d";
import { InputGroup } from "@blueprintjs/core";

const BeyondSearch: React.FC<BeyondSearchProps> = ({
  ref = null,
  className = "",
  onClick = () => console.info("Click"),
  inputRef = null,
  defaultValue = "",
  disabled = false,
  leftIcon = "search",
  rightElement = <></>,
  onChange = () => {},
  placeholder = "Search...",
}) => {
  const changeHandler = e => onChange(e.target.value);

  return (
    <InputGroup
      ref={ref}
      inputRef={inputRef}
      className={`beyondSearch ${className}`}
      large={true}
      type="search"
      round={true}
      defaultValue={defaultValue}
      disabled={disabled}
      leftIcon={leftIcon}
      rightElement={rightElement}
      onChange={changeHandler}
      placeholder={placeholder}
    />
  );
};

export default BeyondSearch;
