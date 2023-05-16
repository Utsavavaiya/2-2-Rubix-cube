//using arrays for storing the information about each face
let up=['Y','Y','Y','Y'];
let bottom=['W','W','W','W'];
let left=['G','G','G','G'];
let right=['B','B','B','B'];
let front=['O','O','O','O'];
let back=['R','R','R','R'];

//adding event listeners for updating the screen info every millisecond
let boxes=document.querySelectorAll('.boxes');

function getColor(str){
    if(str=='R'){
        return 'red';
    }
    else if(str=='B'){
        return 'blue';
    }
    else if(str=='W'){
        return 'white';
    }
    else if(str=='Y'){
        return 'yellow';
    }
    else if(str=='G'){
        return 'green';
    }
    else if(str=='O'){
        return 'orange';
    }
}

function display(){
    boxes[0].style.backgroundColor=getColor(back[0]);
    boxes[1].style.backgroundColor=getColor(back[1]);
    boxes[2].style.backgroundColor=getColor(back[3]);
    boxes[3].style.backgroundColor=getColor(back[2]);
    boxes[4].style.backgroundColor=getColor(left[0]);
    boxes[5].style.backgroundColor=getColor(left[1]);
    boxes[6].style.backgroundColor=getColor(left[3]);
    boxes[7].style.backgroundColor=getColor(left[2]);
    boxes[8].style.backgroundColor=getColor(up[0]);
    boxes[9].style.backgroundColor=getColor(up[1]);
    boxes[10].style.backgroundColor=getColor(up[3]);
    boxes[11].style.backgroundColor=getColor(up[2]);
    boxes[12].style.backgroundColor=getColor(right[0]);
    boxes[13].style.backgroundColor=getColor(right[1]);
    boxes[14].style.backgroundColor=getColor(right[3]);
    boxes[15].style.backgroundColor=getColor(right[2]);
    boxes[16].style.backgroundColor=getColor(bottom[0]);
    boxes[17].style.backgroundColor=getColor(bottom[1]);
    boxes[18].style.backgroundColor=getColor(bottom[3]);
    boxes[19].style.backgroundColor=getColor(bottom[2]);
    boxes[20].style.backgroundColor=getColor(front[0]);
    boxes[21].style.backgroundColor=getColor(front[1]);
    boxes[22].style.backgroundColor=getColor(front[3]);
    boxes[23].style.backgroundColor=getColor(front[2]);
}

setInterval(display,1);

function addEvents(btn,str){
    btn.addEventListener('click',()=>{
        boxes[0].addEventListener('click',()=>{back[0]=str;});
        boxes[1].addEventListener('click',()=>{back[1]=str;});
        boxes[2].addEventListener('click',()=>{back[3]=str;});
        boxes[3].addEventListener('click',()=>{back[2]=str;});
        boxes[4].addEventListener('click',()=>{left[0]=str;});
        boxes[5].addEventListener('click',()=>{left[1]=str;});
        boxes[6].addEventListener('click',()=>{left[3]=str;});
        boxes[7].addEventListener('click',()=>{left[2]=str;});
        boxes[8].addEventListener('click',()=>{up[0]=str;});
        boxes[9].addEventListener('click',()=>{up[1]=str;});
        boxes[10].addEventListener('click',()=>{up[3]=str;});
        boxes[11].addEventListener('click',()=>{up[2]=str;});
        boxes[12].addEventListener('click',()=>{right[0]=str;});
        boxes[13].addEventListener('click',()=>{right[1]=str;});
        boxes[14].addEventListener('click',()=>{right[3]=str;});
        boxes[15].addEventListener('click',()=>{right[2]=str;});
        boxes[16].addEventListener('click',()=>{bottom[0]=str;});
        boxes[17].addEventListener('click',()=>{bottom[1]=str;});
        boxes[18].addEventListener('click',()=>{bottom[3]=str;});
        boxes[19].addEventListener('click',()=>{bottom[2]=str;});
        boxes[20].addEventListener('click',()=>{front[0]=str;});
        boxes[21].addEventListener('click',()=>{front[1]=str;});
        boxes[22].addEventListener('click',()=>{front[3]=str;});
        boxes[23].addEventListener('click',()=>{front[2]=str;});
    });
}

