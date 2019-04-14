import * as React from "react";

import { HomeProps } from "./Home.d";
import { Link } from "react-navi";

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <h2>Home</h2>
      <Link href="/tracks/">View Tracks</Link>
      <Link href="/tracks/123/name-here">View Track</Link>
    </>
  );
};

export default Home;
