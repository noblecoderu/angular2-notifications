import { EventEmitter, Type } from '@angular/core';

export interface Notification {
    id?: string
    type: string
    icon: string
    title?: string
    content?: string
    override?: any
    state?: string
    createdOn?: Date
    destroyedOn?: Date
    animate?: string
    timeOut?: number
    maxLength?: number
    pauseOnHover?: boolean
    clickToClose?: boolean
    theClass?: string
    component?: Type<any>
    click?: EventEmitter<{}>;
}
