declare interface SimpliPlacement {
    defaultPlacementHeight: number,
    defaultPlacementWidth: number,
    renderedInTopWindow: boolean,
    iframe: HTMLIFrameElement,
    pivot: HTMLScriptElement,
    wrapper: HTMLDivElement
}

declare enum SimpliTagListener {
    onStandardEventTracked = 'onStandardEventTracked',
    onCustomEventTracked = 'onCustomEventTracked',
    onClickEventTracked = 'onClickEventTracked',
    onVideoEventTracked = 'onVideoEventTracked'
}

declare interface SimpliTag {
    /**
     * Get the tag placement
     */
    vplacement: () => SimpliPlacement,
    /**
     * Object used to add listener to the SimpliTag
     */
    listeners: {
        add: (name: SimpliTagListener, callback: () => void ) => void
    }
}
