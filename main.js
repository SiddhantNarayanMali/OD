Status = "";
object = [];
Percent = 0;
function preload()
{
    image = loadImage("https://i.postimg.cc/y6XvJmVY/Sofa.jpg");
}

function setup()
{
    Canvas= createCanvas(400,400);
    Canvas.center();
    CoCo = ml5.objectDetector("cocossd", ModelL);
    document.getElementById("status").innerHTML = "Status Detecting Objects";
}

function ModelL()
{
    console.log("Model Loaded");
    Status = true;
    Coco.detect(image, Result);
}

function Results(error,result)
{
    if (error)
    {
        console.error(error);
    }

    else
    {
        console.log(result);
        object = result;
    }
}

function draw()
{
    image(image,0,0,400,400);
    if (Status != "")
    {
        for (i=0; i<object; i++)
        {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            fill("red");
            Percent = floor(object[i].confidence*100);
            text(object[i].label+" "+Percent+"%",object[i].x+10,object[i].y+20);
            noFill();
            stroke("red");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
            
        }
    }
}