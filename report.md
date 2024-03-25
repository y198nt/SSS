**THIS CHECKLIST IS NOT COMPLETE**. Use `--show-ignored-findings` to show all the results.
Summary
 - [arbitrary-send-eth](#arbitrary-send-eth) (1 results) (High)
 - [incorrect-exp](#incorrect-exp) (1 results) (High)
 - [reentrancy-eth](#reentrancy-eth) (1 results) (High)
 - [shadowing-state](#shadowing-state) (1 results) (High)
 - [divide-before-multiply](#divide-before-multiply) (8 results) (Medium)
 - [incorrect-equality](#incorrect-equality) (1 results) (Medium)
 - [unused-return](#unused-return) (1 results) (Medium)
 - [events-maths](#events-maths) (2 results) (Low)
 - [missing-zero-check](#missing-zero-check) (6 results) (Low)
 - [reentrancy-events](#reentrancy-events) (1 results) (Low)
 - [timestamp](#timestamp) (6 results) (Low)
 - [assembly](#assembly) (15 results) (Informational)
 - [pragma](#pragma) (1 results) (Informational)
 - [dead-code](#dead-code) (57 results) (Informational)
 - [solc-version](#solc-version) (22 results) (Informational)
 - [low-level-calls](#low-level-calls) (5 results) (Informational)
 - [naming-convention](#naming-convention) (10 results) (Informational)
 - [similar-names](#similar-names) (1 results) (Informational)
 - [too-many-digits](#too-many-digits) (1 results) (Informational)
## arbitrary-send-eth
Impact: High
Confidence: Medium
 - [ ] ID-0
[SSS._addETHLiquidity(uint256,uint256)](SSS.sol#L191-L201) sends eth to arbitrary user
	Dangerous calls:
	- [uniswapV2Router.addLiquidityETH{value: ethAmount}(address(this),tokenAmount,0,0,address(this),block.timestamp)](SSS.sol#L193-L200)

SSS.sol#L191-L201


## incorrect-exp
Impact: High
Confidence: Medium
 - [ ] ID-1
[Math.mulDiv(uint256,uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L123-L202) has bitwise-xor operator ^ instead of the exponentiation operator **: 
	 - [inverse = (3 * denominator) ^ 2](@openzeppelin/contracts/utils/math/Math.sol#L184)

@openzeppelin/contracts/utils/math/Math.sol#L123-L202


## reentrancy-eth
Impact: High
Confidence: Medium
 - [ ] ID-2
Reentrancy in [SSS.initPool(uint256,uint256)](SSS.sol#L259-L263):
	External calls:
	- [_addETHLiquidity(ethAmount,tokenAmount)](SSS.sol#L261)
		- [uniswapV2Router.addLiquidityETH{value: ethAmount}(address(this),tokenAmount,0,0,address(this),block.timestamp)](SSS.sol#L193-L200)
	State variables written after the call(s):
	- [startPoolTime = block.timestamp](SSS.sol#L262)
	[SSS.startPoolTime](SSS.sol#L54) can be used in cross function reentrancies:
	- [SSS._botCheck(address,address)](SSS.sol#L133-L149)
	- [SSS._unlockTokenForDev(address,address,uint256)](SSS.sol#L234-L257)
	- [SSS.addLiquidity(uint256,uint256)](SSS.sol#L265-L268)
	- [SSS.initPool(uint256,uint256)](SSS.sol#L259-L263)
	- [SSS.rescueToken(address,address,uint256)](SSS.sol#L360-L366)
	- [SSS.startPoolTime](SSS.sol#L54)

SSS.sol#L259-L263


## shadowing-state
Impact: High
Confidence: High
 - [ ] ID-3
[ERC20._name](ERC20.sol#L48) shadows:
	- [EIP712._name](@openzeppelin/contracts/utils/cryptography/EIP712.sol#L49)

ERC20.sol#L48


## divide-before-multiply
Impact: Medium
Confidence: Medium
 - [ ] ID-4
[Math.mulDiv(uint256,uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L123-L202) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](@openzeppelin/contracts/utils/math/Math.sol#L169)
	- [inverse *= 2 - denominator * inverse](@openzeppelin/contracts/utils/math/Math.sol#L188)

@openzeppelin/contracts/utils/math/Math.sol#L123-L202


 - [ ] ID-5
[Math.mulDiv(uint256,uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L123-L202) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](@openzeppelin/contracts/utils/math/Math.sol#L169)
	- [inverse *= 2 - denominator * inverse](@openzeppelin/contracts/utils/math/Math.sol#L191)

@openzeppelin/contracts/utils/math/Math.sol#L123-L202


 - [ ] ID-6
[Math.mulDiv(uint256,uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L123-L202) performs a multiplication on the result of a division:
	- [prod0 = prod0 / twos](@openzeppelin/contracts/utils/math/Math.sol#L172)
	- [result = prod0 * inverse](@openzeppelin/contracts/utils/math/Math.sol#L199)

@openzeppelin/contracts/utils/math/Math.sol#L123-L202


 - [ ] ID-7
[Math.mulDiv(uint256,uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L123-L202) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](@openzeppelin/contracts/utils/math/Math.sol#L169)
	- [inverse *= 2 - denominator * inverse](@openzeppelin/contracts/utils/math/Math.sol#L190)

@openzeppelin/contracts/utils/math/Math.sol#L123-L202


 - [ ] ID-8
[Math.mulDiv(uint256,uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L123-L202) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](@openzeppelin/contracts/utils/math/Math.sol#L169)
	- [inverse *= 2 - denominator * inverse](@openzeppelin/contracts/utils/math/Math.sol#L193)

@openzeppelin/contracts/utils/math/Math.sol#L123-L202


 - [ ] ID-9
[Math.mulDiv(uint256,uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L123-L202) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](@openzeppelin/contracts/utils/math/Math.sol#L169)
	- [inverse *= 2 - denominator * inverse](@openzeppelin/contracts/utils/math/Math.sol#L189)

@openzeppelin/contracts/utils/math/Math.sol#L123-L202


 - [ ] ID-10
[Math.mulDiv(uint256,uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L123-L202) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](@openzeppelin/contracts/utils/math/Math.sol#L169)
	- [inverse = (3 * denominator) ^ 2](@openzeppelin/contracts/utils/math/Math.sol#L184)

@openzeppelin/contracts/utils/math/Math.sol#L123-L202


 - [ ] ID-11
[Math.mulDiv(uint256,uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L123-L202) performs a multiplication on the result of a division:
	- [denominator = denominator / twos](@openzeppelin/contracts/utils/math/Math.sol#L169)
	- [inverse *= 2 - denominator * inverse](@openzeppelin/contracts/utils/math/Math.sol#L192)

@openzeppelin/contracts/utils/math/Math.sol#L123-L202


## incorrect-equality
Impact: Medium
Confidence: High
 - [ ] ID-12
[SSS._botCheck(address,address)](SSS.sol#L133-L149) uses a dangerous strict equality:
	- [initPoolTime == 0](SSS.sol#L135)

SSS.sol#L133-L149


## unused-return
Impact: Medium
Confidence: Medium
 - [ ] ID-13
[SSS._addETHLiquidity(uint256,uint256)](SSS.sol#L191-L201) ignores return value by [uniswapV2Router.addLiquidityETH{value: ethAmount}(address(this),tokenAmount,0,0,address(this),block.timestamp)](SSS.sol#L193-L200)

SSS.sol#L191-L201


## events-maths
Impact: Low
Confidence: Medium
 - [ ] ID-14
[SSS.changeTaxPercent(uint256,uint256,uint256,uint256)](SSS.sol#L341-L349) should emit an event for: 
	- [buyTaxPercent = buyTax](SSS.sol#L344) 
	- [sellTaxPercent = sellTax](SSS.sol#L345) 
	- [communityPercent = community](SSS.sol#L348) 

SSS.sol#L341-L349


 - [ ] ID-15
[SSS.setLimitConfig(uint256,uint256)](SSS.sol#L351-L354) should emit an event for: 
	- [maxAmountPerTx = _maxAmountPerTx](SSS.sol#L352) 
	- [maxAmountPerAccount = _maxAmountPerAccount](SSS.sol#L353) 

SSS.sol#L351-L354


## missing-zero-check
Impact: Low
Confidence: Medium
 - [ ] ID-16
[SSS.constructor(address,address,address,address,address,address,address,uint256,uint256).devTokenReceiver](SSS.sol#L70) lacks a zero-check on :
		- [devTokenReceiverAddress = devTokenReceiver](SSS.sol#L80)

SSS.sol#L70


 - [ ] ID-17
[SSS.setDevAddress(address,address).devTaxReceiver](SSS.sol#L312) lacks a zero-check on :
		- [devTaxReceiverAddress = devTaxReceiver](SSS.sol#L318)

SSS.sol#L312


 - [ ] ID-18
[SSS.setDevAddress(address,address).devTokenReceiver](SSS.sol#L312) lacks a zero-check on :
		- [devTokenReceiverAddress = devTokenReceiver](SSS.sol#L319)

SSS.sol#L312


 - [ ] ID-19
[SSS.constructor(address,address,address,address,address,address,address,uint256,uint256).devTaxReceiver](SSS.sol#L69) lacks a zero-check on :
		- [devTaxReceiverAddress = devTaxReceiver](SSS.sol#L79)

SSS.sol#L69


 - [ ] ID-20
[SSS.setCommunityAddress(address).community](SSS.sol#L302) lacks a zero-check on :
		- [communityAddress = community](SSS.sol#L306)

SSS.sol#L302


 - [ ] ID-21
[SSS.constructor(address,address,address,address,address,address,address,uint256,uint256).community](SSS.sol#L68) lacks a zero-check on :
		- [communityAddress = community](SSS.sol#L78)

SSS.sol#L68


## reentrancy-events
Impact: Low
Confidence: Medium
 - [ ] ID-22
Reentrancy in [SSS.claimGasFee(address)](SSS.sol#L372-L375):
	External calls:
	- [amount = blastGasModeContract.claimMaxGas(address(this),recipient)](SSS.sol#L373)
	Event emitted after the call(s):
	- [ClaimGasFee(recipient,amount)](SSS.sol#L374)

SSS.sol#L372-L375


## timestamp
Impact: Low
Confidence: Medium
 - [ ] ID-23
[SSS._unlockTokenForDev(address,address,uint256)](SSS.sol#L234-L257) uses timestamp for comparisons
	Dangerous comparisons:
	- [startPoolTime == 0](SSS.sol#L238)

SSS.sol#L234-L257


 - [ ] ID-24
[SSS.addLiquidity(uint256,uint256)](SSS.sol#L265-L268) uses timestamp for comparisons
	Dangerous comparisons:
	- [require(bool,string)(startPoolTime > 0,Pool not initialized)](SSS.sol#L266)

SSS.sol#L265-L268


 - [ ] ID-25
[SSS.rescueToken(address,address,uint256)](SSS.sol#L360-L366) uses timestamp for comparisons
	Dangerous comparisons:
	- [require(bool,string)(startPoolTime + 31536000 < block.timestamp,Cannot rescue this token)](SSS.sol#L362)

SSS.sol#L360-L366


 - [ ] ID-26
[SSS.initPool(uint256,uint256)](SSS.sol#L259-L263) uses timestamp for comparisons
	Dangerous comparisons:
	- [require(bool,string)(startPoolTime == 0,Pool already initialized)](SSS.sol#L260)

SSS.sol#L259-L263


 - [ ] ID-27
[SSS._botCheck(address,address)](SSS.sol#L133-L149) uses timestamp for comparisons
	Dangerous comparisons:
	- [initPoolTime == 0](SSS.sol#L135)
	- [block.timestamp - initPoolTime < ANTI_BOT_DETECT_DURATION && isLiquidityPool(from)](SSS.sol#L138-L139)
	- [botBuyTimes[from] > 0 && botBuyTimes[from] + ANTI_BOT_LOCK_DURATION > block.timestamp](SSS.sol#L146)

SSS.sol#L133-L149


 - [ ] ID-28
[ERC20.permit(address,address,uint256,uint256,uint8,bytes32,bytes32)](ERC20.sol#L343-L366) uses timestamp for comparisons
	Dangerous comparisons:
	- [block.timestamp > deadline](ERC20.sol#L352)

ERC20.sol#L343-L366


## assembly
Impact: Informational
Confidence: High
 - [ ] ID-29
[Math.mulDiv(uint256,uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L123-L202) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/math/Math.sol#L130-L133)
	- [INLINE ASM](@openzeppelin/contracts/utils/math/Math.sol#L154-L161)
	- [INLINE ASM](@openzeppelin/contracts/utils/math/Math.sol#L167-L176)

@openzeppelin/contracts/utils/math/Math.sol#L123-L202


 - [ ] ID-30
[StorageSlot.getStringSlot(bytes32)](@openzeppelin/contracts/utils/StorageSlot.sol#L99-L104) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/StorageSlot.sol#L101-L103)

@openzeppelin/contracts/utils/StorageSlot.sol#L99-L104


 - [ ] ID-31
[StorageSlot.getBytesSlot(bytes)](@openzeppelin/contracts/utils/StorageSlot.sol#L129-L134) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/StorageSlot.sol#L131-L133)

@openzeppelin/contracts/utils/StorageSlot.sol#L129-L134


 - [ ] ID-32
[StorageSlot.getBytesSlot(bytes32)](@openzeppelin/contracts/utils/StorageSlot.sol#L119-L124) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/StorageSlot.sol#L121-L123)

@openzeppelin/contracts/utils/StorageSlot.sol#L119-L124


 - [ ] ID-33
[Address._revert(bytes)](@openzeppelin/contracts/utils/Address.sol#L146-L158) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/Address.sol#L151-L154)

@openzeppelin/contracts/utils/Address.sol#L146-L158


 - [ ] ID-34
[ECDSA.tryRecover(bytes32,bytes)](@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L56-L73) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L64-L68)

@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L56-L73


 - [ ] ID-35
[ShortStrings.toString(ShortString)](@openzeppelin/contracts/utils/ShortStrings.sol#L63-L73) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/ShortStrings.sol#L68-L71)

@openzeppelin/contracts/utils/ShortStrings.sol#L63-L73


 - [ ] ID-36
[MessageHashUtils.toTypedDataHash(bytes32,bytes32)](@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L76-L85) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L78-L84)

@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L76-L85


 - [ ] ID-37
[StorageSlot.getStringSlot(string)](@openzeppelin/contracts/utils/StorageSlot.sol#L109-L114) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/StorageSlot.sol#L111-L113)

@openzeppelin/contracts/utils/StorageSlot.sol#L109-L114


 - [ ] ID-38
[StorageSlot.getBytes32Slot(bytes32)](@openzeppelin/contracts/utils/StorageSlot.sol#L79-L84) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/StorageSlot.sol#L81-L83)

@openzeppelin/contracts/utils/StorageSlot.sol#L79-L84


 - [ ] ID-39
[StorageSlot.getAddressSlot(bytes32)](@openzeppelin/contracts/utils/StorageSlot.sol#L59-L64) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/StorageSlot.sol#L61-L63)

@openzeppelin/contracts/utils/StorageSlot.sol#L59-L64


 - [ ] ID-40
[StorageSlot.getBooleanSlot(bytes32)](@openzeppelin/contracts/utils/StorageSlot.sol#L69-L74) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/StorageSlot.sol#L71-L73)

@openzeppelin/contracts/utils/StorageSlot.sol#L69-L74


 - [ ] ID-41
[StorageSlot.getUint256Slot(bytes32)](@openzeppelin/contracts/utils/StorageSlot.sol#L89-L94) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/StorageSlot.sol#L91-L93)

@openzeppelin/contracts/utils/StorageSlot.sol#L89-L94


 - [ ] ID-42
[MessageHashUtils.toEthSignedMessageHash(bytes32)](@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L30-L37) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L32-L36)

@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L30-L37


 - [ ] ID-43
[Strings.toString(uint256)](@openzeppelin/contracts/utils/Strings.sol#L24-L44) uses assembly
	- [INLINE ASM](@openzeppelin/contracts/utils/Strings.sol#L30-L32)
	- [INLINE ASM](@openzeppelin/contracts/utils/Strings.sol#L36-L38)

@openzeppelin/contracts/utils/Strings.sol#L24-L44


## pragma
Impact: Informational
Confidence: High
 - [ ] ID-44
Different versions of Solidity are used:
	- Version used: ['^0.8.0', '^0.8.20']
	- [^0.8.0](interfaces/IUniswapV2Router02.sol#L1)
	- [^0.8.20](@openzeppelin/contracts/access/Ownable.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/interfaces/IERC5267.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/interfaces/draft-IERC6093.sol#L3)
	- [^0.8.20](@openzeppelin/contracts/token/ERC20/IERC20.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/utils/Address.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/utils/Context.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/utils/Nonces.sol#L3)
	- [^0.8.20](@openzeppelin/contracts/utils/ShortStrings.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/utils/StorageSlot.sol#L5)
	- [^0.8.20](@openzeppelin/contracts/utils/Strings.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/utils/cryptography/EIP712.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/utils/math/Math.sol#L4)
	- [^0.8.20](@openzeppelin/contracts/utils/math/SignedMath.sol#L4)
	- [^0.8.20](ERC20.sol#L5)
	- [^0.8.20](SSS.sol#L3)

interfaces/IUniswapV2Router02.sol#L1


## dead-code
Impact: Informational
Confidence: Medium
 - [ ] ID-45
[Strings.toHexString(uint256,uint256)](@openzeppelin/contracts/utils/Strings.sol#L65-L78) is never used and should be removed

@openzeppelin/contracts/utils/Strings.sol#L65-L78


 - [ ] ID-46
[Context._contextSuffixLength()](@openzeppelin/contracts/utils/Context.sol#L25-L27) is never used and should be removed

@openzeppelin/contracts/utils/Context.sol#L25-L27


 - [ ] ID-47
[StorageSlot.getBytesSlot(bytes)](@openzeppelin/contracts/utils/StorageSlot.sol#L129-L134) is never used and should be removed

@openzeppelin/contracts/utils/StorageSlot.sol#L129-L134


 - [ ] ID-48
[Address.sendValue(address,uint256)](@openzeppelin/contracts/utils/Address.sol#L41-L50) is never used and should be removed

@openzeppelin/contracts/utils/Address.sol#L41-L50


 - [ ] ID-49
[Math.ceilDiv(uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L107-L115) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L107-L115


 - [ ] ID-50
[StorageSlot.getUint256Slot(bytes32)](@openzeppelin/contracts/utils/StorageSlot.sol#L89-L94) is never used and should be removed

@openzeppelin/contracts/utils/StorageSlot.sol#L89-L94


 - [ ] ID-51
[SignedMath.min(int256,int256)](@openzeppelin/contracts/utils/math/SignedMath.sol#L20-L22) is never used and should be removed

@openzeppelin/contracts/utils/math/SignedMath.sol#L20-L22


 - [ ] ID-52
[MessageHashUtils.toDataWithIntendedValidatorHash(address,bytes)](@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L63-L65) is never used and should be removed

@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L63-L65


 - [ ] ID-53
[StorageSlot.getStringSlot(bytes32)](@openzeppelin/contracts/utils/StorageSlot.sol#L99-L104) is never used and should be removed

@openzeppelin/contracts/utils/StorageSlot.sol#L99-L104


 - [ ] ID-54
[Math.log10(uint256,Math.Rounding)](@openzeppelin/contracts/utils/math/Math.sol#L359-L364) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L359-L364


 - [ ] ID-55
[ECDSA.recover(bytes32,bytes)](@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L89-L93) is never used and should be removed

@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L89-L93


 - [ ] ID-56
[Math.mulDiv(uint256,uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L123-L202) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L123-L202


 - [ ] ID-57
[Math.tryDiv(uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L61-L66) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L61-L66


 - [ ] ID-58
[SignedMath.average(int256,int256)](@openzeppelin/contracts/utils/math/SignedMath.sol#L28-L32) is never used and should be removed

@openzeppelin/contracts/utils/math/SignedMath.sol#L28-L32


 - [ ] ID-59
[Strings.toHexString(uint256)](@openzeppelin/contracts/utils/Strings.sol#L56-L60) is never used and should be removed

@openzeppelin/contracts/utils/Strings.sol#L56-L60


 - [ ] ID-60
[Math.sqrt(uint256,Math.Rounding)](@openzeppelin/contracts/utils/math/Math.sol#L257-L262) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L257-L262


 - [ ] ID-61
[Math.max(uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L81-L83) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L81-L83


 - [ ] ID-62
[Math.log2(uint256)](@openzeppelin/contracts/utils/math/Math.sol#L268-L304) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L268-L304


 - [ ] ID-63
[Math.average(uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L96-L99) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L96-L99


 - [ ] ID-64
[Math.log2(uint256,Math.Rounding)](@openzeppelin/contracts/utils/math/Math.sol#L310-L315) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L310-L315


 - [ ] ID-65
[Address.functionDelegateCall(address,bytes)](@openzeppelin/contracts/utils/Address.sol#L104-L107) is never used and should be removed

@openzeppelin/contracts/utils/Address.sol#L104-L107


 - [ ] ID-66
[SafeERC20.safeIncreaseAllowance(IERC20,address,uint256)](@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L52-L55) is never used and should be removed

@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L52-L55


 - [ ] ID-67
[Math.log256(uint256)](@openzeppelin/contracts/utils/math/Math.sol#L372-L396) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L372-L396


 - [ ] ID-68
[ECDSA.tryRecover(bytes32,bytes)](@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L56-L73) is never used and should be removed

@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L56-L73


 - [ ] ID-69
[Strings.toString(uint256)](@openzeppelin/contracts/utils/Strings.sol#L24-L44) is never used and should be removed

@openzeppelin/contracts/utils/Strings.sol#L24-L44


 - [ ] ID-70
[Math.log256(uint256,Math.Rounding)](@openzeppelin/contracts/utils/math/Math.sol#L402-L407) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L402-L407


 - [ ] ID-71
[SafeERC20.safeTransferFrom(IERC20,address,address,uint256)](@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L44-L46) is never used and should be removed

@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L44-L46


 - [ ] ID-72
[Nonces._useCheckedNonce(address,uint256)](@openzeppelin/contracts/utils/Nonces.sol#L40-L45) is never used and should be removed

@openzeppelin/contracts/utils/Nonces.sol#L40-L45


 - [ ] ID-73
[Math.sqrt(uint256)](@openzeppelin/contracts/utils/math/Math.sol#L221-L252) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L221-L252


 - [ ] ID-74
[Math.tryAdd(uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L25-L31) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L25-L31


 - [ ] ID-75
[Context._msgData()](@openzeppelin/contracts/utils/Context.sol#L21-L23) is never used and should be removed

@openzeppelin/contracts/utils/Context.sol#L21-L23


 - [ ] ID-76
[Address.functionStaticCall(address,bytes)](@openzeppelin/contracts/utils/Address.sol#L95-L98) is never used and should be removed

@openzeppelin/contracts/utils/Address.sol#L95-L98


 - [ ] ID-77
[Math.mulDiv(uint256,uint256,uint256,Math.Rounding)](@openzeppelin/contracts/utils/math/Math.sol#L207-L213) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L207-L213


 - [ ] ID-78
[Math.log10(uint256)](@openzeppelin/contracts/utils/math/Math.sol#L321-L353) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L321-L353


 - [ ] ID-79
[ECDSA.tryRecover(bytes32,bytes32,bytes32)](@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L100-L107) is never used and should be removed

@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L100-L107


 - [ ] ID-80
[ShortStrings.byteLengthWithFallback(ShortString,string)](@openzeppelin/contracts/utils/ShortStrings.sol#L116-L122) is never used and should be removed

@openzeppelin/contracts/utils/ShortStrings.sol#L116-L122


 - [ ] ID-81
[MessageHashUtils.toEthSignedMessageHash(bytes)](@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L49-L52) is never used and should be removed

@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L49-L52


 - [ ] ID-82
[Strings.toHexString(address)](@openzeppelin/contracts/utils/Strings.sol#L84-L86) is never used and should be removed

@openzeppelin/contracts/utils/Strings.sol#L84-L86


 - [ ] ID-83
[SafeERC20._callOptionalReturnBool(IERC20,bytes)](@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L110-L117) is never used and should be removed

@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L110-L117


 - [ ] ID-84
[Strings.toStringSigned(int256)](@openzeppelin/contracts/utils/Strings.sol#L49-L51) is never used and should be removed

@openzeppelin/contracts/utils/Strings.sol#L49-L51


 - [ ] ID-85
[SafeERC20.forceApprove(IERC20,address,uint256)](@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L76-L83) is never used and should be removed

@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L76-L83


 - [ ] ID-86
[Math.trySub(uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L36-L41) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L36-L41


 - [ ] ID-87
[StorageSlot.getBooleanSlot(bytes32)](@openzeppelin/contracts/utils/StorageSlot.sol#L69-L74) is never used and should be removed

@openzeppelin/contracts/utils/StorageSlot.sol#L69-L74


 - [ ] ID-88
[Math.tryMul(uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L46-L56) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L46-L56


 - [ ] ID-89
[StorageSlot.getBytes32Slot(bytes32)](@openzeppelin/contracts/utils/StorageSlot.sol#L79-L84) is never used and should be removed

@openzeppelin/contracts/utils/StorageSlot.sol#L79-L84


 - [ ] ID-90
[SafeERC20.safeDecreaseAllowance(IERC20,address,uint256)](@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L61-L69) is never used and should be removed

@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L61-L69


 - [ ] ID-91
[MessageHashUtils.toEthSignedMessageHash(bytes32)](@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L30-L37) is never used and should be removed

@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L30-L37


 - [ ] ID-92
[Strings.equal(string,string)](@openzeppelin/contracts/utils/Strings.sol#L91-L93) is never used and should be removed

@openzeppelin/contracts/utils/Strings.sol#L91-L93


 - [ ] ID-93
[Math.tryMod(uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L71-L76) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L71-L76


 - [ ] ID-94
[Math.min(uint256,uint256)](@openzeppelin/contracts/utils/math/Math.sol#L88-L90) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L88-L90


 - [ ] ID-95
[Address.verifyCallResult(bool,bytes)](@openzeppelin/contracts/utils/Address.sol#L135-L141) is never used and should be removed

@openzeppelin/contracts/utils/Address.sol#L135-L141


 - [ ] ID-96
[SignedMath.max(int256,int256)](@openzeppelin/contracts/utils/math/SignedMath.sol#L13-L15) is never used and should be removed

@openzeppelin/contracts/utils/math/SignedMath.sol#L13-L15


 - [ ] ID-97
[SignedMath.abs(int256)](@openzeppelin/contracts/utils/math/SignedMath.sol#L37-L42) is never used and should be removed

@openzeppelin/contracts/utils/math/SignedMath.sol#L37-L42


 - [ ] ID-98
[ECDSA.recover(bytes32,bytes32,bytes32)](@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L112-L116) is never used and should be removed

@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L112-L116


 - [ ] ID-99
[StorageSlot.getAddressSlot(bytes32)](@openzeppelin/contracts/utils/StorageSlot.sol#L59-L64) is never used and should be removed

@openzeppelin/contracts/utils/StorageSlot.sol#L59-L64


 - [ ] ID-100
[Math.unsignedRoundsUp(Math.Rounding)](@openzeppelin/contracts/utils/math/Math.sol#L412-L414) is never used and should be removed

@openzeppelin/contracts/utils/math/Math.sol#L412-L414


 - [ ] ID-101
[StorageSlot.getBytesSlot(bytes32)](@openzeppelin/contracts/utils/StorageSlot.sol#L119-L124) is never used and should be removed

@openzeppelin/contracts/utils/StorageSlot.sol#L119-L124


## solc-version
Impact: Informational
Confidence: High
 - [ ] ID-102
Pragma version[^0.8.20](@openzeppelin/contracts/utils/StorageSlot.sol#L5) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/utils/StorageSlot.sol#L5


 - [ ] ID-103
Pragma version[^0.8.20](@openzeppelin/contracts/utils/cryptography/EIP712.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/utils/cryptography/EIP712.sol#L4


 - [ ] ID-104
Pragma version[^0.8.20](@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol#L4


 - [ ] ID-105
Pragma version[^0.8.20](@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol#L4


 - [ ] ID-106
Pragma version[^0.8.20](@openzeppelin/contracts/token/ERC20/IERC20.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/token/ERC20/IERC20.sol#L4


 - [ ] ID-107
Pragma version[^0.8.20](@openzeppelin/contracts/utils/Address.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/utils/Address.sol#L4


 - [ ] ID-108
Pragma version[^0.8.20](@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol#L4


 - [ ] ID-109
Pragma version[^0.8.20](ERC20.sol#L5) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

ERC20.sol#L5


 - [ ] ID-110
Pragma version[^0.8.20](@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/utils/cryptography/ECDSA.sol#L4


 - [ ] ID-111
Pragma version[^0.8.20](@openzeppelin/contracts/utils/ShortStrings.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/utils/ShortStrings.sol#L4


 - [ ] ID-112
Pragma version[^0.8.20](@openzeppelin/contracts/utils/Nonces.sol#L3) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/utils/Nonces.sol#L3


 - [ ] ID-113
solc-0.8.25 is not recommended for deployment

 - [ ] ID-114
Pragma version[^0.8.20](@openzeppelin/contracts/utils/Context.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/utils/Context.sol#L4


 - [ ] ID-115
Pragma version[^0.8.20](@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L4


 - [ ] ID-116
Pragma version[^0.8.20](@openzeppelin/contracts/interfaces/IERC5267.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/interfaces/IERC5267.sol#L4


 - [ ] ID-117
Pragma version[^0.8.20](@openzeppelin/contracts/interfaces/draft-IERC6093.sol#L3) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/interfaces/draft-IERC6093.sol#L3


 - [ ] ID-118
Pragma version[^0.8.20](SSS.sol#L3) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

SSS.sol#L3


 - [ ] ID-119
Pragma version[^0.8.20](@openzeppelin/contracts/utils/math/Math.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/utils/math/Math.sol#L4


 - [ ] ID-120
Pragma version[^0.8.20](@openzeppelin/contracts/access/Ownable.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/access/Ownable.sol#L4


 - [ ] ID-121
Pragma version[^0.8.0](interfaces/IUniswapV2Router02.sol#L1) allows old versions

interfaces/IUniswapV2Router02.sol#L1


 - [ ] ID-122
Pragma version[^0.8.20](@openzeppelin/contracts/utils/math/SignedMath.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/utils/math/SignedMath.sol#L4


 - [ ] ID-123
Pragma version[^0.8.20](@openzeppelin/contracts/utils/Strings.sol#L4) necessitates a version too recent to be trusted. Consider deploying with 0.8.18.

@openzeppelin/contracts/utils/Strings.sol#L4


## low-level-calls
Impact: Informational
Confidence: High
 - [ ] ID-124
Low level call in [Address.functionCallWithValue(address,bytes,uint256)](@openzeppelin/contracts/utils/Address.sol#L83-L89):
	- [(success,returndata) = target.call{value: value}(data)](@openzeppelin/contracts/utils/Address.sol#L87)

@openzeppelin/contracts/utils/Address.sol#L83-L89


 - [ ] ID-125
Low level call in [Address.functionDelegateCall(address,bytes)](@openzeppelin/contracts/utils/Address.sol#L104-L107):
	- [(success,returndata) = target.delegatecall(data)](@openzeppelin/contracts/utils/Address.sol#L105)

@openzeppelin/contracts/utils/Address.sol#L104-L107


 - [ ] ID-126
Low level call in [SafeERC20._callOptionalReturnBool(IERC20,bytes)](@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L110-L117):
	- [(success,returndata) = address(token).call(data)](@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L115)

@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol#L110-L117


 - [ ] ID-127
Low level call in [Address.functionStaticCall(address,bytes)](@openzeppelin/contracts/utils/Address.sol#L95-L98):
	- [(success,returndata) = target.staticcall(data)](@openzeppelin/contracts/utils/Address.sol#L96)

@openzeppelin/contracts/utils/Address.sol#L95-L98


 - [ ] ID-128
Low level call in [Address.sendValue(address,uint256)](@openzeppelin/contracts/utils/Address.sol#L41-L50):
	- [(success) = recipient.call{value: amount}()](@openzeppelin/contracts/utils/Address.sol#L46)

@openzeppelin/contracts/utils/Address.sol#L41-L50


## naming-convention
Impact: Informational
Confidence: High
 - [ ] ID-129
Parameter [SSS.setLimitConfig(uint256,uint256)._maxAmountPerAccount](SSS.sol#L351) is not in mixedCase

SSS.sol#L351


 - [ ] ID-130
Function [ERC20.DOMAIN_SEPARATOR()](ERC20.sol#L379-L381) is not in mixedCase

ERC20.sol#L379-L381


 - [ ] ID-131
Parameter [SSS.setLimitConfig(uint256,uint256)._maxAmountPerTx](SSS.sol#L351) is not in mixedCase

SSS.sol#L351


 - [ ] ID-132
Function [EIP712._EIP712Version()](@openzeppelin/contracts/utils/cryptography/EIP712.sol#L157-L159) is not in mixedCase

@openzeppelin/contracts/utils/cryptography/EIP712.sol#L157-L159


 - [ ] ID-133
Variable [SSS.ANTI_BOT_LOCK_DURATION](SSS.sol#L53) is not in mixedCase

SSS.sol#L53


 - [ ] ID-134
Function [IUniswapV2Router02.WETH()](interfaces/IUniswapV2Router02.sol#L5) is not in mixedCase

interfaces/IUniswapV2Router02.sol#L5


 - [ ] ID-135
Function [IERC20Permit.DOMAIN_SEPARATOR()](@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol#L89) is not in mixedCase

@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol#L89


 - [ ] ID-136
Function [EIP712._EIP712Name()](@openzeppelin/contracts/utils/cryptography/EIP712.sol#L146-L148) is not in mixedCase

@openzeppelin/contracts/utils/cryptography/EIP712.sol#L146-L148


 - [ ] ID-137
Variable [SSS.ANTI_BOT_DETECT_DURATION](SSS.sol#L52) is not in mixedCase

SSS.sol#L52


 - [ ] ID-138
Parameter [SSS.setUnlimited(address,bool)._isUnlimited](SSS.sol#L332) is not in mixedCase

SSS.sol#L332


## similar-names
Impact: Informational
Confidence: Medium
 - [ ] ID-139
Variable [IUniswapV2Router02.addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256).amountADesired](interfaces/IUniswapV2Router02.sol#L10) is too similar to [IUniswapV2Router02.addLiquidity(address,address,uint256,uint256,uint256,uint256,address,uint256).amountBDesired](interfaces/IUniswapV2Router02.sol#L11)

interfaces/IUniswapV2Router02.sol#L10


## too-many-digits
Impact: Informational
Confidence: Medium
 - [ ] ID-140
[ShortStrings.slitherConstructorConstantVariables()](@openzeppelin/contracts/utils/ShortStrings.sol#L40-L123) uses literals with too many digits:
	- [FALLBACK_SENTINEL = 0x00000000000000000000000000000000000000000000000000000000000000FF](@openzeppelin/contracts/utils/ShortStrings.sol#L42)

@openzeppelin/contracts/utils/ShortStrings.sol#L40-L123


