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
  h1: "GRE test",
  text: "GRE (Graduate Record Exam) je standardizovan test engleskog jezika koji je potreban za upis na master i doktroske studije na fakultetima u inostranstvu, posebno u oblasti menadžmenta i poslovanja. Rezultati ispita važe 5 godina i možete sa njima da aplicirate na više programa. GRE možete da polažete do 5 puta godišnje, sa barem 21 dan pauze izmedju dva testa. Izabranim fakutetima možete da pošaljete samo najbolji skor. Takodje, GRE test dozvoljava da preskačete pitanja u okviru jednog dela i da birate na koja pitanja prvo da odgovorite.",
  image: toeflImg,
  styles: { background: "#c0c0c0", color: "#c0c0c0" },
};

export const tableSectionContent = {
  tableTitle:
    "Kalendar sa datumima polaganja GRE testa pogledajte ovde. GRE test se polaže u ovlašćenim centrima u Srbiji i u zemljama u okruženju. Cena polaganja testa je 205 USD. Kako GRE test izgleda pogledajte u ovoj tabeli:",
  table: {
    theader: ["", "Broj pitanja", "Vremenska odrednica"],
    rows: [
      ["Analytical WritingPisanje eseja", "Dva zadatka", "60 minuta"],
      ["Verba Reasoning", "Dva dela po 20 pitanja", "30 minuta za svaki deo"],
      [
        "Quantitative Reasoning",
        "Dva dela po 20 pitanja",
        "30 minuta za svaki deo",
      ],
    ],
  },
  styles: {
    headerStyles: { background: "#808080", color: "black" },
    rowStyles: { background: "#d9d9d9", color: "black" },
  },
};

