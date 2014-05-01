if($('#signInForm').length > 0) {
  var form = new Carbon.Form('#signInForm');

  form.element.attr('action', '/authenticate?format=json');

  form.on('submit', function(e) {
  	form.validate(function() { 
      form.send(function(data) { 
        window.location = (data.returnTo || '/'); 
      });
    });
  });
}

if($('#passwordResetForm').length > 0) {
  var form = new Carbon.Form('#passwordResetForm');
  
  form.element.attr('action', '/passwordresets/create?format=json');

  form.on('submit', function(e) {
    form.validate(function() { 
      form.send(function(data) { 
        window.location = (data.returnTo || '/passwordresets/' + data.id); 
      });
    });
  });
}