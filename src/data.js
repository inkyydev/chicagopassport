import chinaImg from "./assets/china-img.png";
import ghanaImg from "./assets/ghana-img.png";
import brazilImg from "./assets/brazil-img.png";
import ukImg from "./assets/uk-img.png";
import nigeriaImg from "./assets/nigeria-img.png";
import russiaImg from "./assets/russia-img.png";

import indiaImg from "./assets/india-img.png";
import vietnamImg from "./assets/vietnam-img.png";
import kenyaImg from "./assets/kenya-img.png";
import cambodiaImg from "./assets/cambodia-img.png";

export const visas = [
  {
    id: 1,
    slug: "china",
    country: "China Visa",
    image: chinaImg,
    hero_title: "We Offer Visas for China",
    hero_description:
      "Browse through each country to learn the various visa requirements and document types.",
    requirements: [
      {
        section_title: "Valid US Passport",
        content:
          "Your passport must be signed and valid for at least 6 months beyond your intended stay in China. It must have at least one blank visa page.",
      },
      {
        section_title: "China Visa Application",
        content:
          "Submit a completed visa application form. Forms must be typed and printed. Handwritten applications are not accepted.",
        cta_button: {
          text: "Apply Online",
          link: "/apply",
        },
      },
      {
        section_title: "Visa Photos",
        content: {
          text: "One color photo that meets the following strict criteria:",
          list: [
            "Taken within the last six months.",
            "Against an all-white background.",
            "Printed on high-quality photo paper.",
            "Exactly 48 mm tall x 33 mm wide.",
          ],
        },
      },
      {
        section_title: "Work / Teacher (Z) Visa",
        content:
          "Provide a letter of invitation from your employer or educational institution in China, including details of your role and duration of stay.",
      },
      {
        section_title: "Proof of State Residency",
        content:
          "A copy of your driver’s license or utility bill showing your current address that matches your visa application.",
      },
      {
        section_title: "Previous Visa",
        content:
          "If you’ve previously traveled to China, please include a copy of your previous visa and any entry/exit stamps.",
      },
      {
        section_title: "Visa Requirement for Children Under 18",
        content:
          "A letter of consent signed by both parents along with copies of birth certificates and parents’ IDs.",
      },
      {
        section_title: "Visa Requirement for Chinese Origin",
        content:
          "Applicants of Chinese descent who have obtained U.S. citizenship must include a copy of their previous Chinese passport.",
      },
      {
        section_title: "Travel Itinerary",
        content:
          "Provide a copy of your flight reservation showing travel dates and destinations.",
      },
      {
        section_title: "Consulate Fee / Payment Method",
        content:
          "Regular processing is between 5–7 business days. Rush and same-day service are available for additional fees.",
      },
      {
        section_title: "Service Order Form",
        content:
          "Fill out and include the completed service order form with your visa application.",
        cta_button: {
          text: "Service Order Form",
          link: "/order-form",
        },
      },
    ],
  },
  {
    id: 2,
    slug: "ghana",
    country: "Ghana Visa",
    image: ghanaImg,
    hero_title: "We Offer Visas for Ghana",
    hero_description:
      "Browse through each country to learn the various visa requirements and document types.",
    requirements: [],
  },
  {
    id: 3,
    slug: "brazil",
    country: "Brazil Visa",
    image: brazilImg,
    hero_title: "We Offer Visas for Brazil",
    hero_description:
      "Browse through each country to learn the various visa requirements and document types.",
    requirements: [],
  },
  {
    id: 4,
    slug: "uk",
    country: "UK Visa",
    image: ukImg,
    hero_title: "We Offer Visas for the UK",
    hero_description:
      "Browse through each country to learn the various visa requirements and document types.",
    requirements: [],
  },
  {
    id: 5,
    slug: "nigeria",
    country: "Nigeria Visa",
    image: nigeriaImg,
    hero_title: "We Offer Visas for Nigeria",
    hero_description:
      "Browse through each country to learn the various visa requirements and document types.",
    requirements: [],
  },
  {
    id: 6,
    slug: "russia",
    country: "Russia Visa",
    image: russiaImg,
    hero_title: "We Offer Visas for Russia",
    hero_description:
      "Browse through each country to learn the various visa requirements and document types.",
    requirements: [],
  },
];

export const evisas = [
  {
    id: 1,
    slug: "vietnam-evisa",
    country: "Vietnam eVisa",
    hero_title: "Vietnam eVisa",
    hero_description:
      "Using eVisa Now technology, Vietnam eVisa applicants can apply for electronic visas right from the comfort of their own home. Complete the Vietnam eVisa form and upload any required documentation for the application easily online. Once the application is complete, give us a call to confirm your application or wait for us to contact you to verify and process payment. After completing payment, our team will process your online application and email your Vietnam eVisa to you. If you need help completing the form, our professionals are here to help. Give us a call or visit our office for more information.",
    hero_image: vietnamImg,
    application_form: {
      title: "Vietnam eVisa Application",
      fields: [
        {
          name: "full_name",
          label: "Full Name",
          type: "text",
          required: true,
          fullWidth: true,
        },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "phone", label: "Phone", type: "text", required: true },
        {
          name: "passport_number",
          label: "Passport Number",
          type: "text",
          required: true,
        },
        {
          name: "date_of_birth",
          label: "Date of Birth",
          type: "date",
          required: true,
        },

        {
          name: "sex",
          label: "Sex",
          type: "radio",
          options: ["Male", "Female", "Other"],
          required: true,
          fullWidth: true,
        },

        {
          name: "trip_purpose",
          label: "Main purpose of trip to Vietnam",
          type: "radio",
          options: ["Tourism", "Business"],
          required: true,
          fullWidth: true,
        },

        {
          name: "visa_type",
          label: "Type of Visa",
          type: "text",
          required: true,
        },
        {
          name: "arrival_airport",
          label: "Arrival Airport",
          type: "text",
          required: true,
        },
        {
          name: "arrival_date",
          label: "Anticipated travel date to Vietnam",
          type: "date",
          required: true,
        },
        {
          name: "departure_date",
          label: "Anticipated exit date from Vietnam",
          type: "date",
          required: true,
        },
      ],
      cta_button: { text: "Submit Application" },
    },
  },
  {
    id: 2,
    slug: "india-evisa",
    country: "India eVisa",
    hero_title: "India eVisa",
    hero_description:
      "Apply online for your Indian electronic visa easily and securely.",
    hero_image: indiaImg,
  },
  {
    id: 3,
    slug: "brazil-evisa",
    country: "Brazil eVisa",
    hero_title: "Brazil eVisa",
    hero_description: "Complete your Brazil eVisa application in minutes.",
    hero_image: brazilImg,
  },
  {
    id: 4,
    slug: "kenya-evisa",
    country: "Kenya eVisa",
    hero_title: "Kenya eVisa",
    hero_description: "Get your Kenya eVisa approval online — fast and simple.",
    hero_image: kenyaImg,
  },
  {
    id: 5,
    slug: "cambodia-evisa",
    country: "Cambodia eVisa",
    hero_title: "Cambodia eVisa",
    hero_description:
      "Apply for a Cambodia eVisa without visiting the embassy.",
    hero_image: cambodiaImg,
  },
];
