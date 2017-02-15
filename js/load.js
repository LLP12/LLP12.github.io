/**
 * Created by LILINPING on 2017/2/13.
 */
    var img=document.querySelector('.play');
    var audio=document.createElement('audio');
    audio.src='img/1.mp3';
    audio.autoplay=true;
    document.body.appendChild(audio);
    img.onclick=function () {
    if(audio.paused){
        audio.play();
        img.style.animationPlayState='running';
        img.style.webkitAnimationPlayState='running';

    }else {
        audio.pause();
        img.style.animationPlayState='paused';
        img.style.webkitAnimationPlayState='paused';
    }
};

//   var content=document.querySelector('.content');
//   var page=document.querySelector('.page');
//   var current=document.querySelector('.page-current');
//   var hide=document.querySelector('.hide');
//   var wrap=document.querySelector('.wrap');
//   var hide1=document.querySelector('.hide1');
//   document.querySelector('.img_3').addEventListener('click',function () {
//     current.style.top='-100%';
//     hide.style.top='0';
//     page.style.opacity='relative';
//     current.style.display='none';
//     hide.style.display='block';
//   });
//   document.querySelector('.img_4').addEventListener('click',function () {
//       hide.style.top='-100%';
//       hide1.style.top='0';
//       page.style.opacity='relative';
//       hide.style.display='none';
//       hide1.style.display='block';
//   });
//  var hide2=document.querySelector('.hide2');
//   document.querySelector('.img_5').addEventListener('click',function () {
//       hide1.style.top='-100%';
//       hide2.style.top='0';
//       page.style.opacity='relative';
//       hide1.style.display='none';
//       hide2.style.display='block';
//   });
// var hide3=document.querySelector('.hide3');
// document.querySelector('.img_6').addEventListener('click',function () {
//     hide2.style.top='-100%';
//     hide3.style.top='0';
//     page.style.opacity='relative';
//     hide2.style.display='none';
//     hide3.style.display='block';
// });
// var hide4=document.querySelector('.hide4');
// document.querySelector('.img_7').addEventListener('click',function () {
//     hide3.style.top='-100%';
//     hide4.style.top='0';
//     page.style.opacity='relative';
//     hide3.style.display='none';
//     hide4.style.display='block';
// });
// var hide5=document.querySelector('.hide5');
// document.querySelector('.img_8').addEventListener('click',function () {
//     hide4.style.top='-100%';
//     hide5.style.top='0';
//     page.style.opacity='relative';
//     hide4.style.display='none';
//     hide5.style.display='block';
// });
// var hide6=document.querySelector('.hide6');
// document.querySelector('.img_9').addEventListener('click',function () {
//     hide5.style.top='-100%';
//     hide6.style.top='0';
//     page.style.opacity='relative';
//     hide5.style.display='none';
//     hide6.style.display='block';
// });
// var hide7=document.querySelector('.hide7');
// document.querySelector('.img_10').addEventListener('click',function () {
//     hide6.style.top='-100%';
//     hide7.style.top='0';
//     page.style.opacity='relative';
//     hide6.style.display='none';
//     hide7.style.display='block';
// });
// var hide8=document.querySelector('.hide8');
// document.querySelector('.img_11').addEventListener('click',function () {
//     hide7.style.top='-100%';
//     hide8.style.top='0';
//     page.style.opacity='relative';
//     hide7.style.display='none';
//     hide8.style.display='block';
// });


