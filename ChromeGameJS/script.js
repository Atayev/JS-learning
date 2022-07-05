var chacracter = document.getElementById("character")
var block = document.getElementById("block")
function jump () {
    if (chacracter.classList!="animate") {

      chacracter.classList.add("animate") 
}
    setTimeout(function(){
        chacracter.classList.remove("animate")
    },1000)
}

var checkDead = setInterval(function() {
    var chacracterTop = parseInt(window.getComputedStyle(chacracter).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<10 && blockLeft>0 && chacracterTop>=130) {
        block.style.animation="none"
        block.style.display="none"
        alert ("u lose")
        location.reload()
    }
},10)