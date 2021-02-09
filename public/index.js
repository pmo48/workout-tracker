init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

// function calculateTotalDuration(data) {
//   let totalsD = [];

//   data.forEach((workout) => {
//     const workoutTotal = workout.duration.reduce((total, { duration }) => {

//         return total + duration;
    
//     }, 0);

//     totalsD.push(workoutTotal);
//   });