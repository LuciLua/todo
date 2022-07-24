import DialogProvider from '../contexts/DialogBoxContext'
import TotalProvider from '../contexts/TotalContext'
import '../style/globals.scss'

function App({ Component, pageProps }) {
    return (
        <>
            <TotalProvider>
                <DialogProvider>
                    <Component {...pageProps} />
                </DialogProvider>
            </TotalProvider>
        </>
    )
}

export default App