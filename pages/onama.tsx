import Head from "next/head";
import React from "react";
import { About } from "src/components/frontend";

const AboutPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="ProEnglish predstavlja pokret i preokret u učenju engleskog jezika i ostvarenje je našeg sna da se sa engleskog skloni veo mističnosti i ružna reputacija koju su stvorile godine pogrešnog pristupa nastavi jezika u formalnom obrazovnom sistemu. Mi nismo obična škola niti imamo obične učionice: naši stolovi su posebno dizajnirani kako biste ostvarili lakšu komunikaciju, mi učenike vodimo na mesta gde mogu da vežbaju engleski u realnom kontekstu, sa učenicima pevamo karaoke na engleskom i učestvujemo na projektima važnim za zajednicu.

          Naša misija je da engleski učinimo delom vašeg života, a ne obavezom koju imate 2, 3 puta nedeljno u određenim terminima. Mi vas učimo engleski koji nećete zaboraviti jer ga učite kroz iskustva koja su za vas bitna. Zato što su ta iskustva bitna i za nas, mi ne smatramo ovo poslom kojim se bavimo od 9 do 5 da bismo zaradili. Engleski je naš svestan izbor i ljubav koja teži da sve promeni na bolje."
        />
      </Head>
      <About />
    </>
  );
};

export default AboutPage;
