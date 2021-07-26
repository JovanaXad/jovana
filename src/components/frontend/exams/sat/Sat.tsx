import {
  ExamsHeadingSection,
  ExamsQuestions,
  ExamsTableSection,
} from "src/components/ui";
import React from "react";
import {
  examsQuestionsContent,
  headingContent,
  tableSectionContent,
} from "./constants";

const Sat: React.FC = (): JSX.Element => {
  return (
    <>
      <ExamsHeadingSection content={headingContent} />
      <ExamsTableSection content={tableSectionContent} />
      <ExamsQuestions content={examsQuestionsContent} />
    </>
  );
};

export default Sat;
