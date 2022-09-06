import * as pt from "pareto-core-types"
import { IStreamConsumer } from "../interfaces/x";

import { THTTPError } from "../types/HTTPError"
import { TPath } from "../types/x";


export type PHTTPResource = (
    $: {
        readonly "id": TPath;
    },
    $i: {
        readonly "onNotExists": () => void;
        readonly "onFailed": () => void;
        readonly "init": () => IStreamConsumer<string>;
    },
    $a: pt.ProcessAsyncValue
) => void



export type FCreateHTTPResource = (
    $: {
        readonly "hostName": string,
        readonly "contextPath": TPath,
    },
    $i: {
        readonly onError: ($: THTTPError) => void
    },
) => PHTTPResource
