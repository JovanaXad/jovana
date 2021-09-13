import { ExamsHeadingSection, ExamsTextSection } from "src/components/ui";
import React from "react";
import { examsTextContent, headingContent } from "./constants";

export const Bocconi: React.FC = (): JSX.Element => {
  return (
    <>
      <ExamsHeadingSection content={headingContent} />
      <ExamsTextSection content={examsTextContent} />
    </>
  );
};
