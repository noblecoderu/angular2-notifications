import { SafeHtml } from '@angular/platform-browser';
import { Subject } from 'rxjs/Subject';
import { NotificationEvent } from './notification-event.type';
import { Notification, NotifyButtons } from './notification.type';
export declare class NotificationsService {
    private emitter;
    private icons;
    set(notification: Notification, to: boolean): Notification;
    getChangeEmitter(): Subject<NotificationEvent>;
    create(title: string, descr: string, icon: SafeHtml, buttons: Array<NotifyButtons>, override?: any): Notification;
    remove(id?: string): void;
}
