// @ts-ignore
import FeedData from 'FeedData' assert { type: 'json' }

interface Product {
    id: number;
    sku?: string;
    title: string;
    url: string;
    image: string;
    price: number;
}

type GWDEventType = 'pageload' | 'action'

interface GWD {
    actions?: {
        gwdGenericad: {
            goToPage: (type: string, page: string, b: string, w: number, z: string, p: string) => void
        },
        events: {
            addHandler: (id: string, type: GWDEventType, callback: (e: CustomEvent<any>) => void, u: boolean) => void
        }
    }
}

interface PSFeedContainers {
    title: string;
    image: string;
    price: string;
    cta: string;
    thumbnail: string;
    open: string;
    close: string;
}

class PSFeeder {
    private $tracked: Array<string> = [];
    private $mainPageId: string = '';
    private $gwd: GWD = {};
    private $products: Product[] = [];
    private $containers: PSFeedContainers = { title: '', image: '', price: '', cta: '', thumbnail: '', open: '', close: '' }

    constructor(mainPageId: string) {
        this.$mainPageId = mainPageId
        this.$gwd = (<any>window).gwd
    }


    static get isGWDAvailable(): boolean {
        return (<any>window).gwd && typeof (<any>window).gwd?.actions?.events?.addHandler !== 'undefined'
    }

    static get isAirtoryAvailable(): boolean {
        return (<any>window).airtory && typeof (<any>window).airtory?.track !== 'undefined'
    }

    static get isSimpliAvailable(): boolean {
        return (<any>window).__simpli && typeof (<any>window).__simpli.analytics !== 'undefined'
    }

    static prefixes(): PSFeedContainers {
        return { title: '', image: '', price: '', cta: '', thumbnail: '', open: '', close: '' }
    }

    static validate(): void {

        if (!this.isGWDAvailable) {

            throw new TypeError('PS-FEEDER: Google Web Designer must be initialized before use this script.')

        }

        if (!this.isAirtoryAvailable) {

            throw new TypeError('PS-FEEDER: The Airtory library must be loaded before the feeder script.')

        }

        if (!this.isSimpliAvailable) {

            throw new TypeError('PS-FEEDER: The Airtory library must be loaded before the feeder script.')

        }
    }

    sync(): Product[] {
        this.$products = (FeedData as Product[]).map((product, index) => ({ ...product, id: index + 1 }) as Product)
        return this.products
    }

    static make(
        mainPageId: string,
        builder?: (feeder: PSFeeder) => void,
        prefix?: PSFeedContainers
    ): PSFeeder {

        PSFeeder.validate()

        const feeder = new PSFeeder(mainPageId)

        if (typeof builder === 'undefined') {
            builder = (feeder) => {
                feeder.products.forEach((product) => {
                    feeder.feed(`${feeder.$mainPageId}_${product.id}`, product.id)
                })
            }
        }


        if (!prefix) {
            prefix = PSFeeder.prefixes()
        }

        prefix.cta = prefix.cta || 'exit_url_product_'
        prefix.image = prefix.image || 'image_product_'
        prefix.price = prefix.price || 'price_product_'
        prefix.title = prefix.title || 'title_product_'
        prefix.open = prefix.open || 'open_product_'
        prefix.close = prefix.close || 'close_product_'
        prefix.thumbnail = prefix.thumbnail || 'thumbnail_product_'

        feeder
            .useContainerPrefixForCTA(prefix.cta)
            .useContainerPrefixForImage(prefix.image)
            .useContainerPrefixForPrice(prefix.price)
            .useContainerPrefixForTitle(prefix.title)
            .useContainerPrefixForThumbnail(prefix.thumbnail)
            .useContainerPrefixForOpen(prefix.open)
            .useContainerPrefixForClose(prefix.close)
            .initialize(builder)

        return feeder
    }

    static trackOnAirtory(label: string): void {
        (<any>window).airtory.track(label);
    }

    static trackInteraction(label: string, asset: string): void {

        PSFeeder.trackOnAirtory(label);

        (<any>window).__simpli
            .analytics()
            .trackCustomEvent(label, asset, false);
    }

    static trackInteractionClick(label: string, asset: string, url: string): void {

        PSFeeder.trackOnAirtory(label);

        (<any>window).__simpli
            .analytics()
            .trackClickEvent(label, asset, url)
    }

    static preload(products: Product[]): void {

        products.forEach((product) => {
            const link = document.createElement('link')
            link.setAttribute('rel', 'preload')
            link.setAttribute('type', `image/${product.image.substring(product.image.lastIndexOf('.') + 1).toLocaleLowerCase()}`)
            link.setAttribute('crossorigin', "true")
            link.setAttribute('href', product.image)
            link.setAttribute('as', 'image')
            document.head.appendChild(link)
        })

    }

    initialize(callback: (feeder: PSFeeder) => void): PSFeeder {
        
        this.sync()

        this.onGWDPageLoad(this.$mainPageId, (e: CustomEvent<any>) => this.feedMainPage(e))
        
        this.products.forEach((product) => {
            this.feed(`${this.$mainPageId}_${product.id}`, product.id)
        })

        callback(this)

        return this
    }

    get products(): Product[] {
        return this.$products
    }

    useContainerPrefixForPrice(prefix: string): PSFeeder {
        this.$containers.price = prefix
        return this
    }

    useContainerPrefixForTitle(prefix: string): PSFeeder {
        this.$containers.title = prefix
        return this
    }

    useContainerPrefixForImage(prefix: string): PSFeeder {
        this.$containers.image = prefix
        return this
    }

