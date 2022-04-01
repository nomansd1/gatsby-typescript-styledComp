import * as React from "react"
import {Banner} from "../components/Banner"
import InfoGrid from "../components/InfoGrid";

import GlobalFonts from '../global';

// markup
const IndexPage = () => {
  return (
    <main>
      <GlobalFonts/>
      <Banner/>
      <InfoGrid/>
    </main>
  )
}

export default IndexPage
