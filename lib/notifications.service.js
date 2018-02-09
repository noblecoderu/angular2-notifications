"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var icons_1 = require("./icons");
var NotificationsService = (function () {
    function NotificationsService() {
        this.emitter = new Subject_1.Subject();
        this.icons = icons_1.defaultIcons;
    }
    NotificationsService.prototype.set = function (notification, to) {
        notification.id = notification.override && notification.override.id ? notification.override.id : Math.random().toString(36).substring(3);
        this.emitter.next({ command: 'set', notification: notification, add: to });
        return notification;
    };
    ;
    NotificationsService.prototype.getChangeEmitter = function () {
        return this.emitter;
    };
    NotificationsService.prototype.create = function (title, descr, icon, buttons, override) {
        return this.set({ title: title, descr: descr, icon: icon, buttons: buttons, override: override }, true);
    };
    NotificationsService.prototype.remove = function (id) {
        if (id)
            this.emitter.next({ command: 'clean', id: id });
        else
            this.emitter.next({ command: 'cleanAll' });
    };
    NotificationsService = __decorate([
        core_1.Injectable()
    ], NotificationsService);
    return NotificationsService;
}());
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=notifications.service.js.map