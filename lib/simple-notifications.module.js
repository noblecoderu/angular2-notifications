"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var notifications_service_1 = require("./notifications.service");
var simple_notifications_component_1 = require("./simple-notifications.component");
var notification_component_1 = require("./notification.component");
var max_pipe_1 = require("./max.pipe");
var SimpleNotificationsModule = SimpleNotificationsModule_1 = (function () {
    function SimpleNotificationsModule() {
    }
    SimpleNotificationsModule.forRoot = function () {
        return {
            ngModule: SimpleNotificationsModule_1,
            providers: [
                notifications_service_1.NotificationsService
            ]
        };
    };
    return SimpleNotificationsModule;
}());
SimpleNotificationsModule = SimpleNotificationsModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, animations_1.BrowserAnimationsModule, router_1.RouterModule],
        declarations: [simple_notifications_component_1.SimpleNotificationsComponent, notification_component_1.NotificationComponent, max_pipe_1.MaxPipe],
        providers: [],
        exports: [simple_notifications_component_1.SimpleNotificationsComponent]
    })
], SimpleNotificationsModule);
exports.SimpleNotificationsModule = SimpleNotificationsModule;
var SimpleNotificationsModule_1;
//# sourceMappingURL=simple-notifications.module.js.map