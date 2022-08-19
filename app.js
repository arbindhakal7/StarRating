const allStars = document.querySelectorAll('.star');
let current_star_level = document.querySelector('.current_rating')

allStars.forEach((star, i) =>{
    star.onclick = function(){
        let current_star_rating = i + 1
        current_star_level.innerText = `${current_star_rating} out of 5`

        allStars.forEach((star, j)=>{
            if(current_star_rating >= j+1){
                star.innerHTML = '&#9733'
            }
            else{
                star.innerHTML = '&#9734'
            }
        })
    }
})