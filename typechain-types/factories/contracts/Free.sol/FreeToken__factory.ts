/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  FreeToken,
  FreeTokenInterface,
} from "../../../contracts/Free.sol/FreeToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lottery",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051806040016040528060048152602001634652454560e01b8152506040518060400160405280600a815260200169233932b2902a37b5b2b760b11b8152506200006c62000066620000bc60201b60201c565b620000c0565b815162000081906004906020850190620001f8565b50805162000097906005906020840190620001f8565b505050620000b63369d3c21bcecceda10000006200011060201b60201c565b62000300565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0382166200016b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600360008282546200017f91906200029e565b90915550506001600160a01b03821660009081526001602052604081208054839290620001ae9084906200029e565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b8280546200020690620002c3565b90600052602060002090601f0160209004810192826200022a576000855562000275565b82601f106200024557805160ff191683800117855562000275565b8280016001018555821562000275579182015b828111156200027557825182559160200191906001019062000258565b506200028392915062000287565b5090565b5b8082111562000283576000815560010162000288565b60008219821115620002be57634e487b7160e01b81526011600452602481fd5b500190565b600181811c90821680620002d857607f821691505b60208210811415620002fa57634e487b7160e01b600052602260045260246000fd5b50919050565b610a6b80620003106000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a611610097578063a9059cbb11610066578063a9059cbb146101f5578063ba13a57214610208578063dd62ed3e1461021b578063f2fde38b1461022e57600080fd5b8063715018a6146101ab5780638da5cb5b146101b557806395d89b41146101da578063a457c2d7146101e257600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063395093511461016f57806370a082311461018257600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610241565b60405161010f9190610983565b60405180910390f35b61012b61012636600461095a565b6102d3565b604051901515815260200161010f565b6003545b60405190815260200161010f565b61012b61015b36600461091f565b6102eb565b6040516012815260200161010f565b61012b61017d36600461095a565b610323565b61013f6101903660046108cc565b6001600160a01b031660009081526001602052604090205490565b6101b3610345565b005b6000546001600160a01b03165b6040516001600160a01b03909116815260200161010f565b610102610359565b61012b6101f036600461095a565b610368565b61012b61020336600461095a565b6103e8565b6006546101c2906001600160a01b031681565b61013f6102293660046108ed565b6103f6565b6101b361023c3660046108cc565b610421565b606060048054610250906109fa565b80601f016020809104026020016040519081016040528092919081815260200182805461027c906109fa565b80156102c95780601f1061029e576101008083540402835291602001916102c9565b820191906000526020600020905b8154815290600101906020018083116102ac57829003601f168201915b5050505050905090565b6000336102e181858561049a565b5060019392505050565b60065460009033906001600160a01b0316811461030d5761030d8582856105be565b610318858585610638565b506001949350505050565b6000336102e181858561033683836103f6565b61034091906109d6565b61049a565b61034d610806565b6103576000610860565b565b606060058054610250906109fa565b6000338161037682866103f6565b9050838110156103db5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b610318828686840361049a565b6000336102e1818585610638565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b610429610806565b6001600160a01b03811661048e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103d2565b61049781610860565b50565b6001600160a01b0383166104fc5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103d2565b6001600160a01b03821661055d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103d2565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006105ca84846103f6565b9050600019811461063257818110156106255760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103d2565b610632848484840361049a565b50505050565b6001600160a01b03831661069c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103d2565b6001600160a01b0382166106fe5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103d2565b6001600160a01b038316600090815260016020526040902054818110156107765760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103d2565b6001600160a01b038085166000908152600160205260408082208585039055918516815290812080548492906107ad9084906109d6565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107f991815260200190565b60405180910390a3610632565b6000546001600160a01b031633146103575760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103d2565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b03811681146108c757600080fd5b919050565b6000602082840312156108dd578081fd5b6108e6826108b0565b9392505050565b600080604083850312156108ff578081fd5b610908836108b0565b9150610916602084016108b0565b90509250929050565b600080600060608486031215610933578081fd5b61093c846108b0565b925061094a602085016108b0565b9150604084013590509250925092565b6000806040838503121561096c578182fd5b610975836108b0565b946020939093013593505050565b6000602080835283518082850152825b818110156109af57858101830151858201604001528201610993565b818111156109c05783604083870101525b50601f01601f1916929092016040019392505050565b600082198211156109f557634e487b7160e01b81526011600452602481fd5b500190565b600181811c90821680610a0e57607f821691505b60208210811415610a2f57634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212202e1bc4f81e63095670ef8904c69381cfa5066ea120f2113a8ff877b2a110536a64736f6c63430008040033";

type FreeTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FreeTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FreeToken__factory extends ContractFactory {
  constructor(...args: FreeTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FreeToken> {
    return super.deploy(overrides || {}) as Promise<FreeToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FreeToken {
    return super.attach(address) as FreeToken;
  }
  override connect(signer: Signer): FreeToken__factory {
    return super.connect(signer) as FreeToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FreeTokenInterface {
    return new utils.Interface(_abi) as FreeTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FreeToken {
    return new Contract(address, _abi, signerOrProvider) as FreeToken;
  }
}
