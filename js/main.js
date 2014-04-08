function main(api){
  var API_ID = '36542:GVCrxcl8';
  var ENC_KEY = 'LrUjF3DYzgxDLmzQvnm721JJVS4kivmq';
  api.connect(API_ID, ENC_KEY);

  ui_btn([document.body,'Click to unlock medal!',function(){
    api.unlockMedal('Test Medal');
  }]);

  ui_break([document.body]);

  ui_btn([document.body,'????',function(){
    api.unlockMedal('Tis a Secret');
  }]);
};

(function init(){
  if(window && document && document.body && NG){ // document is ready
    main(NG);
  }else{
    console.log("Init failed. Trying again...");
    setTimeout(init, 1000); // wait for 1 second and try again
  }
})();
