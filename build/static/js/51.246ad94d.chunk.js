(this["webpackJsonpJobcy-react"]=this["webpackJsonpJobcy-react"]||[]).push([[51],{366:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t.n(s),i=t(54),l=t(4),n=t(8),r=t(5),b=t(64),d=t(17),m=t(57),o=t(59),j=t(18),x=t(79),g=t(80),h=t(2),p=function(){var e=Object(s.useState)(!1),a=Object(n.a)(e,2),t=a[0],i=a[1],p=function(){return i(!t)},O=[{id:1,companyImg:d.a,jobDescription:"Business Associate",experience:"",companyName:"Jobcy Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",partTime:!0,timing:"Part Time",badges:[{id:1,badgeclassName:"bg-soft-warning",badgeName:"Urgent"}]},{id:2,companyImg:m.a,jobDescription:"Marketing Director",experience:"2-4 Yrs Exp.",companyName:"Creative Agency",location:"New York",salary:"$250 - $800 / month",partTime:!0,timing:"Part Time",badges:[{id:1,badgeclassName:"bg-soft-info",badgeName:"Private"}]},{id:3,companyImg:o.a,jobDescription:"HTML Developer",experience:"2-4 Yrs Exp.",companyName:"Jobcy Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",freeLance:!0,timing:"Freelance",badges:[{id:1,badgeclassName:"bg-soft-blue",badgeName:"Internship"}]},{id:4,companyImg:j.a,jobDescription:"Product Sales Specialist",experience:"5+ Yrs Exp.",companyName:"Jobcy Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",fullTime:!0,timing:"Freelance",badges:[{id:1,badgeclassName:"bg-soft-info",badgeName:"Private"}]},{id:5,companyImg:x.a,jobDescription:"Product Designer",experience:"0-5 Yrs Exp.",companyName:"Creative Agency",location:"California",salary:"$250 - $800 / month",internship:!0,timing:"Internship",badges:[]},{id:6,companyImg:g.a,jobDescription:"Project Manager",experience:"0-2 Yrs Exp.",companyName:"Jobcy Technology Pvt.Ltd",location:"California",salary:"$250 - $800 / month",fullTime:!0,timing:"Freelance",badges:[{id:1,badgeclassName:"bg-soft-warning",badgeName:"Urgent"},{id:2,badgeclassName:"bg-soft-info",badgeName:"Private"}]}];return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsxs)(l.A,{children:[Object(h.jsx)(l.f,{lg:12,children:O.map((function(e,a){return Object(h.jsx)(l.b,{className:"job-box card mt-4",children:Object(h.jsx)(l.c,{className:"p-4",children:Object(h.jsxs)(l.A,{children:[Object(h.jsx)(l.f,{lg:1,children:Object(h.jsx)(r.b,{to:"/companydetails",children:Object(h.jsx)("img",{src:e.companyImg,alt:"",className:"img-fluid rounded-3"})})}),Object(h.jsx)(l.f,{lg:9,children:Object(h.jsxs)("div",{className:"mt-3 mt-lg-0",children:[Object(h.jsx)("h5",{className:"fs-17 mb-1",children:Object(h.jsx)(r.b,{to:"/jobdetails",className:"text-dark",children:e.jobDescription})}),Object(h.jsxs)("ul",{className:"list-inline mb-0",children:[Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)("p",{className:"text-muted fs-14 mb-0",children:e.companyName})}),Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsxs)("p",{className:"text-muted fs-14 mb-0",children:[Object(h.jsx)("i",{className:"mdi mdi-map-marker"})," ",e.location]})}),Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsxs)("p",{className:"text-muted fs-14 mb-0",children:[Object(h.jsx)("i",{className:"uil uil-wallet"})," ",e.salary]})})]}),Object(h.jsxs)("div",{className:"mt-2",children:[Object(h.jsx)("span",{className:!0===e.fullTime?"badge bg-soft-success fs-13 mt-1 mx-1":!0===e.partTime?"badge bg-soft-danger fs-13 mt-1 mx-1":!0===e.freeLance?"badge bg-soft-purple fs-13 mt-1 mx-1":!0===e.internship?"badge bg-soft-blue fs-13 mt-1":"",children:e.timing}),(e.badges||[]).map((function(e,a){return Object(h.jsx)("span",{className:"badge ".concat(e.badgeclassName," fs-13 mt-1"),children:e.badgeName},a)}))]})]})}),Object(h.jsx)(l.f,{lg:2,className:"align-self-center",children:Object(h.jsxs)("ul",{className:"list-inline mt-3 mb-0",children:[Object(h.jsx)("li",{className:"list-inline-item","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Edit",children:Object(h.jsx)(r.b,{to:"/bookmarkjobpost",className:"avatar-sm bg-soft-success d-inline-block text-center rounded-circle fs-18",children:Object(h.jsx)("i",{className:"uil uil-edit"})})}),Object(h.jsx)("li",{className:"list-inline-item","data-bs-toggle":"tooltip","data-bs-placement":"top",title:"Delete",children:Object(h.jsx)(r.b,{onClick:p,to:"#",className:"avatar-sm bg-soft-danger d-inline-block text-center rounded-circle fs-18",children:Object(h.jsx)("i",{className:"uil uil-trash-alt"})})})]})})]})})},a)}))}),Object(h.jsx)(b.a,{})]}),Object(h.jsx)("div",{className:"modal fade",id:"deleteModal",tabIndex:"-1","aria-labelledby":"deleteModal","aria-hidden":"true",children:Object(h.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(h.jsxs)(l.q,{isOpen:t,toggle:p,centered:!0,tabIndex:"-1",children:[Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h5",{className:"modal-title",id:"staticBackdropLabel",children:"Delete Jobs ?"}),Object(h.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(h.jsx)(l.r,{children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("h6",{className:"text-danger",children:[Object(h.jsx)("i",{className:"uil uil-exclamation-triangle"})," Warning: Are you sure you want to delete job Post ?"]}),Object(h.jsx)("p",{className:"text-muted",children:" Your jobs post will be permenently removed and you won't be able to see them again, including the once you're shared with your friends."})]})}),Object(h.jsxs)("div",{className:"modal-footer",children:[Object(h.jsx)("button",{type:"button",onClick:p,className:"btn btn-primary btn-sm",children:"Cancel"}),Object(h.jsx)("button",{type:"button",className:"btn btn-danger btn-sm",children:"Yes, delete"})]})]})})})]})},O=function(){return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)("section",{className:"page-title-box",children:Object(h.jsx)(l.h,{className:"container",children:Object(h.jsx)(l.A,{className:"justify-content-center",children:Object(h.jsx)(l.f,{md:6,children:Object(h.jsxs)("div",{className:"text-center text-white",children:[Object(h.jsx)("h3",{className:"mb-4",children:"Manage Jobs"}),Object(h.jsx)("div",{className:"page-next",children:Object(h.jsx)("nav",{className:"d-inline-block","aria-label":"breadcrumb text-center",children:Object(h.jsxs)("ol",{className:"breadcrumb justify-content-center",children:[Object(h.jsx)("li",{className:"breadcrumb-item",children:Object(h.jsx)(r.b,{to:"/",children:"Home"})}),Object(h.jsx)("li",{className:"breadcrumb-item",children:Object(h.jsx)(r.b,{to:"#",children:"Profile"})}),Object(h.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:" Manage Jobs "})]})})})]})})})})}),Object(h.jsx)("div",{className:"position-relative",style:{zIndex:1},children:Object(h.jsx)("div",{className:"shape",children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 250",children:Object(h.jsx)("path",{fill:"#FFFFFF",fillOpacity:"1",d:"M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"})})})})]})},N=t(182);a.default=function(){return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(i.MetaTags,{children:Object(h.jsx)("title",{children:"Manage Jobs | Jobcy - Job Listing Template | Themesdesign"})}),Object(h.jsx)(O,{}),Object(h.jsx)("section",{className:"section",children:Object(h.jsxs)(l.h,{children:[Object(h.jsx)(N.a,{}),Object(h.jsx)(p,{})]})})]})}}}]);
//# sourceMappingURL=51.246ad94d.chunk.js.map