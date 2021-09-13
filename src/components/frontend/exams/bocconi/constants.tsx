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
  h1: "Bocconi test",
  text: undefined,
  image: undefined,
  styles: { background: "#5d1be3", color: "#5d1be3" },
};

export const examsTextContent = [
  {
    heading: "Analytical Writing – Pisanje eseja ",
    text: (
      <>
        <p className="toefl__questions-text">
          Bocconi test se radi online i traje 75 minuta u toku kojih treba da
          odgovorite na 50 pitanja. Pitanja su različite težine i izmešana su,
          tako da će vam za neka trebati nekoliko sekundi, a za druga minut ili
          više. Sam test se sastoji od pitanja na zaokruživanje (multiple choice
          pitanja sa 5 ponuđenih odgovora). Ovim testom se vrši selekcija
          kandidata za osnovne studije, a glavni kriterijumi koji se ocenjuju na
          testu jesu sposobnost kritičkog mišljenja, rešavanje problema i
          sposobnost organizacije i fleksibilnosti u odgovaranju na veliki broj
          pitanja za kratko vreme. Prema kreatorima testa, to su veštine koje su
          neophodne za pohađanje studija i akademski uspeh je određen ovim
          sposobnostima. Bocconi test je namenjen onima koji žele da pohađaju
          osnovne studije isključivo na Luigi Bocconi univerzitetu. Ovaj test
          nije obavezan za upis na Bocconi, ali ako želite da povećate svoje
          šanse, treba da ga polažete. Ako ne, umesto njega možete da polažete
          SAT test. Ukoliko planirate da studirate na engleskom, verovatno će
          vam biti potreban SAT, TOEFL i/ili IELTS test.
        </p>

        <p className="toefl__questions-text">
          Prijava se vrši preko agencije za studije u inostranstvu ili lično,
          online. Bocconi organizuje ovaj test za mlade talente, odnosno učenike
          koji su treći razred srednje škole, ambiciozni su i žele da upiši
          Bocconi univerzitet, a o tome možete da pročitate više{" "}
          <Link href="https://www.unibocconi.eu/wps/wcm/webinterface/login/login.jsp?https://www.unibocconi.eu/wps/wcm/connect/bocconi/sitopubblico_en/navigation+tree/home/programs/bachelor+of+science/application+and+admission/bachelor+programs+a.y.+2020-21/timeline/when+to+apply+for+a+bachelor+program.">
            na ovom linku.
          </Link>
        </p>

        <p className="toefl__questions-text">
          Po pitanju bodovanja Bocconi testa, važno je odgovoriti na sva pitanja
          u testu i u datom vremenu preneti tačne odgovore na poseban papir
          (answer sheet) sa obeleženim mestima za odgovore. Za neka pitanja je
          dovoljno minut ili manje, za neka više od toga, tako da je vreme
          velika prepreka u postizanju uspeha na testu. Svaki tačan odgovor nosi
          jedan poen, nema negativnih poena za pitanja koja preskočite, a za
          svaki netačan odgovor se oduzima 0.2 poena. Da bi se smanjila
          mogućnost varanja na testu, pitanja su različito raspoređena na svakom
          testu. Oblasti koje pokriva Bocconi test: 1. Logičko razmišljanje i
          zaključivanje na osnovu datih informacija (15 pitanja)2. Matematika
          (15 pitanja)3. Razumevanje pročitanog teksta (13 pitanja)4. Numeričko
          razmišljanje i zaključivanje na osnovu datih numeričkih podataka (7
          pitanja)Primer Bocconi testa možete da preuzmete na sledećem{" "}
          <Link href="https://www.unibocconi.eu/ErrorPage/404.html">
            linku.
          </Link>{" "}
        </p>
        <p className="toefl__questions-text">
          Nažalost, za pripremu za Bocconi test ne postoje zvanični udžbenici,
          ali postoje preporuke i iskustvo polaznika. Naši polaznici su uspešno
          položili test i upisali se na Bocconi u predroku, verujemo da je ono
          što smo njih naučili ključ za polaganje ovog testa. Sa nama ćete
          naučiti strategije čitanja na tekstovima sličnim onima koji su deo
          Bocconi testa i na taj način se ubrzati da biste odgovorili na sva
          pitanja. Sav materijal koji je uključen u cenu časova tematski pokriva
          teme engleskog dela testa i omogućava vam da unapred znate šta da
          očekujete i kako da rešite gramatičke zadatke i one vezane za
          vokabular i kritičko rezonovanje.
        </p>
      </>
    ),
  },
  {
    heading: "Matematički deo testa",
    text: (
      <>
        <p className="toefl__questions-text">
          Matematički deo Bocconi testa obuhvata razumevanje statističkih
          informacija, rešavanje jednačina prvog i drugog stepena, probleme
          verovatnoće, kalkulus, razumevanje dijagrama i rešavanje zadataka iz
          geometrije. Sa našim profesorom matematike ćete naučiti kako da
          rešavate vrstu zadataka koju ćete imati na testu i pripremićete za
          test. Materijal koji se koristi je na engleskom i fokusira se
          isključivo na matematičke oblasti koje Bocconi test proverava.Pozovite
          nas i zakažite besplatne konsultacije i počnite sa pripremama. Cene
          pripreme za Bocconi pogledajte <Link href="/cenovnik">ovde.</Link> Ako
          imate dodatnih pitanja, ostavite nam poruku{" "}
          <Link href="/kontakt">ovde.</Link>
        </p>
      </>
    ),
  },
];
