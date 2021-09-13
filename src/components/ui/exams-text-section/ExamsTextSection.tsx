import React from "react";
import { Container, ContentContainer, Heading, SubContainer } from "..";
import { ExamsQuestionsProps } from "./types";
import uniqid from "uniqid";

const ExamsTextSection: React.FC<ExamsQuestionsProps> = ({
  content,
}): JSX.Element => {
  return (
    <Container className="toefl__questions">
      <SubContainer className="toefl">
        <>
          {content?.map(({ heading, text }) => {
            return (
              <ContentContainer
                className="toefl__questions-text-container"
                key={uniqid()}
              >
                <Heading as="h5" className="toefl__questions-heading--h5">
                  {heading}
                </Heading>
                <p className="toefl__questions-text">{text}</p>
              </ContentContainer>
            );
          })}
        </>
      </SubContainer>
    </Container>
  );
};

export default ExamsTextSection;
