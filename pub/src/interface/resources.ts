import * as pt from "pareto-core-types"

import { HTTPError } from "./types/HTTPError"

export type StreamConsumer<DATA> = {
    onData: ($: DATA) => void;
    onEnd: () => void;
};


export type Creator<DATA, ALGORITHMS, INTERFACE> = ($: DATA, $a: ALGORITHMS) => INTERFACE;



export type Resource<ID, DATA> = {
    get: ($: {
        id: ID;
    }, $i: {
        onNotExists: () => void;
        onFailed: () => void;
        init: () => StreamConsumer<DATA>;
    }) => pt.AsyncNonValue;
};


export type Path = pt.Nested<string>

export type HTTPResource = Resource<Path, string>

export type CreateHTTPResource_Data = {
    hostName: string,
    contextPath: Path,
}

export type CreateHTTPResource_Algorithms = {
    onError: ($: HTTPError) => void
}

export type CreateHTTPResource = Creator<
    CreateHTTPResource_Data,
    CreateHTTPResource_Algorithms,
    HTTPResource 
>