let yellowBtn=document.getElementById('yellow');
let whiteBtn=document.getElementById('white');
let redBtn=document.getElementById('red');
let greenBtn=document.getElementById('green');
let orangeBtn=document.getElementById('orange');
let blueBtn=document.getElementById('blue');

addEvents(redBtn,'R');
addEvents(whiteBtn,'W');
addEvents(blueBtn,'B');
addEvents(orangeBtn,'O');
addEvents(greenBtn,'G');
addEvents(yellowBtn,'Y');

//using queue data structure for maintaining and modifying the solution 
class queue{
    constructor(solution){
        this.solution=solution;
    }
    isEmpty(){
        return this.solution.length==0;
    }
    enqueue(move){
        this.solution.push(move);
    }
    dequeue(){
        return this.solution.shift();
    }
    tempDisplay(){
        for(var i=0; i<this.solution.length; i++){
            console.log(this.solution[i]);
        }
    }
}

//solution will be stored in this queue
let solution=new queue([]);

//move functions for allowing cube rotations
let temp,temp2;

function rotateFaceClockwise(arr){
    temp=arr[3];
    for(var i=3; i>0; i--){
        arr[i]=arr[i-1];
    }
    arr[0]=temp;
}

function R(value=true){
    temp=back[1],temp2=back[2];
    back[1]=up[1],back[2]=up[2];
    up[1]=front[1],up[2]=front[2];
    front[1]=bottom[3],front[2]=bottom[0];
    bottom[3]=temp,bottom[0]=temp2;
    rotateFaceClockwise(right);
    if(value){
        solution.enqueue('R');
    }
}

function L(value=true){
    temp=front[3],temp2=front[0];
    front[3]=up[3],front[0]=up[0];
    up[3]=back[3],up[0]=back[0];
    back[3]=bottom[1],back[0]=bottom[2];
    bottom[1]=temp,bottom[2]=temp2;
    rotateFaceClockwise(left);
    if(value){
        solution.enqueue('L');
    }
}

function U(value=true){
    temp=back[2],temp2=back[3];
    back[2]=left[1],back[3]=left[2];
    left[1]=front[0],left[2]=front[1];
    front[0]=right[3],front[1]=right[0];
    right[3]=temp,right[0]=temp2;
    rotateFaceClockwise(up);
    if(value){
        solution.enqueue('U');
    }
}

function D(value=true){
    temp=back[0],temp2=back[1];
    back[0]=right[1],back[1]=right[2];
    right[1]=front[2],right[2]=front[3];
    front[2]=left[3],front[3]=left[0];
    left[3]=temp,left[0]=temp2;
    rotateFaceClockwise(bottom);
    if(value){
        solution.enqueue('D');
    }
}

function F(value=true){
    temp=bottom[2],temp2=bottom[3];
    bottom[2]=right[2],bottom[3]=right[3];
    right[2]=up[2],right[3]=up[3];
    up[2]=left[2],up[3]=left[3];
    left[2]=temp,left[3]=temp2;
    rotateFaceClockwise(front);
    if(value){
        solution.enqueue('F');
    }
}

function B(value=true){
    temp=left[0],temp2=left[1];
    left[0]=up[0],left[1]=up[1];
    up[0]=right[0],up[1]=right[1];
    right[0]=bottom[0],right[1]=bottom[1];
    bottom[0]=temp,bottom[1]=temp2;
    rotateFaceClockwise(back);
    if(value){
        solution.enqueue('B');
    }
}

function Rprime(value=true){
    R(false);
    R(false);
    R(false);
    if(value){
        solution.enqueue("R'");
    }
}

function Lprime(value=true){
    L(false);
    L(false);
    L(false);
    if(value){
        solution.enqueue("L'");
    }
}

function Uprime(value=true){
    U(false);
    U(false);
    U(false);
    if(value){
        solution.enqueue("U'");
    }
}

