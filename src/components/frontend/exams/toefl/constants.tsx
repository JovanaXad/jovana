import toeflImg from "public/exams/exams-nav-page/toefl.jpg";
import gmatImg from "public/exams/exams-nav-page/GMAT.jpg";
import Link from "next/link";

export const headingContent = {
  h1: "TOEFL test",
  text: "TOEFL je test znanja engleskog i procenjuje vašu sposobnost da pratite nastavu na engleskom jeziku i da u njoj aktivno učestvujete. Zbog jezika i svrhe, TOEFL se naziva akademskim testom. Radi se o computer-based testu i svaki od delova se radi u posebnom softveru: čak i Speaking deo radite tako što govorite i snimate svoje odgovore, bez sagovornika naspram koga biste sedeli. Zbog toga se TOEFL često naziva i TOEFL Ibt testom, što je skraćenica za Internet Based Test, to je u suštini drugi naziv za isti međunarodni test.TOEFL test je namenjen studentima koji:a) žele da nastave osnovne studije u inostranstvub) upisuju osnovne studije u inostranstvu pa pored SAT testa treba da polažu i TOEFL ili IELTSc) žele da upišu master studije u inostranstvu. Dobro je znati da će vam za upis na biznis ili master studije u oblasti ekonomije biti potreban i GMAT ili GRE test",
  image: toeflImg,
  styles: { background: "#f69059", color: "#f69059" },
};

export const tableSectionContent = {
  tableTitle:
    "Tabela ispod prikazuje od čega se sastoji ispit, a najteži delovi ispita iz iskustva naših studenata su Reading i Speaking delovi ispita.",
  table: {
    theader: ["Deo ispita", "Trajanje", "Broj pitanja / zadataka"],
    rows: [
      ["Reading", "54-72 minuta", " 30-40 pitanja"],
      ["Listening", "41-57 minuta", "28-39 pitanja"],
      ["Pauza", "10 minuta", "--"],
      ["Speaking", "17 minuta", "4 zadatka"],
      ["Writing", "50 minuta", "2 zadatka"],
    ],
  },
  styles: {
    headerStyles: { background: "#f69059", color: "white" },
    rowStyles: { background: "#ffd096", color: "white" },
  },
};

export const tableAndImageSectionContent = {
  text: "Broj poena koji možete da ostvarite na TOEFL testu je maksimalno 120, tj. po 30 na svakom od delova. U zavisnosti od toga da li upisujete osnovne ili master studije, biće potrebno da ostvarite od 79 do 110 poena na TOEFL testu. Najlakši način da precizno i konkretno procenite svoje znanje u odnosu na TOEFL test su besplatne konsultacije. Na taj način eliminišete rizik i odgovorno pristupate svom budućem školovanju. Tabela ispod prikazuje koliko poena možete da dobijete u proseku u zavisnosti od trenutnog nivoa znanja.",
  img: gmatImg,
  table: {
    theader: ["CEFR skala", "TOEFL"],
    rows: [
      ["C2 - Proficiency", "110-120"],
      ["C1 - Advanced", "79-114"],
      ["B2 - Upper-intermediate", "53-93"],
      ["B1 - Intermediate", "35-64"],
      ["A2 - Pre-intermediate", "30-34"],
      ["A1 - Elementary", "0-30"],
    ],
  },
  styles: {
    headerStyles: { background: "#f69059", color: "white" },
    rowStyles: {
      background: "#feefe7",
      color: "black",
      borderTop: "2px solid #ffd096",
      borderBottom: "2px solid #ffd096",
      padding: "2rem 0 2rem 2rem",
    },
  },
};

