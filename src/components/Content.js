import React from "react";

const Content = ({ content }) => (
  <div className="pb2 f5" dangerouslySetInnerHTML={{ __html: content }} />
);

export default Content;
