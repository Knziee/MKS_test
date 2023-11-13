import React from "react";
import { AppProps } from "next/app";
import { ReactQueryProvider } from "../utils/providers/react-query";
import GlobalStyles from "../utils/GlobalStyles";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ReactQueryProvider>
            <GlobalStyles />
            <main className={montserrat.className}>
                <Component {...pageProps} />
            </main>
        </ReactQueryProvider>
    );
};

export default MyApp;
