import {Component, OnInit, OnDestroy, Input, ViewEncapsulation, NgZone} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {Notification} from './notification.type';
import {NotificationsService} from './notifications.service';

@Component({
    selector: 'simple-notification',
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('enterLeave', [

            // Enter from right
            state('fromRight', style({opacity: 1, transform: 'translateX(0)'})),
            transition('* => fromRight', [
                style({opacity: 0, transform: 'translateX(5%)'}),
                animate('400ms ease-in-out')
            ]),
            state('fromRightOut', style({opacity: 0, transform: 'translateX(-5%)'})),
            transition('fromRight => fromRightOut', [
                style({opacity: 1, transform: 'translateX(0)'}),
                animate('300ms ease-in-out')
            ]),

            // Enter from left
            state('fromLeft', style({opacity: 1, transform: 'translateX(0)'})),
            transition('* => fromLeft', [
                style({opacity: 0, transform: 'translateX(-5%)'}),
                animate('400ms ease-in-out')
            ]),
            state('fromLeftOut', style({opacity: 0, transform: 'translateX(5%)'})),
            transition('fromLeft => fromLeftOut', [
                style({opacity: 1, transform: 'translateX(0)'}),
                animate('300ms ease-in-out')
            ]),

            // Rotate
            state('scale', style({opacity: 1, transform: 'scale(1)'})),
            transition('* => scale', [
                style({opacity: 0, transform: 'scale(0)'}),
                animate('400ms ease-in-out')
            ]),
            state('scaleOut', style({opacity: 0, transform: 'scale(0)'})),
            transition('scale => scaleOut', [
                style({opacity: 1, transform: 'scale(1)'}),
                animate('400ms ease-in-out')
            ]),

            // Scale
            state('rotate', style({opacity: 1, transform: 'rotate(0deg)'})),
            transition('* => rotate', [
                style({opacity: 0, transform: 'rotate(5deg)'}),
                animate('400ms ease-in-out')
            ]),
            state('rotateOut', style({opacity: 0, transform: 'rotate(-5deg)'})),
            transition('rotate => rotateOut', [
                style({opacity: 1, transform: 'rotate(0deg)'}),
                animate('400ms ease-in-out')
            ])
        ])
    ],
    template: `
        <div class="simple-notification"
            [@enterLeave]="item.state"
            (click)="onClick($event)"
            [ngClass]="theClass"

            (mouseenter)="onEnter()"
            (mouseleave)="onLeave()">

            <div class="b-notification">
                <div class="b-notification__body">
                    <div class="b-notification__icon" [innerHTML]="item.icon"></div>
                    <div class="b-notification__content">
                        <div class="b-notification__title">{{ item.title }}</div>
                        <div class="b-notification__descr">{{ item.descr }}</div>
                    </div>
                </div>
                <div class="b-notification__footer" *ngIf="item.buttons && item.buttons.length > 0">
                    <ng-template ngFor let-btn [ngForOf]="item.buttons">
                        <a class="b-notification__button" *ngIf="btn.action" (click)="btn.action();">{{ btn.title }}</a>
                        <a class="b-notification__button" *ngIf="btn.link" [routerLink]="btn.link">{{ btn.title }}</a>
                    </ng-template>
                </div>
                <a class="b-notification__close-btn" (click)="remove();">
                    <svg class="nc-icon outline" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" stroke="#999" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2">
                            <path d="M16 8l-8 8M16 16L8 8"></path>
                        </g>
                    </svg>
                </a>
            </div>

            <div class="sn-progress-loader" *ngIf="showProgressBar">
                <span [ngStyle]="{'width': progressWidth + '%'}"></span>
            </div>

        </div>
    `,
    styles: [`
        .simple-notification {
            width: 100%;
            padding: 10px 20px;
            box-sizing: border-box;
            position: relative;
            float: left;
            margin-bottom: 10px;
            color: #fff;
            cursor: pointer;
            transition: all 0.5s;
        }}

        .simple-notification .sn-progress-loader {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
        }

        .simple-notification .sn-progress-loader span {
            float: left;
            height: 100%;
            background: #ccc;
        }
    `]
})

export class NotificationComponent implements OnInit, OnDestroy {

    @Input() public timeOut: number;
    @Input() public showProgressBar: boolean;
    @Input() public pauseOnHover: boolean;
    @Input() public clickToClose: boolean;
    @Input() public theClass: string[];
    @Input() public animate: string;
    @Input() public position: number;
    @Input() public item: Notification;


    // Progress bar variables
    public progressWidth: number = 0;
    private stopTime: boolean = false;
    private timer: any;
    private steps: number;
    private speed: number;
    private count: number = 0;
    private start: any;
    private diff: any;

    constructor(
        private notificationService: NotificationsService,
        private zone: NgZone
    ) {}

    ngOnInit(): void {
        if (this.animate) {
            this.item.state = this.animate;
        }
        if (this.item.override) {
            this.attachOverrides();
        }
        if (this.timeOut !== 0) {
            this.startTimeOut();
        }

    }

    startTimeOut(): void {
        this.steps = this.timeOut / 10;
        this.speed = this.timeOut / this.steps;
        this.start = new Date().getTime();
        this.zone.runOutsideAngular(() => this.timer = setTimeout(this.instance, this.speed));
    }

    onEnter(): void {
        if (this.pauseOnHover) {
            this.stopTime = true;
        }
    }

    onLeave(): void {
        if (this.pauseOnHover) {
            this.stopTime = false;
            setTimeout(this.instance, (this.speed - this.diff));
        }
    }

    setPosition(): number {
        return this.position !== 0 ? this.position * 90 : 0;
    }

    onClick($e: MouseEvent): void {
        if (this.clickToClose) {
            this.remove();
        }
    }

    // Attach all the overrides
    attachOverrides(): void {
        Object.keys(this.item.override).forEach(a => {
            if (this.hasOwnProperty(a)) {
                (<any>this)[a] = this.item.override[a];
            }
        });
    }

    ngOnDestroy(): void {
        clearTimeout(this.timer);
    }

    private instance = () => {
        this.zone.runOutsideAngular(() => {
            this.zone.run(() => this.diff = (new Date().getTime() - this.start) - (this.count * this.speed));

            if (this.count++ === this.steps) this.zone.run(() => this.remove());
            else if (!this.stopTime) {
                if (this.showProgressBar) this.zone.run(() => this.progressWidth += 100 / this.steps);

                this.timer = setTimeout(this.instance, (this.speed - this.diff));
            }
        })
    };

    public remove() {
        if (this.animate) {
            this.item.state = this.animate + 'Out';
            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.zone.run(() => this.notificationService.set(this.item, false))
                }, 310);
            })
        } else {
            this.notificationService.set(this.item, false);
        }
    }
}
