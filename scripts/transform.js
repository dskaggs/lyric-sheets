var re = /\[[A-Za-z0-9]+\]/g;
var body = document.body.innerHTML;

body = body.replace(re, function(chord){
   chord = chord.replace(/\[/g, '').replace(/\]/g, '');
   return '<span class="chord chord-' + chord.length + '-char">' + chord + '</span>';
});

document.body.innerHTML = body;