var isMouse = false;
function initiate(){
  document.querySelectorAll('.card-btn').forEach(function(item){
      item.onclick = function(){
      card = this.parentNode.parentNode;
      hello = card.getElementsByClassName('card-hello')[0];
      contact = card.getElementsByClassName('card-contact')[0];
      hello.style.transform = "rotate3d(0,1,0,180deg)";
      contact.style.transform = "rotate3d(0,1,0,360deg)";
    }
  });
  window.onclick = function(event){
    document.querySelectorAll('.card').forEach(function(item){
      hello = item.getElementsByClassName('card-hello')[0];
      contact = item.getElementsByClassName('card-contact')[0];
      btn = item.getElementsByClassName('card-btn')[0];
      if((!contact.contains(event.target)) && (event.target != btn) && (contact.style.transform == 'rotate3d(0, 1, 0, 360deg)'))
      {
        hello.style.transform = "rotate3d(0,1,0,0deg)";
        contact.style.transform = "rotate3d(0,1,0,180deg)";
      }
    });
  }
  nav = document.getElementsByClassName('navigate')[0];
  setInterval(function(){
    if(!isMouse && (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)){
      nav.style.height = '0px';
    }
  },2000);
  window.onscroll = function(){
    nav.style.height = '60px';
  };
  nav.onmouseover = function(){
    nav.style.height = '60px';
    isMouse = true;
  };
  nav.onmouseout = function(){
    isMouse = false;
  };
  document.body.onmousemove = function(event){
    if(event.clientY < 50){
      nav.style.height = '60px';
    }
  };
  if(window.innerWidth < 1450){
    alert("PLease view on browser with width greater than 1450.");
  }
}
