function ui_btn(argv){
  var btn = document.createElement('button');
  btn.innerHTML = argv[1];
  btn.onclick = argv[2];
  btn.className = 'btn btn-primary';
  argv[0].appendChild(btn);
}

function ui_break(argv){
  var brk = document.createElement('br');
  argv[0].appendChild(brk);
}
