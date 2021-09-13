import React from "react";
import { SubContainer, Text } from "..";
import { ExamsTableSectionProps } from "./types";
import { ExamsTable } from "..";
import uniqid from "uniqid";

function isOdd(num: number) {
  return num % 2;
}

const ExamsTableSection: React.FC<ExamsTableSectionProps> = ({
  content: {
    tableTitle,
    tableTitle2,
    tableTitle3,
    table: { theader, rows },
    styles: { headerStyles, rowStyles },
  },
}): JSX.Element => {
  console.log("test", theader);

  return (
    <SubContainer className="exams__table-section">
      {tableTitle && (
        <Text as="p" className="exams__table-title">
          {tableTitle}
        </Text>
      )}

      {tableTitle2 && (
        <Text as="p" className="exams__table-title">
          {tableTitle2}
        </Text>
      )}

      {tableTitle3 && (
        <Text as="p" className="exams__table-title">
          {tableTitle3}
        </Text>
      )}
      <ExamsTable.TheaderContainer>
        {theader?.map((item: string) => {
          return (
            <ExamsTable.TableTheader key={uniqid()} style={headerStyles}>
              {item}
            </ExamsTable.TableTheader>
          );
        })}
      </ExamsTable.TheaderContainer>

      <>
        {rows?.map((row: string[], index: number) => {
          return (
            <ExamsTable.TheaderContainer key={uniqid()}>
              {row.map((item: string) => {
                return (
                  <ExamsTable.TableTheader
                    key={uniqid()}
                    style={isOdd(index) ? rowStyles : { color: "black" }}
                  >
                    {item}
                  </ExamsTable.TableTheader>
                );
              })}
            </ExamsTable.TheaderContainer>
          );
        })}
      </>
    </SubContainer>
  );
};

export default ExamsTableSection;
