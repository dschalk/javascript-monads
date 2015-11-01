self.addEventListener('message', function(e) {
  setTimeout( function() {
    console.log('Worker got the message: ' + e.data);
    self.postMessage(e.data + ' and die!');
  },3000  )
}, false);
