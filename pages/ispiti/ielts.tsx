import Head from "next/head";
import React from "react";
import { Ielts } from "src/components/frontend";

const IeltsPage: React.FC = (): JSX.Element => (
  <>
    <Head>
      <meta
        name="description"
        content="IELTS je test je jedan od najpriznatijih i najzastupljenijih testova engleskog. Položen IELTS test je dokaz da je vaše znanje engleskog na nivou koji je dovoljan za studije i/ili život u inostranstvu. Postoje dve vrste IELTS ispita koje možete polagati - Academic ili General. Iako se polažu u različite svrhe, (General Module za emigriranje, a Academic Module za dalje akademske studije) postoje delovi koji su isti u oba modula, naime Listening i Speaking delovi testa su identični u General i Acedemic modulu. Što se tiče razlika, Reading deo je delimično lakši na General IELTS-u, dok je u Writing delu Academic testa prvi Writing zadatak dosta zahtevniji."
      />
    </Head>
    <Ielts />
  </>
);

export default IeltsPage;
