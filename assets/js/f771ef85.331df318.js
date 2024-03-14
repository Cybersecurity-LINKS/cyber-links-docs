"use strict";(self.webpackChunkmediterraneus_docs=self.webpackChunkmediterraneus_docs||[]).push([[119],{9225:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var t=r(5893),s=r(1151);const c={sidebar_position:1,description:"Smart contracts for the Mediterraneus protocol."},o="Smart contracts",a={id:"running-the-protocol/smart-contracts",title:"Smart contracts",description:"Smart contracts for the Mediterraneus protocol.",source:"@site/docs_mediterraneus/running-the-protocol/smart-contracts.md",sourceDirName:"running-the-protocol",slug:"/running-the-protocol/smart-contracts",permalink:"/mediterraneus/running-the-protocol/smart-contracts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Smart contracts for the Mediterraneus protocol."},sidebar:"tutorialSidebar",previous:{title:"Running the protocol",permalink:"/mediterraneus/category/running-the-protocol"},next:{title:"Issuer",permalink:"/mediterraneus/running-the-protocol/issuer-rs"}},i={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Prepare environment",id:"prepare-environment",level:2},{value:"Local Deployment",id:"local-deployment",level:2},{value:"Run the scripts",id:"run-the-scripts",level:2},{value:"Verify the deployed smart contracts code",id:"verify-the-deployed-smart-contracts-code",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"smart-contracts",children:"Smart contracts"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Cybersecurity-LINKS/mediterraneus-smart-contracts",children:(0,t.jsx)(n.strong,{children:"mediterraneus-smart-contracts"})})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hardhat.org/",children:"Solidity compiler (hardhat)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"npm"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prepare-environment",children:"Prepare environment"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a ",(0,t.jsx)(n.code,{children:".env"})," file starting from ",(0,t.jsx)(n.code,{children:".env.example"})," file and update the values accordingly."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-conf",children:"PRIVATE_KEY_ISSUER='<priv_key>'\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.code,{children:"hardhat.config.js"})," specify the various networks to play around with different accounts."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"  'hardhat-issuer': {\n      url: 'http://127.0.0.1:8545/',\n      chainId: 31337,\n      gas: 2100000, \n      gasPrice: 8000000000,\n      accounts: [process.env.PRIVATE_KEY_ISSUER],\n    },\n"})}),"\n",(0,t.jsx)(n.h2,{id:"local-deployment",children:"Local Deployment"}),"\n",(0,t.jsx)(n.p,{children:"Smart contracts can be deployed on the hardhat local network. It is an EVM-like emulated chain."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Clone the repository and install the dependecies."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npm install --save-dev\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Compile the contracts"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx hardhat compile\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Start a local node"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx hardhat node\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"To fund issuer and other addresses"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx hardhat --network localhost faucet <eth-address>\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"In other shell we can run the deploy script by specifying the local hardhat network"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx hardhat run --network hardhat-issuer scripts/deploy.js\n"})}),"\n",(0,t.jsx)(n.h2,{id:"run-the-scripts",children:"Run the scripts"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Deploy the contracts"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx hardhat run --network shimmerevm-testnet scripts/deploy.js\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Run the various scripts to play with the contracts"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx hardhat run --network <your-network> scripts/<script.js>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"verify-the-deployed-smart-contracts-code",children:"Verify the deployed smart contracts code"}),"\n",(0,t.jsx)(n.p,{children:"Verifying a contract means making its source code public, along with the compiler settings you used, which\nallows anyone to compile it and compare the generated bytecode with the one that is deployed on-chain."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Modify the hardhat config by adding the ",(0,t.jsx)(n.code,{children:"etherscan"})," information as follows:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"    module.exports = {\n    solidity: \"0.8.18\",\n    settings: {\n        ...\n    },\n    networks: {\n        ...\n    },\n    etherscan: {\n        apiKey: {\n        'shimmerevm-testnet': 'ABCDE12345ABCDE12345ABCDE123456789' \n        },\n        customChains: [\n        {\n            network: 'shimmerevm-testnet',\n            chainId: 1071,\n            urls: {\n            apiURL: 'https://explorer.evm.testnet.shimmer.network/api',\n            browserURL: 'https://explorer.evm.testnet.shimmer.network/'\n            }\n        }\n        ]\n    }\n    };\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Verify the SCs' code:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'npx hardhat verify --network shimmerevm-testnet <contract address> "<contract constructor Arg1>" "<contract constructor Arg2>"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(7294);const s={},c=t.createContext(s);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);