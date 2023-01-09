

const WorkExperience = 
["6+ Years of Front End Engineering, Former Amazonian, and Top Rated Educator / Mentor", "Building sideprojects and bootstrapped businesses since '18", "SWE @Microsoft | Top Mentor @Mentorcruise | ex P.M. @GetBuzz & ex Demonstrator @Edinburgh University",
"Organic and Paid Growth Expert with 10+ years of Agency experience", "8+ years of data engineering experience. Many more years in figuring out what problems excite me the most!",
"Growing through experience", "I like to see how Google dances", "8 years and counting of reporting, business intelligence and data analysis",
"Experienced Founder & Business Coach", "Strong track record of landing mentees awesome UX jobs"
];

const Aboutyou = 
[
"Business Intelligence Developer","Technical SEO - CRO at nestorvazquez.com",
"Sr Software Engineer at Netflix", "Senior Solutions Architect at dbt Labs",
"Head of Digital Marketing at Digital Ethos", "Software Engineer at Microsoft",
"Founder at MentorCruise", "Senior Front End Engineer at ClickUp", "Founding Partner at We Scale Startups"
]


exports.defalteAboutyou = () => {
    return Aboutyou[Math.floor(Math.random() * Aboutyou.length)]
};

exports.defalteWorkExperience = () => {
    return WorkExperience[Math.floor(Math.random() * WorkExperience.length)]
};