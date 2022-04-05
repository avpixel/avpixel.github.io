function checkEthBalance() {
    document.getElementById("ethBalance").innerHTML = "Xin vui lòng chờ.....";

    fetch( 'https://api.etherscan.io/api?module=account&action=balance&address=0xc161896f06dec5fe38ef2c4aca4100fee84944ec&tag=latest&apikey=XDQVUR479WPCQXZNP4AMVWJ143YM8KMJM2' )
        .then( response => response.json() )
        .then( response => {
            document.getElementById("ethBalance").innerHTML = "Số lượng ETH trong ví: " + response.result;
        }
    );
}