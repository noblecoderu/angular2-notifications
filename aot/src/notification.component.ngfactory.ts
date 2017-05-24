/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from '../../src/notification.component';
import * as import4 from '../../src/notifications.service';
const styles_NotificationComponent:any[] = ['\n        .simple-notification {\n            width: 100%;\n            padding: 10px 20px;\n            box-sizing: border-box;\n            position: relative;\n            float: left;\n            margin-bottom: 10px;\n            color: #fff;\n            cursor: pointer;\n            transition: all 0.5s;\n        }}\n\n        .simple-notification .sn-progress-loader {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 5px;\n        }\n\n        .simple-notification .sn-progress-loader span {\n            float: left;\n            height: 100%;\n            background: #ccc;\n        }\n    '];
export const RenderType_NotificationComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_NotificationComponent,
      data: {'animation': [{
        name: 'enterLeave',
        definitions: [
          {
            type: 0,
            name: 'fromRight',
            styles: {
              type: 6,
              styles: {
                opacity: 1,
                transform: 'translateX(0)'
              }

            }

          }
          ,
          {
            type: 1,
            expr: '* => fromRight',
            animation: [
              {
                type: 6,
                styles: {
                  opacity: 0,
                  transform: 'translateX(5%)'
                }

              }
              ,
              {
                type: 4,
                styles: (null as any),
                timings: '400ms ease-in-out'
              }

            ]

          }
          ,
          {
            type: 0,
            name: 'fromRightOut',
            styles: {
              type: 6,
              styles: {
                opacity: 0,
                transform: 'translateX(-5%)'
              }

            }

          }
          ,
          {
            type: 1,
            expr: 'fromRight => fromRightOut',
            animation: [
              {
                type: 6,
                styles: {
                  opacity: 1,
                  transform: 'translateX(0)'
                }

              }
              ,
              {
                type: 4,
                styles: (null as any),
                timings: '300ms ease-in-out'
              }

            ]

          }
          ,
          {
            type: 0,
            name: 'fromLeft',
            styles: {
              type: 6,
              styles: {
                opacity: 1,
                transform: 'translateX(0)'
              }

            }

          }
          ,
          {
            type: 1,
            expr: '* => fromLeft',
            animation: [
              {
                type: 6,
                styles: {
                  opacity: 0,
                  transform: 'translateX(-5%)'
                }

              }
              ,
              {
                type: 4,
                styles: (null as any),
                timings: '400ms ease-in-out'
              }

            ]

          }
          ,
          {
            type: 0,
            name: 'fromLeftOut',
            styles: {
              type: 6,
              styles: {
                opacity: 0,
                transform: 'translateX(5%)'
              }

            }

          }
          ,
          {
            type: 1,
            expr: 'fromLeft => fromLeftOut',
            animation: [
              {
                type: 6,
                styles: {
                  opacity: 1,
                  transform: 'translateX(0)'
                }

              }
              ,
              {
                type: 4,
                styles: (null as any),
                timings: '300ms ease-in-out'
              }

            ]

          }
          ,
          {
            type: 0,
            name: 'scale',
            styles: {
              type: 6,
              styles: {
                opacity: 1,
                transform: 'scale(1)'
              }

            }

          }
          ,
          {
            type: 1,
            expr: '* => scale',
            animation: [
              {
                type: 6,
                styles: {
                  opacity: 0,
                  transform: 'scale(0)'
                }

              }
              ,
              {
                type: 4,
                styles: (null as any),
                timings: '400ms ease-in-out'
              }

            ]

          }
          ,
          {
            type: 0,
            name: 'scaleOut',
            styles: {
              type: 6,
              styles: {
                opacity: 0,
                transform: 'scale(0)'
              }

            }

          }
          ,
          {
            type: 1,
            expr: 'scale => scaleOut',
            animation: [
              {
                type: 6,
                styles: {
                  opacity: 1,
                  transform: 'scale(1)'
                }

              }
              ,
              {
                type: 4,
                styles: (null as any),
                timings: '400ms ease-in-out'
              }

            ]

          }
          ,
          {
            type: 0,
            name: 'rotate',
            styles: {
              type: 6,
              styles: {
                opacity: 1,
                transform: 'rotate(0deg)'
              }

            }

          }
          ,
          {
            type: 1,
            expr: '* => rotate',
            animation: [
              {
                type: 6,
                styles: {
                  opacity: 0,
                  transform: 'rotate(5deg)'
                }

              }
              ,
              {
                type: 4,
                styles: (null as any),
                timings: '400ms ease-in-out'
              }

            ]

          }
          ,
          {
            type: 0,
            name: 'rotateOut',
            styles: {
              type: 6,
              styles: {
                opacity: 0,
                transform: 'rotate(-5deg)'
              }

            }

          }
          ,
          {
            type: 1,
            expr: 'rotate => rotateOut',
            animation: [
              {
                type: 6,
                styles: {
                  opacity: 1,
                  transform: 'rotate(0deg)'
                }

              }
              ,
              {
                type: 4,
                styles: (null as any),
                timings: '400ms ease-in-out'
              }

            ]

          }

        ]

      }
  ]}
}
);
function View_NotificationComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'a',[[
        'class',
        'b-notification__button'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>(<any>v.parent).context.$implicit.action()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = (<any>v.parent).context.$implicit.title;
    ck(v,1,0,currVal_0);
  });
}
function View_NotificationComponent_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),2,'a',[[
        'class',
        'b-notification__button'
      ]
    ],[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,1).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(671744,(null as any),0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(ck,v) => {
    const currVal_2:any = (<any>v.parent).context.$implicit.link;
    ck(v,1,0,currVal_2);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,1).target;
    const currVal_1:any = import0.ɵnov(v,1).href;
    ck(v,0,0,currVal_0,currVal_1);
    const currVal_3:any = (<any>v.parent).context.$implicit.title;
    ck(v,2,0,currVal_3);
  });
}
function View_NotificationComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n                        '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_NotificationComponent_3)),
    import0.ɵdid(16384,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                        '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_NotificationComponent_4)),
    import0.ɵdid(16384,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                    ']))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.context.$implicit.action;
    ck(v,2,0,currVal_0);
    const currVal_1:any = v.context.$implicit.link;
    ck(v,5,0,currVal_1);
  },(null as any));
}
function View_NotificationComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'b-notification__footer'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_NotificationComponent_2)),
    import0.ɵdid(802816,(null as any),0,import2.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.item.buttons;
    ck(v,3,0,currVal_0);
  },(null as any));
}
function View_NotificationComponent_5(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),5,'div',[[
        'class',
        'sn-progress-loader'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(278528,(null as any),0,import2.NgStyle,[
      import0.KeyValueDiffers,
      import0.ElementRef,
      import0.Renderer
    ]
      ,{ngStyle: [
        0,
        'ngStyle'
      ]
    },(null as any)),
    import0.ɵpod(['width']),
    (l()(),import0.ɵted((null as any),['\n            ']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,4,0,(co.progressWidth + '%'));
    ck(v,3,0,currVal_0);
  },(null as any));
}
export function View_NotificationComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),36,'div',[[
        'class',
        'simple-notification'
      ]
      ],[[
        24,
        '@enterLeave',
        0
      ]
    ],[
      [
        (null as any),
        'click'
      ]
      ,
      [
        (null as any),
        'mouseenter'
      ]
      ,
      [
        (null as any),
        'mouseleave'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import3.NotificationComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onClick($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('mouseenter' === en)) {
        const pd_1:any = ((<any>co.onEnter()) !== false);
        ad = (pd_1 && ad);
      }
      if (('mouseleave' === en)) {
        const pd_2:any = ((<any>co.onLeave()) !== false);
        ad = (pd_2 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(278528,(null as any),0,import2.NgClass,[
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
    (l()(),import0.ɵted((null as any),['\n\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),29,'div',[[
        'class',
        'b-notification'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),12,'div',[[
        'class',
        'b-notification__body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,'div',[[
        'class',
        'b-notification__icon'
      ]
      ],[[
        8,
        'innerHTML',
        1
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'b-notification__content'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'b-notification__title'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n                        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'b-notification__descr'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_NotificationComponent_1)),
    import0.ɵdid(16384,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),9,'a',[[
        'class',
        'b-notification__close-btn'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import3.NotificationComponent = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.remove()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),6,':svg:svg',[
      [
        'class',
        'nc-icon outline'
      ]
      ,
      [
        'height',
        '24'
      ]
      ,
      [
        'viewBox',
        '0 0 24 24'
      ]
      ,
      [
        'width',
        '24'
      ]
      ,
      [
        'xmlns',
        'http://www.w3.org/2000/svg'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                        '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,':svg:g',[
      [
        'fill',
        'none'
      ]
      ,
      [
        'stroke',
        '#999'
      ]
      ,
      [
        'stroke-linecap',
        'square'
      ]
      ,
      [
        'stroke-miterlimit',
        '10'
      ]
      ,
      [
        'stroke-width',
        '2'
      ]

    ]
    ,(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),0,':svg:path',[[
        'd',
        'M16 8l-8 8M16 16L8 8'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                        '])),
    (l()(),import0.ɵted((null as any),['\n                    '])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n\n            '])),
    (l()(),import0.ɵand(16777216,(null as any),(null as any),1,(null as any),View_NotificationComponent_5)),
    import0.ɵdid(16384,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n\n        '])),
    (l()(),import0.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:import3.NotificationComponent = v.component;
    const currVal_1:any = 'simple-notification';
    const currVal_2:any = co.theClass;
    ck(v,2,0,currVal_1,currVal_2);
    const currVal_6:any = (co.item.buttons && (co.item.buttons.length > 0));
    ck(v,21,0,currVal_6);
    const currVal_7:any = co.showProgressBar;
    ck(v,36,0,currVal_7);
  },(ck,v) => {
    var co:import3.NotificationComponent = v.component;
    const currVal_0:any = co.item.state;
    ck(v,1,0,currVal_0);
    const currVal_3:any = co.item.icon;
    ck(v,8,0,currVal_3);
    const currVal_4:any = co.item.title;
    ck(v,13,0,currVal_4);
    const currVal_5:any = co.item.descr;
    ck(v,16,0,currVal_5);
  });
}
function View_NotificationComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'simple-notification',([] as any[]),(null as any),(null as any),(null as any),View_NotificationComponent_0,RenderType_NotificationComponent)),
    import0.ɵdid(245760,(null as any),0,import3.NotificationComponent,[
      import4.NotificationsService,
      import0.NgZone
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const NotificationComponentNgFactory:import0.ComponentFactory<import3.NotificationComponent> = import0.ɵccf('simple-notification',import3.NotificationComponent,View_NotificationComponent_Host_0,{
  timeOut: 'timeOut',
  showProgressBar: 'showProgressBar',
  pauseOnHover: 'pauseOnHover',
  clickToClose: 'clickToClose',
  theClass: 'theClass',
  animate: 'animate',
  position: 'position',
  item: 'item'
}
,{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvYWxleG5pa2kvTm9ibGVjb2RlL2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMvc3JjL25vdGlmaWNhdGlvbi5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9hbGV4bmlraS9Ob2JsZWNvZGUvYW5ndWxhcjItbm90aWZpY2F0aW9ucy9zcmMvbm90aWZpY2F0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vL2hvbWUvYWxleG5pa2kvTm9ibGVjb2RlL2FuZ3VsYXIyLW5vdGlmaWNhdGlvbnMvc3JjL25vdGlmaWNhdGlvbi5jb21wb25lbnQudHMuTm90aWZpY2F0aW9uQ29tcG9uZW50Lmh0bWwiLCJuZzovLy9ob21lL2FsZXhuaWtpL05vYmxlY29kZS9hbmd1bGFyMi1ub3RpZmljYXRpb25zL3NyYy9ub3RpZmljYXRpb24uY29tcG9uZW50LnRzLk5vdGlmaWNhdGlvbkNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltcGxlLW5vdGlmaWNhdGlvblwiXG4gICAgICAgICAgICBbQGVudGVyTGVhdmVdPVwiaXRlbS5zdGF0ZVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInRoZUNsYXNzXCJcblxuICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25FbnRlcigpXCJcbiAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uTGVhdmUoKVwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYi1ub3RpZmljYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYi1ub3RpZmljYXRpb25fX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImItbm90aWZpY2F0aW9uX19pY29uXCIgW2lubmVySFRNTF09XCJpdGVtLmljb25cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImItbm90aWZpY2F0aW9uX19jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYi1ub3RpZmljYXRpb25fX3RpdGxlXCI+e3sgaXRlbS50aXRsZSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImItbm90aWZpY2F0aW9uX19kZXNjclwiPnt7IGl0ZW0uZGVzY3IgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImItbm90aWZpY2F0aW9uX19mb290ZXJcIiAqbmdJZj1cIml0ZW0uYnV0dG9ucyAmJiBpdGVtLmJ1dHRvbnMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LWJ0biBbbmdGb3JPZl09XCJpdGVtLmJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYi1ub3RpZmljYXRpb25fX2J1dHRvblwiICpuZ0lmPVwiYnRuLmFjdGlvblwiIChjbGljayk9XCJidG4uYWN0aW9uKCk7XCI+e3sgYnRuLnRpdGxlIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJiLW5vdGlmaWNhdGlvbl9fYnV0dG9uXCIgKm5nSWY9XCJidG4ubGlua1wiIFtyb3V0ZXJMaW5rXT1cImJ0bi5saW5rXCI+e3sgYnRuLnRpdGxlIH19PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYi1ub3RpZmljYXRpb25fX2Nsb3NlLWJ0blwiIChjbGljayk9XCJyZW1vdmUoKTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cIm5jLWljb24gb3V0bGluZVwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZyBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiM5OTlcIiBzdHJva2UtbGluZWNhcD1cInNxdWFyZVwiIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIiBzdHJva2Utd2lkdGg9XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNiA4bC04IDhNMTYgMTZMOCA4XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNuLXByb2dyZXNzLWxvYWRlclwiICpuZ0lmPVwic2hvd1Byb2dyZXNzQmFyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gW25nU3R5bGVdPVwieyd3aWR0aCc6IHByb2dyZXNzV2lkdGggKyAnJSd9XCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgIiwiPHNpbXBsZS1ub3RpZmljYXRpb24+PC9zaW1wbGUtbm90aWZpY2F0aW9uPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
