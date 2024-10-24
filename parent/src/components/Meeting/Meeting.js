import React, { useEffect } from "react";

const Meeting = ({
  url = "https://calendly.com/ishubham21/meet-doct?hide_event_type_details=1&hide_gdpr_banner=1",
}) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js",
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      style={{
        height: "780px",
        overflow: "hidden",
      }}
      data-url={url}
    />
  );
};

export default Meeting;
