import { EventEmitter, Type } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export interface Notification {
    id?: string
    icon?: SafeHtml
    title?: string
    descr?: string
    buttons?: {title: string, action?: Function, link?: string}[]
    override?: any
    state?: string
    createdOn?: Date
    destroyedOn?: Date
    animate?: string
    timeOut?: number
    maxLength?: number
    pauseOnHover?: boolean
    clickToClose?: boolean
    theClass?: string;
}
