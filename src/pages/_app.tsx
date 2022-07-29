import Head from 'next/head'
import DialogProvider from '../contexts/DialogBoxContext'
import TotalProvider from '../contexts/TotalContext'
import '../style/globals.scss'

function App({ Component, pageProps }) {
    return (
        <>
            <TotalProvider>
                <DialogProvider>
                    <Head>
                        <title>To Do List</title>
                    </Head>
                    <Component {...pageProps} />
                </DialogProvider>
            </TotalProvider>
        </>
    )
}

export default App