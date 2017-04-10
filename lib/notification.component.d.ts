import { OnInit, OnDestroy, NgZone } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Notification } from './notification.type';
import { NotificationsService } from './notifications.service';
export declare class NotificationComponent implements OnInit, OnDestroy {
    private notificationService;
    private domSanitizer;
    private zone;
    timeOut: number;
    showProgressBar: boolean;
    pauseOnHover: boolean;
    clickToClose: boolean;
    maxLength: number;
    theClass: string;
    rtl: boolean;
    animate: string;
    position: number;
    item: Notification;
    progressWidth: number;
    private stopTime;
    private timer;
    private steps;
    private speed;
    private count;
    private start;
    private diff;
    private icon;
    private safeSvg;
    constructor(notificationService: NotificationsService, domSanitizer: DomSanitizer, zone: NgZone);
    ngOnInit(): void;
    startTimeOut(): void;
    onEnter(): void;
    onLeave(): void;
    setPosition(): number;
    onClick($e: MouseEvent): void;
    attachOverrides(): void;
    ngOnDestroy(): void;
    private instance;
    private remove();
    readonly HTML: SafeHtml;
}
