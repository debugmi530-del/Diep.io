(function(){
  if(navigator.maxTouchPoints>0||'ontouchstart' in window){
    var _mm=window.matchMedia.bind(window);
    window.matchMedia=function(q){
      if(q==='(pointer: coarse)'){
        return {matches:true,media:q,onchange:null,
          addListener:function(){},removeListener:function(){},
          addEventListener:function(){},removeEventListener:function(){},
          dispatchEvent:function(){return false;}};
      }
      return _mm(q);
    };
  }
})();