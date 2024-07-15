(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[758],{3132:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/layout",function(){return s(3046)}])},3046:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return l}});var i=s(5893),t=s(2673),o=s(3393),r=s(8426);s(9128);var a=s(2643);let l=[{depth:3,value:"Affine transforms (Transform2D)",id:"affine-transforms-transform2d"},{depth:3,value:"Common Properties",id:"common-properties"},{depth:3,value:"Anchor & Align",id:"anchor--align"},{depth:3,value:"Combining transformations",id:"combining-transformations"},{depth:4,value:"1. Hierarchical composition",id:"1-hierarchical-composition"},{depth:4,value:"2. Matrix multiplication",id:"2-matrix-multiplication"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",p:"p",h3:"h3",code:"code",em:"em",pre:"pre",span:"span",a:"a",ol:"ol",li:"li",strong:"strong",h4:"h4"},(0,a.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Coordinate System & Transforms"}),"\n",(0,i.jsx)(n.p,{children:'Pax\'s coordinate system is "top-left origin; right is positive x; down is positive y"'}),"\n","\n",(0,i.jsx)(n.h3,{id:"affine-transforms-transform2d",children:"Affine transforms (Transform2D)"}),"\n",(0,i.jsxs)(n.p,{children:["The way elements get positioned, sized, and moved around in Pax is through the powerful ",(0,i.jsx)(n.code,{children:"transform"})," property.  This property is nearly ubiquitous across the landscape of GUI and graphical development tools (such as ",(0,i.jsx)(n.code,{children:"matrix3d()"})," in CSS), but it tends to be more front-and-center in game engines than it is in UI layout systems."]}),"\n",(0,i.jsxs)(n.p,{children:['Perhaps the easiest way to think about Pax\'s transform model is "design tool coordinates."  That is, when you select an element in a vector design tool like Figma, Sketch, or Illustrator, you can: ',(0,i.jsx)(n.em,{children:"drag"})," it (",(0,i.jsx)(n.code,{children:"translate"}),"), ",(0,i.jsx)(n.em,{children:"resize"})," it (",(0,i.jsx)(n.code,{children:"scale"}),"), ",(0,i.jsx)(n.em,{children:"rotate"})," it, and ",(0,i.jsx)(n.em,{children:"skew"})," it (with a combination of rotation and scale.)  Each of these operations can be expressed in Pax, as well."]}),"\n",(0,i.jsx)(n.pre,{"data-language":"pax","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"pax","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Group"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"id"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"a "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"transform"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"rotate"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(150deg)>"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Rectangle"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"id"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"b "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"transform"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"translate"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"50px"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"50px"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Rectangle"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"id"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"c "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"transform"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"scale"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"150"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"%, "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"150"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"%) "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Group"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,i.jsxs)(n.p,{children:["In the above example, rectangle ",(0,i.jsx)(n.code,{children:"b"})," will be moved 50px to the right and 50px down.  The rectangle ",(0,i.jsx)(n.code,{children:"c"})," will be 150% the width & height of its default values.  And the group ",(0,i.jsx)(n.code,{children:"a"})," will be rotated 150 degrees — which, in fact, ends up rotating both of the rectangles as well.  Read more about this below in ",(0,i.jsx)(n.a,{href:"#combining-transformations",children:"combining transformations."})]}),"\n",(0,i.jsx)(n.h3,{id:"common-properties",children:"Common Properties"}),"\n",(0,i.jsx)(n.p,{children:"In most cases when you don't need to sequence a bunch of transforms in a specific way, you can set the property directly on the template node."}),"\n",(0,i.jsx)(n.p,{children:"There are a set of 13 properties on every template node."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"id"})}),": A unique identifier for an element, used to reference it within scripts or CSS-like stylesheets."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"x"})}),": The x-coordinate of the element's anchor point in pixels or percentage relative to its container. Determines the horizontal position."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"y"})}),": Similar to ",(0,i.jsx)(n.code,{children:"x"}),", this sets the y-coordinate of the element's anchor point, determining the vertical position."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"scale_x"})}),": Controls the width scaling factor of the element. A value of 1 means no scaling, less than 1 means a reduction, and greater than 1 means an enlargement."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"scale_y"})}),": Controls the height scaling factor of the element. Works similarly to ",(0,i.jsx)(n.code,{children:"scale_x"}),", affecting vertical dimensions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"skew_x"})}),": Applies a horizontal skew transformation to the element, distorting it along the x-axis. The skew angle is specified in degrees."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"skew_y"})}),": Applies a vertical skew transformation to the element, distorting it along the y-axis. Like ",(0,i.jsx)(n.code,{children:"skew_x"}),", the angle is specified in degrees."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"anchor_x"})}),": Sets the horizontal part of the element's anchor point, which affects transformations like rotation and scaling. It can be defined in pixels or as a percentage of the element’s width."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"anchor_y"})}),": Sets the vertical part of the element's anchor point. Similar to ",(0,i.jsx)(n.code,{children:"anchor_x"}),", but for the vertical dimension."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"rotate"})}),": Specifies the rotation of the element around its anchor point, in degrees. Positive values rotate clockwise, while negative values rotate counterclockwise."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"transform"})}),": A powerful property that allows for a combination of transformations—translate, scale, rotate, and skew—applied in a specific order to the element."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"width"})}),": Sets the width of the element, either in pixels or as a percentage of the container's width, allowing for responsive design."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"anchor--align",children:"Anchor & Align"}),"\n",(0,i.jsxs)(n.p,{children:["Pax's coordinate system has a notion of ",(0,i.jsx)(n.code,{children:"anchor"})," — letting you set the anchored origin point for transformations.  For example, using ",(0,i.jsx)(n.code,{children:"anchor"})," you can cause a rectangle to be rotated around its top-left corner, vs. rotated around its center-point."]}),"\n","\n",(0,i.jsxs)(n.p,{children:["Pax's layout system also allows positions (",(0,i.jsx)(n.code,{children:"x"})," and ",(0,i.jsx)(n.code,{children:"y"}),") to be expressed as pixel values, as percentage values of their container for responsive alignment, or as a combination of multiple pixel / percent values (via PAXEL expressions.)"]}),"\n",(0,i.jsxs)(n.p,{children:["For example, ",(0,i.jsx)(n.code,{children:"<SomeElement x=50% y=50% />"})," will position an element's anchor at the center of its container.  ",(0,i.jsx)(n.code,{children:"<SomeElement x=5px y={50% + 5px}>"})," shows both a literal pixel value for x and a combination of multiple units using PAXEL (50% of container's width, plus an additional 5px)."]}),"\n","\n",(0,i.jsxs)(n.p,{children:["The combination of ",(0,i.jsx)(n.code,{children:"anchor"})," and ",(0,i.jsx)(n.code,{children:"align"})," offers powerful, fine-grained positioning, well suited to responsive design for varying screen sizes."]}),"\n",(0,i.jsx)(n.h3,{id:"combining-transformations",children:"Combining transformations"}),"\n",(0,i.jsxs)(n.p,{children:["What happens when you want to both resize AND rotate an element?  You must ",(0,i.jsx)(n.em,{children:"combine transformations"}),".  Depending on your needs, there are two broad ways to combine transformations:"]}),"\n",(0,i.jsx)(n.h4,{id:"1-hierarchical-composition",children:"1. Hierarchical composition"}),"\n",(0,i.jsxs)(n.p,{children:["When you transform an element that can contain other elements -- such as a ",(0,i.jsx)(n.code,{children:"<Group>...</Group>"}),", all of its children elements will ",(0,i.jsx)(n.em,{children:"inherit"})," that transformation as a starting point.  For example:"]}),"\n",(0,i.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<Group id=groo >"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    <Rectangle id=ree />"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"</Group>"})})]})}),"\n",(0,i.jsxs)(n.p,{children:["If a ",(0,i.jsx)(n.code,{children:"transform"})," is applied to the group ",(0,i.jsx)(n.code,{children:"groo"}),", such as a translation by 50px to the right, all descendants (in this case, the rectangle ",(0,i.jsx)(n.code,{children:"ree"}),") will also be automatically translated by 50px to the right.  This translation occurs ",(0,i.jsx)(n.em,{children:"after"})," all of ",(0,i.jsx)(n.code,{children:"ree"}),"'s transform logic is calculated, and is handled by Pax's core layout engine."]}),"\n",(0,i.jsxs)(n.p,{children:["This notion of hierarchical transformation may by familiar if you have used the ",(0,i.jsx)(n.code,{children:"group"})," functionality of a vector design tool — specifically the behavior of individual grouped elements when you drag, rotate, or resize the whole group.  As an exercise, try making a nest multiple layers deep of groups in a vector design tool, and observe what happens to individual elements and groups when you transform the entire container."]}),"\n",(0,i.jsx)(n.h4,{id:"2-matrix-multiplication",children:"2. Matrix multiplication"}),"\n",(0,i.jsxs)(n.p,{children:["Often times, you will want to combine transformations on a single element, without using any sort of nesting.  In these cases, you will want to ",(0,i.jsx)(n.em,{children:"multiply transforms."}),"  This entails two steps:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["use an expression (",(0,i.jsx)(n.code,{children:"{...}"}),") for the transform value, and"]}),"\n",(0,i.jsx)(n.li,{children:"multiply different affine operations within that expression"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The reason multiplication is the combinational operator for transformations stems from linear algebra, where ",(0,i.jsx)(n.em,{children:"matrix multiplication"})," describes the sequential combination of ",(0,i.jsx)(n.em,{children:"affine transformation matrices."})]}),"\n",(0,i.jsx)(n.p,{children:"An example of combining multiple transformations with matrix multiplication:"}),"\n",(0,i.jsx)(n.pre,{"data-language":"pax","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"pax","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"Rectangle"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"width"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"100px"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"height"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"200px"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"transform"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"rotate"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(100deg) "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"translate"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"100px"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"100px"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"scale"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"%, "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"%)"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,i.jsx)(n.p,{children:"In the above, the 100px square will be rotated, then translated (moved), then scaled (resized)."}),"\n",(0,i.jsx)(n.p,{children:"A few important notes about matrix multiplication:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Order matters — for example ",(0,i.jsx)(n.code,{children:"translate() * rotate()"})," will generally yield different behavior vs. ",(0,i.jsx)(n.code,{children:"rotate() * translate()"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["You can combine the same operation multiple times — for example ",(0,i.jsx)(n.code,{children:"scale() * scale()"})," or ",(0,i.jsx)(n.code,{children:"rotate() * scale() * rotate()"})]}),"\n",(0,i.jsxs)(n.li,{children:["Since these multiplications happen in an ",(0,i.jsx)(n.code,{children:"expression"})," context, you may also use symbolic ",(0,i.jsx)(n.code,{children:"properties"})," in these expressions — for example ",(0,i.jsx)(n.code,{children:"rotate(self.base_rotation * self.rotation_multiplier)"})," or ",(0,i.jsx)(n.code,{children:"scale(self.scale_mult) * rotate(self.active_rotation)"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Organizationally, you may find that it is useful to combine hierarchical grouping with matrix multiplication in different ways.  You may also make use of helper methods which can return dynamic or pre-computed transformations.  Finally, the use of layout components (such as ",(0,i.jsx)(n.code,{children:"pax-std"}),"'s ",(0,i.jsx)(n.code,{children:"Stacker"}),", or components that you may author yourself) allow abstraction of complex positioning and resizing logic."]}),"\n",(0,i.jsx)(n.p,{children:"--"}),"\n",(0,i.jsxs)(n.p,{children:["[1] Affine transforms:  ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Affine_transformation",children:"https://en.wikipedia.org/wiki/Affine_transformation"})]})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/reference/layout.md",route:"/reference/layout",pageMap:[{kind:"Meta",data:{index:"Introduction","intro-priorities-and-prior-art":"Priorities and Prior Art",installation:"Installation","key-concepts":"Key Concepts",examples:"Examples",reference:"Reference","authors-contributors":"Contributors",contact:{title:"Contact ↗",type:"page",href:"https://x.com/DevelopingPax",newWindow:!0}}},{kind:"MdxPage",name:"authors-contributors",route:"/authors-contributors"},{kind:"MdxPage",name:"examples",route:"/examples"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"installation",route:"/installation",children:[{kind:"Meta",data:{"operating-systems":"Operating Systems","app-targets":"Application Targets",plugins:"Plugins"}},{kind:"Folder",name:"app-targets",route:"/installation/app-targets",children:[{kind:"Meta",data:{web:"Web",desktop:"Desktop (MacOS)",mobile:"Mobile (iOS)"}},{kind:"MdxPage",name:"desktop",route:"/installation/app-targets/desktop"},{kind:"MdxPage",name:"mobile",route:"/installation/app-targets/mobile"},{kind:"MdxPage",name:"web",route:"/installation/app-targets/web"}]},{kind:"Folder",name:"operating-systems",route:"/installation/operating-systems",children:[{kind:"Meta",data:{macos:"MacOS",linux:"Linux",windows:"Windows"}},{kind:"MdxPage",name:"linux",route:"/installation/operating-systems/linux"},{kind:"MdxPage",name:"macos",route:"/installation/operating-systems/macos"},{kind:"MdxPage",name:"windows",route:"/installation/operating-systems/windows"}]},{kind:"MdxPage",name:"plugins",route:"/installation/plugins"}]},{kind:"MdxPage",name:"intro-priorities-and-prior-art",route:"/intro-priorities-and-prior-art"},{kind:"Folder",name:"key-concepts",route:"/key-concepts",children:[{kind:"Meta",data:{components:"Components",templates:"Templates",settings:"Settings",expressions:"Expressions",handlers:"Handlers",primitives:"Primitives"}},{kind:"MdxPage",name:"components",route:"/key-concepts/components"},{kind:"MdxPage",name:"expressions",route:"/key-concepts/expressions"},{kind:"MdxPage",name:"handlers",route:"/key-concepts/handlers"},{kind:"MdxPage",name:"primitives",route:"/key-concepts/primitives"},{kind:"MdxPage",name:"settings",route:"/key-concepts/settings"},{kind:"MdxPage",name:"templates",route:"/key-concepts/templates"}]},{kind:"Folder",name:"reference",route:"/reference",children:[{kind:"Meta",data:{designability:"Designability",layout:"Layout & Transforms","pax-std":"Pax Std",paxel:"Paxel","compilation-model":"Compilation Model",macros:"Macros","hardware-component-model":"Hardware Component Model","native-rendering":"Native Rendering",grammar:"DSL Grammar",javascript:"Pax & Javascript"}},{kind:"MdxPage",name:"compilation-model",route:"/reference/compilation-model"},{kind:"MdxPage",name:"designability",route:"/reference/designability"},{kind:"MdxPage",name:"grammar",route:"/reference/grammar"},{kind:"MdxPage",name:"hardware-component-model",route:"/reference/hardware-component-model"},{kind:"MdxPage",name:"javascript",route:"/reference/javascript"},{kind:"MdxPage",name:"layout",route:"/reference/layout"},{kind:"MdxPage",name:"macros",route:"/reference/macros"},{kind:"MdxPage",name:"native-rendering",route:"/reference/native-rendering"},{kind:"MdxPage",name:"pax-std",route:"/reference/pax-std"},{kind:"MdxPage",name:"paxel",route:"/reference/paxel"}]}],flexsearch:{codeblocks:!0},title:"Coordinate System & Transforms",headings:l},pageNextRoute:"/reference/layout",nextraLayout:o.ZP,themeConfig:r.Z};n.default=(0,t.j)(c)},8426:function(e,n,s){"use strict";var i=s(5893),t=s(5379),o=s.n(t);s(7294);let r={logo:e=>{let{darkMode:n}=e;return(0,i.jsxs)("svg",{height:"30",viewBox:"0 0 297 150",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"jsx-37c7cf7a4c4dcf24",children:[(0,i.jsxs)("g",{clipPath:"url(#clip0_100_305)",className:"jsx-37c7cf7a4c4dcf24",children:[(0,i.jsx)("path",{d:"M62.8831 75.0046C72.2158 75.0046 80.687 66.4399 80.687 57.0042C80.687 47.5686 72.2158 39.0039 62.8831 39.0039C53.5504 39.0039 45.0792 47.5686 45.0792 57.0042C45.0792 66.4399 53.5504 75.0046 62.8831 75.0046Z",fill:"currentColor",className:"jsx-37c7cf7a4c4dcf24"}),(0,i.jsx)("path",{d:"M0 8.42178V139.807L22.8643 149.814V149.737L22.8562 149.743V97.5579V53.8939L22.8643 15.7005L45.6553 7.85025L22.8643 0L0 8.42178Z",fill:"currentColor",className:"jsx-37c7cf7a4c4dcf24"}),(0,i.jsx)("path",{d:"M262.765 7.85022H45.6526V25.6033C45.6037 25.6445 45.5547 25.6829 45.5085 25.7242C50.6994 21.3306 57.4802 18.624 63.5652 18.624C79.8119 18.624 96.1889 33.0936 99.1187 51.2533C101.915 32.7336 118.553 18.5031 137.599 18.5031C143.817 18.5031 149.739 20.9733 154.862 24.9933V18.5031H176.468V95.4999H154.862V88.5316C150.378 92.7109 143.817 95.0218 137.599 95.0218C118.667 95.0218 102.116 80.9644 99.1676 62.6124C96.4879 80.7089 81.0511 94.5904 62.4047 94.5904C56.3795 94.5904 50.3733 92.5323 45.6499 88.3256V105.342H262.762L296.997 56.6938L262.762 7.85022H262.765ZM254.872 95.1866H230.168L216.09 74.3314L200.835 95.1866H176.523L203.969 57.0839L177.428 18.3383H201.925L216.397 39.504L230.244 18.3383H254.872L228.374 57.0839L254.872 95.1866Z",fill:"currentColor",className:"jsx-37c7cf7a4c4dcf24"}),(0,i.jsx)("path",{d:"M155.389 56.7653C155.389 47.1262 146.755 38.3967 137.221 38.3967C127.688 38.3967 119.053 47.1262 119.053 56.7653C119.053 66.4043 127.688 75.1338 137.221 75.1338C146.755 75.1338 155.389 66.4043 155.389 56.7653Z",fill:"currentColor",className:"jsx-37c7cf7a4c4dcf24"})]}),(0,i.jsx)("defs",{className:"jsx-37c7cf7a4c4dcf24",children:(0,i.jsx)("clipPath",{id:"clip0_100_305",className:"jsx-37c7cf7a4c4dcf24",children:(0,i.jsx)("rect",{width:"297",height:"149.814",fill:"white",className:"jsx-37c7cf7a4c4dcf24"})})}),(0,i.jsx)(o(),{id:"37c7cf7a4c4dcf24",children:"svg.jsx-37c7cf7a4c4dcf24{-webkit-mask-image:-webkit-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:-webkit-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:-moz-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:-o-linear-gradient(30deg,black 25%,rgba(0,0,0,.2)50%,black 75%);mask-image:linear-gradient(60deg,black 25%,rgba(0,0,0,.2)50%,black 75%);-webkit-mask-size:400%;mask-size:400%;-webkit-mask-position:0%;mask-position:0%}svg.jsx-37c7cf7a4c4dcf24:hover{-webkit-mask-position:100%;mask-position:100%;-webkit-transition:mask-position 1s ease,-webkit-mask-position 1s ease;-moz-transition:mask-position 1s ease,-webkit-mask-position 1s ease;-o-transition:mask-position 1s ease,-webkit-mask-position 1s ease;transition:mask-position 1s ease,-webkit-mask-position 1s ease}"})]})},project:{link:"https://github.com/paxengine/pax"},chat:{link:"https://discord.com"},docsRepositoryBase:"https://github.com/paxengine/docs",footer:{text:"Pax Corp Inc."},useNextSeoProps:()=>({titleTemplate:"%s"}),head:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,i.jsx)("meta",{property:"og:title",content:"Pax Docs"}),(0,i.jsx)("meta",{property:"og:description",content:"Documentation for Pax"}),(0,i.jsx)("link",{rel:"icon",href:"./favicon.svg",type:"image/svg+xml"})]})};n.Z=r},5789:function(){}},function(e){e.O(0,[774,678,888,179],function(){return e(e.s=3132)}),_N_E=e.O()}]);