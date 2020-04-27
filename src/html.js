import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script src="https://securepubads.g.doubleclick.net/tag/js/gpt.js" async></script>
        <script src="https://cdn.p-n.io/pushly-sdk.min.js?domain_key=cfOCEQj2H76JJXktWCy3uK0OZCb1DMbfNUnq" async></script>
        <script data-ad-client="ca-pub-6577733472295351" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var PushlySDK = window.PushlySDK || [];
            function pushly() { PushlySDK.push(arguments) }
            pushly('load', {
              domainKey: 'cfOCEQj2H76JJXktWCy3uK0OZCb1DMbfNUnq',
            });
            `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
