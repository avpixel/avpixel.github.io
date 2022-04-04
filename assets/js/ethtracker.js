function checkEthBalance() {
    document.getElementById("ethBalance").innerHTML = "Xin vui lòng chờ.....";

    fetch( 'https://api.etherscan.io/api?module=account&action=balance&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&tag=latest&apikey=XDQVUR479WPCQXZNP4AMVWJ143YM8KMJM2' )
        .then( response => response.json() )
        .then( response => {
            document.getElementById("ethBalance").innerHTML = "Số lượng ETH trong ví: " + response.result;
        }
    );
}