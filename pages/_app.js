
// acts as the root component
// can set the layout and nav bar in here

import Layout from '../components/layout/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
