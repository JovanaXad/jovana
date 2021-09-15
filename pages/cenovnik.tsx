import Head from "next/head";
import React from "react";
import { Pricelist } from "src/components/frontend";

const Cenovnik = (): JSX.Element => (
  <>
    <Head>
      <meta
        name="description"
        content="Sav materijal je uključen u cenu i ne postoje dodatni niti skriveni troškovi. Plaćanje je mesečno i polaznici nisu u obavezi (ugovornoj niti bilo koje druge vrste) da isplate ceo kurs u slučaju da ga ne završe. Naša je misija da budete ovde od početka do kraja svakog kursa kako bismo zajedno postigli vaš cilj.
        Svakom kursu ili individualnim časovima prethode besplatan probni čas (koji možete da zakažete na Home stranici sajta) ili besplatne konsultacije. One vas ne obavezuju da upišete kurs, niti je neophodno da date depozit pri upisu. Usmenim ili pisanim putem možete potvrditi svoj dolazak, nakon čega dogovaramo termine. Časovi se odvijaju radnim danima od 8h do 22h, a vikendom od 10h d0 15h."
      />
    </Head>
    <Pricelist />
  </>
);

export default Cenovnik;
