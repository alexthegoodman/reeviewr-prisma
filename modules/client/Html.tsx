import * as PropTypes from "prop-types";
import * as React from "react";
import Helmet from "react-helmet";

export default class Html extends React.Component<any, any> {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object
  };

  render() {
    const head = Helmet.rewind();

    return (
      <html lang="en-us">
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link
            type="text/css"
            rel="stylesheet"
            href="/css/style.css"
            media="screen,projection"
          />
        </head>
        <body>
          <div id="client" />

          <script src="https://unpkg.com/react@16/umd/react.development.js" />
          <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" />
          <script src="http://localhost:8080/dist/bundle.js" charSet="UTF-8" />
        </body>
      </html>
    );
  }
}
