function createSessions(initialDate, weeks, numberOfGuides) {
  let dateTransform = initialDate.split("-")
  let sessions = new Array(numberOfGuides).fill([]).map((guideSessions, idx) => {
    let dateInit = new Date(Date.UTC(+dateTransform[0], +dateTransform[1] - 1, +dateTransform[2] - 1, +dateTransform[3], +dateTransform[4]))
    return new Array(weeks).fill("").map((week, idx) => {
      let dataTo = new Date(dateInit.setDate(dateInit.getDate() + 7))
      return {
        date: dataTo,
        status: "pending",
        avaliability: "Empty"
      }
    })
  })
  return sessions
}

function createSessions2(initialDate, weeks) {
  let dateTransform = initialDate.split("-")
  let dateInit = new Date(Date.UTC(+dateTransform[0], +dateTransform[1] - 1, +dateTransform[2] - 1, +dateTransform[3], +dateTransform[4]))

  let sessions = new Array(weeks).fill("").map((week, idx) => {
    let dataTo = new Date(dateInit.setDate(dateInit.getDate() + 7))
    return {
      date: dataTo,
      status: "pending",
      avaliability: "Empty"
    }
  })

  return sessions
}


console.log(createSessions2("2019-08-04-10-00", 10))


