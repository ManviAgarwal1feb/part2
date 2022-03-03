Webcam.set({
    height:300,
    width:350,
    image_format:"png",
png_quality:"100"
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("results").innerHTML='<img id="take_snap" src="'+data_uri+'">';
    });
}

console.log(ml5.version);
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/s4jU1zas7f/model.json",model_loaded);

 function model_loaded(){
     console.log("Hey!!!!!!");
 }
var prediction_1="";

 function speak(){
     var synth=window.speechSynthesis;
     data_1="The prediction is"+prediction_1;
var utter_this=new SpeechSynthesisUtterance(data_1);
synth.speak(utter_this);
 }