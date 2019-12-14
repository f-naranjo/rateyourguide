// function createSessions(initialDate, weeks, numberOfGuides) {
//   let dateTransform = initialDate.split("-")
//   let sessions = new Array(numberOfGuides).fill([]).map((guideSessions, idx) => {
//     let dateInit = new Date(Date.UTC(+dateTransform[0], +dateTransform[1] - 1, +dateTransform[2] - 1, +dateTransform[3], +dateTransform[4]))
//     return new Array(weeks).fill("").map((week, idx) => {
//       let dataTo = new Date(dateInit.setDate(dateInit.getDate() + 7))
//       return {
//         date: dataTo,
//         status: "pending",
//         avaliability: "Empty"
//       }
//     })
//   })
//   return sessions
// }

// function createSessions2(initialDate, weeks) {
//   let dateTransform = initialDate.split("-")
//   let dateInit = new Date(Date.UTC(+dateTransform[0], +dateTransform[1] - 1, +dateTransform[2] - 1, +dateTransform[3], +dateTransform[4]))

//   let sessions = new Array(weeks).fill("").map((week, idx) => {
//     let dataTo = new Date(dateInit.setDate(dateInit.getDate() + 7))
//     return {
//       date: dataTo,
//       status: "pending",
//       avaliability: "Empty"
//     }
//   })

//   return sessions
// }


// console.log(createSessions2("2019-08-04-10-00", 10))

// Date.prototype.setHours = function(h) { 
//   this.setTime(h * 60 * 60 * 1000); 
//   return this; 
// } 

// let date = new Date()
// let now = new Date(new Date().setUTCHours(23,59,00))
// let date2 = new Date(2018,05,16,20,15)
// console.log(date2)
// console.log(now)

let dateInit= new Date(Date.UTC(2019,11,13,23,50))
let dataTo = new Date(dateInit.setDate(dateInit.getDate() + 7))
console.log(dataTo)