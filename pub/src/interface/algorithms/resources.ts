import * as pt from "pareto-core-types"
import { IStreamConsumer } from "../interfaces/x";

import { THTTPError } from "../types/HTTPError"
import { TPath } from "../types/x";

export type XCreator<DATA, ALGORITHMS, INTERFACE> = ($: DATA, $a: ALGORITHMS) => INTERFACE;



export type XResource<ID, DATA> = {
    get: ($: {
        id: ID;
    }, $i: {
        onNotExists: () => void;
        onFailed: () => void;
        init: () => IStreamConsumer<DATA>;
    }) => pt.AsyncNonValue;
};

export type XHTTPResource = XResource<TPath, string>



export type XCreateHTTPResource = XCreator<
    {
        readonly "hostName": string,
        readonly "contextPath": TPath,
    },
    {
        readonly onError: ($: THTTPError) => void
    },
    XHTTPResource
>