import * as React from "react";

import { TracksProps } from "./Tracks.d";
import UserTrack from "../../data/UserTrack/UserTrack";
import {
  USER_TRACKS_QUERY,
  USER_TRACKS_GENRE_QUERY,
} from "../../../graphql/queries/userTrack";
import { useQuery } from "react-apollo-hooks";
import { UserTrack as IUserTrack } from "../../../../../__generated__/gql-gen/grapql-types";
import { Popover, Menu, Position, Button } from "@blueprintjs/core";
import { GenreList } from "../../../../defs/genres";
import MenuItem from "../../ui/MenuItem/MenuItem";
import PageHeader from "../../ui/PageHeader/PageHeader";
import Utility from "../../../../services/Utility";

const Tracks: React.FC<TracksProps> = () => {
  const utility = new Utility();

  const [selectedGenre, setSelectedGenre] = React.useState("");
  let menuText = "Select Genre";

  const {
    data: tracksData,
    error: tracksError,
    loading: tracksLoading,
  } = useQuery(USER_TRACKS_QUERY);

  const {
    data: genreTracksData,
    error: genreTracksError,
    loading: genreTracksLoading,
  } = useQuery(USER_TRACKS_GENRE_QUERY, {
    variables: { genre: encodeURIComponent(selectedGenre) },
  });

  let bodyContent = <div>Processing...</div>;
  if (tracksLoading) {
    bodyContent = <div>Loading tracks...</div>;
  }
  if (tracksError) {
    bodyContent = <div>Error on tracks! {tracksError.message}</div>;
  }
  if (genreTracksLoading) {
    bodyContent = <div>Loading genre tracks...</div>;
  }
  if (genreTracksError) {
    bodyContent = <div>Error on genre tracks! {tracksError.message}</div>;
  }
  if (
    utility.isDefinedWithContent(genreTracksData.userTracks) &&
    selectedGenre !== ""
  ) {
    menuText = selectedGenre;
    bodyContent = genreTracksData.userTracks.map((track: IUserTrack) => {
      return <UserTrack key={track.id} track={track} />;
    });
  } else if (utility.isDefinedWithContent(tracksData.userTracks)) {
    bodyContent = tracksData.userTracks.map((track: IUserTrack) => {
      return <UserTrack key={track.id} track={track} />;
    });
  }

  // console.info("Tracks Data", tracksData);

  return (
    <>
      <PageHeader title="Tracks">
        <Popover
          content={
            <Menu className="dropdown">
              {GenreList.map((genre, i) => {
                return (
                  <MenuItem key={i} onClick={() => setSelectedGenre(genre)}>
                    {genre}
                  </MenuItem>
                );
              })}
            </Menu>
          }
          position={Position.LEFT_TOP}
        >
          <Button className="textButton" icon="music" text={menuText} />
        </Popover>
      </PageHeader>
      {bodyContent}
    </>
  );
};

export default Tracks;
