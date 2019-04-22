import * as React from "react";

export const Html = ({ content, state }) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="http://localhost:3001/dist/server.css" />
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(
              /</g,
              "\\u003c"
            )};`,
          }}
        />
        <script
          type="text/javascript"
          src="http://localhost:3001/dist/client.js"
        />
      </body>
    </html>
  );
};

// import Helmet from "react-helmet";

// export default class Html extends React.Component<any, any> {
//   static propTypes = {
//     assets: PropTypes.object,
//     component: PropTypes.node,
//     store: PropTypes.object
//   };

//   render() {
//     const head = Helmet.rewind();

//     return (
//       <html lang="en-us">
//         <head>
//           {head.base.toComponent()}
//           {head.title.toComponent()}
//           {head.meta.toComponent()}
//           {head.link.toComponent()}
//           {head.script.toComponent()}

//           <meta name="viewport" content="width=device-width, initial-scale=1" />

//           <link
//             type="text/css"
//             rel="stylesheet"
//             href="/css/style.css"
//             media="screen,projection"
//           />
//         </head>
//         <body>
//           <div id="client" />

//           <script src="https://unpkg.com/react@16/umd/react.development.js" />
//           <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" />
//           <script src="http://localhost:8080/dist/bundle.js" charSet="UTF-8" />
//         </body>
//       </html>
//     );
//   }
// }
