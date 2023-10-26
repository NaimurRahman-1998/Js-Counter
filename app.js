let count = 0;

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

// console.log(btns);

btns.forEach((btn)=>{
    console.log(btn)
    btn.addEventListener('click' , (e)=>{
        const styles = e.currentTarget.classList
        console.log(styles);
        if(styles.contains("decrease")){
            count--
        }else if (styles.contains("increase")){
            count++
        }else{ count = 0 } 

        value.textContent = count

        if(count > 0){ value.style.color = "green"}
        else if(count < 0){ value.style.color = "red"}
    })
    
})