import Head from "next/head";
import React from "react";
import { Bocconi } from "src/components/frontend";

const BocconiPage: React.FC = (): JSX.Element => (
  <>
    <Head>
      <meta
        name="description"
        content="Bocconi test se radi online i traje 75 minuta u toku kojih treba da odgovorite na 50 pitanja. Pitanja su različite težine i izmešana su, tako da će vam za neka trebati nekoliko sekundi, a za druga minut ili više. Sam test se sastoji od pitanja na zaokruživanje (multiple choice pitanja sa 5 ponuđenih odgovora). Ovim testom se vrši selekcija kandidata za osnovne studije, a glavni kriterijumi koji se ocenjuju na testu jesu sposobnost kritičkog mišljenja, rešavanje problema i sposobnost organizacije i fleksibilnosti u odgovaranju na veliki broj pitanja za kratko vreme. Prema kreatorima testa, to su veštine koje su neophodne za pohađanje studija i akademski uspeh je određen ovim sposobnostima. Bocconi test je namenjen onima koji žele da pohađaju osnovne studije isključivo na Luigi Bocconi univerzitetu. Ovaj test nije obavezan za upis na Bocconi, ali ako želite da povećate svoje šanse, treba da ga polažete. Ako ne, umesto njega možete da polažete SAT test. Ukoliko planirate da studirate na engleskom, verovatno će vam biti potreban SAT, TOEFL i/ili IELTS test."
      />
    </Head>
    <Bocconi />
  </>
);

export default BocconiPage;
