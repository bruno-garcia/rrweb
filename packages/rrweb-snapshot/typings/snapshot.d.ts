import { serializedNodeWithId, INode, idNodeMap, MaskInputOptions, SlimDOMOptions, DataURLOptions, MaskTextFn, MaskInputFn, KeepIframeSrcFn } from './types';
export declare const IGNORED_NODE = -2;
export declare function validateStringifiedCssRule(cssStringified: string): string;
export declare function absoluteToStylesheet(cssText: string | null, href: string): string;
export declare function absoluteToDoc(doc: Document, attributeValue: string): string;
export declare function transformAttribute(doc: Document, element: HTMLElement, _tagName: string, _name: string, value: string | null, maskAllText: boolean, unmaskTextSelector: string | undefined | null, maskTextFn: MaskTextFn | undefined): string | null;
export declare function _isBlockedElement(element: HTMLElement, blockClass: string | RegExp, blockSelector: string | null, unblockSelector: string | null): boolean;
export declare function needMaskingText(node: Node | null, maskTextClass: string | RegExp, maskTextSelector: string | null, unmaskTextSelector: string | null, maskAllText: boolean): boolean;
export declare function serializeNodeWithId(n: Node | INode, options: {
    doc: Document;
    map: idNodeMap;
    blockClass: string | RegExp;
    blockSelector: string | null;
    unblockSelector: string | null;
    maskTextClass: string | RegExp;
    maskTextSelector: string | null;
    unmaskTextSelector: string | null;
    skipChild: boolean;
    inlineStylesheet: boolean;
    maskInputSelector: string | null;
    unmaskInputSelector: string | null;
    maskAllText: boolean;
    maskInputOptions?: MaskInputOptions;
    maskTextFn: MaskTextFn | undefined;
    maskInputFn: MaskInputFn | undefined;
    slimDOMOptions: SlimDOMOptions;
    dataURLOptions?: DataURLOptions;
    keepIframeSrcFn?: KeepIframeSrcFn;
    inlineImages?: boolean;
    recordCanvas?: boolean;
    preserveWhiteSpace?: boolean;
    onSerialize?: (n: INode) => unknown;
    onIframeLoad?: (iframeINode: INode, node: serializedNodeWithId) => unknown;
    iframeLoadTimeout?: number;
}): serializedNodeWithId | null;
declare function snapshot(n: Document, options?: {
    blockClass?: string | RegExp;
    blockSelector?: string | null;
    unblockSelector?: string | null;
    maskTextClass?: string | RegExp;
    maskTextSelector?: string | null;
    unmaskTextSelector?: string | null;
    maskInputSelector?: string | null;
    unmaskInputSelector?: string | null;
    inlineStylesheet?: boolean;
    maskAllText?: boolean;
    maskAllInputs?: boolean | MaskInputOptions;
    maskTextFn?: MaskTextFn;
    maskInputFn?: MaskTextFn;
    slimDOM?: boolean | SlimDOMOptions | 'all';
    dataURLOptions?: DataURLOptions;
    inlineImages?: boolean;
    recordCanvas?: boolean;
    preserveWhiteSpace?: boolean;
    onSerialize?: (n: INode) => unknown;
    onIframeLoad?: (iframeINode: INode, node: serializedNodeWithId) => unknown;
    iframeLoadTimeout?: number;
    keepIframeSrcFn?: KeepIframeSrcFn;
}): [serializedNodeWithId | null, idNodeMap];
export declare function visitSnapshot(node: serializedNodeWithId, onVisit: (node: serializedNodeWithId) => unknown): void;
export declare function cleanupSnapshot(): void;
export default snapshot;
