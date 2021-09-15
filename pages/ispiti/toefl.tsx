import Head from "next/head";
import React from "react";
import { Toefl } from "src/components/frontend";

const ToeflPage: React.FC = (): JSX.Element => (
  <>
    <Head>
      <meta
        name="description"
        content="TOEFL je test znanja engleskog i procenjuje vašu sposobnost da pratite nastavu na engleskom jeziku i da u njoj aktivno učestvujete. Zbog jezika i svrhe, TOEFL se naziva akademskim testom. Radi se o computer-based testu i svaki od delova se radi u posebnom softveru: čak i Speaking deo radite tako što govorite i snimate svoje odgovore, bez sagovornika naspram koga biste sedeli. Zbog toga se TOEFL često naziva i TOEFL Ibt testom, što je skraćenica za Internet Based Test, to je u suštini drugi naziv za isti međunarodni test.TOEFL test je namenjen studentima koji:a) žele da nastave osnovne studije u inostranstvub) upisuju osnovne studije u inostranstvu pa pored SAT testa treba da polažu i TOEFL ili IELTSc) žele da upišu master studije u inostranstvu. Dobro je znati da će vam za upis na biznis ili master studije u oblasti ekonomije biti potreban i GMAT ili GRE test"
      />
    </Head>
    <Toefl />
  </>
);

export default ToeflPage;
