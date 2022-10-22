export default function () {
  return {
    ...obj,
  };
}
let obj = {
  helperTell: false,
  PrizeMoney: null,
  grapicArr: [20, 40, 60, 90],
  GameOverPopup: false,
  fiftin: true,
  helpHallDisable: true,
  HelpHoll: false,
  Telephone: true,
  verjinHarciArdyunq: false,
  frendName: "",
  openAnswer: false,
  questionNumber: 1,
  frends: [
    {
      id: 1,
      name: "Աբո ձա",
      image: "./Abodza.jpeg",
    },
    {
      id: 2,
      name: "Քիմ Քարդաշյան",
      image: "./qim.jpeg",
    },
    {
      id: 3,
      name: "Գենեռալ Բաբուտյան",
      image: "./babutyan.jpeg",
    },
    {
      id: 4,
      name: "Ընկեր Պետրոսյան",
      image: "./petrosyan.jpg",
    },
    {
      id: 5,
      name: "Խադավիկ Գագո",
      image: "./gago.jpg",
    },
  ],
  questions: [
    {
      Id: 1,
      Price: 50,
      question: "Ո՞ր քաղաքն է ամենախիտ բնակեցվածը աշխարհում:",
      correctAnswerId: 1,
      Answers: [
        {
          answerId: Math.random(),
          answer: "Լոնդոն",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Նյու Յորք",
          eliminated: false,
        },
        {
          answerId: 1,
          answer: "Տոկիո",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Փարիզ",
          eliminated: false,
        },
      ],
    },
    {
      Id: 2,
      Price: 100,
      question: "Որտե՞ղ է մեծացել հայտնի արվեստագետ Միքելանջելոն:",
      correctAnswerId: 2,
      Answers: [
        {
          answerId: Math.random(),
          answer: "Փարիզ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Հռոմ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Վիենա",
          eliminated: false,
        },
        {
          answerId: 2,
          answer: "Ֆլորենցիա",
          eliminated: false,
        },
      ],
    },
    {
      Id: 3,
      Price: 200,
      question: "Հետևյալ ֆիլմերից ո՞րում չի նկարահանվել Լեոնարդո Դի Կապրիոն:",
      correctAnswerId: 3,
      Answers: [
        {
          answerId: Math.random(),
          answer: "Տիտանիկ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Ուոլ Սթրիթի գայլը",
          eliminated: false,
        },
        {
          answerId: 3,
          answer: "Ֆոկուս",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Բռնիր ինձ, թե կարող ես",
          eliminated: false,
        },
      ],
    },
    {
      Id: 4,
      Price: 300,
      question: "Ո՞ր պետությունով է հոսում Ամազոն գետը:",
      correctAnswerId: 4,
      Answers: [
        {
          answerId: 4,
          answer: "Բրազիլիա",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Արգենտինա",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Կոլուոմբիա",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Պերու",
          eliminated: false,
        },
      ],
    },
    {
      Id: 5,
      Price: 500,
      question: "Ո՞ր սպորտում է անհրաժեշտ հավաքել ամենաքիչ միավորները:",
      correctAnswerId: 5,
      Answers: [
        {
          answerId: Math.random(),
          answer: "Ջրային պոլո",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Բատմիտոն",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Բոուլինգ",
          eliminated: false,
        },
        {
          answerId: 5,
          answer: "Գոլֆ",
          eliminated: false,
        },
      ],
    },
    {
      Id: 6,
      Price: 1000,
      question: "Հունական դիցաբանության մեջ ո՞րն էր վերջին զգացմունքը:",
      correctAnswerId: 6,
      Answers: [
        {
          answerId: Math.random(),
          answer: "Սերը",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Քաոսը",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Քաջությունը",
          eliminated: false,
        },
        {
          answerId: 6,
          answer: "Հույսը",
          eliminated: false,
        },
      ],
    },
    {
      Id: 7,
      Price: 2000,
      question: "Քանի՞ սև կետ են ունենում նոր ծնված Դալմատին ցեղատեսակի շները:",
      correctAnswerId: 7,
      Answers: [
        {
          answerId: Math.random(),
          answer: "Տասը",
          eliminated: false,
        },
        {
          answerId: 7,
          answer: "Ոչ մի",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Հինգ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Քսան",
          eliminated: false,
        },
      ],
    },
    {
      Id: 8,
      Price: 4000,
      question: "Մարդու ուղեղը մոտավորապես քանի՞ տոկոսով է բաղկացած ջրից:",
      correctAnswerId: 8,
      Answers: [
        {
          answerId: Math.random(),
          answer: "40%",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "30%",
          eliminated: false,
        },
        {
          answerId: 8,
          answer: "80%",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "20%",
          eliminated: false,
        },
      ],
    },
    {
      Id: 9,
      Price: 8000,
      question: "Ի՞նչ արագությամբ են շարժվում մարդու նյարդային ազդակները:",
      correctAnswerId: 9,
      Answers: [
        {
          answerId: Math.random(),
          answer: "570 կմ/ժ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "170 կմ/ժ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "470 կմ/ժ",
          eliminated: false,
        },
        {
          answerId: 9,
          answer: "270 կմ/ժ",
          eliminated: false,
        },
      ],
    },
    {
      Id: 10,
      Price: 16000,
      question: "Սեփականության և ժառանգման իրավունք ունեն…",
      correctAnswerId: 10,
      Answers: [
        {
          answerId: Math.random(),
          answer: "Օլիգարխները",
          eliminated: false,
        },
        {
          answerId: 10,
          answer: "Բոլորը",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Պատգամավորները",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Հերոսները",
          eliminated: false,
        },
      ],
    },
    {
      Id: 11,
      Price: 32000,
      question: "Կարո՞ղ է արդյոք դատավորը լինել կուսակցության անդամ:",
      correctAnswerId: 11,
      Answers: [
        {
          answerId: Math.random(),
          answer: "Պարտադիր է",
          eliminated: false,
        },
        {
          answerId: 11,
          answer: "ոչ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "այո",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "ցանկալի է",
          eliminated: false,
        },
      ],
    },
    {
      Id: 12,
      Price: 64000,
      question: "Ո՞վ ունի այնպիսի մատնահետք, ինչպիսին քոնն է:",
      correctAnswerId: 12,
      Answers: [
        {
          answerId: Math.random(),
          answer: "Մայրդ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Հայրդ",
          eliminated: false,
        },
        {
          answerId: 12,
          answer: "Ոչ ոք",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Պապիկդ",
          eliminated: false,
        },
      ],
    },
    {
      Id: 13,
      Price: 125000,
      question: "Ի՞նչ է նշանակում «կարատե» բառը:",
      correctAnswerId: 13,
      Answers: [
        {
          answerId: Math.random(),
          answer: "Հաղթանակ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "ճկուն հարված",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "Վարպետ",
          eliminated: false,
        },
        {
          answerId: 13,
          answer: "դատարկ ձեռք",
          eliminated: false,
        },
      ],
    },
    {
      Id: 14,
      Price: 500000,
      question: "Ո՞ր թվականին սկսվեց Երկրորդ համաշխարհային պատերազմը։",
      correctAnswerId: 14,
      Answers: [
        {
          answerId: Math.random(),
          answer: "1938թ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "1941թ",
          eliminated: false,
        },
        {
          answerId: 14,
          answer: "1939թ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "1945թ",
          eliminated: false,
        },
      ],
    },
    {
      Id: 15,
      Price: 1000000,
      question: "Ո՞ր թվականին է թողարկվել առաջին սերնդի «iPhone» սմարտֆոնները:",
      correctAnswerId: 15,
      Answers: [
        {
          answerId: 15,
          answer: "2007թ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "2004թ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "2008թ",
          eliminated: false,
        },
        {
          answerId: Math.random(),
          answer: "2005թ",
          eliminated: false,
        },
      ],
    },
  ],
};
