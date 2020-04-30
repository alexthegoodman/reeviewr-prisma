import * as React from "react";

import { useCurrentRoute, useLoadingRoute, useNavigation } from "react-navi";
import Utility from "../../../../services/Utility";
import Strings from "../../../services/Strings";
import BeyondSearch from "../BeyondSearch/BeyondSearch";
import { BeyondSearchDataProps } from "./BeyondSearchData.d";

const BeyondSearchData: React.FC<BeyondSearchDataProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
}) => {
  const strings = new Strings();
  const utility = new Utility();

  const route = useCurrentRoute();
  const loadingRoute = useLoadingRoute();
  const navigation = useNavigation();

  const clickHandler = (e) => onClick(e);
  const { search } = route.lastChunk.request.params;

  const [lastKeyTime, setLastKeyTime] = React.useState(Date.now());
  const [defaultValue, setDefaultValue] = React.useState(search);
  const [phrase, setPhrase] = React.useState(search);

  // React.useEffect(() => {
  //   const { search } = route.lastChunk.request.params;

  //   if (route.url.pathname !== "/search" && search !== "") {
  //     setPhrase("");
  //   }
  // });

  // let debounce;
  // const changeHandler = phrase => {
  //   clearTimeout(debounce);
  //   setValue(phrase);
  //   debounce = setTimeout(() => {
  //     // setSearch(phrase);
  //     navigation.navigate(
  //       "/search?" + strings.createQueryString({ search: phrase })
  //     );
  //   }, 500);
  // };

  const debounce = 300;

  const onSearch = (phrase) => {
    navigation.navigate(
      "/search?" + strings.createQueryString({ search: phrase })
    );
  };

  return (
    <>
      <BeyondSearch
        placeholder="Search something here"
        // value={value}
        // defaultValue={defaultValue}
        // onChange={changeHandler}
        value={phrase}
        onChange={(text) => {
          setLastKeyTime(Date.now());
          setPhrase(text);
          clearInterval(global["searchTimeout"]);
          global["searchTimeout"] = setTimeout(() => {
            if (lastKeyTime + debounce <= Date.now()) {
              onSearch(text);
            }
          }, debounce);
        }}
      />
    </>
  );
};

export default BeyondSearchData;
