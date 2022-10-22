// import state from "./state";

export function chengeQuestionNumber(state, payload) {
  //   console.log(payload[1]);
  let harcyPoxelupayman =
    payload == state.questions[state.questionNumber - 1].correctAnswerId;
  if (state.questionNumber % 5 == 0) {
    state.PrizeMoney = state.questions[state.questionNumber - 1].Price;
  }
  if (harcyPoxelupayman && state.questionNumber == 15) {
    state.verjinHarciArdyunq = true;
  }
  if (harcyPoxelupayman && state.questionNumber < 15) {
    state.questionNumber += 1;
  } else if (!harcyPoxelupayman) {
    state.GameOverPopup = true;
  }
}
export function fiftin(state) {
  state.fiftin = false;
}
export function closePopup(state) {
  state.GameOverPopup = false;
  state.questionNumber = 1;
  for (let i = 0; i < state.questions.length; i++) {
    // console.log(state.questions[i].Answers);
    let arr = state.questions[i].Answers;
    for (let j = 0; j < arr.length; j++) {
      arr[j].eliminated = false;
    }
  }
}
export function closeWinner() {
  state.verjinHarciArdyunq = false;
}
export function chengeEliminated(state, payload) {
  console.log(payload);
  payload.eliminated = true;
}
export function closeHall(state) {
  state.HelpHoll = false;
}
export function HelpHoll(state) {
  state.HelpHoll = true;
  state.helpHallDisable = false;
  // setTimeout(() => {
  //   state.helpHallDisable = false;
  // }, 1000);
}
export function chengeHelpTell(state) {
  console.log(12345);
  state.helperTell = true;
  state.Telephone = false;
  // console.log(state.helperTell);
}
export function TellFrend(state, payload) {
  state.helperTell = false;
  state.frendName = payload;
  state.openAnswer = true;
  // console.log(payload);
}
export function closeFrendAnswer(state) {
  state.openAnswer = false;
}
