import {  QueryClientConfig } from '@tanstack/react-query';


export const queryClientOptions : QueryClientConfig  = {
    defaultOptions : {
        queries : {
            // refetchOnWindowFocus: false
        }
    }
}