function Dprime(value=true){
    D(false);
    D(false);
    D(false);
    if(value){
        solution.enqueue("D'");
    }
}

function Fprime(value=true){
    F(false);
    F(false);
    F(false);
    if(value){
        solution.enqueue("F'");
    }
}

function Bprime(value=true){
    B(false);
    B(false);
    B(false);
    if(value){
        solution.enqueue("B'");
    }
}

function MRFF(){
    U(false);
    Dprime(false);
    solution.enqueue('MRFF');
}

function MRFT(){
    Fprime(false);
    B(false);
    solution.enqueue('MRFT');
}

//loop breaker(to identify that the user has entered wrong inputs)
var loopB;

//solution stage 1-Solving the white side and corresponding edges
function rotateBottom(){
    for(var i=0; i<4; i++){
        if(bottom[3]=='W'){
            D();
            continue;
        }
        break;
    }
}

function orientPiece(){
    if(up[2]=='W'){
        R();
        U();
        U();
        Rprime();
        Uprime();
        R();
        U();
        Rprime();
    }
    else if(right[3]=='W'){
        R();
        U();
        Rprime();
    }
    else if(front[1]=='W'){
        Fprime();
        Uprime();
        F();
    }
    rotateBottom();
}

function searchPiece(){
    if(up[2]=='W'||front[1]=='W'||right[3]=='W'){
        return;
    }
    else if(up[1]=='W'||back[2]=='W'||right[0]=='W'){
        U();
    }
    else if(up[3]=='W'||left[2]=='W'||front[0]=='W'){
        Uprime();
    }
    else if(up[0]=='W'||back[3]=='W'||left[1]=='W'){
        U();
        U();
    }
    else if(right[1]=='W'||back[1]=='W'){
        Rprime();
        U();
        Bprime();
    }
    else if(front[3]=='W'||left[3]=='W'){
        Lprime();
        Uprime();
        L();
    }
    else if(front[2]=='W'||right[2]=='W'){
        R();
        U();
        Rprime();
        Uprime();
    }
    else if(left[0]=='W'||back[0]=='W'){
        L();
        U();
        U();
        Lprime();
    }
}

function solveStage1(){
    loopB=0;
    rotateBottom();
    while(bottom[0]!='W'||bottom[1]!='W'||bottom[2]!='W'||bottom[3]!='W'){
        searchPiece();
        orientPiece();
        loopB++;
        if(loopB==15){
            break;
        }
    }
}

//solution stage 2-Solving the yellow side
function OLL1(){
    R();
    U();
    U();
    Rprime();
    Uprime();
    R();
    Uprime();
    Rprime();
}

function OLL2(){
    R();
    U();
    Rprime();
    U();
    R();
    U();
    U();
    Rprime();
}

function OLL3(){
    R();
    U();
    Rprime();
    Uprime();
    Rprime();
    F();
    R();
    Fprime();
}

function OLL4(){
    F();
    R();
    U();
    Rprime();
    Uprime();
    Fprime();
}

function OLL5(){
    F();
    Rprime();
    Fprime();
    R();
    U();
    R();
    Uprime();
    Rprime();
}

function OLL6(){
    R();
    R();
    U();
    U();
    R();
    U();
    U();
    R();
    R();    
}

function OLL7(){
    F();
    R();
    U();
    Rprime();
    Uprime();
    R();
    U();
    Rprime();
    Uprime();
    Fprime();
}

function searchPattern(arr1,ind1,arr2,ind2,arr3,ind3,arr4,ind4){
    for(var i=0; i<4; i++){
        if(arr1[ind1]=='Y'&&arr2[ind2]=='Y'&&arr3[ind3]=='Y'&&arr4[ind4]=='Y'){
            return true;
        }
        MRFF();
    }
    return false;
}

