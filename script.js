const qrCodeInput=document.querySelector('.input');
const img=document.querySelector('.img');
const button=document.querySelector('.button');
const imgBox=document.querySelector('.pic')

button.addEventListener('click',()=>{
    if(qrCodeInput.value.length>0){
        img.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+qrCodeInput.value
    }
    else{
        qrCodeInput.classList.add('err')
        setTimeout(()=>{
            qrCodeInput.classList.remove('err')
        },1000)
    }
    
});
