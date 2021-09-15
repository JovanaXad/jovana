import Head from "next/head";
import React from "react";
import { Gre } from "src/components/frontend";

const GrePage: React.FC = (): JSX.Element => (
  <>
    <Head>
      <meta
        name="description"
        content="GRE (Graduate Record Exam) je standardizovan test engleskog jezika koji je potreban za upis na master i doktroske studije na fakultetima u inostranstvu, posebno u oblasti menadžmenta i poslovanja. Rezultati ispita važe 5 godina i možete sa njima da aplicirate na više programa. GRE možete da polažete do 5 puta godišnje, sa barem 21 dan pauze izmedju dva testa. Izabranim fakutetima možete da pošaljete samo najbolji skor. Takodje, GRE test dozvoljava da preskačete pitanja u okviru jednog dela i da birate na koja pitanja prvo da odgovorite."
      />
    </Head>
    <Gre />
  </>
);

export default GrePage;