function solveStage2(){
    if(searchPattern(up,1,front,0,right,3,left,1)){
        OLL1();
    }
    else if(searchPattern(up,3,front,1,back,3,right,0)){
        OLL2();
    }
    else if(searchPattern(up,1,up,2,back,3,front,0)){
        OLL3();
    }
    else if(searchPattern(up,1,up,2,left,2,left,1)){
        OLL4();
    }
    else if(searchPattern(up,0,up,2,front,0,right,0)){
        OLL5();
    }
    else if(searchPattern(front,0,front,1,back,2,back,3)){
        OLL6();
    }
    else if(searchPattern(left,1,left,2,back,2,front,1)){
        OLL7();
    }
}

//solution stage 3-permuting both the layers
function PBL1(){
    Rprime();
    U();
    Lprime();
    U();
    U();
    R();
    Uprime();
    Rprime();
    U()
    U();
    L();
    R();
    Uprime();
}

function PBL2(){
    R();
    Uprime();
    Rprime();
    Uprime();
    F();
    F();
    Uprime();
    R();
    U();
    Rprime();
    D();
    R();
    R();
}

function PBL3(){
    R();
    R();
    F();
    F();
    R();
    R();
}

function PBL4(){
    R();
    R();
    Uprime();
    R();
    R();
    U();
    U();
    F();
    F();
    Uprime();
    R();
    R();
}

function PBL5(){
    R();
    Uprime();
    R();
    F();
    F();
    Rprime();
    U();
    Rprime();
}

function PBL6(){
    L();
    Dprime();
    L();
    F();
    F();
    Lprime();
    D();
    Lprime();
}

let isBotBar=false;
let isTopBar=false;
let isTopAdj=false;
let isBotAdj=false;

function orientCube(){
    if(back[0]==back[1]&&left[0]==left[3]&&front[3]==front[2]&&right[1]==right[2]){
        isBotBar=true;
    }
    if(back[3]==back[2]&&left[1]==left[2]&&front[0]==front[1]&&right[3]==right[0]){
        isTopBar=true;
    }
    if(isTopBar&&isBotBar){
        return;
    }
    if(isTopBar){
        MRFT();
        MRFT();
    }
    for(var i=0; i<4; i++){
        if(front[0]==front[1]){
            isTopAdj=true;
            break;
        }
        U();
    }
    if(!isTopBar&&!isBotBar){
        for(var i=0; i<4; i++){
            if(front[2]==front[3]){
                isBotAdj=true;
                break;
            }
            Dprime();
        }
    }
    if(isTopAdj&&isBotAdj){
        MRFF();
        MRFF();
    }
}

function solveStage3(){
    loopB=0;
    orientCube();
    while(left[0]!=left[1]||left[1]!=left[2]||left[2]!=left[3]||left[3]!=left[0]||back[0]!=back[1]||back[1]!=back[2]||back[2]!=back[3]||back[3]!=back[0]){
        if(isTopBar&&isBotBar){
            U();
        }
        else if((isTopBar||isBotBar)&&isTopAdj){
            PBL1();
        }
        else if((isTopBar||isBotBar)&&!isTopAdj){
            PBL2();
        }
        else if(!isTopAdj&&!isBotAdj){
            PBL3();
        }
        else if(isTopAdj&&isBotAdj){
            PBL4();
        }
        else if(isTopAdj&&!isBotAdj){
            PBL5();
        }
        else if(!isTopAdj&&isBotAdj){
            PBL6();
        }
        isTopBar=true;
        isBotBar=true;
        loopB++;
        if(loopB==10){
            break;
        }
    }
}

//adding event listeners on solve and reset buttons and displaying the solution
let solveBtn=document.getElementById("solve");
let resetBtn=document.getElementById("reset");
let solnBtn=document.getElementById("solution");
let step1=document.getElementById("step1");
let step2=document.getElementById("step2");
let step3=document.getElementById("step3");
let solved=document.getElementById("solved");

