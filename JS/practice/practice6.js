// function checkTruthyValue(value) {
//     if (value) {
//         console.log("truthy")
//     } else {
//         console.log("falsy")

//     }

// }

// checkTruthyValue(1)
// checkTruthyValue(0)
// checkTruthyValue("hitesh")
// checkTruthyValue("")
// checkTruthyValue([])
// checkTruthyValue([1,2,3])
// checkTruthyValue({})
// checkTruthyValue({number:2})

let userActivity = [
    { user: "Alice", activity: 45 },
    { user: "Bob", activity: 72 },
    { user: "Charlie", activity: 33 }
]

let mostActive = userActivity.reduce((maxUser,user) => {

   return maxUser.activity > user.activity ? maxUser : user
})
// console.log(mostActive)

let movieRating = [
    { title: "Movie A", rating: [2,4,5] },
    { title: "Movie B", rating: [3,4,5] },
    { title: "Movie C", rating: [4,4,3] }
]

let averageMovieRating = movieRating.map((movie)=>{
    let total = movie.rating.reduce((sum,rating)=>sum+rating,0)
    let average = total/movie.rating.length
  
    
    return {title:movie.title,rating:average.toFixed(2)}
})

console.log(averageMovieRating)