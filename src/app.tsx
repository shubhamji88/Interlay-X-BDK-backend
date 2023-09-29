// require( "@interlay/interbtc-api")
import "@interlay/interbtc-api"
import { createInterBtcApi } from '@interlay/interbtc-api';
import { ApiPromise } from '@polkadot/api';
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { TypeRegistry } from '@polkadot/types/create';
import jsonrpc from '@polkadot/types/interfaces/jsonrpc';
import { keyring } from '@polkadot/ui-keyring';
import { isTestChain } from '@polkadot/util';
import * as React from 'react';
import { useLocalStorage } from 'react-use';
console.log("vfsvsdd")










// ---------------------
// import { createTestKeyring } from "@polkadot/keyring/testing";
// import { Keyring } from '@polkadot/api';
// import { createInterBtcApi } from "./factory";
// import { Bitcoin, BitcoinAmount } from "@interlay/monetary-js";
// import { KeyringPair } from '@polkadot/keyring/types';
// import { BigSource } from "big.js";
// // If you are using a local development environment
// // const PARACHAIN_ENDPOINT = "ws://127.0.0.1:9944";
// // if you want to use the Interlay-hosted beta network
// const DEFAULT_PARACHAIN_ENDPOINT = "ws://127.0.0.1:9944";
// const DEFAULT_FAUCET_ENDPOINT = "http://0.0.0.0:3036";
// const DEFAULT_BITCOIN_CORE_NETWORK = "regtest";
// const DEFAULT_BITCOIN_CORE_HOST = "0.0.0.0";
// const DEFAULT_BITCOIN_CORE_USERNAME = "rpcuser";
// const DEFAULT_BITCOIN_CORE_PASSWORD = "rpcpassword";
// const DEFAULT_BITCOIN_CORE_PORT = "18443";
// const DEFAULT_BITCOIN_CORE_WALLET = "Alice";


// const bitcoinNetwork = "regtest";
// const alicePrivateKey = "cMjLazLMzPEN2ZHcirCJ1ULzPpcZ1AZEp6jU6weZV8zEB4KodXpV"

// const privateKeyBytes = new TextEncoder().encode(alicePrivateKey);

// async function name() {
//     console.log("started")
//     const interBTC = await createInterBtcApi(DEFAULT_PARACHAIN_ENDPOINT, bitcoinNetwork);
//     const keyring = new Keyring({ type: 'sr25519' });
//     const keyPair: KeyringPair = keyring.addFromSeed(privateKeyBytes);

//     interBTC.setAccount(keyPair);

//     console.log("Block height: "+interBTC.btcRelay.getLatestBlockHeight())
// }

// name()


// const requestResults = await interBTC.issue.request(amount);
// interBTC