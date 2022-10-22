export function curentQuestion(state) {
  return state.questions[state.questionNumber - 1];
}
export function OnlyAnswers(state, getters) {
  let AnswersArr = [];
  let arr = getters.curentQuestion.Answers;
  arr.forEach((el) => {
    AnswersArr.push(el.answer);
  });
  return AnswersArr;
}
export function HelpTell(state) {
  return state.helperTell;
}
export function GameOverPopup(state) {
  return state.GameOverPopup;
}
export function TellRightAnswer(state, getters) {
  let count = Math.floor(Math.random() * 10);
  if (count <= 7) {
    let rightAnswer = getters.curentQuestion.Answers.filter(
      (el) => el.answerId === getters.curentQuestion.correctAnswerId
    );
    return rightAnswer[0].answer;
  } else {
    let rightAnswer = getters.curentQuestion.Answers.filter(
      (el) =>
        el.answerId !== getters.curentQuestion.correctAnswerId &&
        el.eliminated === false
    );
    return rightAnswer[0].answer;
  }
}
export function graficpoints(state, getters) {
  let arr = [];
  let HelpHoll = getters.HelpHoll;
  let count = HelpHoll.count;
  let rightAnswer = HelpHoll.rightAnswer;
  if (count >= 5) {
    count = count * 10;
  } else if (count >= 2) count = (count + 4) * 10;
  else if (count < 2) count = (count + 6) * 10;
  let answersArr = getters.curentQuestion.Answers;

  for (let i = 0; i < answersArr.length; i++) {
    console.log(getters.curentQuestion.Answers[i].eliminated);
    if (
      answersArr[i].answer === rightAnswer &&
      getters.curentQuestion.Answers[i].eliminated === false
    ) {
      arr.push(count);
    } else if (
      answersArr[i].answer !== rightAnswer &&
      getters.curentQuestion.Answers[i].eliminated === false
    ) {
      arr.push(count - 40);
    } else {
      arr.push(0);
    }
  }
  console.log(count);
  return arr;
}
export function HelpHoll(state, getters) {
  let count = Math.floor(Math.random() * 10);
  console.log(count, 345);
  if (count <= 7) {
    let rightAnswer = getters.curentQuestion.Answers.filter(
      (el) => el.answerId === getters.curentQuestion.correctAnswerId
    );
    return {
      rightAnswer: rightAnswer[0].answer,
      count: count,
    };
  } else {
    let rightAnswer = getters.curentQuestion.Answers.filter(
      (el) =>
        el.answerId !== getters.curentQuestion.correctAnswerId &&
        el.eliminated === false
    );
    return {
      rightAnswer: rightAnswer[0].answer,
      count: count,
    };
  }
}
export function openAnswer(state) {
  return state.openAnswer;
}
export function frendName(state) {
  return state.frendName;
}
