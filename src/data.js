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

import blogImg from "./assets/blog-img.png";
import authorImg from "./assets/author-img.png";

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

export const passportSections = [
  {
    title: "New Passport",
    description:
      "Whether your passport expired or you’ve never had a passport, everyone will need to apply for a new US passport at some point. For new US passport services in Chicago, choose Chicago Passport & Visa Services.",
    accordions: [
      {
        title: "Requirements for First US Passport Application",
        text: `
          <ul>
            <li>You must be applying for the first time.</li>
            <li>Your previous passport was issued more than 15 years ago.</li>
            <li>Your previous passport was issued when you were under 16 years of age.</li>
          </ul>
        `,
      },
      {
        title: "How to Apply",
        text: `
          <p><a href="https://pptform.state.gov/?Submit2=Complete+Online+%26+Print&AspxAutoDetectCookieSupport=1">DS-11 Online Application</a></p>
          <ul>
            <li>Do not sign the application until instructed to do so.</li>
          </ul>`,
      },
      {
        title: "Government & Service Fees",
        text: `
          <ul>
            <li>A personal check or money order made payable to the “US Department of State” in the amount of $190.00.</li>
            <li>If you are applying for a US passport with regular services, the check should be made out in the amount of $190.00. Follow this link for the state fee.</li>
            <li>Temporary/starter checks or checks without a name or address will NOT be accepted.</li>
          </ul>
          <p>Chicago Passport & Visa Services fees will be applied in addition to the government fees.</p>
          `,
      },
      {
        title: "Additional Requirements for New US Passports",
        text: `
          <p>
            <a href="https://chicagopassport-visa.com/us-passport/#additional-requirements">Passport Photos</a>
            |
            <a href="https://chicagopassport-visa.com/us-passport/#additional-requirements">Proof of US Citizenship</a>
            |
            <a href="https://chicagopassport-visa.com/us-passport/#additional-requirements">Proof of Identity </a>
            |
            <a href="https://chicagopassport-visa.com/us-passport/#additional-requirements">Letter of Authorization </a>
            |
            <a href="https://chicagopassport-visa.com/us-passport/#additional-requirements">Service Order Form</a>
            |
            <a href="https://chicagopassport-visa.com/us-passport/#additional-requirements">Must Appear in Person </a>
          </p>
          `,
      },
    ],
  },
  {
    title: "Passport Renewal",
    description:
      "Renew your passport in Chicago with Chicago Passport & Visa Services. We offer emergency and rush passport services, so if you’re looking to expedite your passport, we have all the same-day solutions for you.",
    accordions: [
      {
        title: "Requirements for US Passport Renewal",
        text: `
          <p>Your US Passport can only be renewed if ALL these conditions are met.</p>
          <ul>
            <li>You still have your US passport in your possession.</li>
            <li>Your previous US passport was issued when you were 16 years or over.</li>
            <li>Your previous US passport was issued no more than 15 years ago.</li>
            <li>Your US passport is undamaged.</li>
          </ul>
        `,
      },
      {
        title: "How to Apply",
        text: `
          <a href="https://pptform.state.gov/?Submit2=Complete+Online+%26+Print&AspxAutoDetectCookieSupport=1"/>DS-82 Online Application</a>
          <ul>
            <li>Do not sign the application until instructed to do so.</li>
          </ul>
        `,
      },
    ],
  },
  {
    title: "Child Passport",
    description:
      "Children under 16 must apply in person with both parents or legal guardians present.",
    accordions: [
      {
        title: "Parental Consent",
        text: "Both parents must be present or provide notarized consent forms.",
      },
    ],
  },
  {
    title: "Lost Passport",
    description:
      "If your passport is lost, stolen, or damaged, you should replace it quickly. Chicago Passport & Visa Services offers lost passport renewal solutions so you have a replacement passport in time for your next trip. Also, canceling a lost passport quickly ensures it can’t be used if it falls into the wrong hands.",
    accordions: [
      {
        title: "Parental Consent",
        text: "Both parents must be present or provide notarized consent forms.",
      },
    ],
  },
  {
    title: "Passport Name Change",
    description:
      "Passports must reflect the correct name of the passport holder. Therefore, it’s essential that you receive a new passport due to marriage, divorce, adoption, or other legal reasons from Chicago Passport & Visa Services.",
    accordions: [
      {
        title: "Parental Consent",
        text: "Both parents must be present or provide notarized consent forms.",
      },
    ],
  },
  {
    title: "Second Limited Passport",
    description:
      "US citizens are allowed to have two different passports: a normal 10-year passport and a second limited passport. Second limited passports allow holders to travel internationally while processing a US visa. With these specific passports, holders can also travel to countries that don’t allow entry to people to visit if their normal passport has stamps from enemy countries.",
    accordions: [
      {
        title: "Parental Consent",
        text: "Both parents must be present or provide notarized consent forms.",
      },
    ],
  },
  {
    title: "Additional Requirements for US Passports",
    description: "",
    accordions: [
      {
        title: "Parental Consent",
        text: "Both parents must be present or provide notarized consent forms.",
      },
    ],
  },
];

