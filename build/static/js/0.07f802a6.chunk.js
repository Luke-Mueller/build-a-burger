(window["webpackJsonp05_build-a-burger"]=window["webpackJsonp05_build-a-burger"]||[]).push([[0],{100:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__20AK_"}},103:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),i=a(7),l=a(6),o=a(8),c=a(0),u=a.n(c),d=a(21),s=a(16),p=a(54),m=a(34),h=a(99),v=a.n(h),g=function(e){return u.a.createElement("div",{className:v.a.CheckoutSummary},u.a.createElement("h1",null,"We hope it tastes great!"),u.a.createElement("div",{style:{width:"100%",margin:"auto"}},u.a.createElement(p.a,{ingredients:e.ingredients})),u.a.createElement(m.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),u.a.createElement(m.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},f=a(18),b=a(42),C=a(100),y=a.n(C),E=a(22),k=a(97),j=a(45),O=a(17),I=a(3),_=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},a.orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ings,price:a.props.price,orderData:t,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a.inputChangedHandler=function(e,t){var n=Object(I.b)(a.state.orderForm[t],{value:e.target.value,valid:Object(I.a)(e.target.value,a.state.orderForm[t].validation),touched:!0}),r=Object(I.b)(a.state.orderForm,Object(f.a)({},t,n)),i=!0;for(var l in r)i=r[l].valid&&i;a.setState({orderForm:r,formIsValid:i})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=u.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return u.a.createElement(k.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})}),u.a.createElement(m.a,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(n=u.a.createElement(b.a,null)),u.a.createElement("div",{className:y.a.ContactData},u.a.createElement("h4",null,"Enter your contact data"),n)}}]),t}(c.Component),T=Object(s.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onOrderBurger:function(t,a){return e(O.f(t,a))}}})(Object(j.a)(_,E.a)),N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u.a.createElement(d.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?u.a.createElement(d.a,{to:"/"}):null;e=u.a.createElement("div",null,t,u.a.createElement(g,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),u.a.createElement(d.b,{path:this.props.match.path+"/contact-data",component:T}))}return e}}]),t}(c.Component);t.default=Object(s.b)(function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}})(N)},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(98),l=a.n(i);t.a=function(e){var t=null,a=[l.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(l.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:l.a.Input},r.a.createElement("label",{className:l.a.Label},e.label),t)}},98:function(e,t,a){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},99:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}}}]);
//# sourceMappingURL=0.07f802a6.chunk.js.map