solveBtn.addEventListener('click',()=>{
    if(up[0]==up[1]&&up[1]==up[2]&&up[2]==up[3]&&up[3]==up[0]&&left[0]==left[1]&&left[1]==left[2]&&left[2]==left[3]&&left[3]==left[0]&&front[0]==front[1]&&front[1]==front[2]&&front[2]==front[3]&&front[3]==front[0]){
        solved.style.display='block';
        return;
    }

    let stage1=' ',stage2=' ',stage3=' ';
    
    solveStage1();
    while(!solution.isEmpty()){
        stage1+=solution.dequeue()+' ';
    }

    solveStage2();
    while(!solution.isEmpty()){
        stage2+=solution.dequeue()+' ';
    }
    
    solveStage3();
    while(!solution.isEmpty()){
        stage3+=solution.dequeue()+' ';
    }

    if(up[0]!=up[1]||up[1]!=up[2]||up[2]!=up[3]||up[3]!=up[0]||left[0]!=left[1]||left[1]!=left[2]||left[2]!=left[3]||left[3]!=left[0]||front[0]!=front[1]||front[1]!=front[2]||front[2]!=front[3]||front[3]!=front[0]){
        solved.innerHTML='Wrong Inputs!!';
        solved.style.display='block';
        return;
    }
    
    stage1=stage1.replaceAll('D D D D ','');
    stage1=stage1.replaceAll('D D D',"D'");
    stage1=stage1.replaceAll('U U','U2');
    stage1=stage1.replaceAll(' ','&nbsp;&nbsp;&nbsp;');
    stage2=stage2.replaceAll('MRFF MRFF MRFF MRFF ','');
    stage2=stage2.replaceAll('MRFF MRFF MRFF','MLFF');
    stage2=stage2.replaceAll('MRFF MRFF','MRFF2');
    stage2=stage2.replaceAll('U U','U2');
    stage2=stage2.replaceAll('R R','R2');
    stage2=stage2.replaceAll(' ','&nbsp;&nbsp;&nbsp;');
    stage3=stage3.replaceAll("U D'",'MRFF');
    stage3=stage3.replaceAll("U U D' D'",'MRFF MRFF');
    stage3=stage3.replaceAll("U U U D' D' D'",'MRFF MRFF MRFF');
    stage3=stage3.replaceAll('MRFF MRFF MRFF MRFF ','');
    stage3=stage3.replaceAll('MRFF MRFF MRFF','MLFF');
    stage3=stage3.replaceAll('MRFF MRFF','MRFF2');
    stage3=stage3.replaceAll('MRFT MRFT','MRFT2');
    stage3=stage3.replaceAll('U U U U ','');
    stage3=stage3.replaceAll('U U U',"U'");
    stage3=stage3.replaceAll('U U','U2');
    stage3=stage3.replaceAll("U' U ",'');
    stage3=stage3.replaceAll("D' D' D' D' ",'');
    stage3=stage3.replaceAll("D' D' D'",'D');
    stage3=stage3.replaceAll("D' D'",'D2');
    stage3=stage3.replaceAll('F F','F2');
    stage3=stage3.replaceAll('R R','R2');
    stage3=stage3.replaceAll(' ','&nbsp;&nbsp;&nbsp;');

    if(stage1=='&nbsp;&nbsp;&nbsp;'||stage1==''){
        stage1='(Not Required)';
    }
    if(stage2=='&nbsp;&nbsp;&nbsp;'||stage2==''){
        stage2='(Not Required)';
    }
    if(stage3=='&nbsp;&nbsp;&nbsp;'||stage3==''){
        stage3='(Not Required)';
    }

    step1.innerHTML=stage1;
    step2.innerHTML=stage2;
    step3.innerHTML=stage3;
    
    solnBtn.style.display='block';
});

resetBtn.addEventListener('click',()=>{
    step1.innerHTML='';
    step2.innerHTML='';
    step3.innerHTML='';

    up=['Y','Y','Y','Y'];
    bottom=['W','W','W','W'];
    left=['G','G','G','G'];
    right=['B','B','B','B'];
    front=['O','O','O','O'];
    back=['R','R','R','R'];

    isBotBar=false;
    isTopBar=false;
    isTopAdj=false;
    isBotAdj=false;

    solnBtn.style.display='none';
    solved.innerHTML='Already Solved!!';
    solved.style.display='none';
});

