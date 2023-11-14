import React from "react";
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { ShoppingCartProvider } from "../utils/providers/contextApi";
import { ReactQueryProvider } from "../utils/providers/react-query";
import GlobalStyles from "../utils/GlobalStyles";

const montserrat = Montserrat({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ReactQueryProvider>
            <GlobalStyles />
            <ShoppingCartProvider>
                <main className={montserrat.className}>
                    <Component {...pageProps} />
                </main>
            </ShoppingCartProvider>
        </ReactQueryProvider>
    );
};

export default MyApp;
