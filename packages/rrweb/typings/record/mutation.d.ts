import { mutationRecord, MutationBufferParam } from '../types';
export default class MutationBuffer {
    private frozen;
    private locked;
    private texts;
    private attributes;
    private removes;
    private mapRemoves;
    private movedMap;
    private addedSet;
    private movedSet;
    private droppedSet;
    private mutationCb;
    private blockClass;
    private blockSelector;
    private unblockSelector;
    private maskTextClass;
    private maskTextSelector;
    private unmaskTextSelector;
    private maskInputSelector;
    private unmaskInputSelector;
    private inlineStylesheet;
    private maskAllText;
    private maskInputOptions;
    private maskTextFn;
    private maskInputFn;
    private recordCanvas;
    private inlineImages;
    private slimDOMOptions;
    private doc;
    private mirror;
    private iframeManager;
    private shadowDomManager;
    private canvasManager;
    init(options: MutationBufferParam): void;
    freeze(): void;
    unfreeze(): void;
    isFrozen(): boolean;
    lock(): void;
    unlock(): void;
    reset(): void;
    processMutations: (mutations: mutationRecord[]) => void;
    emit: () => void;
    private processMutation;
    private genAdds;
}
