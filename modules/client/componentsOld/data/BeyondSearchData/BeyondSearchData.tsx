import * as React from "react";

import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import Utility from "../../../../services/Utility";
import Strings from "../../../services/Strings";
import BeyondSearch from "../../ui/BeyondSearch/BeyondSearch";
import { BeyondSearchDataProps } from "./BeyondSearchData.d";
// import { useDebounce } from 'use-debounce';

const BeyondSearchData: React.FC<BeyondSearchDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const strings = new Strings();
  const utility = new Utility();

  const route = useCurrentRoute();
  const loadingRoute = useLoadingRoute();
  const navigation = useNavigation();

  const clickHandler = e => onClick(e);
  const { search } = route.lastChunk.request.params;

  const [defaultValue, setDefaultValue] = React.useState(search);
  const [value, setValue] = React.useState(search);

  React.useEffect(() => {
    const { search } = route.lastChunk.request.params;

    if (route.url.pathname !== "/search" && search !== "") {
      setValue("");
    }
  });

  let debounce;
  const changeHandler = phrase => {
    clearTimeout(debounce);
    setValue(phrase);
    debounce = setTimeout(() => {
      // setSearch(phrase);
      navigation.navigate(
        "/search?" + strings.createQueryString({ search: phrase })
      );
    }, 500);
  };

  return (
    <>
      <BeyondSearch
        placeholder="Search tracks and artists..."
        value={value}
        defaultValue={defaultValue}
        onChange={changeHandler}
      />
    </>
  );
};

export default BeyondSearchData;
