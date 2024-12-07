import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";

function removeNewlinesAndWhitespace(input) {
  return input.replace(/[\n\r\s]+/g, ""); // Matches all newlines, carriage returns, and whitespace.
}

const RenderMarkdown = ({ content }) => {

  const result = removeNewlinesAndWhitespace(content);
  
  return (
    <ReactMarkdown
      children={result}
      rehypePlugins={[rehypeRaw]} // Allows raw HTML to be rendered
      // remarkPlugins={[remarkBreaks]} // Converts \n to <br />
    />
  );
};

export default RenderMarkdown;
