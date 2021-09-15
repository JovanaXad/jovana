import Head from "next/head";
import React from "react";
import { Sat } from "src/components/frontend";

const SatPage: React.FC = (): JSX.Element => (
  <>
    <Head>
      <meta
        name="description"
        content="SAT ispit je potreban srednjoškolcima koji se spremaju za osnovne studije u inostranstvu. SAT ispit je nastao u Americi gde i danas služi kao obavezan prijemni ispit: svi srednjoškolci koji u Americi upisuju koledž ili fakultet moraju da polažu SAT. Samim time, srednjoškolci iz Evrope, pa i iz Srbije, naravno, koji žele da upišu osnovne studije u Americi moraju da polažu SAT. Pojedini koledži u Evropi, posebno u Italiji (Bocconi i Cattolica koji su visoko rangirani), takođe traže od budućih studenata da polože SAT ispit. SAT ispit se sastoji iz 2 dela, a nekadašnji prvi deo ispita - esej – ukinut je 2021. godine. Budući da SAT u Americi služi kao prijemni ispit, sasvim je očekivano da je potpuno na engleskom i da ne proverava poznavanje gramatike engleskog jezika niti nastoji da utvrdi koliko dobro srednjoškolci koriste engleski. To je ono što SAT test čini teškim: SAT test kombinuje veštine čitanja, kritičkog razmišljanja i logičkog zaključivanja kroz svoja dva dela koje mi obično nazivamo engleski i matematika, a koji su mnogo kompleksniji nego što zvuče ili izgledaju na prvi pogled."
      />
    </Head>
    <Sat />
  </>
);

export default SatPage;