export const examsQuestionsContent = [
  {
    heading: "Kada i gde mogu da polažem TOEFL test?",
    text: (
      <p className="toefl__questions-text">
        Polaganje TOEFL testa se organizuje 50 puta na godišnjem nivou, a
        mesečno postoje 4 ili više termina, u zavisnosti od meseca. U našem{" "}
        <Link href="/dogadjaji">
          <a>kalendaru</a>
        </Link>{" "}
        pogledajte termine TOEFL 2021. U Beogradu TOEFL test možete polagati na
        tri lokacije, a znaćete koja lokacija je slobodna kada počnete sa
        prijavom za test. U Srbiji, TOEFL test možete da polažete još i u
        Subotici i Nišu. Razlike u težini testa nema, kao ni u načinu
        ocenjivanja. Bitno je da znate za ove dve lokacije jer može da se desi
        da su svi termini u Beogradu popunjeni u trenutku kad odlučite da se
        prijavite za test.
      </p>
    ),
  },
  {
    heading: "Kako se prijavljujem za TOEFL test?",
    text: (
      <p className="toefl__questions-text">
        Za TOEFL test se prijavljujete preko zvaničnog TOEFL sajta. Na{" "}
        <Link href="https://v2.ereg.ets.org/ereg/public/jump?_p=TEL">
          <a>https://v2.ereg.ets.org/ereg/public/jump?_p=TEL</a>
        </Link>{" "}
        početku, budući da ste novi korisnik, treba da napravite svoj nalog na:
        a zatim da pratite uputstva do kraja prijave.Kao i prijava, i uplata se
        vrši preko sajta, i to jednom od kartica za elektronsko plaćanje:
        American Express®, Discover®, JCB®, China Union Pay®, Diners Club®,
        Mastercard®, VISA® ili preko vašeg PayPal® naloga. Aktuelna cena testa
        je 220 američkih dolara. Najbrži i najmanje stresan način je preko
        PayPal naloga. U slučaju da imate poteškoće sa prijavom za test,{" "}
        <Link href="/kontakt">
          <a>obratite nam se</a>
        </Link>{" "}
        – rado ćemo pomoći.Za TOEFL je najbolje da se prijavite mesec dana
        ranije, a naši učenici procesu prijave pristupaju zajedno sa profesorom.
        Ukoliko ima slobodnih mesta, za TOEFL možete da se prijavite najkasnije
        4 dana pre samog testa. Moguća je prijava sa zakašnjenjem, pod uslovom
        da ima slobodnih mesta. U tom slučaju plaćate 40 dolara zbog kašnjenja.
        Na ispit morate da ponesete ličnu kartu i potvrdu da ste se prijavili za
        ispit, a koja vam stiže na mejl kad završite prijavu. Sve ostalo što je
        potrebno ćete dobiti na polaganju.
      </p>
    ),
  },
  {
    heading: "Kada dobijate rezultate TOEFL testa?",
    text: (
      <p className="toefl__questions-text">
        Rezulati TOEFL testa stižu na vaš nalog u proseku 5 radnih dana nakon
        polaganja testa a sertifikat važi 2 godine. U slučaju da ne dobijete
        potreban skor, TOEFL test možete da polažete neograničen broj puta, s
        tim što između dva polaganja mora da prođe 12 dana. Ako se desi da više
        puta polažete ispit jer vam uvek nedostaje nekoliko poena, TEOFL je
        omogućio da kombinujete rezultate sa više polaganja, pod uslovom da ih
        niste polagali u većem vremenskom razmaku od 2 godine. To znači da
        možete da polažete TOEFL više puta, izaberete rezultate koji vam su vam
        najbolji iz više testova, iskombinujete ih i prijavite koristeći MyBest
        Score. Ipak, prijateljsko upozorenje: postoji određeni broj fakulteta
        koji to prihvata. Ako želite da vidite da li je i vaš fakultet među
        njima, pogledajte ovde{" "}
        <Link href="https://www.ets.org/toefl/score-users/scores-admissions/set/mybest-acceptance">
          <a>
            https://www.ets.org/toefl/score-users/scores-admissions/set/mybest-acceptance
          </a>
        </Link>{" "}
        .
      </p>
    ),
  },
  {
    heading: "Ko sve priznaje TOEFL test?",
    text: (
      <p className="toefl__questions-text">
        Ukoliko ste se samostalno upustili u odlazak na studije u inostranstvo,
        verovatno ste stupili u kontakt sa željenim fakultetom i saznali da li
        priznaju TOEFL test i koji broj boena vam je potreban. Ako niste,
        preporučujemo da im pišete, a na ovom linku možete proveriti koje sve
        obrazovne institucije priznaju TOEFL:{" "}
        <Link href="http://www.toeflgoanywhere.org/search-who-accepts-toefl">
          <a>http://www.toeflgoanywhere.org/search-who-accepts-toefl</a>
        </Link>{" "}
        .Treća opcije jeste da pronadjete agencije za studije u inostranstvu i
        da kod njih dodjete do potrebnih informacija. U Beogradu postoji par
        popularnih i iskusnih agencija, pa biste mogli da se obratite i njima za
        konkretnije informacije. Najsigurniji put do potrebnog broja bodova, iz
        iskustva naših polaznika je da se detaljno informišete o testu, utvrdite
        svoj nivo znanja engleskog, saznate koliko vam je poena potrebno i
        bacite se na posao – TOEFL jeste težak i zahteva posvećen rad. Ako imate
        dodatnih pitanja, ostavite nam poruku{" "}
        <Link href="/kontakt">
          <a>ovde</a>
        </Link>{" "}
        .
      </p>
    ),
  },
];