export const examsTextContent = [
  {
    heading: "Analytical Writing – Pisanje eseja ",
    text: (
      <>
        <p className="toefl__questions-text">
          U prvom delu AW (Analytical Writing) dela se ocenjuje vaša sposobnost
          da izrazite svoje kritičko mišljenje na zadatu temu i da se jasno
          izrazite. Teme su iz svakodnevnog života, a od vas se očekuje da
          izrazite svoj stav jasno, potkrepite ga objašnjenjima i primerima,
          dajući dokaze da vaš stav prihvataju i drugi. Takođe, važno je da
          prikažete i stav druge strane, kao da ukažete na to zbog čega je takav
          stav manje prihvatljiv. Podrazumeva se da znate i koristite elemente
          standardnog pisanog engleskog, te da ne pravite gramatičke greške. U
          drugom delu ćete imati pred sobom tekst o određenoj situaciji,
          najčešće o situaciji u poslovnom kontekstu, a od vas se očekuje da
          procenite logičku ispravnost odluke. Odluka će imati očigledne i manje
          očigledne nedoslednosti – na vama je da ih uočite, objasnite zašto je
          odluka dobra/loša i da predložite način da se izbegnu nelogičnosti,
          tj. da se donese dobra odluka. Velika pogodnost je što listu tema
          možete da pronađete na ovom linku:{" "}
          <Link href="https://www.ets.org/gre/revised_general/prepare/analytical_writing/argument/pool">
            https://www.ets.org/gre/revised_general/prepare/analytical_writing/argument/pool.
          </Link>{" "}
          Manje pozitivno je to što treba da odvojite vreme da analizirate svaki
          pojedinačni slučaj. Međutim, upravo zato ste ovde – da biste ostvarili
          svoje akademske ciljeve, a ne da biste ih izbegavali jer su teški.
        </p>
        <p>
          Verbal Section procenjuje vaše razumevanje teksta, poznavanje
          vokabulara i sposobnost kritičkog razmišljanja. Ovaj deo je zapravo
          kombinacija tri vrste pitanja i oni se pojavljuju izmešano, tj. ne
          postoji striktan red. U delu koji se bavi vokabularom ćete na osnovu
          konteksta birati najbolju reč koja se uklapa u date rečenice. GRE
          svoju lošu reputaciju duguje upravo rečima sa „low frequency“, tj.
          rečima koje se veoma retko koriste u engleskom, a koje vi morate da
          znate. Listu reči koje se najčešće pojavljuju u GRE testovima možete
          da pogledate ovde:{" "}
          <Link href="https://gre.economist.com/gre-advice/gre-vocabulary/which-words-study/most-common-gre-vocabulary-list-organized-difficulty">
            https://gre.economist.com/gre-advice/gre-vocabulary/which-words-study/most-common-gre-vocabulary-list-organized-difficulty.
          </Link>{" "}
          Ambiciozniji od vas i sigurniji u to da im je GRE potreban mogu da
          počnu i da ih uče. Drugi deo je razumevanje pročitanih tekstova i
          odgovaranje na pitanja. Naravno, reči su pažljivo izabrane i nimalo
          lake. Poslednji tip pitanja su ona u kojima treba da označite rečenice
          koje imaju isto značenje. Kao i mnoge stvari, zvuči mnogo lakše nego
          što jeste. Ako želite – ili ste primorani - da upoznate test iz prve
          ruke, pišite nam{" "}
          <Link href="https://proenglish.herokuapp.com/kontakt">ovde.</Link>
        </p>

        <p>
          Quantitative sections (Matematičko rasuđivanje) U ovom delu se meri
          vaša sposobnost da razumete, analizirate i rešite matematičke zadatke.
          Prvi izazov je razumevanje matematičke terminologije na engleskom, a
          drugi je vladanje aritmetikom, algebrom, geometrijom i statističkom
          analizom podataka. Dozvoljeno je korišćenje kalkulatora na ekranu
          kompjutera.
        </p>
        <ul className="toefl__questions-text">
          <li>Postoje 4 vrste pitanja u matematičkom delu:</li>
          <li>
            1. poređenje matematičkih izraza A i B, a zatim odabir jednu od
            četiri tvrdnje koja tačno opisuje njihov odnos.
          </li>
          <li>
            2. Multiple choice questions: zadatak sa više ponuđenih odgovora od
            kojih birate jedan za koji mislite da je tačan, jer ste izračunali
            da je tačan.
          </li>
          <li>3. Multiple choice questions sa više mogućih tačnih odgovora.</li>
          <li>
            4. Računanje tačnog rezultata, tj. rešavanje zadatka i pisanje
            njegovog tačnog rezultata.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading:
      "Šta znači score selection? Da li mogu da biram koje rezultate želim da pošaljem?",
    text: (
      <>
        <p className="toefl__questions-text">Yes and no.</p>
        <p className="toefl__questions-text">
          Na sam dan polaganja, možete besplatno poslati vaš rezultat na četiri
          mesta koje ste prethodno izabrali u procesu registrovanja i
          prijavljivanja za ispit. Nakon što ste završili ispit, imate dve
          opcije: Send most recent scores, tj. da pošaljete rezultate ispita
          koji ste radili tog dana, ili Send all scores, tj. da pošaljete
          rezultate sa svih GRE ispita koje ste ikada polagali. Ovo je jedini
          izbor koji vam se nudi u okviru score selection procesa na samom
          ispitu
        </p>
        <p className="toefl__questions-text">
          Treća opcija se otključava tek nakon ispita, možete da izaberete sa
          kog GRE testa želite da pošaljete rezultate. Obratite pažnju: ne
          možete da seckate rezultat iz writing dela sa jednog polaganja, verbal
          sa drugog a math sa trećeg da napravite svoj omiljeni kolaž rezultata.
          Birate celokupan rezultat koji ste dobili sa jednog polaganja, koje
          god to bilo uz ovu opciju.Mind you, prve dve opcije postoje i dalje,
          ali nijedna više nije besplatna. Ukoliko želite da šaljete vaše
          rezultate još nekim školama, morate doplatiti za svaku pojedinačno.
          Naš savet je da se odlučite odmah za četiri škole i da pošaljete na
          dan ispita rezultate.
        </p>
      </>
    ),
  },
  {
    heading: "Šta radimo na časovima?",
    text: (
      <>
        <p className="toefl__questions-text">U ProEnglish School ćete:</p>
        <ul className="toefl__questions-text">
          <li>- naučiti primenjive strategije za uspešnu izradu testa</li>
          <li>- učiti kroz pravi, aktuelni materijal za pripremu GMAT</li>
          <li>- proširiti vokabular iz različitih oblasti poslovanja</li>
          <li>- naučiti različite metode čitanja i razumevanja teksta</li>
          <li>- u cenu su uključeni i pripremni časovi matematike</li>
          <li>
            - steći ćete brzinu i rutinu neophodnu da završite test na vreme
          </li>
        </ul>
        Ako imate dodatnih pitanja, ostavite nam poruku{" "}
        <Link href="/kontakt">ovde</Link>.
      </>
    ),
  },
];

export const examsQuestionsContent = [
  {
    heading: "Kako se ocenjuje GRE?",
    text: (
      <>
        <p className="toefl__questions-text">
           Da biste položili GRE test potrebno je da imate odlično znanje
          engleskog jezika da biste razumeli pitanja, da znate strategije izrade
          ovog testa kako biste na vreme odgovorili na sva pitanja, da odlično
          rezonujete i vladate matematikom, i da usvojite veliki broj akademskih
          GRE reči. GRE je izuzetno težak test, Section Adaptive, što znači da
          su vaš skor i težina pitanja odredjeni brojem tačnih odgovora u prvom
          delu Verbal Reasoning testa i prvom delu Quantitative Reasoning dela.
          Ako u ova dva dela date tačne odgovore na teška pitanja, dobijaćete u
          sledeća dva dela teža pitanja koja donose veći broj poena (intervala,
          kako se mere poeni u GRE testu).
        </p>
        <ul className="toefl__questions-text">
          <li>
            1. Analytical writing: od 0.0 do 6.0 bodova (mereno u intervalima od
            0.5 bodova)
          </li>
          <li>
            2. Verbal Reasoning: od 130 do 170 bodova (mereno u intervalima od 1
            boda)
          </li>
          <li>
            3. Quantitative Reasoning: od 130 do 170 bodova (mereno u
            intervalima od 1 boda)
          </li>
        </ul>
        <p className="toefl__questions-text">
          Prosečan broj bodova koju studenti postignu u Verbal Reasoning delu je
          150, u Quantitative delu 153, a prosečna ocena za eseje je 3.58. Svoj
          rezultat ćete moći da vidite čim završite test, a dobro je što sami
          odlučujete da li ćete slati rezultat odmah ili ne, tj. rezultati se ne
          šalju automatski. Ako niste ostvarili potreban broj poena, možete
          ponovo izaći na test. Na vašem GRE profilu imate opciju da izaberete
          rezultat koji želite da šaljete.
        </p>
      </>
    ),
  },
  {
    heading:
      "Šta znači score selection? Da li mogu da biram koje rezultate želim da pošaljem?",
    text: (
      <>
        <p className="toefl__questions-text">Yes and no.</p>
        <p className="toefl__questions-text">
          Na sam dan polaganja, možete besplatno poslati vaš rezultat na četiri
          mesta koje ste prethodno izabrali u procesu registrovanja i
          prijavljivanja za ispit. Nakon što ste završili ispit, imate dve
          opcije: Send most recent scores, tj. da pošaljete rezultate ispita
          koji ste radili tog dana, ili Send all scores, tj. da pošaljete
          rezultate sa svih GRE ispita koje ste ikada polagali. Ovo je jedini
          izbor koji vam se nudi u okviru score selection procesa na samom
          ispitu
        </p>
        <p className="toefl__questions-text">
          Treća opcija se otključava tek nakon ispita, možete da izaberete sa
          kog GRE testa želite da pošaljete rezultate. Obratite pažnju: ne
          možete da seckate rezultat iz writing dela sa jednog polaganja, verbal
          sa drugog a math sa trećeg da napravite svoj omiljeni kolaž rezultata.
          Birate celokupan rezultat koji ste dobili sa jednog polaganja, koje
          god to bilo uz ovu opciju.Mind you, prve dve opcije postoje i dalje,
          ali nijedna više nije besplatna. Ukoliko želite da šaljete vaše
          rezultate još nekim školama, morate doplatiti za svaku pojedinačno.
          Naš savet je da se odlučite odmah za četiri škole i da pošaljete na
          dan ispita rezultate.
        </p>
      </>
    ),
  },
  {
    heading: "Šta radimo na časovima?",
    text: (
      <>
        <p className="toefl__questions-text">U ProEnglish School ćete:</p>
        <ul className="toefl__questions-text">
          <li>- naučiti primenjive strategije za uspešnu izradu testa</li>
          <li>- učiti kroz pravi, aktuelni materijal za pripremu GMAT</li>
          <li>- proširiti vokabular iz različitih oblasti poslovanja</li>
          <li>- naučiti različite metode čitanja i razumevanja teksta</li>
          <li>- u cenu su uključeni i pripremni časovi matematike</li>
          <li>
            - steći ćete brzinu i rutinu neophodnu da završite test na vreme
          </li>
        </ul>
        Ako imate dodatnih pitanja, ostavite nam poruku{" "}
        <Link href="/kontakt">Ovde</Link>.
      </>
    ),
  },
];
