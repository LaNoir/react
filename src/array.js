/*var singleton = (function() {
  var instance;
  var info = [{
    uid : 'lee',
    upw : 'hihi'
  },
  {
    uid:'heo',
    upw : 'asdasd'
  }
  ];
  function initiate() {
    return {
      info: info,
      b: function() {
        alert(info);
      }
    };
  }
  return {
    getInstance: function() {
      if (!instance) {
        instance = initiate();
      }
      return instance;
    }
  }
})();
var first = singleton.getInstance();
*/

window.info = [{
  uid : 'lee',
  upw : 'hihi'
},
{
  uid:'heo',
  upw : 'asdasd'
}
]