import React from "react";
import button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import logo from './favicon.ico';
function Baba() {
  return (
    <div>
      <img src={logo} alt="BOEY Logo" className="boeyimg"></img>
      <br/>
      <button type="button" className="btn btn-outline-primary" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xae8cb2db90fb3bb3da5dd33a6dfb89a7ef3860d9" target="_blank" >Buy BabaBoey Coin on PancakeSwap</button>
      <br/>
      <h2>Step 1: Create a Wallet</h2>
      <p>Download <a href="https://trustwallet.com/" rel="noreferrer" className="text-info" target="_blank">Trust Wallet</a> and create a wallet. Copy the address for Bababooey Coin below.</p>
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
      <h2>Step 2: Add Bababooey Coin to your Wallet</h2>
      <p>Tap the icon in the top-right and search for "Bababooey". If it's not there, tap "Add Custom Token".</p>
      <p>At the top, tap "Ethereum" next to Network, and change to "Smart Chain". Copy the above contract address on this page and put it in the Contract Address box.</p>
      <p>Next, put "Bababooey Coin" as the name, and the symbol as BOEY. Decimals should be set to 18.</p>
      <p>Click "Done" at the top - Bababooey Coin is now added to your wallet.</p>
      <h2>Step 3: Buy "Binance Smart Chain" (BSC)</h2>
      <p>Tap on "Smart Chain" on Trust Wallet, then tap "Buy" in the top right. You will need to use Binance Smart Chain to purchase Bababooey Coin.</p>
      <h2>Step 4: Swap BSC for Bababooey Coin</h2>
      <p>Once you have BSC on your Trust Wallet, Go to DApps (or "Browser" on iPhone) at the bottom of the main screen. If the Browser button is not visible at the bottom on your iPhone, open Safari and enter the following as the URL: <code>trust://browser_enable</code>. Once complete, return to Trust Wallet.</p>
      <p>Open DApps, or Browser, find PancakeSwap and open it. Connect your Trust Wallet in the top-right. Scroll down to the "Exchange" section.</p>
      <p>Once you have entered the BNB amount that you wish to swap for Bababooey Coin, click Swap and wait for the transaction to clear. This process may not be instant.</p>
      <p>Once the transaction has been cleared, Bababooey Coin will be in your Trust Wallet!</p>
    </div>
  )};
  
export default Baba