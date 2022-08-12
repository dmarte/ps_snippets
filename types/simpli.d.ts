interface SimpliInstance {
    isPreview: boolean
}

declare global {
    interface Window {
        __simpli: SimpliInstance
    }
}

export {}