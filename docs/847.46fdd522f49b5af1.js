"use strict";(self.webpackChunkangular_conduit=self.webpackChunkangular_conduit||[]).push([[847],{2847:(u,n,t)=>{t.r(n),t.d(n,{ProfileArticlesComponent:()=>p});var o=t(3292),l=t(9773),a=t(8645),e=t(5879),c=t(266),_=t(1666);let p=(()=>{class r{constructor(i,s){this.route=i,this.profileService=s,this.destroy$=new a.x}ngOnInit(){this.profileService.get(this.route.snapshot.params.username).pipe((0,l.R)(this.destroy$)).subscribe({next:i=>{this.profile=i,this.articlesConfig={type:"all",filters:{author:this.profile.username}}}})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static#t=this.\u0275fac=function(s){return new(s||r)(e.Y36(c.gz),e.Y36(_.H))};static#e=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-profile-articles"]],standalone:!0,features:[e.jDz],decls:1,vars:2,consts:[[3,"limit","config"]],template:function(s,f){1&s&&e._UZ(0,"app-article-list",0),2&s&&e.Q6J("limit",10)("config",f.articlesConfig)},dependencies:[o.P],encapsulation:2})}return r})()}}]);