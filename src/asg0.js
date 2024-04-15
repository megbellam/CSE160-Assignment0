var ctx;
v1 = new Vector3([0, 0, 0]);
v2 = new Vector3([0, 0, 0]);

function drawVector(v, color) {
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.strokeStyle = color;
    ctx.lineTo(((v.elements[0])*20)+210, 210-((v.elements[1])*20));
    ctx.stroke();
}

function drawFromInput(){
    //Clear the screen
    ctx.clearRect(0, 0, 400, 400);
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color
    var form = document.getElementById("myForm");
    var x1 = form.elements["xvalue"].value;
    var y1 = form.elements["yvalue"].value;
    var x2 = form.elements["x2value"].value;
    var y2 = form.elements["y2value"].value;
    //alert("Form is being submitted with: x=" + x1 + " y=" + y1);
    v1.elements[0]=x1;
    v1.elements[1]=y1;
    v1.elements[2]=0;
    drawVector(v1,"red");
    v2.elements[0]=x2;
    v2.elements[1]=y2;
    v2.elements[2]=0;
    drawVector(v2,"blue");
    return false; //if you return true it will resubmit the form again
}

function areaTriangle(v1, v2){
    let v3 = new Vector3();
    v3 = Vector3.cross(v1, v2);
    return(v3.magnitude()/2);
}

function angleBetween(v1, v2){
    var angle = Vector3.dot(v1, v2);
    angle = angle/(v1.magnitude() * v2.magnitude())
    angle = Math.acos(angle);
    var pi = Math.PI;
    angle = angle * (180/pi);
    return angle;
}

function handleDrawOperationEvent(){
    drawFromInput();
    var form = document.getElementById("myForm2");
    var selector = form.elements["Operation"].value;
    var scalarvalue = form.elements["scalarvalue"].value;
    //alert("Form is being submitted with:" + selector + " " + scalarvalue);

    if (selector == "Add"){
        v1.add(v2);
        drawVector(v1, "green");
    }

    if (selector == "Subtract"){
        v1.sub(v2);
        drawVector(v1, "green");
    }

    if (selector == "Multiply"){
        v1.mul(scalarvalue);
        drawVector(v1, "green");

        v2.mul(scalarvalue);
        drawVector(v2, "green");
    }

    if (selector == "Divide"){
        v1.div(scalarvalue);
        drawVector(v1, "green");

        v2.div(scalarvalue);
        drawVector(v2, "green");
    }

    if (selector == "Magnitude"){
        console.log('v1 magnitude = ' + v1.magnitude());
        console.log('v2 magnitude = ' + v2.magnitude());
    }

    if (selector == "Normalize"){
        drawVector(v1.normalize(), "green");
        drawVector(v2.normalize(), "green");
    }

    if (selector == "Angle between"){
        console.log("Angle: " + angleBetween(v1, v2));
    }

    if (selector == "Area"){
        console.log("Area of the triangle: " + areaTriangle(v1, v2));
    }

    return false;
}

function main() {
    var canvas = document.getElementById('canvas1');
    if (!canvas) {
        //Write the error message into the Browser's console
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    //console.log('All good');
    ctx = canvas.getContext('2d');                                    
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, 400, 400); // Fill a rectangle with the color

    //Question2
    let v1 = new Vector3([2.25, 2.25, 0])
    drawVector(v1, "red");
}