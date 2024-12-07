import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";

function removeNewlines(input) {
  return input.replace(/\n/g, "");
}

const RenderMarkdown = ({ content }) => {

  const result = removeNewlines(content);
  
  return (
    <ReactMarkdown
      children={result}
      rehypePlugins={[rehypeRaw]} // Allows raw HTML to be rendered
      remarkPlugins={[remarkBreaks]} // Converts \n to <br />
    />
  );
};

export default RenderMarkdown;
