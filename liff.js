window.onload = function (e) {
    // initialize and get basic information
    // https://developers.line.me/en/reference/liff/#initialize-liff-app
    liff.init(function (data) {
        initializeApp(data);
	    });
};

function initializeApp(data) {

    document.getElementById('useridfield').textContent = data.context.userId;
    var uid = data.context.userId ;
    //var x = document.createElement("IFRAME");
    var x = document.getElementById("myFrame");
    var url = "https://script.google.com/macros/s/AKfycbxp_UM5tOO10qLVCak7vNVdaHfXfyBHE4cgCAV6AYuTFsHhpMAwohP2tmLvzXczLk38/exec" +"?lineid="+uid ;
    x.setAttribute("index", url);
    document.body.appendChild(x);
  

}
