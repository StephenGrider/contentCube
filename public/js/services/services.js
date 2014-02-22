flintify.service('rotateService', function(){

  return (function(){
    var x = 0;
    var y = 0;
    cameraMatrix = new MatrixUtil([[1,0,0,0],
                                    [0,1,0,0],
                                    [0,0,1,0],
                                    [0,0,0,1]]);

    return function(direction){
      
      var origin = document.getElementById('origin');

      x += 10;
      y += 10;
      cameraMatrix.translateX(x);
      cameraMatrix.translateY(y);

      var o = "matrix3d("+ cameraMatrix.toString()+")";
      origin.style['-webkit-transform'] = o;

    }
  })()
  
})

flintify.service('setup', function(){

  return function(ele, direction){
    
    cameraMatrix = new MatrixUtil([[1,0,0,0],
                                [0,1,0,0],
                                [0,0,1,0],
                                [0,0,0,1]]);
    var width = window.innerWidth;
    var height = window.innerHeight;

    var faceWidth = .4;

    if(direction==='right'){
      cameraMatrix.rotateY(-90*Math.PI/180);
      cameraMatrix.translateX(-width*faceWidth/2);
      
    } else if(direction ==='left'){
      cameraMatrix.rotateY(90*Math.PI/180);
      cameraMatrix.translateX(width*faceWidth/2);
    } else if(direction ==='front'){

    } else if(direction ==='top'){
      cameraMatrix.rotateX(90*Math.PI/180);
      cameraMatrix.translateY(-height*faceWidth/2);

    } else if(direction === 'bottom'){
      cameraMatrix.rotateX(90*Math.PI/180);
      cameraMatrix.translateY(height*faceWidth/2);

    } else if(direction === 'back'){
      cameraMatrix.translateZ(-width*faceWidth/2);
      cameraMatrix.translateX(300);
      
    } else if(direction === 'origin'){
      cameraMatrix.translateX(-width*faceWidth/2);
      cameraMatrix.translateY(-height*faceWidth/2);
    } else if(direction === 'originFinal'){
      cameraMatrix.translateX(width*faceWidth/2);
      cameraMatrix.translateY(height*faceWidth/2);
    }


    var o = "matrix3d("+ cameraMatrix.toString()+")";
    ele.style['-webkit-transform'] = o;

  }

  
})