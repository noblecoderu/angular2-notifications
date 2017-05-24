"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var notifications_service_1 = require("./notifications.service");
var NotificationComponent = (function () {
    function NotificationComponent(notificationService, zone) {
        var _this = this;
        this.notificationService = notificationService;
        this.zone = zone;
        this.progressWidth = 0;
        this.stopTime = false;
        this.count = 0;
        this.instance = function () {
            _this.zone.runOutsideAngular(function () {
                _this.zone.run(function () { return _this.diff = (new Date().getTime() - _this.start) - (_this.count * _this.speed); });
                if (_this.count++ === _this.steps)
                    _this.zone.run(function () { return _this.remove(); });
                else if (!_this.stopTime) {
                    if (_this.showProgressBar)
                        _this.zone.run(function () { return _this.progressWidth += 100 / _this.steps; });
                    _this.timer = setTimeout(_this.instance, (_this.speed - _this.diff));
                }
            });
        };
    }
    NotificationComponent.prototype.ngOnInit = function () {
        if (this.animate) {
            this.item.state = this.animate;
        }
        if (this.item.override) {
            this.attachOverrides();
        }
        if (this.timeOut !== 0) {
            this.startTimeOut();
        }
    };
    NotificationComponent.prototype.startTimeOut = function () {
        var _this = this;
        this.steps = this.timeOut / 10;
        this.speed = this.timeOut / this.steps;
        this.start = new Date().getTime();
        this.zone.runOutsideAngular(function () { return _this.timer = setTimeout(_this.instance, _this.speed); });
    };
    NotificationComponent.prototype.onEnter = function () {
        if (this.pauseOnHover) {
            this.stopTime = true;
        }
    };
    NotificationComponent.prototype.onLeave = function () {
        if (this.pauseOnHover) {
            this.stopTime = false;
            setTimeout(this.instance, (this.speed - this.diff));
        }
    };
    NotificationComponent.prototype.setPosition = function () {
        return this.position !== 0 ? this.position * 90 : 0;
    };
    NotificationComponent.prototype.onClick = function ($e) {
        if (this.clickToClose) {
            this.remove();
        }
    };
    NotificationComponent.prototype.attachOverrides = function () {
        var _this = this;
        Object.keys(this.item.override).forEach(function (a) {
            if (_this.hasOwnProperty(a)) {
                _this[a] = _this.item.override[a];
            }
        });
    };
    NotificationComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timer);
    };
    NotificationComponent.prototype.remove = function () {
        var _this = this;
        if (this.animate) {
            this.item.state = this.animate + 'Out';
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.zone.run(function () { return _this.notificationService.set(_this.item, false); });
                }, 310);
            });
        }
        else {
            this.notificationService.set(this.item, false);
        }
    };
    return NotificationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], NotificationComponent.prototype, "timeOut", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NotificationComponent.prototype, "showProgressBar", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NotificationComponent.prototype, "pauseOnHover", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], NotificationComponent.prototype, "clickToClose", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], NotificationComponent.prototype, "theClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NotificationComponent.prototype, "animate", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], NotificationComponent.prototype, "position", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "item", void 0);
