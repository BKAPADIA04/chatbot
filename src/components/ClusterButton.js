// const articles = {
//     "users": [
//             {
//                 "id": 1,
//                 "doctor": "Orthopedic",
//                 "pain_part": ["Bone","Muscle_Ligaments"]
//             },
//             {
//                 "id": 2,
//                 "doctor": "Neuro",
//                 "pain_part": ["Brain"]
//             }
//         ]
//     }
// import React from 'react'

// const pain_part = ["Bone","Muscle_Ligaments"];

import React from "react";
import Button from "./Button";

export default function ClusterButton() {
  // const pain_part = ["Bone","Muscle_Ligaments","Benc"];
  const articles = {
    users: [
      {
        id: 1,
        doctor: "Orthopedic",
        pain_part: ["Bone", "Muscle_Ligaments"],
      },
      {
        id: 2,
        doctor: "Neuro",
        pain_part: ["Brain"],
      },
    ],
  };

  const ortho_bones = {
    intensity_pain: {
      questions: ["Pain At Rest", "Localized", "Persistent"],
      index: 0,
    },
    duration_pain: {
      questions: ["Acute", "Chronic"],
      index: 1,
    },
    swelling: {
      questions: ["Mild", "Moderate", "Severe"],
      index: 2,
    },
    joint_stiffness: {
      questions: ["Mild", "Moderate", "Severe"],
      index: 3,
    },
    medical_history: {
      questions: ["No", "Yes"],
      index: 4,
    },
    age: {
      questions: ["10", "20", "30"],
      index: 5,
    },
  };

  // const allQuestions = [];

  // Iterate through the ortho_bones object and concatenate questions
  // To dispkay all questions
  // for (const key in ortho_bones) {
  //     if (ortho_bones.hasOwnProperty(key)) {
  //         const questions = ortho_bones[key].questions;
  //         allQuestions.push(...questions);
  //     }
  // }

  // console.log(allQuestions);
  //In this code, the allQuestions array will contain all the questions from the ortho_bones object. The for...in loop is used to iterate through the ortho_bones object, and the questions from each symptom are concatenated into the allQuestions array using the spread operator (...). Finally, the console.log(allQuestions) statement will display all the questions in one go.

  // const pain_part = ["Bone","Muscle_Ligaments","Benc"];
  // Here Current index - 1 gives the severity order of -1,0,1

//   let count = Object.keys(ortho_bones).length;
// //   console.log(count);

//   for(let i=0;i<count;i++)
//   {

//   }

  const search = "medical_history";

  const pain_part_question = ortho_bones.swelling.questions; //Can be optimized using integral addresses
  const pain_part_question_dummy = ortho_bones[search].questions;

  return (
    <div className="container">
      {pain_part_question_dummy.map((element, index) => {
        return (
          <div className="col-md-4 my-2" key={index}>
            <Button subject={element} />
          </div>
        );
      })}
    </div>
  );
}
