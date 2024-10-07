//1.store range input in variable

let scroll__show=document.getElementById('scroll__show');


//2.function which has switch case to chnage image
function fun(value){

    //old code with switch method
    // switch(value){
    //         case '1':
    //         document.body.style.backgroundImage='url(images/1.webp)';
    //         break;

    //         case '2':
    //         document.body.style.backgroundImage='url(images/2.webp)';
    //         break;

    //         case '3':
    //         document.body.style.backgroundImage='url(images/3.webp)';
    //         break;

    //         case '4':
    //         document.body.style.backgroundImage='url(images/4.webp)';
    //         break;
            
    //         case '5':
    //         document.body.style.backgroundImage='url(images/5.webp)';
    //         break;

    //         case '6':
    //         document.body.style.backgroundImage='url(images/6.webp)';
    //         break;

    //         case '7':
    //         document.body.style.backgroundImage='url(images/7.webp)';
    //         break;

    //         case '8':
    //         document.body.style.backgroundImage='url(images/8.webp)';
    //         break;
            
    //         case '9':
    //         document.body.style.backgroundImage='url(images/9.webp)';
    //         break;

    //         case '10':
    //         document.body.style.backgroundImage='url(images/10.webp)';
    //         break;

    //         case '11':
    //         document.body.style.backgroundImage='url(images/11.webp)';
    //         break;

    //         case '12':
    //         document.body.style.backgroundImage='url(images/12.webp)';
    //         break;

    //         case '13':
    //         document.body.style.backgroundImage='url(images/13.webp)';
    //         break;

    //         case '14':
    //         document.body.style.backgroundImage='url(images/14.webp)';
    //         break;

    //         case '15':
    //             document.body.style.backgroundImage='url(images/15.webp)';
    //             break;

    //             case '16':
    //                 document.body.style.backgroundImage='url(images/16.webp)';
    //                 break;

    //                 case '17':
    //                     document.body.style.backgroundImage='url(images/17.webp)';
    //                     break;

    //                     case '18':
    //                         document.body.style.backgroundImage='url(images/18.webp)';
    //                         break;

    //                         case '19':
    //                             document.body.style.backgroundImage='url(images/19.webp)';
    //                             break;

    //                             case '20':
    //                                 document.body.style.backgroundImage='url(images/20.webp)';
    //                                 break;

    //                                 case '21':
    //                                     document.body.style.backgroundImage='url(images/21.webp)';
    //                                     break;

    //                                     case '22':
    //                                         document.body.style.backgroundImage='url(images/22.webp)';
    //                                         break;

    //         default:
    //             document.body.style.backgroundColor='purple';
    // }

    const imageBasePath = 'images/';
    const imageExtension = '.webp';
    if (value >= 1 && value <= 22) {
        document.body.style.backgroundImage = `url(${imageBasePath}${value}${imageExtension})`;
    } else {
        document.body.style.backgroundColor = 'purple';
    }
      
}

//3.on load show 1st image
fun(scroll__show.value);


//4.add eventlistener
scroll__show.addEventListener('input',()=>{
    fun(scroll__show.value); 
})
