const allStars = document.querySelectorAll('.star');
allStars.forEach((star, i) =>{
    star.onclick = function(){
        let current_star_rating = i + 1

        allStars.forEach((star, j)=>{
            if(current_star_rating >= j+1){
                
            }
        })
    }
})