import SimpleSchema from 'simpl-schema';

import Patientinfo from '/imports/api/patientinfo';

// Customise validation error messages
SimpleSchema.setDefaultMessages({
  messages: {
    en: {
      "IDnotUnique": "ID is already registered",
    },
  },
});

// Define the schema
export const formSchemas = {
  "Registration":
  new SimpleSchema({
    name: {
      type: String,
      regEx: /^\D+$/,
      label: "Name",
    },
    id: {
      type: SimpleSchema.Integer,
      index: 1,
    },
    gender: {
      type: String,
      allowedValues: ['male', 'female'],
    },
    birthday: {
      type: Date,
    },
    age: {
      type: SimpleSchema.Integer,
      min: 0,
    },
    district: {
      type: String,
    },
    address: {
      type: String,
    },
    zipcode: {
      type: String,
      regEx: /^[0-9]+$/,
    },
    contactNumber: {
      type: String,
      regEx: /^[0-9]+$/,
    },
    spokenLanguages: {
      type: Array,
    },
    'spokenLanguages.$': {
      type: String,
      allowedValues: ['Sambalpuri', 'Odia', 'English', 'Others'],
    },
    writtenLanguages: {
      type: Array,
    },
    'writtenLanguages.$': {
      type: String,
      allowedValues: ['Sambalpuri', 'Odia', 'English', 'Others'],
    },
    anyDrugAllergies: {
      type: String,
      allowedValues: ['Yes', 'No'],
    },
    drugAllergies: {
      type: String,
      optional: true,
    },
    pregnant: {
      type: String,
      allowedValues: ['Yes', 'No'],
    }
  }),

  "Patient Profiling":
  new SimpleSchema({
    Q1: {
      type: String,
      allowedValues: ['Yes', 'No'],   
      },
    Q2: {
      type: String,
      allowedValues: ['Within past 3 years', 'More than 3 years ago'],   
      },
    Q3: {
      type: Array,
    },
    'Q3.$': {
      type: String,
      allowedValues: ['Increased urination', 
                      'Increased thirst', 
                      'Weight loss', 
                      'Increased hunger',
                      'Increased tiredness',
                      'Blurred vision',
                      'Slow-healing wounds',
                      'Numbness/tingling in hands and/or feet',
                      'None of the above'
                    ],
    },
    Q4: {
      type: String,
      allowedValues: ['Regular (Interval of 6 months or less)', 'Occasionally (Interval of more than 6 months)','Seldom (last appointment was >1 year ago)','Not at all'],   
    },
    anyWesternMedicine: {
      type: Boolean,
      label: "Yes, Western medicine",
    },
    westernMedicine: {
      type: String,
    },
    anyTraditionalMedicine: {
      type: Boolean,
      label: "Yes, Traditional medicine",
    },
    traditionalMedicine: {
      type: String,
    },
    Q6: {
      type: String,
      allowedValues: ['0', '1-3','4-6','> or equal to 7'],   
    },
    hypQ1: {
      type: String,
      allowedValues: ['Yes', 'No'],   
      },
    hypQ2: {
      type: String,
      allowedValues: ['Within past 3 years', 'More than 3 years ago'],   
      },
    hypQ3: {
      type: String,
      allowedValues: ['Regular (Interval of 6 months or less)', 'Occasionally (Interval of more than 6 months)','Seldom (last appointment was >1 year ago)','Not at all'],   
    },
    hypAnyWesternMedicine: {
      type: Boolean,
      label: "Yes, Western medicine",
    },
    hypWesternMedicine: {
      type: String,
    },
    hypAnyTraditionalMedicine: {
      type: Boolean,
      label: "Yes, Traditional medicine",
    },
    hypTraditionalMedicine: {
      type: String,
    },
    hypQ5: {
      type: String,
      allowedValues: ['0', '1-3','4-6','> or equal to 7'],   
    },
    htQ1: {
      type: String,
      allowedValues: ['Yes', 'No'],   
      },
    htQ2: {
      type: String,
      allowedValues: ['Within past 3 years', 'More than 3 years ago'],   
      },
    htQ3: {
      type: String,
      allowedValues: ['Regular (Interval of 6 months or less)', 'Occasionally (Interval of more than 6 months)','Seldom (last appointment was >1 year ago)','Not at all'],   
    },
    htAnyWesternMedicine: {
      type: Boolean,
      label: "Yes, Western medicine",
    },
    htWesternMedicine: {
      type: String,
    },
    htAnyTraditionalMedicine: {
      type: Boolean,
      label: "Yes, Traditional medicine",
    },
    htTraditionalMedicine: {
      type: String,
    },
    htQ5: {
      type: String,
      allowedValues: ['0', '1-3','4-6','> or equal to 7'],   
    },
    TB1: {
      type: String,
      allowedValues: ['Yes','No'],
    },
    TB2: {
      type: String,
      allowedValues: ['Yes, the person was diagnosed with TB within the past 4 months', 
                      'Yes, the person was diagnosed with TB more than 4 months ago',
                      'No'],
    },
    TB3: {
      type: Array,
    },
    'TB3.$': {
      type: String,
      allowedValues: ['Cough that has lasted more than 2 weeks', 
                      'Coughing up blood', 
                      'Breathlessness', 
                      'Weight loss',
                      'Night sweats',
                      'Fever',
                      'Loss of appetite',
                      'None of the above'],
    },
    MH1: {
      type: String,
    },
    MH2: {
      type: String,
    },
    MH3: {
      type: String,
    },
    MH4: {
      type: String,
    },
    MH5: {
      type: String,
    },
    S1: {
      type: String,
      allowedValues: ['Yes','No'],
    },
    S2: {
      type: String,
    },
    S3: {
      type: String,
      allowedValues: ['Yes','No'],
    },
    S4: {
      type: String,
    },
    O1a: {
      type: String,
      allowedValues: ['Yes','No'],
    },
    O1b: {
      type: String,
    },
    O2a: {
      type: String,
      allowedValues: ['Yes','No'],
    },
    O2b: {
      type: String,
    },
    O3a: {
      type: String,
      allowedValues: ['Yes','No'],
    },
    O3b: {
      type: String,
    },
    O3c: {
      type: String,
    },
    cataract: {
      type: Boolean,
      label: "Cataract",
    },
    glaucoma: {
      type: Boolean,
      label: "Glaucoma",
    },
    diabeticRetinopathy: {
      type: Boolean,
      label: "Diabetic Retinopathy",
    },
    amd: {
      type: Boolean,
      label: "Age-related macular degeneration",
    },
    anyOtherOcularCond: {
      type: Boolean,
      label: "Others (please specify)",
    },
    otherOcularCond:{
      type: String,
    },
    O4: {
      type: String,
      allowedValues: ['Yes','No'],
    },
    O5a: {
      type: String,
      allowedValues: ['Normal','Good enough for my daily activities','Poor'],
    },
    O5b: {
      type: String,
      allowedValues: ['Yes','No'],
    },
    concerns: {
      type: Boolean,
      label: "Concerns about finances",
    },
    tooFar: {
      type: Boolean,
      label: "Too far away/difficult to get to the clinic/hospital",
    },
    previousAdvice: {
      type: Boolean,
      label: "Previously told by eye specialist that nothing can be done"
    },
    nothing: {
      type: Boolean,
      label: "Nothing can be done as it is part of ageing",
    },
    anyOtherReasons: {
      type: Boolean,
      label: "Others (please specify)",
    },
    otherReasons: {
      type: String,
    },
  }),

  "Height & weight":
  new SimpleSchema({
    height: {
      type: Number,
      min: 0.7,
      max: 2.8,
      label: "Height (m)",
    },
    weight: {
      type: Number,
      min: 5,
      max: 500,
      label: "Weight (kg)",
    },
    waist: {
      type: Number,
      label: "Waist circumference (cm)",
    },
    hip: {
      type: Number,
      label: "Hip circumference (cm)",
    },
  }),

  "CBG & Hb":
  new SimpleSchema({
    cbg: {
      type: SimpleSchema.Integer,
      min: 20,
      max: 400,
      label: "Capillary Blood Glucose (mg/dL)",
    },
    hb: {
      type: Number,
      min: 4,
      max: 40,
      label: "Hemoglobin (g/dL)"
    },
  }),

  "Phlebotomy": 
  new SimpleSchema({
    phleboCompleted: {
      type: Boolean,
      label: "Completed?"
    },
  }),

  "Pap Smear":
  new SimpleSchema({
    papCompleted: {
      type: Boolean,
      label: "Completed?"
    },
  }),

  "Breast Exam":
  new SimpleSchema({
    breastCompleted: {
      type: Boolean, 
      label: "Breast Screening Completed?"
    },
    abnormalities: {
      type: Boolean,
      label: "Any abnormalities noted (e.g. lumps, skin changes)?"
    },
    abDescribe: {
      type: String,
      label: "If yes to the previous question, please describe the abnormalities"
    },
    fnacCompleted: {
      type: Boolean, 
      label: "FNAC Completed?"
    },
    eduCompleted: {
      type: Boolean,
      label: "Breast Screening Education Completed?"
    }
  }),

  "Blood Pressure":
  new SimpleSchema({
    bp1Sys: {
      type: SimpleSchema.Integer,
      min: 50,
      max: 300,
      label: "1st Systolic blood pressure"
    },
    bp1Dia: {
      type: SimpleSchema.Integer,
      min: 20,
      max: 200,
      label: "1st Diastolic blood pressure"
    },
    bp2Sys: {
      type: SimpleSchema.Integer,
      min: 50,
      max: 300,
      label: "2nd Systolic blood pressure"
    },
    bp2Dia: {
      type: SimpleSchema.Integer,
      min: 20,
      max: 200,
      label: "2nd Diastolic blood pressure"
    },
    bp3Sys: {
      type: SimpleSchema.Integer,
      min: 50,
      max: 300,
      label: "3rd Systolic blood pressure"
    },
    bp3Dia: {
      type: SimpleSchema.Integer,
      min: 20,
      max: 200,
      label: "3rd Diastolic blood pressure"
    },
  }),

  "Doctors' Consult":
  new SimpleSchema({
    consCompleted: {
      type: Boolean,
      label: "Completed?"
    },
    refLetter: {
      type: Boolean,
      label: "Provided with referral letter?"
    },
  }),

  "Eye Screening":
  new SimpleSchema ({
    specs: {
      type: Boolean,
      label: "Does the participant use spectacles?"
    },
    rightWoGlass: {
      type: String,
      label: "Right eye without glasses"
    },
    leftWoGlass: {
      type: String,
      label: "Left eye without glasses"
    },
    rightWiGlass: {
      type: String,
      label: "Right eye with glasses"
    },
    leftWiGlass: {
      type: String,
      label: "Left eye with glasses"
    },
    rightNearVis: {
      type: String,
      label: "Right eye near vision"
    },
    leftNearVis: {
      type: String,
      label: "Left eye near vision"
    },
    lids: {
      type: String,
      label: "Lids"
    },
    conjunctiva: {
      type: String,
      label: "Conjunctiva"
    },
    cornea: {
      type: String,
      label: "Cornea"
    },
    antSeg: {
      type: String,
      label: "Anterior Segment"
    },
    iris: {
      type: String,
      label: "Iris"
    },
    pupil: {
      type: String,
      label: "Pupil"
    },
    lens: {
      type: String,
      label: "Lens"
    },
    ocuMvmt: {
      type: String,
      label: "Ocular Movements"
    },
    iop: {
      type: String,
      label: "IOP"
    },
    duct: {
      type: String,
      label: "Duct"
    },
    cdr: {
      type: String,
      label: "CDR"
    },
    macula: {
      type: String,
      label: "Macula"
    },
    retina: {
      type: String,
      label: "Retina"
    },
    diagnosis: {
      type: String,
      label: "Diagnosis"
    },
    advice: {
      type: String,
      label: "Advice"
    },
    nameDoc: {
      type: String,
      label: "Name of Doctor"
    },
  }),

  "Pre-Women's Education Quiz":
  new SimpleSchema ({
    S1: {
    type: String,
    allowedValues: ['1', '2', '3', '4', '5'],   
    },
    Q1: {
      type: String,
      allowedValues: ['Abdominal cramps', 'Acne', 'Headache', 'All of the above'],   
      },
    Q2: {
      type: String,
      allowedValues: ['Stress', 'Pregnancy', 'Weight loss', 'Abrasions'],   
      },
    Q3: {
      type: String,
      allowedValues: ['Menstruation is dirty', 'Menstruation happens every 28 days, on average', 'We should change our sanitary pads once every few days', 'We should clean the area from back to front'],   
      },
    Q4: {
      type: String,
      allowedValues: ['1st day of menses', '7-10 days after start of menses', '21 days after start of menses', '2 days before start of menses'],   
      },
    Q5: {
      type: String,
      allowedValues: ['Once a week', 'Once a month', 'Once a year', 'Once in 2 years'],   
      },
    Q6: {
      type: String,
      allowedValues: ['A lump that can be seen/felt in the breast or underarm', 'Nipple that is pushed inwards', 'Dimpling of skin over the breast', 'Ulceration of skin over the breast','All of the above'],   
      },
  }),

  "Post-Women's Education Quiz":
  new SimpleSchema ({
    S1: {
    type: String,
    allowedValues: ['1', '2', '3', '4', '5'],   
    },
    Q1: {
      type: String,
      allowedValues: ['Abdominal cramps', 'Acne', 'Headache', 'All of the above'],   
      },
    Q2: {
      type: String,
      allowedValues: ['Stress', 'Pregnancy', 'Weight loss', 'Abrasions'],   
      },
    Q3: {
      type: String,
      allowedValues: ['Menstruation is dirty', 'Menstruation happens every 28 days, on average', 'We should change our sanitary pads once every few days', 'We should clean the area from back to front'],   
      },
    Q4: {
      type: String,
      allowedValues: ['1st day of menses', '7-10 days after start of menses', '21 days after start of menses', '2 days before start of menses'],   
      },
    Q5: {
      type: String,
      allowedValues: ['Once a week', 'Once a month', 'Once a year', 'Once in 2 years'],   
      },
    Q6: {
      type: String,
      allowedValues: ['A lump that can be seen/felt in the breast or underarm', 'Nipple that is pushed inwards', 'Dimpling of skin over the breast', 'Ulceration of skin over the breast','All of the above'],   
      },
  }),
  
  "Pre-Education Survey":
  new SimpleSchema ({
    S1: {
    type: String,
    allowedValues: ['1', '2', '3', '4', '5'],   
    },
    S2: {
      type: String,
      allowedValues: ['1', '2', '3', '4', '5'],   
      },
    S3: {
      type: String,
      allowedValues: ['1', '2', '3', '4', '5'],    
      },
    S4: {
      type: String,
      allowedValues: ['1', '2', '3', '4', '5'],   
      },
  }),

  "Pre-Education Quiz":
  new SimpleSchema ({
    Q1: {
    type: String,
    allowedValues: ['Do not exercise', 'Have diabetes', 'Smoke', 'All of the above'],   
    },
    Q2: {
      type: String,
      allowedValues: ['Blindness', 'Amputation', 'Craving sweet food', 'Kidney failure'],   
      },
    Q3: {
      type: String,
      allowedValues: ['60 mins', '90 mins', '120 mins', '150 mins'],    
      },
    Q4: {
      type: String,
      allowedValues: ['1/2 rice, 1/4 fruits and vegetables, 1/4 protein', '2/5 rice, 1/5 vegetables, 1/5 fruits, 1/5 protein', '1/3 rice, 1/3 vegetables, 1/3 protein', '1/2 fruits and vegetables, 1/4 rice, 1/4 protein'],   
      },
    Q5: {
      type: String,
      allowedValues: ['Daal', 'Mattar Paneer', 'Chole Bhattura', 'Butter Paneer'],   
      },
    Q6: {
      type: String,
      allowedValues: ['Tobacco', 'Alcohol', 'Pesticides', 'All of the above'],   
      },
    Q7: {
      type: String,
      allowedValues: ['Get comprehensive eye exams regularly', 'Use a computer for 2h to finish my work', 'Read under sufficiently bright light', 'Wear sunglasses and caps when outdoors to protect eyes from UV rays'],   
      },
  }),

  "Post-Education Survey":
  new SimpleSchema ({
    S1: {
    type: String,
    allowedValues: ['1', '2', '3', '4', '5'],   
    },
    S2: {
      type: String,
      allowedValues: ['1', '2', '3', '4', '5'],   
      },
    S3: {
      type: String,
      allowedValues: ['1', '2', '3', '4', '5'],    
      },
    S4: {
      type: String,
      allowedValues: ['1', '2', '3', '4', '5'],   
      },
  }),

  "Post-Education Quiz":
  new SimpleSchema ({
    Q1: {
    type: String,
    allowedValues: ['Do not exercise', 'Have diabetes', 'Smoke', 'All of the above'],   
    },
    Q2: {
      type: String,
      allowedValues: ['Blindness', 'Amputation', 'Craving sweet food', 'Kidney failure'],   
      },
    Q3: {
      type: String,
      allowedValues: ['60 mins', '90 mins', '120 mins', '150 mins'],    
      },
    Q4: {
      type: String,
      allowedValues: ['1/2 rice, 1/4 fruits and vegetables, 1/4 protein', '2/5 rice, 1/5 vegetables, 1/5 fruits, 1/5 protein', '1/3 rice, 1/3 vegetables, 1/3 protein', '1/2 fruits and vegetables, 1/4 rice, 1/4 protein'],   
      },
    Q5: {
      type: String,
      allowedValues: ['Daal', 'Mattar Paneer', 'Chole Bhattura', 'Butter Paneer'],   
      },
    Q6: {
      type: String,
      allowedValues: ['Tobacco', 'Alcohol', 'Pesticides', 'All of the above'],   
      },
    Q7: {
      type: String,
      allowedValues: ['Get comprehensive eye exams regularly', 'Use a computer for 2h to finish my work', 'Read under sufficiently bright light', 'Wear sunglasses and caps when outdoors to protect eyes from UV rays'],   
      },
  }),

  "Post-Screening Feedback":
  new SimpleSchema ({
    Q1: {
    type: String,
    allowedValues: ['Strongly agree', 'Agree', 'Smoke', 'All of the above'],   
    },
    Q2: {
      type: String,
      allowedValues: ['Blindness', 'Amputation', 'Craving sweet food', 'Kidney failure'],   
      },
    Q3: {
      type: String,
      allowedValues: ['60 mins', '90 mins', '120 mins', '150 mins'],    
      },
    Q4: {
      type: String,
      allowedValues: ['1/2 rice, 1/4 fruits and vegetables, 1/4 protein', '2/5 rice, 1/5 vegetables, 1/5 fruits, 1/5 protein', '1/3 rice, 1/3 vegetables, 1/3 protein', '1/2 fruits and vegetables, 1/4 rice, 1/4 protein'],   
      },
    Q5: {
      type: String,
      allowedValues: ['Daal', 'Mattar Paneer', 'Chole Bhattura', 'Butter Paneer'],   
      },
    Q6: {
      type: String,
      allowedValues: ['Tobacco', 'Alcohol', 'Pesticides', 'All of the above'],   
      },
    Q7: {
      type: String,
      allowedValues: ['Get comprehensive eye exams regularly', 'Use a computer for 2h to finish my work', 'Read under sufficiently bright light', 'Wear sunglasses and caps when outdoors to protect eyes from UV rays'],   
      },
  }),
}