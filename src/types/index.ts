import {runInAction, IObservableArray, ObservableMap, observable, IAction} from "mobx"
import {IFactory, IModel} from "../core/factories"
import {createMapFactory} from "./map"
import {createArrayFactory} from "./array"
import {primitiveFactory} from "./primitive"
import {primitiveFactory as primitive} from "./primitive"
import {createModelFactory as struct, composeFactory as extend} from "./object"
import {referenceTo} from "./reference"
import {createUnionFactory as union} from "./union"
import {createDefaultValueFactory as withDefault} from "./with-default"
import {createLiteralFactory as literal} from "./literal"
import {createMaybeFactory as maybe} from "./maybe"
import {createRefinementFactory as refinement} from "./refinement"
import {string, boolean, number} from "./core-types"

/**
 *
 *
 * @export
 * @param {ModelFactory} [subFactory=primitiveFactory]
 * @returns
 */
export function map<S, T>(subFactory: IFactory<S, T> = primitiveFactory as any): IFactory<{[key: string]: S}, ObservableMap<T>> {
    return createMapFactory(subFactory) as any
}

/**
 *
 *
 * @export
 * @param {ModelFactory} [subFactory=primitiveFactory]
 * @returns
 */
export function array<S, T>(subFactory: IFactory<S, T> = primitiveFactory as any): IFactory<T[], IObservableArray<T>> {
    return createArrayFactory(subFactory as any) as any
}

export const types = {
    primitive,
    struct,
    extend,
    referenceTo,
    union,
    withDefault,
    literal,
    maybe,
    refinement,
    string,
    boolean,
    number,
    map,
    array
}