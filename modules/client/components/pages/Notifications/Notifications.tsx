import * as React from "react";

import { NotificationsProps } from "./Notifications.d";
import { GET_NOTIFICATIONS } from "../../../graphql/queries/notification";
import { useQuery } from "react-apollo";
import { useCookies } from "react-cookie";
import { Button, Text } from "@blueprintjs/core";
import NotificationItem from "../../ui/NotificationItem/NotificationItem";
import GraphQLData from "../../data/GraphQLData/GraphQLData";
import NoResults from "../../ui/NoResults/NoResults";

const Notifications: React.FC<NotificationsProps> = () => {
  const [count, setCount] = React.useState(10);
  const [cookies, setCookie, removeCookie] = useCookies([
    "reeviewrId",
    "reeviewrDarkMode",
  ]);

  const [data, setData] = React.useState(null);

  return (
    <>
      <section className="notificationList">
        <div className="notificationListContain">
          <Text tagName="h1" className="darkHeadline">
            Notifications
          </Text>
          <GraphQLData
            QUERY={GET_NOTIFICATIONS}
            loadingText="Loading notifications..."
            onFinish={data => setData(data)}
            variables={{
              id: cookies["reeviewrId"],
              first: count,
            }}
          >
            {data !== null &&
            typeof data.findManyNotification !== "undefined" &&
            data.findManyNotification !== null ? (
              data.findManyNotification.map((notification, i) => {
                return <NotificationItem key={i} notification={notification} />;
              })
            ) : (
              <NoResults />
            )}
          </GraphQLData>
          <Button
            className="seeMoreButton"
            onClick={() => setCount(count + 10)}
          >
            See More
          </Button>
        </div>
      </section>
    </>
  );
};

export default Notifications;
