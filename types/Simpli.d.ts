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

declare enum SimpliTagListenerEventLabel {
    iabImpressionViewed ='iab impression viewed',
    creativeExposeTime = 'creative exposure time',
    creativeEngagement = 'creative engagement',
    creativeRendered = 'creative rendered',
    mainCreativeViewed ='main creative viewed'
}

declare type SimpliTagListenerEvent = {
    assetName: string | null
    eventName: SimpliTagListener
    label: SimpliTagListenerEventLabel
    type: 'standard' | 'custom'
    who: 'auto'
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
        add: (name: SimpliTagListener, callback: (event : SimpliTagListenerEvent) => void ) => void
    }
}
