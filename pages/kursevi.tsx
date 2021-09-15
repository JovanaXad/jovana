import Head from "next/head";
import React from "react";
import { Course } from "src/components/frontend";

const kursevi = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Najpotpuniji pokazatelj znanja jezika (language competence) je test koji obuhvata sve četiri jezičke veštine (Reading, Listening, Writing i Speaking). Takva procena znanja traje najmanje 3 sata i tome služe međunarodni ispiti. Ono što je najrelevantnije za obrazovanu poslovnu osobu koja uči engleski (dakle, tebe) jeste realna i pouzdana procena nivoa Speaking i Writing pošto kurs treba da bude osmišljen tako da vam ove veštine napreduju. Verovatno dobro razumete ono što pročitate, možete da gledate filmove bez prevoda ili slušate muziku, ali ne umete da se izrazite pismeno ni usmeno. Ako odete na kurs koji insistira na ovim veštinama, dobićete ono što ne tražite i što već imate. To ljudi rade godinama i zato su uvek na istom nivou."
        />
      </Head>
      <Course />
    </>
  );
};

export default kursevi;
