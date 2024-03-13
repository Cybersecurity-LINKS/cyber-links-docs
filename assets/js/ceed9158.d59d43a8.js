"use strict";(self.webpackChunkmediterraneus_docs=self.webpackChunkmediterraneus_docs||[]).push([[223],{3325:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=r(5893),i=r(1151);const s={sidebar_position:2},o="Issuer",a={id:"running-the-protocol/issuer-rs",title:"Issuer",description:"- mediterraneus-issuer-rs, Issuer of verifiable credentials using smart contracts to bind Externally Owned Accounts (EOAs) with Self-Sovereign Identities (SSI). Sample implementation for the Mediterraneus Protocol,",source:"@site/docs_mediterraneus/running-the-protocol/issuer-rs.md",sourceDirName:"running-the-protocol",slug:"/running-the-protocol/issuer-rs",permalink:"/mediterraneus/running-the-protocol/issuer-rs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Smart contracts",permalink:"/mediterraneus/running-the-protocol/smart-contracts"},next:{title:"Connector",permalink:"/mediterraneus/running-the-protocol/connector-rs"}},c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Prepare environment",id:"prepare-environment",level:2},{value:"Running the Application",id:"running-the-application",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"issuer",children:"Issuer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Cybersecurity-LINKS/mediterraneus-issuer-rs",children:(0,t.jsx)(n.strong,{children:"mediterraneus-issuer-rs"})}),", Issuer of verifiable credentials using smart contracts to bind Externally Owned Accounts (EOAs) with Self-Sovereign Identities (SSI). Sample implementation for the Mediterraneus Protocol,"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.rust-lang.org/learn/get-started",children:"cargo"}),", with ",(0,t.jsx)(n.code,{children:"rustc 1.74 or newer"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"docker"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prepare-environment",children:"Prepare environment"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.code,{children:".env"})," file starting from ",(0,t.jsx)(n.code,{children:".env.example"})," and update the values accordingly to your development enviroment."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"PRIVATE_KEY='<issuer private key>'\nNON_SECURE_MNEMONIC='<iota wallet mnemonic>'\nKEY_STORAGE_MNEMONIC='<identity key storage mnemonic>'\nIDENTITY_SC_ADDRESS='<address of the Identity smart contract>'\n"})}),"\n",(0,t.jsx)(n.p,{children:"Optional:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Update the ",(0,t.jsx)(n.code,{children:"abi/idsc_abi.json"})," file if there are changes to the Identity Smart Contract."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Start up the database by running:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker compose up -d\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Run the issuer service"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"# For local node Provider\ncargo run --release -- -l\n\n# For Shimmer Provider\ncargo run --release\n\n# For custom Provider (example Sepolia)\ncargo run --release -- --custom-node https://sepolia.infura.io/v3/<API_KEY> --chain-id 11155111\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Keep in mind that when using the local node setup, the Identity ABI needs to be manually copied into the ",(0,t.jsx)(n.code,{children:"abi"})," folder. Additionally, ensure that the file is named ",(0,t.jsx)(n.code,{children:"idsc_abi.json"}),". On the other hand, when working with a public network, consider publishing the ABI and dynamically loading it through an API."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(7294);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);