export const blogsData = [
  {
    id: 1,
    slug: "how-to-renew-mexican-passport-in-chicago",
    title: "How To Renew Mexican Passport In Chicago",
    excerpt:
      "Renewing your Mexican passport in Chicago is a simple process, especially if your old one has expired or will expire soon. Here’s a full breakdown of eligibility, documents, and where to go.",
    featured_image: blogImg,
    author: {
      name: "John Doe",
      avatar: authorImg,
    },
    date: "December 4, 2024",
    content: `
      <h2>Eligibility Requirements</h2>
      <p>To renew your Mexican passport in Chicago, you must meet the following conditions:</p>
      <ul>
        <li>You are a Mexican citizen.</li>
        <li>Your passport is expired or will expire within six months.</li>
        <li>You can provide original and photocopy identification documents.</li>
      </ul>

      <h2>Required Documents</h2>
      <ul>
        <li>Completed passport renewal form.</li>
        <li>Two recent passport-sized photos.</li>
        <li>Proof of payment for renewal fee.</li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <p><strong>Where can I renew my Mexican passport in Chicago?</strong><br>
      You can renew at the Consulate General of Mexico located in downtown Chicago.</p>

      <p><strong>How long does processing take?</strong><br>
      Processing times vary between 1–3 weeks depending on demand and appointment availability.</p>

      <p><strong>Can I expedite the process?</strong><br>
      Yes, some services offer expedited options for an additional fee.</p>
    `,
  },
  {
    id: 2,
    slug: "how-to-get-us-passport-renewed-fast",
    title: "How To Get Your US Passport Renewed Fast",
    excerpt:
      "Need your passport in a hurry? Here’s how to renew it quickly, including expedited options and required documentation.",
    featured_image: blogImg,
    author: {
      name: "Sarah Lee",
      avatar: authorImg,
    },
    date: "November 12, 2024",
    content: `
      <h2>Step-by-Step Renewal Process</h2>
      <ol>
        <li>Complete the DS-82 form.</li>
        <li>Attach your most recent passport and new photos.</li>
        <li>Mail it or bring it to an expedited passport agency.</li>
      </ol>

      <h2>Tips for Faster Processing</h2>
      <ul>
        <li>Use overnight shipping both ways.</li>
        <li>Double-check your application before submission.</li>
        <li>Book an appointment early if visiting an office.</li>
      </ul>
    `,
  },
  {
    id: 3,
    slug: "visa-photos-guidelines",
    title: "Visa Photo Requirements: Avoid Common Mistakes",
    excerpt:
      "Your visa photo can make or break your application — here’s how to ensure it meets all official standards.",
    featured_image: blogImg,
    author: {
      name: "Michael Chen",
      avatar: authorImg,
    },
    date: "October 10, 2024",
    content: `
      <h2>Key Requirements</h2>
      <ul>
        <li>White background only.</li>
        <li>No shadows or filters.</li>
        <li>Face must be fully visible.</li>
      </ul>

      <h2>Pro Tip</h2>
      <p>Always take your photo at a professional studio that specializes in passport or visa photography.</p>
    `,
  },
];
