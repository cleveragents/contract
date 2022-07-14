/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  InsurAceAgent,
  InsurAceAgentInterface,
} from "../../../contracts/InsurAceAgent.sol/InsurAceAgent";

const _abi = [
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
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "amount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "availableDeposit",
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
    name: "availableHarvest",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "availableUnlock",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "availableWithdraw",
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
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositToken",
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
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialized",
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
    inputs: [],
    name: "lpToken",
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
    name: "manager",
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
    name: "minDepositAmount",
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
    name: "pendingReward",
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
    name: "receiveToken",
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
    name: "removable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
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
    name: "rewardController",
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
    name: "rewardToken",
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
    name: "sellRouter",
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
    name: "target",
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
    name: "totalValueLocked",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockHarvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockTimeLeft",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "unlockWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
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
  "0x6080604052600380546001600160a01b031990811673e9e7cea3dedca5984780bafc599bd69add087d56908117909255600480548216909217909155600580548216733192ccddf1cdce4ff055ebc80f3f0231b86a7e3017905560068054821673dbbb520b40c7b7c6498dbd532aee5e28c62b36111790556007805482167310ed43c718714eb63d5aa57b78b54704e256024e17905560088054821673265ab8950821a4a4e8ced3c81905e4d4488dfc4c1790556009805490911673decafc91000d4d3802a0562a8fb896f29b6a74801790553480156100de57600080fd5b506100e8336100f1565b60018055610141565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b612a3b806101506000396000f3fe6080604052600436106101a35760003560e01c80638da5cb5b116100e0578063d4b8399211610084578063f022028c11610061578063f022028c1461048c578063f2fde38b146104a1578063f440a7bd146104c1578063f7c618c1146104e157005b8063d4b8399214610437578063e9ba77fb14610457578063ec18154e1461047757005b8063b383140d116100bd578063b383140d146103cd578063bf35b896146103ed578063c89039c514610402578063d0e30db01461042257005b80638da5cb5b1461035f57806393ed27951461037d578063aa8c217c1461039d57005b80635149a58711610147578063645006ca11610124578063645006ca146102f45780636ed0b7971461030a578063715018a61461032a5780638cc5ce991461033f57005b80635149a587146102a057806356c7effd146102b45780635fcbd285146102d457005b8063358ef72011610180578063358ef7201461021e578063371aa158146102335780634641257d14610253578063481c6a751461026857005b8063137ee36e146101ac578063158ef93e146101d45780632e1a7d4d146101fe57005b366101aa57005b005b3480156101b857600080fd5b506101c1610501565b6040519081526020015b60405180910390f35b3480156101e057600080fd5b50600b546101ee9060ff1681565b60405190151581526020016101cb565b34801561020a57600080fd5b506101aa6102193660046127ca565b6105a1565b34801561022a57600080fd5b506101c1610924565b34801561023f57600080fd5b506101aa61024e366004612654565b6109cf565b34801561025f57600080fd5b506101aa610c9d565b34801561027457600080fd5b50600254610288906001600160a01b031681565b6040516001600160a01b0390911681526020016101cb565b3480156102ac57600080fd5b5060006101ee565b3480156102c057600080fd5b506101c16102cf3660046127ca565b61110a565b3480156102e057600080fd5b50600654610288906001600160a01b031681565b34801561030057600080fd5b506101c1600a5481565b34801561031657600080fd5b506101c16103253660046127ca565b61145b565b34801561033657600080fd5b506101aa611478565b34801561034b57600080fd5b50600854610288906001600160a01b031681565b34801561036b57600080fd5b506000546001600160a01b0316610288565b34801561038957600080fd5b50600754610288906001600160a01b031681565b3480156103a957600080fd5b506103b261148a565b604080519384526020840192909252908201526060016101cb565b3480156103d957600080fd5b506101c16103e83660046127ca565b6118f2565b3480156103f957600080fd5b506101aa611a2c565b34801561040e57600080fd5b50600354610288906001600160a01b031681565b34801561042e57600080fd5b506101aa611afd565b34801561044357600080fd5b50600954610288906001600160a01b031681565b34801561046357600080fd5b50600454610288906001600160a01b031681565b34801561048357600080fd5b506101c1611ec7565b34801561049857600080fd5b506101c1612337565b3480156104ad57600080fd5b506101aa6104bc36600461261c565b612417565b3480156104cd57600080fd5b506101aa6104dc3660046127ca565b612490565b3480156104ed57600080fd5b50600554610288906001600160a01b031681565b6000806000600860009054906101000a90046001600160a01b03166001600160a01b031663699c8f336040518163ffffffff1660e01b8152600401604080518083038186803b15801561055357600080fd5b505afa158015610567573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058b91906127fa565b909250905061059a82826124d3565b9250505090565b6105a96124df565b6004546003546001600160a01b039081169116146107fa576003546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b15801561060557600080fd5b505afa158015610619573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063d91906127e2565b6040805160028082526060820183529293506000929091602083019080368337505060035482519293506001600160a01b03169183915060009061069157634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392831660209182029290920101526004548251911690829060019081106106d057634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201015260035460075460405163095ea7b360e01b815290831660048201526024810185905291169063095ea7b390604401602060405180830381600087803b15801561072e57600080fd5b505af1158015610742573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076691906127aa565b506007546040516338ed173960e01b81526001600160a01b03909116906338ed1739906107a09085906000908690309042906004016128c5565b600060405180830381600087803b1580156107ba57600080fd5b505af11580156107ce573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107f69190810190612717565b5050505b600480546040516370a0823160e01b815230928101929092526000916001600160a01b03909116906370a082319060240160206040518083038186803b15801561084357600080fd5b505afa158015610857573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087b91906127e2565b9050600081831161088c578261088e565b815b6004805460025460405163a9059cbb60e01b81526001600160a01b039182169381019390935260248301849052929350919091169063a9059cbb90604401602060405180830381600087803b1580156108e657600080fd5b505af11580156108fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091e91906127aa565b50505050565b60065460405163733e080960e11b815230600482015260009182916001600160a01b039091169063e67c10129060240160206040518083038186803b15801561096c57600080fd5b505afa158015610980573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a491906127e2565b90504381116109b45760006109c9565b6109be43826129ad565b6109c990600361298e565b91505090565b600b5460ff1615610a1d5760405162461bcd60e51b8152602060048201526013602482015272185b1c9958591e481a5b9a5d1a585b1a5e9959606a1b60448201526064015b60405180910390fd5b600280546001600160a01b03191633908117909155610a3b90612539565b600082905080600081518110610a6157634e487b7160e01b600052603260045260246000fd5b6020026020010151600360006101000a8154816001600160a01b0302191690836001600160a01b0316021790555080600181518110610ab057634e487b7160e01b600052603260045260246000fd5b6020026020010151600460006101000a8154816001600160a01b0302191690836001600160a01b0316021790555080600281518110610aff57634e487b7160e01b600052603260045260246000fd5b6020026020010151600560006101000a8154816001600160a01b0302191690836001600160a01b0316021790555080600381518110610b4e57634e487b7160e01b600052603260045260246000fd5b6020026020010151600960006101000a8154816001600160a01b0302191690836001600160a01b0316021790555080600481518110610b9d57634e487b7160e01b600052603260045260246000fd5b6020026020010151600660006101000a8154816001600160a01b0302191690836001600160a01b0316021790555080600581518110610bec57634e487b7160e01b600052603260045260246000fd5b6020026020010151600760006101000a8154816001600160a01b0302191690836001600160a01b0316021790555080600681518110610c3b57634e487b7160e01b600052603260045260246000fd5b6020026020010151600860006101000a8154816001600160a01b0302191690836001600160a01b0316021790555081600081518110610c8a57634e487b7160e01b600052603260045260246000fd5b6020026020010151600a81905550505050565b610ca56124df565b6006546040516319310d0b60e21b81523060048201526000916001600160a01b0316906364c4342c9060240160206040518083038186803b158015610ce957600080fd5b505afa158015610cfd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2191906127e2565b90508015610d2c5750565b6008546040805163699c8f3360e01b815281516000936001600160a01b03169263699c8f339260048082019391829003018186803b158015610d6d57600080fd5b505afa158015610d81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da591906127fa565b50905066038d7ea4c68000811015610dbb575050565b6005546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b158015610dff57600080fd5b505afa158015610e13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3791906127e2565b600854604051630a4747e160e31b8152600481018590529192506001600160a01b03169063523a3f0890602401600060405180830381600087803b158015610e7e57600080fd5b505af1158015610e92573d6000803e3d6000fd5b50506005546040516370a0823160e01b815230600482015260009350610f1e925084916001600160a01b0316906370a082319060240160206040518083038186803b158015610ee057600080fd5b505afa158015610ef4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f1891906127e2565b90612589565b604080516003808252608082019092529192506000919060208201606080368337505060055482519293506001600160a01b031691839150600090610f7357634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201810191909152600754604080516315ab88c960e31b81529051919093169263ad5c4648926004808301939192829003018186803b158015610fc757600080fd5b505afa158015610fdb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fff9190612638565b8160018151811061102057634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201015260035482519116908290600290811061105f57634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392831660209182029290920101526007546002546040516338ed173960e01b8152918316926338ed1739926110ab92879260009288929091169042906004016128c5565b600060405180830381600087803b1580156110c557600080fd5b505af11580156110d9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526111019190810190612717565b5050505050505b565b600080600960009054906101000a90046001600160a01b03166001600160a01b03166330144f966040518163ffffffff1660e01b815260040160206040518083038186803b15801561115b57600080fd5b505afa15801561116f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111939190612638565b6006546040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a082319060240160206040518083038186803b1580156111dc57600080fd5b505afa1580156111f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061121491906127e2565b60065460405163af3ea98d60e01b81523060048201529192506000916001600160a01b039091169063af3ea98d9060240160206040518083038186803b15801561125d57600080fd5b505afa158015611271573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061129591906127e2565b6006546040516319310d0b60e21b81523060048201529192506000916001600160a01b03909116906364c4342c9060240160206040518083038186803b1580156112de57600080fd5b505afa1580156112f2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061131691906127e2565b9050811561132a5750600095945050505050565b60035460405162d0331760e71b81526001600160a01b0391821660048201526000918616906368198b809060240160206040518083038186803b15801561137057600080fd5b505afa158015611384573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a891906127e2565b9050600061144f600660009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156113fd57600080fd5b505afa158015611411573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143591906127e2565b611449846114438988612589565b90612595565b906125a1565b98975050505050505050565b6000600a5482101561146f57506000919050565b50600019919050565b6114806124df565b6111086000612539565b600080600080600960009054906101000a90046001600160a01b03166001600160a01b03166330144f966040518163ffffffff1660e01b815260040160206040518083038186803b1580156114de57600080fd5b505afa1580156114f2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115169190612638565b6006546040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a082319060240160206040518083038186803b15801561155f57600080fd5b505afa158015611573573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061159791906127e2565b60065460405163af3ea98d60e01b81523060048201529192506000916001600160a01b039091169063af3ea98d9060240160206040518083038186803b1580156115e057600080fd5b505afa1580156115f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061161891906127e2565b6006546040516319310d0b60e21b81523060048201529192506000916001600160a01b03909116906364c4342c9060240160206040518083038186803b15801561166157600080fd5b505afa158015611675573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169991906127e2565b60035460405162d0331760e71b81526001600160a01b039182166004820152919250600091908616906368198b809060240160206040518083038186803b1580156116e357600080fd5b505afa1580156116f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061171b91906127e2565b905060006117b2600660009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561177057600080fd5b505afa158015611784573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117a891906127e2565b6114498785612595565b90506000611849600660009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561180757600080fd5b505afa15801561181b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183f91906127e2565b6114498686612595565b905060006118e0600660009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561189e57600080fd5b505afa1580156118b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118d691906127e2565b6114498887612595565b929b919a509198509650505050505050565b6003546040516370a0823160e01b815230600482015260009182916001600160a01b03909116906370a082319060240160206040518083038186803b15801561193a57600080fd5b505afa15801561194e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061197291906127e2565b6004546003549192506001600160a01b03918216911614611a1657600480546040516370a0823160e01b815230928101929092526001600160a01b0316906370a082319060240160206040518083038186803b1580156119d157600080fd5b505afa1580156119e5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a0991906127e2565b611a139082612956565b90505b828111611a235780611a25565b825b9392505050565b611a346124df565b60408051600180825281830190925260009160208083019080368337505060035482519293506001600160a01b031691839150600090611a8457634e487b7160e01b600052603260045260246000fd5b6001600160a01b039283166020918202929092010152600854604051636a69d93f60e01b8152911690636a69d93f90611ac890849060009081908190600401612873565b600060405180830381600087803b158015611ae257600080fd5b505af1158015611af6573d6000803e3d6000fd5b5050505050565b611b056124df565b600480546040516370a0823160e01b815230928101929092526000916001600160a01b03909116906370a082319060240160206040518083038186803b158015611b4e57600080fd5b505afa158015611b62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b8691906127e2565b6003546004549192506001600160a01b03918216911614611d5c57604080516002808252606082018352600092602083019080368337505060045482519293506001600160a01b031691839150600090611bf057634e487b7160e01b600052603260045260246000fd5b6001600160a01b039283166020918202929092010152600354825191169082906001908110611c2f57634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392831660209182029290920101526004805460075460405163095ea7b360e01b815290841692810192909252602482018590529091169063095ea7b390604401602060405180830381600087803b158015611c9157600080fd5b505af1158015611ca5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cc991906127aa565b506007546040516338ed173960e01b81526001600160a01b03909116906338ed173990611d039085906000908690309042906004016128c5565b600060405180830381600087803b158015611d1d57600080fd5b505af1158015611d31573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611d599190810190612717565b50505b6003546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b158015611da057600080fd5b505afa158015611db4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dd891906127e2565b60035460095460405163095ea7b360e01b81526001600160a01b03918216600482015260248101849052929350169063095ea7b390604401602060405180830381600087803b158015611e2a57600080fd5b505af1158015611e3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e6291906127aa565b50600954600354604051630bea440d60e01b8152600481018490526001600160a01b039182166024820152911690630bea440d90604401600060405180830381600087803b158015611eb357600080fd5b505af1158015611101573d6000803e3d6000fd5b600080611ed2612337565b90506000611ede610501565b604080516003808252608082019092529192506000919060208201606080368337505060055482519293506001600160a01b031691839150600090611f3357634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201810191909152600754604080516315ab88c960e31b81529051919093169263ad5c4648926004808301939192829003018186803b158015611f8757600080fd5b505afa158015611f9b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fbf9190612638565b81600181518110611fe057634e487b7160e01b600052603260045260246000fd5b6001600160a01b03928316602091820292909201015260035482519116908290600290811061201f57634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392831660209182029290920101526007546000911663d06ca61f61204b86866124d3565b846040518363ffffffff1660e01b81526004016120699291906128a4565b60006040518083038186803b15801561208157600080fd5b505afa158015612095573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526120bd9190810190612717565b90506000600960009054906101000a90046001600160a01b03166001600160a01b03166330144f966040518163ffffffff1660e01b815260040160206040518083038186803b15801561210f57600080fd5b505afa158015612123573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121479190612638565b6006546040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a082319060240160206040518083038186803b15801561219057600080fd5b505afa1580156121a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121c891906127e2565b60035460405162d0331760e71b81526001600160a01b039182166004820152919250600091908416906368198b809060240160206040518083038186803b15801561221257600080fd5b505afa158015612226573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061224a91906127e2565b905060006122e1600660009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561229f57600080fd5b505afa1580156122b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122d791906127e2565b6114498585612595565b905061232a8186600188516122f691906129ad565b8151811061231457634e487b7160e01b600052603260045260246000fd5b60200260200101516124d390919063ffffffff16565b9850505050505050505090565b60408051600180825281830190925260009182919060208083019080368337505060035482519293506001600160a01b03169183915060009061238a57634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392831660209182029290920101526009546040516397dad23160e01b81529116906397dad231906123c7908490600401612860565b60206040518083038186803b1580156123df57600080fd5b505afa1580156123f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c991906127e2565b61241f6124df565b6001600160a01b0381166124845760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610a14565b61248d81612539565b50565b6124986124df565b600954600354604051635ace4df760e01b8152600481018490526001600160a01b039182166024820152911690635ace4df790604401611ac8565b6000611a258284612956565b6000546001600160a01b031633146111085760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610a14565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000611a2582846129ad565b6000611a25828461298e565b6000611a25828461296e565b600082601f8301126125bd578081fd5b813560206125d26125cd83612932565b612901565b80838252828201915082860187848660051b89010111156125f1578586fd5b855b8581101561260f578135845292840192908401906001016125f3565b5090979650505050505050565b60006020828403121561262d578081fd5b8135611a25816129f0565b600060208284031215612649578081fd5b8151611a25816129f0565b60008060408385031215612666578081fd5b823567ffffffffffffffff8082111561267d578283fd5b818501915085601f830112612690578283fd5b813560206126a06125cd83612932565b8083825282820191508286018a848660051b89010111156126bf578788fd5b8796505b848710156126ea5780356126d6816129f0565b8352600196909601959183019183016126c3565b5096505086013592505080821115612700578283fd5b5061270d858286016125ad565b9150509250929050565b60006020808385031215612729578182fd5b825167ffffffffffffffff81111561273f578283fd5b8301601f8101851361274f578283fd5b805161275d6125cd82612932565b80828252848201915084840188868560051b870101111561277c578687fd5b8694505b8385101561279e578051835260019490940193918501918501612780565b50979650505050505050565b6000602082840312156127bb578081fd5b81518015158114611a25578182fd5b6000602082840312156127db578081fd5b5035919050565b6000602082840312156127f3578081fd5b5051919050565b6000806040838503121561280c578182fd5b505080516020909101519092909150565b6000815180845260208085019450808401835b838110156128555781516001600160a01b031687529582019590820190600101612830565b509495945050505050565b602081526000611a25602083018461281d565b608081526000612886608083018761281d565b94151560208301525091151560408301521515606090910152919050565b8281526040602082015260006128bd604083018461281d565b949350505050565b85815284602082015260a0604082015260006128e460a083018661281d565b6001600160a01b0394909416606083015250608001529392505050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561292a5761292a6129da565b604052919050565b600067ffffffffffffffff82111561294c5761294c6129da565b5060051b60200190565b60008219821115612969576129696129c4565b500190565b60008261298957634e487b7160e01b81526012600452602481fd5b500490565b60008160001904831182151516156129a8576129a86129c4565b500290565b6000828210156129bf576129bf6129c4565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461248d57600080fdfea2646970667358221220ca381363bbf719a57849e31f644b70fa3d1df25bb335d165e567f599e6228e2364736f6c63430008040033";

type InsurAceAgentConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InsurAceAgentConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InsurAceAgent__factory extends ContractFactory {
  constructor(...args: InsurAceAgentConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InsurAceAgent> {
    return super.deploy(overrides || {}) as Promise<InsurAceAgent>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InsurAceAgent {
    return super.attach(address) as InsurAceAgent;
  }
  override connect(signer: Signer): InsurAceAgent__factory {
    return super.connect(signer) as InsurAceAgent__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InsurAceAgentInterface {
    return new utils.Interface(_abi) as InsurAceAgentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InsurAceAgent {
    return new Contract(address, _abi, signerOrProvider) as InsurAceAgent;
  }
}
