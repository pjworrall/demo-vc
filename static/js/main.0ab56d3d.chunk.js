(window["webpackJsonpdemo-vc"]=window["webpackJsonpdemo-vc"]||[]).push([[0],{232:function(e,t,n){e.exports=n(472)},237:function(e,t,n){},259:function(e,t){},261:function(e,t,n){var a={"./N3Lexer":93,"./N3Lexer.js":93,"./N3Parser":94,"./N3Parser.js":94,"./N3Store":139,"./N3Store.js":139,"./N3StreamParser":140,"./N3StreamParser.js":140,"./N3StreamWriter":145,"./N3StreamWriter.js":145,"./N3Util":95,"./N3Util.js":95,"./N3Writer":100,"./N3Writer.js":100};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=261},263:function(e,t){},265:function(e,t){},290:function(e,t){},292:function(e,t){},335:function(e,t){},337:function(e,t){},385:function(e,t){},386:function(e,t){},447:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=447},472:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(222),l=n.n(i),c=(n(237),n(71)),o=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"buttons"},r.a.createElement(c.a,{to:"publisher",className:"button is-primary"},"Publisher"),r.a.createElement(c.a,{to:"consumer",className:"button"},"Consumer"))))},s=n(224),u=n(225),m=n(229),d=n(226),p=n(70),h=n(230),b=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={value:""},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){console.log("CE submitted:",this.state.value),alert("Corroborating Event accepted, thanks!"),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h1",null,"Verify Corroborating Event"),r.a.createElement("br",null),r.a.createElement("label",null,"Select Corroborating Event Type:"),r.a.createElement("br",null),r.a.createElement("select",{id:"ce-type",name:"ce-type"},r.a.createElement("option",{value:""},"--Please choose an option--"),r.a.createElement("option",{value:"utility-bill"},"Physical check of utility bill in branch"),r.a.createElement("option",{value:"delivery-receipt"},"Receipt of goods delivery")),r.a.createElement("br",null),r.a.createElement("label",null,"Paste JSON here...",r.a.createElement("br",null),r.a.createElement("textarea",{value:this.state.value,onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(r.a.Component),v=function(e){return r.a.createElement(b,null)},f=n(60),E=function(e){var t=r.a.useState(""),n=Object(f.a)(t,2),a=n[0],i=n[1],l=r.a.useState(!1),c=Object(f.a)(l,2),o=c[0],s=c[1],u=r.a.useCallback((function(t){t.preventDefault(),s(!0),e.onSign('\n{\n  "@id": "https://demo-vc-2.inrupt.net/profile/card#cred",\n  "http://dig.csail.mit.edu/2018/svc#description": [\n      {\n          "@value": "Congratulations! By the powers vested in me as Issuer with ID \'https://michielbdejong.inrupt.net/profile/card#me\', I hereby grant Subject with ID \'https://demo-vc-2.inrupt.net/profile/card#me\' a credential of type GENERAL"\n      }\n  ],\n  "http://dig.csail.mit.edu/2018/svc#domain": [\n      {\n          "@value": "GENERAL"\n      },\n      {\n          "@value": "some domain"\n      }\n  ],\n  "http://dig.csail.mit.edu/2018/svc#id": [\n      {\n          "@value": "1234567"\n      },\n      {\n          "@value": "undefined338114686478150"\n      }\n  ],\n  "http://dig.csail.mit.edu/2018/svc#issuerId": [\n      {\n          "@value": "https://michielbdejong.inrupt.net/profile/card#me"\n      },\n      {\n          "@id": "https://demo-vc-2.inrupt.net/profile/card#me"\n      }\n  ],\n  "http://dig.csail.mit.edu/2018/svc#messageType": [\n      {\n          "@value": "ISSUANCE"\n      }\n  ],\n  "http://dig.csail.mit.edu/2018/svc#subjectId": [\n      {\n          "@value": "https://demo-vc-2.inrupt.net/profile/card#me"\n      },\n      {\n          "@id": "https://demo-vc-2.inrupt.net/profile/card#me"\n      }\n  ],\n  "http://dig.csail.mit.edu/2018/svc#title": [\n      {\n          "@value": "GENERAL Credential for Subject with ID \'https://demo-vc-2.inrupt.net/profile/card#me\'"\n      },\n      {\n          "@value": "testing this"\n      }\n  ],\n  "@type": [\n      "http://dig.csail.mit.edu/2018/svc#Credential"\n  ],\n  "https://w3id.org/credentials/v1#credentialStatus": [\n      {\n          "@value": "undefined338114686478150.n3"\n      }\n  ],\n  "https://w3id.org/security#proof": {\n      "@graph": {\n          "@type": "https://w3id.org/security#RsaSignature2018",\n          "http://purl.org/dc/terms/created": {\n              "@type": "http://www.w3.org/2001/XMLSchema#dateTime",\n              "@value": "2019-09-23T12:40:01Z"\n          },\n          "https://w3id.org/security#jws": "eyJhbGciOiJQUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Y2tijVRkOBQQ87dlkRl5_bfTIiwgdMQVyT5rpMOM2iYinBxKtX-YGATXM2H7LkmYP6QJIWPwKKCelWyMhlqN2Hobq8WKDkSl3fk5KBVL8Wrq9zG02XcJa90eKG5kWr-FD00pNBTP3v6DtfDyxN8sBXqsXtDL_ErbznMVMEvOP7t7D0fIQiP5sD2qFPi576vhKqD4I-81sQ6otkwTT4VpiIhUTmTrburAi07HrH6pG8U1AeHBeSw4rVQVYggRiCPE4NR4MV2DvNMBEWiJMPhD88Tu2Osl_iy8qVNLJhjSFiXLyCh3oFYV8yYFpO_Ls5iyXWs7Fgp4lQ8wSlDIx5M9fQ",\n          "https://w3id.org/security#proofPurpose": {\n              "@id": "https://w3id.org/security#assertionMethod"\n          }\n      }\n  }\n}\n',a)}),[e,a]),m=o?"button is-primary is-loading":"button is-primary";return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:u},r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"subject",className:"label"},"Subject's WebID"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{type:"url",id:"subject",disabled:o,onChange:function(e){return i(e.target.value)}}))),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:m},"Sign")))))},g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"field"},r.a.createElement("label",{htmlFor:"subject",className:"label"},"Credential"),r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{name:"credential",id:"credential",readOnly:!0,cols:30,rows:10,value:e.credential})),r.a.createElement("p",{className:"help"},"The above code snippet is proof that you provided a credential.")),r.a.createElement("p",{className:"content"},"This proof has also been sent to the credential subject."))},y=n(35),N=n.n(y),w=n(227),S=n(231),j=n(16);function O(){return(O=Object(w.a)(N.a.mark((function e(t,n){var a,r,i,l;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)(n);case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:if(r=a.getNodeRef(j.a.inbox)){e.next=8;break}return e.abrupt("return",null);case 8:return i="ce_"+Date.now(),e.next=11,fetch(r,{body:t,method:"POST",headers:{"Content-Type":"text/plain",slug:i}});case 11:return l=e.sent,e.abrupt("return",l.ok?l.headers.get("Location"):null);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(e){var t=r.a.useState(),n=Object(f.a)(t,2),a=n[0],i=n[1],l=r.a.useState(!1),c=Object(f.a)(l,2),o=c[0],s=c[1];r.a.useEffect((function(){a&&function(e,t){return O.apply(this,arguments)}(a.cred,a.webId).then((function(){return s(!0)}))}),[a]);var u=o&&"undefined"!==typeof a?r.a.createElement(g,{credential:a.cred}):r.a.createElement(E,{onSign:function(e,t){return i({cred:e,webId:t})}});return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section"},u))},I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.b,{basepath:"/demo-vc"},r.a.createElement(o,{path:"/"}),r.a.createElement(v,{path:"consumer"}),r.a.createElement(C,{path:"publisher"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[232,1,2]]]);
//# sourceMappingURL=main.0ab56d3d.chunk.js.map