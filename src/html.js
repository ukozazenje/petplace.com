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
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <script
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          async
        ></script>
        <script
          src="https://cdn.p-n.io/pushly-sdk.min.js?domain_key=cfOCEQj2H76JJXktWCy3uK0OZCb1DMbfNUnq"
          async
        ></script>
        <script
          data-ad-client="ca-pub-6577733472295351"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
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
        <script async src="https://www.tiktok.com/embed.js" />
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){ var s = document.createElement('script'), e = ! document.body ? document.querySelector('head') : document.body; s.src = 'https://acsbapp.com/apps/app/dist/js/app.js'; s.async = true; s.onload = function(){ acsbJS.init({ statementLink : '', footerHtml : '', hideMobile : false, hideTrigger : false, language : 'en', position : 'right', leadColor : '#146FF8', triggerColor : '#146FF8', triggerRadius : '50%', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerIcon : 'people', triggerSize : 'medium', triggerOffsetX : 20, triggerOffsetY : 20, mobile : { triggerSize : 'small', triggerPositionX : 'right', triggerPositionY : 'bottom', triggerOffsetX : 10, triggerOffsetY : 10, triggerRadius : '50%' } }); }; e.appendChild(s); }()); `,
          }}
        />
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