    useContainerPrefixForCTA(prefix: string): PSFeeder {
        this.$containers.cta = prefix
        return this
    }

    useContainerPrefixForThumbnail(prefix: string): PSFeeder {
        this.$containers.thumbnail = prefix
        return this
    }

    useContainerPrefixForOpen(prefix: string): PSFeeder {
        this.$containers.open = prefix
        return this
    }

    useContainerPrefixForClose(prefix: string): PSFeeder {
        this.$containers.close = prefix
        return this
    }

    feedProductImage(gwdPage: HTMLElement, product: Product, containerPrefix: string): PSFeeder {

        const image = gwdPage.querySelector(`#${containerPrefix}${product.id} img`) as HTMLImageElement;

        image.src = product.image

        image.style.backgroundImage = `url(${product.image})`

        return this
    }

    feedProductTitle(gwdPage: HTMLElement, product: Product, containerPrefix: string): PSFeeder {

        const element = gwdPage.querySelector(`#${containerPrefix}${product.id}`) as HTMLParagraphElement

        element.textContent = product.title

        return this
    }

    feedProductPrice(gwdPage: HTMLElement, product: Product, containerPrefix: string): PSFeeder {

        const element = gwdPage.querySelector(`#${containerPrefix}${product.id}`) as HTMLParagraphElement

        element.textContent = product.price.toString()

        return this
    }

    feedProductTrackers(page: HTMLElement, product: Product): PSFeeder {
        return this
            .feedProductTrackerOpen(page, product)
            .feedProductTrackerClose(page, product)
            .feedProductTrackerCTA(page, product)

    }

    feedProductTrackerClose(element: HTMLElement, product: Product): PSFeeder {

        const label = `${this.$containers.close}${product.id}`;

        if (this.$tracked.indexOf(label) > -1) {
            return this
        }

        this.$tracked.push(label)

        return this.onGWDAction(label, () => {

            PSFeeder.trackInteraction(`user_tap_close_product_${product.id}`, element.id)

            PSFeeder.trackOnAirtory(`auto_tap_close_product_${product.sku}`)

            // Close the page and return to the main page
            this.$gwd?.actions?.gwdGenericad.goToPage('gwd-ad', this.$mainPageId, 'none', 300, 'linear', 'top');

        })

    }

    feedProductTrackerOpen(element: HTMLElement, product: Product): PSFeeder {

        const label = `${this.$containers.open}${product.id}`;

        if (this.$tracked.indexOf(label) > -1) {
            return this
        }

        this.$tracked.push(label)

        return this.onGWDAction(label, () => {

            PSFeeder.trackInteraction(`user_tap_open_product_${product.id}`, element.id)

            PSFeeder.trackOnAirtory(`auto_tap_open_product_${product.sku}`)

            // Open the page selected
            this.$gwd?.actions?.gwdGenericad.goToPage('gwd-ad', `${this.$mainPageId}_${product.id}`, 'none', 300, 'linear', 'top');
        })

    }

    feedProductTrackerCTA(element: HTMLElement, product: Product): PSFeeder {

        const label = `${this.$containers.cta}${product.id}`;

        if (this.$tracked.indexOf(label) > -1) {
            return this
        }

        this.$tracked.push(label)

        return this.onGWDAction(label, () => {

            PSFeeder.trackInteractionClick(`user_tap_exitUrl_product_${product.id}`, element.id, product.url)

            PSFeeder.trackOnAirtory(`auto_tap_exitUrl_product_${product.sku}`)

        })
    }

    feedMainPage({ target }: CustomEvent<{ target: HTMLElement }>): void {

        this.products.forEach((product) => {

            this
                .feedProductImage(target as HTMLElement, product, this.$containers.thumbnail)
                .feedProductTrackers(target as HTMLElement, product)

        })

    }


    feed(pageId: string, withProductNumber: number): void {

        this.onGWDPageLoad(pageId, () => {

            let index = withProductNumber - 1;

            const page = document.getElementById(pageId) as HTMLElement

            if (!page) {
                throw new TypeError('PS-FEEDER: Invalid GWD page ID.')
            }

            if (!withProductNumber) {
                throw new TypeError('PS-FEEDER: The product offset is required to feed.')
            }

            if (index < 0 || index > this.products.length || typeof this.products[index] === 'undefined') {
                throw new TypeError('PS-FEEDER: Invalid product offset or not exists.')
            }

            const product = this.products[index]

            this
                .feedProductImage(page, product, this.$containers.image)
                .feedProductTitle(page, product, this.$containers.title)
                .feedProductPrice(page, product, this.$containers.price)
                .feedProductTrackers(page, product)
        })
    }


    onGWDPageLoad(pageId: string, callback: (e: CustomEvent<any>) => void): PSFeeder {

        return this.on(pageId, 'pageload', callback)
    }

    onGWDAction(targetId: string, callback: (e?: CustomEvent<any>) => void): PSFeeder {
        return this.on(targetId, 'action', callback)
    }

    on(gwdElementId: string, gwdEventType: GWDEventType = 'action', callback: (e: CustomEvent<any>) => void): PSFeeder {

        this.$gwd?.actions?.events.addHandler(gwdElementId, gwdEventType, callback, false)

        document.addEventListener("unload", () => callback({} as CustomEvent));

        return this
    }
}


const script: HTMLScriptElement = document.getElementById('ps-feeder') as HTMLScriptElement;

PSFeeder.make(script.dataset?.mainPage?.toString() || 'main_page')
