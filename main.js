var canvas = new fabric.Canvas('myCanvas');

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
    blockimageobject=Img;
blockimageobject.scaleToWidth(1000);
blockimageobject.scaleToHeight(900);
blockimageobject.set({
top:0,
left:0
});
canvas.add(blockimageobject);
    });
}

function play(){
	document.getElementById("myAudio").play();

}
