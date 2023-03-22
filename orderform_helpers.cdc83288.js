import{E as _}from"./entry.1a1a18c5.js";import{u as l}from"./index.bf5dfd14.js";import{$ as O}from"./index.04e7b7f9.js";import{R as C}from"./helpers.07d6ed90.js";import{N}from"./HLConst.970dafa5.js";var a=(e=>(e.FUNNEL="funnel",e.WEBSITE="website",e.CALENDAR="calendar",e))(a||{}),I=(e=>(e.ONE_STEP_ORDER_FORM="one_step_order_form",e.TWO_STEP_ORDER_FORM="two_step_order_form",e.UPSELL="upsell",e))(I||{});const R=()=>({channel:"APP",source:"WEB_USER",version:"2021-04-15"}),o=e=>{const t=_().public;return O.create({baseURL:e||t.paymentsServiceUrl,headers:R()})},f={fetchIsCouponApplicable:e=>o()("payments/coupon/applicable",{params:e,method:"GET"}),verifyCoupon:e=>o()("/payments/coupon/verify",{body:e,method:"POST"}),createOrder:e=>o()("/payments/orders",{body:e,method:"POST"}),initiateStripePayment:e=>o()("/payments/stripe/initiate",{body:e,method:"POST"}),verifyStripePayment:e=>o()("/payments/stripe/verify",{body:e,method:"POST"}),authorizeNetOrderPayment:e=>o()("/payments/authorize-net/order/pay",{body:e,method:"POST"}),nmiOrderPayment:e=>o()("/payments/nmi/order/pay",{body:e,method:"POST"})},z={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},D=e=>{if(!e.length)return 0;let t=0;return e.map(r=>{t=(r.showNewPrice?r.newPrice:r.amount*r.qty)+t}),t},U=async({contactId:e,domain:t,pageUrl:r,locationId:i,productPreviewList:n,isCouponApplied:y,couponCode:h,couponSessionId:g,store:s,subType:P})=>{var p;try{const c=l("msgsndr_id").value,b=l("am_id").value,v=l("am_fingerprint").value,E=s.funnelName||"funnel";t||(t=window.location.hostname,r=window.location.pathname);const{funnelPageId:S,funnelId:w,stepId:T}=s,d={altId:i,altType:"location",contactId:e,source:{type:s.pageType===a.FUNNEL?a.FUNNEL:a.WEBSITE,subType:P,id:w,name:E,meta:{stepId:T,pageId:S,domain:t,pageUrl:r,affiliateManager:{id:b,fingerprint:v}}},products:n.map(u=>({id:u._id,qty:u.qty})),fingerprint:c,trackingId:C()};y&&(d.couponCode=h,d.couponSessionId=g);const m=await f.createOrder(d);if(!((p=m.order)==null?void 0:p._id))throw new Error("Something went wrong while creating order. Please try again later.");return m}catch(c){return console.log(c),{error:!0}}},q=async({orderId:e,locationId:t})=>{try{if(!e)throw new Error("Order id is required to initiate payment.");const r={altId:t,altType:"location",orderId:e};return await f.initiateStripePayment(r)}catch(r){return console.log(r),{error:!0}}},B=(e,t,r,i)=>{let n=document.getElementById(e);return n||(n=document.createElement("script"),n.setAttribute("id",e),n.src=t,r===N&&n.setAttribute("data-tokenization-key",i.nmiMerchantPublicKey),document.head.appendChild(n)),n},$=e=>({variant:"inline",styleSniffer:!0,invalidCss:{color:"#B40E3E"},customCss:{"border-color":"rgb(209, 213, 219)","border-style":"solid","border-width":"1px","border-radius":"5px","line-height":"24px",padding:"8px 12px","font-size":"14px",height:"40px","font-family":"sans-serif"},focusCss:{"border-color":"rgb(1, 125, 233)","border-style":"solid","border-width":"1px"},fields:{ccnumber:{title:"Card Number",placeholder:"1234 1234 1234 1234",selector:`#ccnumber-${e}`},ccexp:{placeholder:"MM / YY",selector:`#ccexp-${e}`},cvv:{placeholder:"CVV",selector:`#cvv-${e}`}},timeoutCallback:function(){console.log("The tokenization didn't respond in the expected timeframe.  This could be due to an invalid or incomplete field or poor connectivity")}});export{I as O,f as P,B as a,U as c,D as g,q as i,$ as n,z as s};
