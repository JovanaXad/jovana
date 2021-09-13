export const customStyle = { background: "#b3da7d", color: "#b3da7d" };
export const greenColors = { darkGreen: "#b3da7d", lightGreen: "#d2eab1" };

export const theaderInlineStyles = {
  background: "white",
  color: "black",
  padding: "2rem 0 2rem 2rem",
};

export const theaderInlineGreenStyles = {
  ...theaderInlineStyles,
  background: greenColors.lightGreen,
  color: "black",
};

import toeflImg from "public/exams/exams-nav-page/toefl.jpg";
import gmatImg from "public/exams/exams-nav-page/GMAT.jpg";
import Link from "next/link";

export const headingContent = {
  h1: "Gmat test",
  text: "GMAT je standardizovani test engleskog jezika namenjen onima koji planiraju da pohadjaju master ili doktorske studije u inostranstvu. Najčešće je potreban za upis MBA studija (Masters of Business Administration), a njime se procenjuje znanje u oblasti menadžmenta i poslovanja. Rezultati ispita važe 5 godina i možete sa njima da aplicirate na više programa. Rezultati ispita važe 5 godina i možete sa njima da aplicirate na više programa.",
  image: toeflImg,
  styles: { background: "#5d1be3", color: "#5d1be3" },
};

export const tableSectionContent = {
  tableTitle:
    "GMAT se polaže u ovlašćenim centrima u Srbiji i u zemljama u okruženju, a možete da ga polažete i od kuće. U zemljama u regionu možete polagati u Budimpešti, Sofiji i Skoplju. Uglavnom su polaganja tri puta nedeljno, a na vama je da odredite mesto i vreme. U svakom slučaju, ceo vaš ispit se snima, bilo da radite ili u nekom ovlašćenom centru. Cena polaganja testa je 250 USD.",
  tableTitle2:
    "Svoj rezultat možete da pogledate na mba.com account-u i to u roku od 7 dana od polaganja testa. Sa istog tog računa šaljete svoje rezultate direktno fakultetima. Ne postoje dodatni troskovi u toku tog procesa.",
  tableTitle3: "Pogledajte kako izgleda GMAT test u ovoj tabeli:",
  table: {
    theader: ["", "Vremenska odrednica ", "Broj zadataka"],
    rows: [
      ["Analytical Writing Assessment", "30 minuta", "1 zadatak"],
      ["Integrated Reasoning", "Dva dela po 20 pitanja", "12 pitanja"],
      ["Pauza", "8 minuta", " -- "],
      ["Quantitative Reasoning", "62 minuta", "31 pitanje"],
      ["Pauza", "8 minuta", "--"],
      ["Verbal Reasoning", "65 minuta", "36 pitanja"],
    ],
  },
  styles: {
    headerStyles: { background: "#808080", color: "black" },
    rowStyles: { background: "#d9d9d9", color: "black" },
  },
};

export const examsQuestionsContent = [
  {
    heading: "Koji skor mogu da očekujem na GMAT testu?",
    text: (
      <>
        <p className="toefl__questions-text">
          Da biste položili GMAT test potrebno je da imate odlično znanje
          engleskog jezika da biste razumeli pitanja, da znate strategije izrade
          ovog testa kako biste na vreme odgovorili na sva pitanja i da odlično
          rezonujete i vladate matematikom. Priprema je svakako neophodna. GMAT
          je izuzetno težak test, a to što je GMAT CAT test (Computer Adaptive
          Test) ovaj test čine još težim. CAT test funkcioniše na principu
          prethodno datih tačnih odgovora: ako odgovorite tačno na teža pitanja,
          kompjuter će to prepoznati i generisaće teža pitanja koja vas vode ka
          višem broju poena. Ukoliko date tačne odgovore samo na lakša pitanja,
          kompjuter će vas automatski odrediti u grupu za manji broj poena. Vaš
          uspeh na GMAT testu zavisi od: •   broja pitanja na koja ste
          odgovorili•   da li su vaši odgovori tačni ili ne•   težine svakog
          pojedinačnog pitanja na koje ste odgovorili tačno, odnosno netačno.
        </p>
      </>
    ),
  },
  {
    heading: "Kako se ocenjuje GMAT test?",
    text: (
      <>
        <p className="toefl__questions-text">
          Radi boljeg razumevanja ocenjivanja GMAT testa, prenosimo vam
          najrelevantnije I najaktuelnije informacije sa zvaničnog GMAT sajta
          (mba.com). Prosečan skor se kreće između 400 i 600 poena. Na verbalnom
          i kvantitativnom delu većina studenata dobije skor od 0 do 60, s tim
          što retko ko dobija rezultat skor 6 i iznad 51. Writing deo se
          ocenjuje na skali od 0 do 6, s tim što možete da dobijete i 4.5,
          odnosno pola poena. Esej pregledaju stručna lica zadužena pri GMAT
          testu za ocenjivanje eseja, a zatim ga ocenjuje i kompjuter. U slučaju
          značajne razlike između skora, esej će pregledati i finalnu ocenu će
          dati čovek, a ne mašina.
        </p>
      </>
    ),
  },
  {
    heading: "Da li je moguće dobiti potreban broj poena?",
    text: (
      <>
        <p className="toefl__questions-text">
          Na Internetu postoji mnogo materijala za pripremu za GMAT. Međutim, da
          biste napredovali, potrebno je da naučite ono što test stvarno
          proverava, umesto da samo uradite online testove koji će vam reći gde
          ste pogrešili, ali ne i zašto i šta treba da znate da ne biste
          ponavljali istu grešku. Nije preporučljivo da se zalećete i polažete
          test više puta. Osim toga, GMAT ima i ograničavajuće uslove – test
          možete da polažete najviše 5 puta u toku jedne godine, a ne više od 8
          puta u toku celog svog života. Temeljna i kvalitetna priprema sa nama
          vam je garancija da ćete uštedeti novac i dobiti potreban skor bez
          ponavljanja testa.  Ako imate dodatnih pitanja, ostavite nam poruku{" "}
          <Link href="/kontakt">ovde</Link>.
        </p>
      </>
    ),
  },
];
