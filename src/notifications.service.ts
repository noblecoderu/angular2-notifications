import {Injectable, EventEmitter, Type} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {Subject} from 'rxjs/Subject';
import {NotificationEvent} from './notification-event.type';
import {Notification, NotifyButtons} from './notification.type';
import {Icons, defaultIcons} from './icons';

@Injectable()
export class NotificationsService {

  private emitter: Subject<NotificationEvent> = new Subject<NotificationEvent>();
  private icons: Icons = defaultIcons;

  set(notification: Notification, to: boolean) {
    notification.id = notification.override && notification.override.id ? notification.override.id : Math.random().toString(36).substring(3);
    this.emitter.next({command: 'set', notification: notification, add: to});
    return notification;
  };

  getChangeEmitter() {
    return this.emitter;
  }

  /**
   * Создание уведомления
   * @param title Заголовок всплывающего окна
   * @param descr Текстовое описание
   * @param icon Icon
   * @param buttons Список действий
   * @param override Переопределение глобальных настроек 
   */
  create(title: string, descr: string, icon: SafeHtml, buttons: Array<NotifyButtons>,  override?: any) {
    return this.set({title: title, descr: descr, icon: icon, buttons: buttons, override: override}, true);
  }

  // Remove all notifications method
  remove(id?: string) {
    if (id) this.emitter.next({command: 'clean', id: id});
    else this.emitter.next({command: 'cleanAll'});
  }

}
