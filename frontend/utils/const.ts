export const GOERLI_NFT_BRIDGE_ADDRESS = "0x79e99a3Ef76E7c05EFcb0EDEaE4bb2322Cb33f94";
export const MUMBAI_NFT_BRIDGE_ADDRESS = "0x9eE5222838411D69b24114F5Cc7f3045cff5B0Fa";
export const MOONBASE_NFT_BRIDGE_ADDRESS = "0x1DC42E9Fbf9EE5Ce1A19fF304256e048358E2E6c"

export const GOERLI_NFT_ADDRESS = "0xb91876637e407b75Fc5da1a81114Db68F4851932";
export const MUMBAI_NFT_ADDRESS = "0x96C106F735197e1B5027711189AC2bCa01eA3d78";
export const MOONBASE_NFT_ADDRESS = "0x82B99Fd37956720bFF7EdAfB7CA2137018A15635";

export const getContractData = (chainId: number): [string, string] => {
  if (chainId === 5) {
    return [GOERLI_NFT_BRIDGE_ADDRESS, GOERLI_NFT_ADDRESS]
  } else if (chainId === 80001) {
    return [MUMBAI_NFT_BRIDGE_ADDRESS, MUMBAI_NFT_ADDRESS]
  } else {
    return [MOONBASE_NFT_BRIDGE_ADDRESS, MOONBASE_NFT_ADDRESS]
  }
}