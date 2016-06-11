//Need text property 'message'

var apiURL = "!TODO!";
 
//APIを叩く際のパラメータ
//プロパティの値を渡す
var data = {
    payload: JSON.stringify( { "text": properties.message })
};
 
ajax ({
    url : apiURL,
	//contentType:"application/json",
    data : data,
    type : "post",
    timeout : 10000,
    success : function ( contents ) {
        //正しいデータが取れているかチェック
        log("send slack : success");
        
		runtimeValues.result = true;
         
        callbackSuccess( {
            resultType : "continue",
            runtimeValues : runtimeValues
        } );
    },
    error : function ( request, errorMessage ) {
        log("send slack : error="+errorMessage);
		
		runtimeValues.result = false;
		
		callbackSuccess( {
            resultType : "continue",
            runtimeValues : runtimeValues
        } );
    }
});
 
return {
    resultType : "pause"
};
