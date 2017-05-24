import { SafeHtml } from '@angular/platform-browser';
export interface NotifyButtons {
    title: string;
    action?: Function;
    link?: string[];
}
export interface Notification {
    id?: string;
    icon?: SafeHtml;
    title?: string;
    descr?: string;
    buttons?: Array<NotifyButtons>;
    override?: any;
    state?: string;
    createdOn?: Date;
    destroyedOn?: Date;
    animate?: string;
    timeOut?: number;
    maxLength?: number;
    pauseOnHover?: boolean;
    clickToClose?: boolean;
    theClass?: string[];
}
