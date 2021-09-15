import Head from "next/head";
import React from "react";
import { Gmat } from "src/components/frontend";

const GmatPage: React.FC = (): JSX.Element => (
  <>
    <Head>
      <meta
        name="description"
        content="GMAT je standardizovani test engleskog jezika namenjen onima koji planiraju da pohadjaju master ili doktorske studije u inostranstvu. Najčešće je potreban za upis MBA studija (Masters of Business Administration), a njime se procenjuje znanje u oblasti menadžmenta i poslovanja. Rezultati ispita važe 5 godina i možete sa njima da aplicirate na više programa. Rezultati ispita važe 5 godina i možete sa njima da aplicirate na više programa."
      />
    </Head>
    <Gmat />
  </>
);

export default GmatPage;
