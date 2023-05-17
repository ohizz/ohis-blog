import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
       <Head> 
       <link href="https://fonts.googleapis.com/css2?family=BhuTuka+Expanded+One&family=Bruno+Ace&family=Hanken+Grotesk:wght@200;300;400;600&family=Inter+Tight:wght@200;400;500;600;700&family=Montserrat:ital,wght@0,200;0,400;0,700;0,800;0,900;1,100;1,500&family=Nixie+One&family=Play:wght@400;700&family=Red+Hat+Mono:wght@300;400;500;600;700&family=Sora:wght@200;300;400;500;600;700;800&family=Unbounded:wght@200;300;400;500;600;700;800;900&family=Wix+Madefor+Display:wght@400;500;600;700;800&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
