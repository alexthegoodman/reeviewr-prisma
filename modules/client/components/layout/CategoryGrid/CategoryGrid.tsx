import * as React from "react";

import { Button, Text } from "@blueprintjs/core";
import { useCurrentRoute, useNavigation } from "react-navi";
import { useAppContext } from "../../../context";
import { CategoryGridProps } from "./CategoryGrid.d";

const CategoryGrid: React.FC<CategoryGridProps> = ({
  ref = null,
  className = "",
  onClick = (e) => console.info("Click"),
  children = null,
  title = "",
}) => {
  const route = useCurrentRoute();
  const navigation = useNavigation();
  const [{ tour, userData }, dispatch] = useAppContext();

  const navigate = (href, loginCheck = false) => {
    if (loginCheck) {
      if (userData !== null && userData) {
        navigation.navigate(href);
      } else {
        navigation.navigate("/sign-up");
      }
    } else {
      navigation.navigate(href);
    }
  };

  return (
    <section className="categoryGrid">
      <div className="categoryGridContain">
        <div className="categoryGridHeader">
          <Text tagName="h6">{title}</Text>
          <Button
            className="button createSpaceButton"
            onClick={() => navigate("/spaces/create", true)}
          >
            Create Space
          </Button>
        </div>
        <div className="categoryGridContent">{children}</div>
      </div>
    </section>
  );
};

export default CategoryGrid;
