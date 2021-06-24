
var canvas= new fabric.Canvas("mycanvas");
 block_y=1;
 block_x=1;

block_image_width = 200;
block_image_height = 300;
  
function block_update(block_image){
    fabric.Image.fromURL( block_image,  function(Img){
        block_object=Img
        block_object.scaleToWidth(block_image_width)
        block_object.scaleToHeight(block_image_height)
        block_object.set({
            top:block_y,left:block_x
        });
        canvas.add(block_object);
})
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		block_update("rr1.png")
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		block_update("gr.png")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		block_update("yr.png")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		block_update("pr.png")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	block_update("br.png")
	}
}
