import React from "react";
import { AppProps } from "next/app";
import { ReactQueryProvider } from "../utils/providers/react-query";
import GlobalStyles from "../utils/GlobalStyles";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ReactQueryProvider>
            <GlobalStyles />
            <Component {...pageProps} />
        </ReactQueryProvider>
    );
};

export default MyApp;