NotificationComponent = __decorate([
    core_1.Component({
        selector: 'simple-notification',
        encapsulation: core_1.ViewEncapsulation.None,
        animations: [
            animations_1.trigger('enterLeave', [
                animations_1.state('fromRight', animations_1.style({ opacity: 1, transform: 'translateX(0)' })),
                animations_1.transition('* => fromRight', [
                    animations_1.style({ opacity: 0, transform: 'translateX(5%)' }),
                    animations_1.animate('400ms ease-in-out')
                ]),
                animations_1.state('fromRightOut', animations_1.style({ opacity: 0, transform: 'translateX(-5%)' })),
                animations_1.transition('fromRight => fromRightOut', [
                    animations_1.style({ opacity: 1, transform: 'translateX(0)' }),
                    animations_1.animate('300ms ease-in-out')
                ]),
                animations_1.state('fromLeft', animations_1.style({ opacity: 1, transform: 'translateX(0)' })),
                animations_1.transition('* => fromLeft', [
                    animations_1.style({ opacity: 0, transform: 'translateX(-5%)' }),
                    animations_1.animate('400ms ease-in-out')
                ]),
                animations_1.state('fromLeftOut', animations_1.style({ opacity: 0, transform: 'translateX(5%)' })),
                animations_1.transition('fromLeft => fromLeftOut', [
                    animations_1.style({ opacity: 1, transform: 'translateX(0)' }),
                    animations_1.animate('300ms ease-in-out')
                ]),
                animations_1.state('scale', animations_1.style({ opacity: 1, transform: 'scale(1)' })),
                animations_1.transition('* => scale', [
                    animations_1.style({ opacity: 0, transform: 'scale(0)' }),
                    animations_1.animate('400ms ease-in-out')
                ]),
                animations_1.state('scaleOut', animations_1.style({ opacity: 0, transform: 'scale(0)' })),
                animations_1.transition('scale => scaleOut', [
                    animations_1.style({ opacity: 1, transform: 'scale(1)' }),
                    animations_1.animate('400ms ease-in-out')
                ]),
                animations_1.state('rotate', animations_1.style({ opacity: 1, transform: 'rotate(0deg)' })),
                animations_1.transition('* => rotate', [
                    animations_1.style({ opacity: 0, transform: 'rotate(5deg)' }),
                    animations_1.animate('400ms ease-in-out')
                ]),
                animations_1.state('rotateOut', animations_1.style({ opacity: 0, transform: 'rotate(-5deg)' })),
                animations_1.transition('rotate => rotateOut', [
                    animations_1.style({ opacity: 1, transform: 'rotate(0deg)' }),
                    animations_1.animate('400ms ease-in-out')
                ])
            ])
        ],
        template: "\n        <div class=\"simple-notification\"\n            [@enterLeave]=\"item.state\"\n            (click)=\"onClick($event)\"\n            [ngClass]=\"theClass\"\n\n            (mouseenter)=\"onEnter()\"\n            (mouseleave)=\"onLeave()\">\n\n            <div class=\"b-notification\">\n                <div class=\"b-notification__body\">\n                    <div class=\"b-notification__icon\" [innerHTML]=\"item.icon\"></div>\n                    <div class=\"b-notification__content\">\n                        <div class=\"b-notification__title\">{{ item.title }}</div>\n                        <div class=\"b-notification__descr\">{{ item.descr }}</div>\n                    </div>\n                </div>\n                <div class=\"b-notification__footer\" *ngIf=\"item.buttons && item.buttons.length > 0\">\n                    <ng-template ngFor let-btn [ngForOf]=\"item.buttons\">\n                        <a class=\"b-notification__button\" *ngIf=\"btn.action\" (click)=\"btn.action();\">{{ btn.title }}</a>\n                        <a class=\"b-notification__button\" *ngIf=\"btn.link\" [href]=\"btn.link\">{{ btn.title }}</a>\n                    </ng-template>\n                </div>\n                <a class=\"b-notification__close-btn\" (click)=\"remove();\">\n                    <svg class=\"nc-icon outline\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <g fill=\"none\" stroke=\"#999\" stroke-linecap=\"square\" stroke-miterlimit=\"10\" stroke-width=\"2\">\n                            <path d=\"M16 8l-8 8M16 16L8 8\"></path>\n                        </g>\n                    </svg>\n                </a>\n            </div>\n\n            <div class=\"sn-progress-loader\" *ngIf=\"showProgressBar\">\n                <span [ngStyle]=\"{'width': progressWidth + '%'}\"></span>\n            </div>\n\n        </div>\n    ",
        styles: ["\n        .simple-notification {\n            width: 100%;\n            padding: 10px 20px;\n            box-sizing: border-box;\n            position: relative;\n            float: left;\n            margin-bottom: 10px;\n            color: #fff;\n            cursor: pointer;\n            transition: all 0.5s;\n        }}\n\n        .simple-notification .sn-progress-loader {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 5px;\n        }\n\n        .simple-notification .sn-progress-loader span {\n            float: left;\n            height: 100%;\n            background: #ccc;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [notifications_service_1.NotificationsService,
        core_1.NgZone])
], NotificationComponent);
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=notification.component.js.map