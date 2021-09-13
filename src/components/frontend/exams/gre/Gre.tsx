import {
  ExamsHeadingSection,
  ExamsQuestions,
  ExamsTableSection,
  ExamsTextSection,
} from "src/components/ui";
import React from "react";
import {
  examsQuestionsContent,
  examsTextContent,
  headingContent,
  tableSectionContent,
} from "./constants";

export const Gre: React.FC = (): JSX.Element => {
  return (
    <>
      <ExamsHeadingSection content={headingContent} />
      <ExamsTableSection content={tableSectionContent} />
      <ExamsTextSection content={examsTextContent} />
      <ExamsQuestions content={examsQuestionsContent} />
    </>
  );
};
