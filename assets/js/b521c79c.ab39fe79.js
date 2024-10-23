"use strict";(self.webpackChunkmediterraneus_docs=self.webpackChunkmediterraneus_docs||[]).push([[8911],{72630:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=r(85893),o=r(11151);const s={sidebar_position:4,description:"Agent system that handles user identity and assets."},i="Connector",c={id:"running-the-protocol/connector-rs",title:"Connector",description:"Agent system that handles user identity and assets.",source:"@site/docs_mediterraneus/running-the-protocol/connector-rs.md",sourceDirName:"running-the-protocol",slug:"/running-the-protocol/connector-rs",permalink:"/mediterraneus/running-the-protocol/connector-rs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Agent system that handles user identity and assets."},sidebar:"tutorialSidebar",previous:{title:"Frontend",permalink:"/mediterraneus/running-the-protocol/frontend-demo"},next:{title:"Verifier",permalink:"/mediterraneus/running-the-protocol/verifier"}},a={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Prepare environment",id:"prepare-environment",level:2},{value:"Running the Application",id:"running-the-application",level:2},{value:"Run everything via Docker",id:"run-everything-via-docker",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"connector",children:"Connector"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Cybersecurity-LINKS/mediterraneus-connector-rs",children:"GitHub repository"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.rust-lang.org/learn/get-started",children:"cargo"}),", with ",(0,t.jsx)(n.code,{children:"rustc 1.74 or newer"})]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"docker"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prepare-environment",children:"Prepare environment"}),"\n",(0,t.jsxs)(n.ol,{start:"0",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add the ABI source for generating contract bindings. This procedure is requested only when the contract definition changes. You just need to copy the ",(0,t.jsx)(n.code,{children:"artifacts/contracts/ServiceBase.sol/ServiceBase.json"})," ABI file in the ",(0,t.jsx)(n.code,{children:"smart-contracts"})," directory.\nAbi sources are generated in the ",(0,t.jsx)(n.a,{href:"/mediterraneus/running-the-protocol/smart-contracts",children:"smart contracts repo"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"connector-rs/env"})," folder, create a ",(0,t.jsx)(n.code,{children:".env"})," file starting from ",(0,t.jsx)(n.code,{children:".env.example"})," and update the values accordingly to your development enviroment."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-editorconfig",children:'RUST_BACKTRACE=1\nRUST_LOG=debug # info\n\n# HTTP SERVER CONFIG\nHOST_ADDRESS=127.0.0.1 # "0.0.0.0" for deploying, "127.0.0.1" for dev\nHOST_PORT=8085\n\n# DLT CONFIG\nNODE_URL="https://api.testnet.shimmer.network"\nFAUCET_API_ENDPOINT="https://faucet.testnet.shimmer.network/api/enqueue"\nEXPLORER_URL=""\nRPC_PROVIDER="https://json-rpc.evm.testnet.shimmer.network"\nCHAIN_ID=1073\n\n# KEY STORAGE CONFIG\nKEY_STORAGE_STRONGHOLD_SNAPSHOT_PATH="./key_storage.stronghold"\nKEY_STORAGE_STRONGHOLD_PASSWORD="some_hopefully_secure_password"\nKEY_STORAGE_MNEMONIC="grace eye hour away retire put crunch burger bracket coyote twist cherry glare collect retreat"\n\n# DATABASE CONNECTION CONFIG\nDB_USER="postgres"\nDB_PASSWORD="connector"\nDB_NAME="connector"\nDB_HOST=127.0.0.1 # "postgres" for deploying, "127.0.0.1 " for dev\nDB_PORT=5432\nDB_MAX_POOL_SIZE=16\n\n# IPFS CONFIG\nIPFS_URL="http://ipfs:5001"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"running-the-application",children:"Running the Application"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Start up the database and IPFS by running:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker compose --profile dev up -d\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Run the connector service:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd connector-rs\ncargo run --profile develop\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Sometimes it may be useful to ",(0,t.jsx)(n.strong,{children:"override"})," ",(0,t.jsx)(n.code,{children:".env"})," parameters using cli args.\nThe complete list of parameters is available typing the ",(0,t.jsx)(n.code,{children:"cargo run --profile develop -- --help"})," command"]}),"\n",(0,t.jsx)(n.p,{children:"For example, it is possible to define parameters for testing on different nodes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# For local node Provider\ncargo run --release -- --rpc-provider "http://127.0.0.1:8545/" --chain-id 31337\n\n# For Shimmer Provider\ncargo run --release -- --rpc-provider "https://json-rpc.evm.testnet.shimmer.network" --chain-id 1073\n\n# For Sepolia \ncargo run --release -- --rpc-provider https://sepolia.infura.io/v3/<API_KEY> --chain-id 11155111\n'})}),"\n",(0,t.jsx)(n.h2,{id:"run-everything-via-docker",children:"Run everything via Docker"}),"\n",(0,t.jsxs)(n.p,{children:["Beware of the configuration of the environment variables. Note: Modify ",(0,t.jsx)(n.code,{children:".env"})," and ",(0,t.jsx)(n.code,{children:"postgres.env"})," reasonably. (",(0,t.jsx)(n.code,{children:"ADDR"})," and ",(0,t.jsx)(n.code,{children:"PG.HOST"})," ",(0,t.jsx)(n.em,{children:"must"})," be changed for the deployment use case).\n(The connector uses the Shimmer provider, change CMD command in the Dockerfile to change the network)."]}),"\n",(0,t.jsx)(n.p,{children:"Copy the smart contract json files to create the Rust bindings (mandatory if the smart contracts change. There is already a copy in this repo)."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# assuming the mediterraneus-smart-contracts folder is located in the same root folder of mediterraneus-connector-rs\ncp ../mediterraneus-smart-contracts/artifacts/contracts/ServiceBase.sol/ServiceBase.json ./smart-contracts\n"})}),"\n",(0,t.jsx)(n.p,{children:"Commands to build the app\u2019s container image and launch the app container:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker compose --profile deploy up -d\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var t=r(67294);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);