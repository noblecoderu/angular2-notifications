import { EventEmitter, Type } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

/**
 * Интерфейс описания кнопок в уведомлениях
 */
export interface NotifyButtons {
    /**
     * Название кнопки
     */
    title: string;
    /**
     * Функция действия при нажатии на кнопку
     */
    action?:  Function;
    /**
     * Ссылка
     */
    link?: string[]
}

export interface Notification {
    id?: string
    icon?: SafeHtml
    title?: string
    descr?: string
    buttons?: Array<NotifyButtons>
    override?: any
    state?: string
    createdOn?: Date
    destroyedOn?: Date
    animate?: string
    timeOut?: number
    maxLength?: number
    pauseOnHover?: boolean
    clickToClose?: boolean
    theClass?: string[];
}
