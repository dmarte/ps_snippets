import { PsServiceProviderContext, PsServiceProviderInterface } from "../Definitions/index";
export default class implements PsServiceProviderInterface {
    boot(context: PsServiceProviderContext): void;
    register({ container, parameters }: PsServiceProviderContext): void;
}
