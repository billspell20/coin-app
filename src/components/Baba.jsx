import React from "react";
import button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
function Baba() {
  return (
    <div>
      <button type="button" className="btn btn-outline-primary" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xae8cb2db90fb3bb3da5dd33a6dfb89a7ef3860d9" target="_blank" >Buy BabaBoey Coin</button>
      <h2>Step 1: Create a Wallet</h2>
      <p>Download <a href="https://trustwallet.com/" rel="noreferrer" className="text-info" target="_blank">Trust Wallet</a> and create a wallet. Make sure to copy the contract address below!</p>
      <InputGroup className="mb-3">
      <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon3">
           Address
          </InputGroup.Text>
       </InputGroup.Prepend>
        <FormControl
          defaultValue="0xae8cb2db90fb3bb3da5dd33a6dfb89a7ef3860d9"
          aria-label="0xae8cb2db90fb3bb3da5dd33a6dfb89a7ef3860d9"
          aria-describedby="basic-addon2"
          readOnly=""
        />
      </InputGroup>
      <h2>Step 2: Add Bababooey to your Wallet</h2>
      <p>Tap the icon in the top-right and search for "Bababooey". If it's not there, tap "Add Custom Token".</p>
      <p>At the top, tap "Ethereum" next to Network, and change it to "Smart Chain". Copy the above contract address on this page and put it in the Contract Address box.</p>
      <p>Next, put "Bababooey Coin" as the name, and the symbol as BOEY. Decimals will be 18.</p>
      <p>Click "Done" at the top and you should now have Bababooey added to your wallet!</p>
      <h2>Step 3: Buy "Binance Smart Chain" (BSC)</h2>
      <p>Tap on "Smart Chain" on the main screen of trust wallet, then tap "Buy" in the top right. This step may require verification, so have documents ready to prove your identity.</p>
      <p>If the transaction won't go through, you may need to contact your bank to allow international transactions.</p>
      <p>After purchasing, there may be a delay while your transaction is processed.</p>
      <h2>Step 4: Swap BSC for Bababooey Coin</h2>
      <p>Once your transaction has been cleared, and you have BSC on your Trust Wallet, Go to DApps (or "Browser" for iPhones) at the bottom of the main screen. If the Browser button is not visible at the bottom for iPhone, open Safari and in the URL type <code>trust://browser_enable</code>, then return to trust wallet.</p>
      <p>Open the DApps, or Browser, section and find PancakeSwap and open it. Connect your Trust Wallet in the top-right. Scroll down to the "Exchange" box</p>
      <p>Once you have the BNB amount set that you wish to swap for Bababooey Coin as shown, just click Swap and wait patiently for the transaction to clear. This process may not be instant and can take anywhere from a few minutes up to an hour sometimes, depending on traffic.</p>
      <p>Once the transaction has been cleared, you should have Bababooey Coin in your Trust Wallet!</p>
    </div>
  )};
  
export default Baba