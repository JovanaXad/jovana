import React from "react";
import {
  ExamsHeadingSection,
  ExamsTableSection,
  ExamsTableAndImageSection,
  ExamsQuestions,
} from "src/components/ui";
import {
  headingContent,
  tableSectionContent,
  tableAndImageSectionContent,
  examsQuestionsContent,
} from "./constants";

const Toefl: React.FC = (): JSX.Element => {
  return (
    <>
      <ExamsHeadingSection content={headingContent} />
      <ExamsTableSection content={tableSectionContent} />
      <ExamsTableAndImageSection content={tableAndImageSectionContent} />
      <ExamsQuestions content={examsQuestionsContent} />
    </>
  );
};

export default Toefl;
