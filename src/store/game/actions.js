export function help(context) {
  let arr = context.state.questions[context.state.questionNumber - 1].Answers;
  let hertakanPatasxaniId =
    context.state.questions[context.state.questionNumber - 1].correctAnswerId;
  console.log(arr);
  let count = Math.random() * 10;
  //   let count = 9;
  console.log(Math.round(count));
  count = Math.round(count);
  let rightcount = 0;
  //   if (count > 5) {
  //     count -= 6;
  //   } else if (count == 0) {
  //     count = 0;
  //   } else if (count == 5) {
  //     count -= 2;
  //   } else if (count == 10) {
  //     count -= 7;
  //   } else {
  //     count -= 1;
  //   }
  if (count < 9) {
    count = Math.floor(count / 3);
  } else {
    count -= 2;
    count = Math.floor(count / 3);
  }
  console.log(count);
  for (let i = 0; i < arr.length; i++) {
    if (hertakanPatasxaniId == arr[i].answerId) {
      if (i == 3) {
        count - 2;
      } else if (i == 0) {
        count + 1;
      } else {
        count++;
      }
    }
    if (hertakanPatasxaniId != arr[i].answerId && i !== count) {
      context.commit("chengeEliminated", arr[i]);
    }
  }
}
// export function helpTell(context) {
//   let patasxan = "";
//   let hertakanHarc = context.state.questionNumber - 1;
//   let count = Math.random() * 10;
//   let state = context.state.questions[hertakanHarc].Answers;
//   count = Math.round(count);
//   console.log(count);
//   let patasxaniId = context.state.questions[hertakanHarc].correctAnswerId;
//   console.log(hertakanHarc, patasxaniId);
//   //   console.log(state);
//   for (let i = 0; i < state.length; i++) {

//   }
// }
