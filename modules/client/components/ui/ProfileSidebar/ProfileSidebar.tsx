import * as React from "react";

import { ProfileSidebarProps } from "./ProfileSidebar.d";
import Sidebar from "../Sidebar/Sidebar";
import { Text, Icon } from "@blueprintjs/core";
import Legacy from "../../../../services/Legacy";
import Strings from "../../../services/Strings";
import { SocialIcon } from "react-social-icons";

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  ref = null,
  className = "",
  onClick = e => console.info("Click"),
  userData = null,
}) => {
  const legacy = new Legacy();
  const strings = new Strings();

  const clickHandler = e => onClick(e);

  const userMetaList = legacy.extractMultipleMeta(userData.user.userMeta, [
    "firstName",
    "lastName",
    "userArtistName",
    "profileImage",
    "facebook",
    "twitter",
    "bandcamp",
    "soundcloud",
    "userBio",
  ]);

  return (
    <Sidebar type="sub">
      <div className="subSidebarContain">
        <div className="sidebarHeader">
          <img className="profileImage" src={userMetaList["profileImage"]} />
          <div className="mobileShow">
            <Text tagName="h1" className="sidebarHeadline">
              {strings.decode(userMetaList["userArtistName"])}
            </Text>
            {/* TODO: Edit Profile */}
            <Text tagName="h2" className="sidebarMeta">{`${
              userMetaList["firstName"]
            } ${userMetaList["lastName"]}`}</Text>
          </div>
        </div>
        <div className="sidebarBody">
          <div className="socialLinks">
            {userData.user.userEmail !== null ? (
              <SocialIcon
                url={`mailto:${userData.user.userEmail}`}
                network="email"
              />
            ) : (
              <></>
            )}
            {userMetaList["facebook"] !== "" ? (
              <SocialIcon url={userMetaList["facebook"]} network="facebook" />
            ) : (
              <></>
            )}
            {userMetaList["twitter"] !== "" ? (
              <SocialIcon url={userMetaList["twitter"]} network="twitter" />
            ) : (
              <></>
            )}
            {userMetaList["soundcloud"] !== "" ? (
              <SocialIcon
                url={userMetaList["soundcloud"]}
                network="soundcloud"
              />
            ) : (
              <></>
            )}
          </div>

          <div className="mobileHide">
            <Text tagName="h1" className="sidebarHeadline">
              {strings.decode(userMetaList["userArtistName"])}
            </Text>
            {/* TODO: Edit Profile */}
            <Text tagName="h2" className="sidebarMeta">{`${
              userMetaList["firstName"]
            } ${userMetaList["lastName"]}`}</Text>
          </div>
          <Text tagName="p">{strings.decode(userMetaList["userBio"])}</Text>
        </div>
      </div>
    </Sidebar>
  );
};

export default ProfileSidebar;
