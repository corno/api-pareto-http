import * as pt from "pareto-core-types"
import * as pa from "pareto-core-async"
import { IStreamConsumer } from "../interfaces/x";

import { THTTPError } from "../types/HTTPError"
import { TPath } from "../types/x";


export type PGetResource<ID, DATA> = (
    $: {
        id: ID;
    },
    $i: {
        onNotExists: () => void;
        onFailed: () => void;
        init: () => IStreamConsumer<DATA>;
    },
    $s: pa.StartAsync
) => void


export type PHTTPResource = PGetResource<TPath, string>



export type FCreateHTTPResource = (
    $: {
        readonly "hostName": string,
        readonly "contextPath": TPath,
    },
    $i: {
        readonly onError: ($: THTTPError) => void
    },
) => PHTTPResource
