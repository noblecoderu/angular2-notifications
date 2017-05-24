/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './notification.component.ngfactory';
import * as import2 from '../../src/notification.component';
import * as import3 from '../../src/notifications.service';
import * as import4 from '@angular/common';
import * as import5 from '../../src/simple-notifications.component';
const styles_SimpleNotificationsComponent:any[] = ['\n        .simple-notification-wrapper {\n            position: fixed;\n            width: 360px;\n            z-index: 1000;\n        }\n        \n        .simple-notification-wrapper.left { left: 20px; }\n        .simple-notification-wrapper.top { top: 20px; }\n        .simple-notification-wrapper.right { right: 0px; }\n        .simple-notification-wrapper.bottom { bottom: 0px; }\n        \n        @media (max-width: 340px) {\n            .simple-notification-wrapper {\n                width: auto;\n                left: 20px;\n                right: 20px;\n            }\n        }\n    '];
export const RenderType_SimpleNotificationsComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_SimpleNotificationsComponent,
  data: {}
}
);
function View_SimpleNotificationsComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'simple-notification',([] as any[]),(null as any),(null as any),(null as any),import1.View_NotificationComponent_0,import1.RenderType_NotificationComponent)),
    import0.ɵdid(245760,(null as any),0,import2.NotificationComponent,[
      import3.NotificationsService,
      import0.NgZone
    ]
    ,{
      timeOut: [
        0,
        'timeOut'
      ]
      ,
      showProgressBar: [
        1,
        'showProgressBar'
      ]
      ,
      pauseOnHover: [
        2,
        'pauseOnHover'
      ]
      ,
      clickToClose: [
        3,
        'clickToClose'
      ]
      ,
      theClass: [
        4,
        'theClass'
      ]
      ,
      animate: [
        5,
        'animate'
      ]
      ,
      position: [
        6,
        'position'
      ]
      ,
      item: [
        7,
        'item'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),['\n            ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.timeOut;
    const currVal_1:any = co.showProgressBar;
    const currVal_2:any = co.pauseOnHover;
    const currVal_3:any = co.clickToClose;
    const currVal_4:any = co.theClass;
    const currVal_5:any = co.animate;
    const currVal_6:any = v.context.index;
    const currVal_7:any = v.context.$implicit;
    ck(v,1,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,currVal_7);
  },(null as any));
}
export function View_SimpleNotificationsComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),5,'div',[[
        'class',
        'simple-notification-wrapper'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(278528,(null as any),0,import4.NgClass,[
      import0.IterableDiffers,
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
    ,{
      klass: [
        0,
        'klass'
      ]
      ,
      ngClass: [
        1,
        'ngClass'
      ]

    }
    ,(null as any)),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_SimpleNotificationsComponent_1)),
    import0.ɵdid(802816,(null as any),0,import4.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:import5.SimpleNotificationsComponent = v.component;
    const currVal_0:any = 'simple-notification-wrapper';
    const currVal_1:any = co.position;
    ck(v,2,0,currVal_0,currVal_1);
    const currVal_2:any = co.notifications;
    ck(v,5,0,currVal_2);
  },(null as any));
}
function View_SimpleNotificationsComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'simple-notifications',([] as any[]),(null as any),(null as any),(null as any),View_SimpleNotificationsComponent_0,RenderType_SimpleNotificationsComponent)),
    import0.ɵdid(245760,(null as any),0,import5.SimpleNotificationsComponent,[import3.NotificationsService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const SimpleNotificationsComponentNgFactory:import0.ComponentFactory<import5.SimpleNotificationsComponent> = import0.ɵccf('simple-notifications',import5.SimpleNotificationsComponent,View_SimpleNotificationsComponent_Host_0,{options: 'options'},{
  onCreate: 'onCreate',
  onDestroy: 'onDestroy'
}
,([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvYWxleG5pa2kvTm9ibGVjb2RlL2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMvc3JjL3NpbXBsZS1ub3RpZmljYXRpb25zLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL2FsZXhuaWtpL05vYmxlY29kZS9hbmd1bGFyMi1ub3RpZmljYXRpb25zL3NyYy9zaW1wbGUtbm90aWZpY2F0aW9ucy5jb21wb25lbnQudHMiLCJuZzovLy9ob21lL2FsZXhuaWtpL05vYmxlY29kZS9hbmd1bGFyMi1ub3RpZmljYXRpb25zL3NyYy9zaW1wbGUtbm90aWZpY2F0aW9ucy5jb21wb25lbnQudHMuU2ltcGxlTm90aWZpY2F0aW9uc0NvbXBvbmVudC5odG1sIiwibmc6Ly8vaG9tZS9hbGV4bmlraS9Ob2JsZWNvZGUvYW5ndWxhcjItbm90aWZpY2F0aW9ucy9zcmMvc2ltcGxlLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnRzLlNpbXBsZU5vdGlmaWNhdGlvbnNDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpbXBsZS1ub3RpZmljYXRpb24td3JhcHBlclwiIFtuZ0NsYXNzXT1cInBvc2l0aW9uXCI+XG4gICAgICAgICAgICA8c2ltcGxlLW5vdGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBhIG9mIG5vdGlmaWNhdGlvbnM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgICAgICAgIFtpdGVtXT1cImFcIlxuICAgICAgICAgICAgICAgIFt0aW1lT3V0XT1cInRpbWVPdXRcIlxuICAgICAgICAgICAgICAgIFtjbGlja1RvQ2xvc2VdPVwiY2xpY2tUb0Nsb3NlXCJcbiAgICAgICAgICAgICAgICBbc2hvd1Byb2dyZXNzQmFyXT1cInNob3dQcm9ncmVzc0JhclwiXG4gICAgICAgICAgICAgICAgW3BhdXNlT25Ib3Zlcl09XCJwYXVzZU9uSG92ZXJcIlxuICAgICAgICAgICAgICAgIFt0aGVDbGFzc109XCJ0aGVDbGFzc1wiXG4gICAgICAgICAgICAgICAgW2FuaW1hdGVdPVwiYW5pbWF0ZVwiXG4gICAgICAgICAgICAgICAgW3Bvc2l0aW9uXT1cImlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvc2ltcGxlLW5vdGlmaWNhdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgIiwiPHNpbXBsZS1ub3RpZmljYXRpb25zPjwvc2ltcGxlLW5vdGlmaWNhdGlvbnM+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNFWTtnQkFBQTs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFVSzs7OztJQVBEO0lBRUE7SUFDQTtJQUZBO0lBR0E7SUFDQTtJQUNBO0lBUEE7SUFGSixTQUdJLFVBRUEsVUFDQSxVQUZBLFVBR0EsVUFDQSxVQUNBLFVBUEEsU0FGSjs7Ozs7SUFGWjtNQUNRO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7SUFBOEQ7SUFDMUQ7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFXc0I7SUFDcEI7Ozs7SUFiRDtJQUFvQztJQUF6QyxTQUFLLFVBQW9DLFNBQXpDO0lBRVE7SUFESixTQUNJLFNBREo7Ozs7O0lDRlo7Z0JBQUE7OztJQUFBOzs7Ozs7OyJ9
