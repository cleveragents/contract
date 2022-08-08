/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Timelock, TimelockInterface } from "../../contracts/Timelock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "CancelTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "ExecuteTransaction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "NewAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "NewDelay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPendingAdmin",
        type: "address",
      },
    ],
    name: "NewPendingAdmin",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "QueueTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAXIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "admin_initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "cancelTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "signature",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "queueTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "queuedTransactions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay_",
        type: "uint256",
      },
    ],
    name: "setDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pendingAdmin_",
        type: "address",
      },
    ],
    name: "setPendingAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161120138038061120183398101604081905261002f91610134565b61546081101561009a5760405162461bcd60e51b815260206004820152603760248201526000805160206111e183398151915260448201527f7420657863656564206d696e696d756d2064656c61792e00000000000000000060648201526084015b60405180910390fd5b62278d008111156101015760405162461bcd60e51b815260206004820152603b60248201526000805160206111e183398151915260448201527f74206e6f7420657863656564206d6178696d756d2064656c61792e00000000006064820152608401610091565b600080546001600160a01b0319166001600160a01b0393909316929092179091556002556003805460ff1916905561016e565b6000806040838503121561014757600080fd5b82516001600160a01b038116811461015e57600080fd5b6020939093015192949293505050565b6110648061017d6000396000f3fe6080604052600436106100e15760003560e01c80636fc1f57e1161007f578063c1a287e211610059578063c1a287e214610240578063e177246e14610257578063f2b0653714610277578063f851a440146102a757600080fd5b80636fc1f57e146101e95780637d645fab14610213578063b1b43ae51461022a57600080fd5b80633a66f901116100bb5780633a66f901146101655780634dd18bf514610193578063591fcdfe146101b35780636a42b8f8146101d357600080fd5b80630825f38f146100ed5780630e18b68114610116578063267822471461012d57600080fd5b366100e857005b600080fd5b6101006100fb366004610dbe565b6102c7565b60405161010d9190610ecb565b60405180910390f35b34801561012257600080fd5b5061012b610639565b005b34801561013957600080fd5b5060015461014d906001600160a01b031681565b6040516001600160a01b03909116815260200161010d565b34801561017157600080fd5b50610185610180366004610dbe565b610702565b60405190815260200161010d565b34801561019f57600080fd5b5061012b6101ae366004610ede565b6108b5565b3480156101bf57600080fd5b5061012b6101ce366004610dbe565b610a12565b3480156101df57600080fd5b5061018560025481565b3480156101f557600080fd5b506003546102039060ff1681565b604051901515815260200161010d565b34801561021f57600080fd5b5061018562278d0081565b34801561023657600080fd5b5061018561546081565b34801561024c57600080fd5b506101856212750081565b34801561026357600080fd5b5061012b610272366004610ef9565b610b2c565b34801561028357600080fd5b50610203610292366004610ef9565b60046020526000908152604090205460ff1681565b3480156102b357600080fd5b5060005461014d906001600160a01b031681565b6000546060906001600160a01b0316331461034f5760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a20436160448201527f6c6c206d75737420636f6d652066726f6d2061646d696e2e000000000000000060648201526084015b60405180910390fd5b6000868686868660405160200161036a959493929190610f12565b60408051601f1981840301815291815281516020928301206000818152600490935291205490915060ff166103f55760405162461bcd60e51b815260206004820152603d602482015260008051602061100f83398151915260448201527f616e73616374696f6e206861736e2774206265656e207175657565642e0000006064820152608401610346565b824210156104675760405162461bcd60e51b8152602060048201526045602482015260008051602061100f83398151915260448201527f616e73616374696f6e206861736e2774207375727061737365642074696d65206064820152643637b1b59760d91b608482015260a401610346565b6104748362127500610cb0565b4211156104cd5760405162461bcd60e51b8152602060048201526033602482015260008051602061100f83398151915260448201527230b739b0b1ba34b7b71034b99039ba30b6329760691b6064820152608401610346565b6000818152600460205260408120805460ff191690558551606091036104f4575083610520565b85805190602001208560405160200161050e929190610f5e565b60405160208183030381529060405290505b600080896001600160a01b0316898460405161053c9190610f8f565b60006040518083038185875af1925050503d8060008114610579576040519150601f19603f3d011682016040523d82523d6000602084013e61057e565b606091505b5091509150816105e45760405162461bcd60e51b815260206004820152603d602482015260008051602061100f83398151915260448201527f616e73616374696f6e20657865637574696f6e2072657665727465642e0000006064820152608401610346565b896001600160a01b0316847fa560e3198060a2f10670c1ec5b403077ea6ae93ca8de1c32b451dc1a943cd6e78b8b8b8b6040516106249493929190610fab565b60405180910390a39998505050505050505050565b6001546001600160a01b031633146106b95760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a61636365707441646d696e3a2043616c6c206d75737460448201527f20636f6d652066726f6d2070656e64696e6741646d696e2e00000000000000006064820152608401610346565b60008054336001600160a01b0319918216811783556001805490921690915560405190917f71614071b88dee5e0b2ae578a9dd7b2ebbe9ae832ba419dc0242cd065a290b6c91a2565b600080546001600160a01b0316331461077c5760405162461bcd60e51b815260206004820152603660248201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a2043616c6c6044820152751036bab9ba1031b7b6b290333937b69030b236b4b71760511b6064820152608401610346565b61078f6002546107894290565b90610cb0565b8210156108165760405162461bcd60e51b815260206004820152604960248201527f54696d656c6f636b3a3a71756575655472616e73616374696f6e3a204573746960448201527f6d6174656420657865637574696f6e20626c6f636b206d757374207361746973606482015268333c903232b630bc9760b91b608482015260a401610346565b60008686868686604051602001610831959493929190610f12565b60408051601f19818403018152828252805160209182012060008181526004909252919020805460ff1916600117905591506001600160a01b0388169082907f76e2796dc3a81d57b0e8504b647febcbeeb5f4af818e164f11eef8131a6a763f906108a3908a908a908a908a90610fab565b60405180910390a39695505050505050565b60035460ff161561093a573330146109355760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a73657450656e64696e6741646d696e3a2043616c6c2060448201527f6d75737420636f6d652066726f6d2054696d656c6f636b2e00000000000000006064820152608401610346565b6109c8565b6000546001600160a01b031633146109ba5760405162461bcd60e51b815260206004820152603b60248201527f54696d656c6f636b3a3a73657450656e64696e6741646d696e3a20466972737460448201527f2063616c6c206d75737420636f6d652066726f6d2061646d696e2e00000000006064820152608401610346565b6003805460ff191660011790555b600180546001600160a01b0319166001600160a01b0383169081179091556040517f69d78e38a01985fbb1462961809b4b2d65531bc93b2b94037f3334b82ca4a75690600090a250565b6000546001600160a01b03163314610a925760405162461bcd60e51b815260206004820152603760248201527f54696d656c6f636b3a3a63616e63656c5472616e73616374696f6e3a2043616c60448201527f6c206d75737420636f6d652066726f6d2061646d696e2e0000000000000000006064820152608401610346565b60008585858585604051602001610aad959493929190610f12565b60408051601f19818403018152828252805160209182012060008181526004909252919020805460ff1916905591506001600160a01b0387169082907f2fffc091a501fd91bfbff27141450d3acb40fb8e6d8382b243ec7a812a3aaf8790610b1c908990899089908990610fab565b60405180910390a3505050505050565b333014610b955760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b3a3a73657444656c61793a2043616c6c206d75737420636f60448201527036b290333937b6902a34b6b2b637b1b59760791b6064820152608401610346565b615460811015610c045760405162461bcd60e51b815260206004820152603460248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d75737420656044820152733c31b2b2b21036b4b734b6bab6903232b630bc9760611b6064820152608401610346565b62278d00811115610c7d5760405162461bcd60e51b815260206004820152603860248201527f54696d656c6f636b3a3a73657444656c61793a2044656c6179206d757374206e60448201527f6f7420657863656564206d6178696d756d2064656c61792e00000000000000006064820152608401610346565b600281905560405181907f948b1f6a42ee138b7e34058ba85a37f716d55ff25ff05a763f15bed6a04c8d2c90600090a250565b600080610cbd8385610fe8565b905083811015610d0f5760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006044820152606401610346565b9392505050565b80356001600160a01b0381168114610d2d57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115610d6357610d63610d32565b604051601f8501601f19908116603f01168101908282118183101715610d8b57610d8b610d32565b81604052809350858152868686011115610da457600080fd5b858560208301376000602087830101525050509392505050565b600080600080600060a08688031215610dd657600080fd5b610ddf86610d16565b945060208601359350604086013567ffffffffffffffff80821115610e0357600080fd5b818801915088601f830112610e1757600080fd5b610e2689833560208501610d48565b94506060880135915080821115610e3c57600080fd5b508601601f81018813610e4e57600080fd5b610e5d88823560208401610d48565b95989497509295608001359392505050565b60005b83811015610e8a578181015183820152602001610e72565b83811115610e99576000848401525b50505050565b60008151808452610eb7816020860160208601610e6f565b601f01601f19169290920160200192915050565b602081526000610d0f6020830184610e9f565b600060208284031215610ef057600080fd5b610d0f82610d16565b600060208284031215610f0b57600080fd5b5035919050565b60018060a01b038616815284602082015260a060408201526000610f3960a0830186610e9f565b8281036060840152610f4b8186610e9f565b9150508260808301529695505050505050565b6001600160e01b0319831681528151600090610f81816004850160208701610e6f565b919091016004019392505050565b60008251610fa1818460208701610e6f565b9190910192915050565b848152608060208201526000610fc46080830186610e9f565b8281036040840152610fd68186610e9f565b91505082606083015295945050505050565b6000821982111561100957634e487b7160e01b600052601160045260246000fd5b50019056fe54696d656c6f636b3a3a657865637574655472616e73616374696f6e3a205472a2646970667358221220d44c4a1387d2821f6a500492b566a2c317804d5f902476925fcecc1efc04ca9964736f6c634300080f003354696d656c6f636b3a3a636f6e7374727563746f723a2044656c6179206d7573";

type TimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Timelock__factory extends ContractFactory {
  constructor(...args: TimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    admin_: PromiseOrValue<string>,
    delay_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Timelock> {
    return super.deploy(admin_, delay_, overrides || {}) as Promise<Timelock>;
  }
  override getDeployTransaction(
    admin_: PromiseOrValue<string>,
    delay_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(admin_, delay_, overrides || {});
  }
  override attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  override connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockInterface {
    return new utils.Interface(_abi) as TimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}
