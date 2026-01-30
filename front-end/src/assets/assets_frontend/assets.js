import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'


import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'


import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'

const assetsData = {
  assets: {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
  },
  specialityData: [
    { speciality: 'General physician', image: General_physician },
    { speciality: 'Gynecologist', image: Gynecologist },
    { speciality: 'Dermatologist', image: Dermatologist },
    { speciality: 'Pediatricians', image: Pediatricians },
    { speciality: 'Neurologist', image: Neurologist },
    { speciality: 'Gastroenterologist', image: Gastroenterologist },
  ],
  doctors: [
        {
      _id: 'doc1',
      name: 'Dr. Richard James',
      image: doc1,
      speciality: 'General physician',
      degree: 'MBBS',
      experience: '4 Years',
      fees: 50,
      about: 'Dr. Richard James is a dedicated General Physician with 4 years of clinical experience. He has studied MBBS and focuses on diagnosing and treating common medical conditions while providing preventive healthcare and long-term wellness guidance.'
    },
    {
      _id: 'doc2',
      name: 'Dr. Emily Larson',
      image: doc2,
      speciality: 'Gynecologist',
      degree: 'MBBS',
      experience: '3 Years',
      fees: 60,
      about: 'Dr. Emily Larson is a compassionate Gynecologist specializing in women’s reproductive health. She has completed her MBBS and provides care for pregnancy, menstrual disorders, and overall gynecological wellness.'
    },
    {
      _id: 'doc3',
      name: 'Dr. Sarah Patel',
      image: doc3,
      speciality: 'Dermatologist',
      degree: 'MBBS',
      experience: '1 Years',
      fees: 30,
      about: 'Dr. Sarah Patel is a Dermatologist with a focus on skin, hair, and nail conditions. She studied MBBS and offers treatments for acne, allergies, and common dermatological concerns.'
    },
    {
      _id: 'doc4',
      name: 'Dr. Arjun Mehta',
      image: doc4,
      speciality: 'General physician',
      degree: 'MBBS, MD',
      experience: '6 Years',
      fees: 120,
      about: 'Dr. Arjun Mehta is an experienced General Physician with an MD after completing MBBS. He specializes in internal medicine, chronic disease management, and comprehensive adult healthcare.'
    },
    {
      _id: 'doc5',
      name: 'Dr. Neha Verma',
      image: doc5,
      speciality: 'Neurologist',
      degree: 'MBBS, DM',
      experience: '8 Years',
      fees: 150,
      about: 'Dr. Neha Verma is a senior Neurologist with advanced training in DM Neurology. She specializes in disorders of the brain and nervous system including migraines, epilepsy, and stroke management.'
    },
    {
      _id: 'doc6',
      name: 'Dr. Rohan Singh',
      image: doc6,
      speciality: 'Pediatricians',
      degree: 'MBBS, MS',
      experience: '5 Years',
      fees: 90,
      about: 'Dr. Rohan Singh is a Pediatrician dedicated to child healthcare and development. After completing MBBS and MS, he focuses on treating childhood illnesses and ensuring healthy growth in infants and children.'
    },
    {
      _id: 'doc7',
      name: 'Dr. Kavya Nair',
      image: doc7,
      speciality: 'Pediatricians',
      degree: 'MBBS, MD',
      experience: '4 Years',
      fees: 70,
      about: 'Dr. Kavya Nair is a Pediatrician with an MD specializing in child and adolescent health. She provides preventive care, vaccinations, and treatment for common pediatric conditions.'
    },
    {
      _id: 'doc8',
      name: 'Dr. Aman Khurana',
      image: doc8,
      speciality: 'Gastroenterologist',
      degree: 'MBBS, MS',
      experience: '6 Years',
      fees: 80,
      about: 'Dr. Aman Khurana is a Gastroenterologist with expertise in digestive system disorders. He studied MBBS and MS, focusing on liver, stomach, and intestinal health.'
    },
    {
      _id: 'doc9',
      name: 'Dr. Pooja Iyer',
      image: doc9,
      speciality: 'Neurologist',
      degree: 'MBBS, MD',
      experience: '7 Years',
      fees: 110,
      about: 'Dr. Pooja Iyer is a skilled Neurologist with an MD in medicine. She specializes in diagnosing and managing neurological conditions such as nerve disorders and chronic headaches.'
    },
    {
      _id: 'doc10',
      name: 'Dr. Vikram Rao',
      image: doc10,
      speciality: 'Gastroenterologist',
      degree: 'MBBS, MCh',
      experience: '9 Years',
      fees: 140,
      about: 'Dr. Vikram Rao is a highly experienced Gastroenterologist with an MCh specialization. He focuses on advanced digestive care, gastrointestinal surgeries, and long-term treatment plans.'
    },
    {
      _id: 'doc11',
      name: 'Dr. Sneha Kapoor',
      image: doc11,
      speciality: 'Dermatologist',
      degree: 'MBBS, MS',
      experience: '3 Years',
      fees: 65,
      about: 'Dr. Sneha Kapoor is a Dermatologist with an MS degree after MBBS. She treats skin disorders, cosmetic concerns, and provides personalized skincare solutions.'
    },


  ]
};
export default assetsData
