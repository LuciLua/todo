import DialogProvider from '../contexts/DialogBoxContext'
import TotalProvider from '../contexts/TotalContext'
import '../style/globals.scss'

function App({ Component, pageProps }) {
    return (
        <>
            <DialogProvider>
                <TotalProvider>
                    <Component {...pageProps} />
                </TotalProvider>
            </DialogProvider>
        </>
    )
}

export default App