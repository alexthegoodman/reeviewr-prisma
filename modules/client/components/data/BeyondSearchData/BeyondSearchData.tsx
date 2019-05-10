import * as React from "react";

import { BeyondSearchDataProps } from "./BeyondSearchData.d";
import BeyondSearch from "../../ui/BeyondSearch/BeyondSearch";
import Utility from "../../../../services/Utility";
import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import Strings from "../../../services/Strings";
// import { useDebounce } from 'use-debounce';

const BeyondSearchData: React.FC<BeyondSearchDataProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
}) => {
  const strings = new Strings();
  const utility = new Utility();

  let route = useCurrentRoute();
  let loadingRoute = useLoadingRoute();
  let navigation = useNavigation();

  const clickHandler = e => onClick(e);

  const [defaultValue, setDefaultValue] = React.useState("");
  // const [searchValue] = useDebounce(search, 1000);

  React.useEffect(() => {
    const { search } = route.lastChunk.request.params;
    setDefaultValue(search);
  });

  let debounce;
  const changeHandler = phrase => {
    clearTimeout(debounce);
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
        defaultValue={defaultValue}
        onChange={changeHandler}
      />
    </>
  );
};

export default BeyondSearchData;
