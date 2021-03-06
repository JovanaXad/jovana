import React from "react";
import { ContentContainer, Wrapper, Text } from "src/components/ui";
import { theaderInlineOrangeStyles, theaderInlineStyles } from "../constants";
import Link from "next/link";

const IeltsTableSection: React.FC = (): JSX.Element => {
  return (
    <ContentContainer className="toefl__table">
      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={{ background: "#808080" }}
        >
          {""}
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={{ background: "#808080" }}
        >
          Academic
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={{ background: "#808080" }}
        >
          Vremenska odrednica
        </Wrapper>
      </Wrapper>

      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          Analytical Writing Pisanje eseja
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          Dva zadatka
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          60 minuta
        </Wrapper>
      </Wrapper>

      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineOrangeStyles}
        >
          Verba Reasoning
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineOrangeStyles}
        >
          Dva dela po 20 pitanja
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineOrangeStyles}
        >
          30 minuta za svaki deo
        </Wrapper>
      </Wrapper>

      <Wrapper as="div" className="toefl__table-theader-container">
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          Quantitative Reasoning
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          Dva dela po 20 pitanja
        </Wrapper>
        <Wrapper
          as="div"
          className="toefl__table-theader"
          style={theaderInlineStyles}
        >
          30 minuta za svaki deo
        </Wrapper>
      </Wrapper>

      <Text className="toefl__below-table-text" as="p">
        IELTS test se ocenjuje na skali od 1 do 9, a ocena koja je potrebna za
        studije u inostranstvu je naj??e????e 6.5 iz svakog pojedina??nog dela
        testa. Tabela prikazuje od ??ega se sastoji test, a band score (ukupan
        rezultat) se dobija na osnovu aritmeti??ke sredine ocena iz svakog
        pojedina??nog dela.
      </Text>

      <p className="toefl__below-table-text">
        Zvani??ni rezultati IELTS izlaze 10 radnih dana nakon polaganja testa, a
        mo??ete ih preuzeti li??no u Britanskom savetu ili prijavom na IELTS
        servis koji se nalazi na slede??em linku:{" "}
        <Link href="https://v2.ereg.ets.org/ereg/public/jump?_p=TEL">
          <a>https://v2.ereg.ets.org/ereg/public/jump?_p=TEL</a>
        </Link>
        . Svoje nezvani??ne rezultate mo??ete da saznate od 5 do 7 dana nakon
        polaganja testa na ovom linku:{" "}
        <Link href="https://ielts.idp.com/results/check-your-result">
          <a>https://ielts.idp.com/results/check-your-result</a>
        </Link>
        .{" "}
      </p>

      <Text className="toefl__below-table-text" as="p">
        Vreme potrebno za pripremu se odre??uje nakon ??to se uradi procena va??eg
        trenutnog aktivnog znanja engleskog, va??a ta??nost u izradi pasivnog dela
        testa i va??e ve??tine pisanja na engleskom. Tabela ispod daje okviran
        rezultat koji mo??ete da postignete uz pripremu.
      </Text>
    </ContentContainer>
  );
};

export default IeltsTableSection;
