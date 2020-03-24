import PetCare from '../static/images/category-images/pet'
import CatCare from '../static/images/category-images/cat'
import DogCare from '../static/images/category-images/dog'
import SmallPetCare from '../static/images/category-images/smallPet'
import Insurance from '../static/images/category-images/insurance'
import Breeds from '../static/images/category-images/breed'
import Health from '../static/images/category-images/health'
import Behavior from '../static/images/category-images/behavior'
import BirdsSmallPetHealthHeroImage from "../static/images/category-images/birdsSmallPetHealth"
import DogHealthHeroImage from "../static/images/category-images/dogHealth"
import SmallPetHeroImage from "../static/images/category-images/smallPetHealth"
import FishSmallPetHealthHeroImage from "../static/images/category-images/fishSmallPetHealth"
import ReptileSmallPetHealthHeroImage from "../static/images/category-images/reptileSmallPetHealth"
import SmallMammalsSmallPetHealthHeroImage from "../static/images/category-images/smallMammalsSmallPetHealth"
import CatPetInsuranceHeroImage from "../static/images/category-images/catPetInsurance"
import BirdsHeroImage from "../static/images/category-images/birds"
import FishHeroImage from "../static/images/category-images/fish"
import ReptileHeroImage from "../static/images/category-images/reptile"
import SmallMammalsHeroImage from "../static/images/category-images/small-mammals"
import SmallPetBehaviorTrainingHeroImage from "../static/images/category-images/smallPetBehaviorTraining"
import BirdsSmallPetBehaviorTrainingHeroImage from "../static/images/category-images/birdsSmallPetBehaviorTraining"
import FishSmallPetBehaviorTrainingHeroImage from "../static/images/category-images/fishSmallPetBehaviorTraining"
import ReptileSmallPetBehaviorTrainingImage from "../static/images/category-images/reptileSmallPetBehaviorTraining"
import CatBreedsHeroImage from "../static/images/category-images/catBreeds"
import SmallPetBreedsHeroImage from "../static/images/category-images/smallPetBreeds"
import BirdsSmallPetBreedsHeroImage from "../static/images/category-images/birdsSmallPetBreeds"
import FishSmallPetBreadsHeroImage from "../static/images/category-images/fishSmallPetBreads"
import ReptileSmallPetBreedsHeroImage from "../static/images/category-images/reptileSmallPetBreeds"
import SmallMammalsSmallPetBreedsHeroImage from "../static/images/category-images/smallMammalsSmallPetBreeds"
import SmallMammalsSmallPetBehaviorTrainingHeroImage from "../static/images/category-images/smallMammalsSmallPetBehaviorTraining"
import React from 'react'
import Helmet from 'react-helmet'
import logo from '../images/PPlogo.jpg'

const terms = [
  'fish behavior & training',
  'reptile behavior & training',
  'small mammals behavior & training',
  'small pet behavior & training',
  'bird behavior & training',
  'small mammals pet care',
  'reptile pet care',
  'bird pet care',
  'fish pet care',
  'small pet care',
  'small mammals breeds',
  'small pet breeds',
  'birds pet breeds',
  'small pet health',
  'small mammal health',
  'fish breeds',
  'reptiles breeds',
  'cat breeds',
  'cat insurance',
  'pet insurance',
  'pet behavior',
  'reptile health',
  'bird health',
  'dog health',
  'fish health',
  'dog care',
  'pet care',
  'cat care',
  'health',
  'breeds',
]
export const categoryColor = ( category ) => {
  let filteredCategory = terms.filter((term) => category.toLowerCase().indexOf(term) >= 0 )
  if (filteredCategory.length > 0) {
    switch (filteredCategory[0]) {
      case 'dog care':
        return 'mauve'
      case 'cat care':
        return 'orange'
      case 'pet care':
        return 'blue-dark'
      case 'health':
        return 'red'
      case 'pet behavior':
        return 'magenta'
      case 'pet insurance':
        return 'green'
      case 'small pet care':
        return 'purple-light'
      case 'breeds':
        return 'gold'
      default:
        return 'blue'
    }
  
  } else {
    return 'purple'
  }
  
}


export const categoryImage = ( category ) => {
  let filteredCategory = terms.filter((term) => category.toLowerCase().indexOf(term) >= 0 )
  // console.log(filteredCategory)
  if (filteredCategory.length > 0) {
    switch (filteredCategory[0]) {
      case 'bird behavior & training':
        return <BirdsSmallPetBehaviorTrainingHeroImage />
      case 'dog care':
        return <DogCare />
      case 'cat care':
        return <CatCare />
      case 'pet care':
        return <PetCare />
      case 'pet behavior':
        return <Behavior />
      case 'pet insurance':
        return <Insurance />
      case 'small pet care':
        return <SmallPetCare />
      case 'bird health':
        return <BirdsSmallPetHealthHeroImage />
      case 'dog health':
        return <DogHealthHeroImage />
      case 'small pet health':
        return <SmallPetHeroImage />
      case 'fish health':
        return <FishSmallPetHealthHeroImage />
      case 'reptile health':
        return <ReptileSmallPetHealthHeroImage />
      case 'small mammal health':
        return <SmallMammalsSmallPetHealthHeroImage />
      case 'cat insurance':
        return <CatPetInsuranceHeroImage />
      case 'bird pet care':
        return <BirdsHeroImage />
      case 'reptile pet care':
        return <ReptileHeroImage />
      case 'small mammals pet care':
        return <SmallMammalsHeroImage />
      case 'fish pet care':
        return <FishHeroImage />
      case 'small pet behavior & training':
        return <SmallPetBehaviorTrainingHeroImage />
      case 'fish behavior & training':
        return <FishSmallPetBehaviorTrainingHeroImage />
      case 'reptile behavior & training':
        return <ReptileSmallPetBehaviorTrainingImage />
      case 'small mammals behavior & training':
        return <SmallMammalsSmallPetBehaviorTrainingHeroImage/>
      case 'cat breeds':
        return <CatBreedsHeroImage />
      case 'small pet breeds':
        return <SmallPetBreedsHeroImage />
      case 'birds pet breeds':
        return <BirdsSmallPetBreedsHeroImage />
      case 'fish breeds':
        return <FishSmallPetBreadsHeroImage />
      case 'reptiles breeds':
        return <ReptileSmallPetBreedsHeroImage />
      case 'small mammals breeds':
        return <SmallMammalsSmallPetBreedsHeroImage />
      case 'health':
        return <Health />
      case 'breeds':
        return <Breeds />
      default:
        return <PetCare />
    }
  
  } else {
    return <PetCare />
  }
  
}

// returns author name
export const filterAuthors = (author) => {
  // console.log(author.slug)
  switch (author.slug) {
    case 'stephanie-silberstang-dvm-cva':
    case 'alett-mekler-ma-econ-dvm-ccrp-cvma':
    case 'dr-debra-primovic-dvm':
    case 'carey-hemmelgarn':
    case 'kimmi-whitehead-vmd-dacvecc':
    case 'rebecca-mount-dvm-dacvd':
    case 'danika-sorensen-vmd':
    case 'lori-savka':
    case 'melissa-evans-lvt-vts-ecc':
    case 'carey-hemmelgarn-dvm-dacvecc':
      return author.display_name
    default:
      return false
  }
}

// returns slug for selected authors
export const filterAuthorsLink = (author) => {
  // console.log(author)
  switch (author) {
    case 'Stephanie Silberstang, DVM CVA':
      return 'stephanie-silberstang-dvm-cva'
    case 'Alett Mekler MA (Econ), DVM, CCRP, CVMA':
      return 'alett-mekler-ma-econ-dvm-ccrp-cvma'
    case 'Dr. Debra Primovic - DVM':
      return 'dr-debra-primovic-dvm'
    case 'Carey Hemmelgarn':
      return 'carey-hemmelgarn'
    case 'KimMi Whitehead, VMD, DACVECC':
      return 'kimmi-whitehead-vmd-dacvecc'
    case 'Rebecca Mount, DVM DACVD':
      return 'rebecca-mount-dvm-dacvd'
    case 'Danika Sorensen, VMD':
      return 'danika-sorensen-vmd'
    case 'Lori Savka':
      return 'lori-savka'
    case 'Melissa Evans, LVT, VTS (ECC)': 
      return 'melissa-evans-lvt-vts-ecc'
    case 'Carey Hemmelgarn, DVM. DACVECC':
      return 'carey-hemmelgarn-dvm-dacvecc'
    default:
      return false
  }
}

export const formatDate = (date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ];
  const year = date.substring(0,4)
  const month = months[parseInt( date.substring(5,7))-1]
  // console.log(month)
  const day = date.substring(8,10)

  return `${month} ${day}, ${year}`
}

export const filterFaqPosts = (post, author, imgUrl) => {
  switch (post.slug) {
    case 'heres-help-puppy-will-not-eat':
      return (
        <Helmet>
        {/* inline script elements */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "headline": "${post.yoast_meta.yoast_wpseo_title.replace(/[^a-zA-Z ]/g, "")}",
              "description": "${post.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")}",
              "image": "${process.env.GATSBY_WEB_SITE_URL}${imgUrl}",  
              "author": {
                "@type": "Person",
                "name": "${author}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PetPlace",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                  "width": 236,
                  "height": 45
                }
              },
              "datePublished": "${post.date}",
              "dateModified" : "${post.date}",
              "mainEntity": [{
                "@type": "Question",
                "name": "Step 1. Find Out Why Your Puppy Isn't Eating",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>Here are some causes for inappetence:</p>
            <ul>
               <li>Gastrointestinal parasites (worms), such as roundworms, hookworms, and whipworms</li>
               <li>Viral infections, such as parvovirus or coronavirus</li>
               <li>Intestinal protozoan infections, such as Coccidia or Giardia</li>
               <li>Bacterial infections</li>
               <li>Ingestion of toxins</li>
               <li>Stomach upset from a sudden diet change or table foods</li>
               <li>Getting into the trash and eating spoiled food</li>
               <li>Ingestion of a foreign body (which is an indigestible object, such as sock, toy, or panties)</li>
               <li>Congenital problems, such as a liver shunt or heart defects, as well as many other problems that can affect organ function</li>
            </ul>"
                }
              },{
                "@type": "Question",
                "name": "Step 2. Evaluate Your Puppy for Symptoms",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>Carefully look at your puppy for additional symptoms besides the inappetence. Look for any underlying causes and evaluate your puppy for additional abnormal symptoms. Specifically, look for:</p>
            <ul>
               <li>Vomiting and/or diarrhea</li>
               <li>Worms in the stool</li>
               <li>Fleas or ticks</li>
               <li>Lethargy or weakness</li>
               <li>Trembling, muscle twitching, and seizures</li>
               <li>Limping</li>
               <li>Signs of pain or discomfort</li>
               <li>Coughing or trouble breathing</li>
               <li>Pale gums</li>
            </ul>"
                }
              },{
                "@type": "Question",
                "name": "Step 3. Seek Medical Attention",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>Once puppies get sick, things can go downhill pretty quickly. Don’t wait too long to seek medical help for a puppy that will not eat. If you see any of the signs above, please consult your veterinarian.</p>
            
            <p>Your veterinarian may ask you about exposure to trash or toxins, history of deworming, vaccine history, and additional symptoms, such as vomiting or diarrhea. They may check your puppy’s body temperature, check a blood glucose level, perform a fecal examination, as well as other tests depending on your puppy’s examination and clinical signs.</p>"
                }
              },{
                "@type": "Question",
                "name": "Step 4. Try These Tips for Feeding Puppies",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<p>Below are tips that can encourage puppies to eat:</p>
            <ul>
               <li>Offer your puppy their regular food. If they refuse, continue on to the next step.</li>
               <li>Moisten the regular food with water or chicken broth for moisture and flavoring. Sometimes, this can make the food more appealing.</li>
               <li>Offer different canned puppy foods to help stimulate your puppy’s appetite. The best approach is to add a small amount of canned food to your puppy’s regular food and hope that they will eat. Canned food can be more palatable and has the additional benefit of having a higher water content, which helps with hydration.</li>
               <li>Feed a bland diet, such as a combination of boiled hamburger with rice. You can purchase a commercial version of this diet, like Hill’s Science Diet i/d, or make your own. Get the recipe here How to Make a Bland Diet for Your Puppy</li>
               <li>Heat a small amount of canned food in the microwave for a few seconds to release the aroma and help stimulate interest in the food. Just ensure that the food is not too hot to the touch.</li>
               <li>Offer baby food, such as chicken-flavored food.</li>
               <li>Syringe feed. When mixed with water, baby food or canned dog food can be easy to pull into in a syringe and gently feed. Sometimes, getting a small amount of food into a dog or puppy can encourage them to want to eat more. Please make sure your puppy is alert and has a normal swallowing reflex to minimize the risk for aspiration.</li>
               <li>Only feed a small amount at a time to ensure that your puppy tolerates it and doesn’t start vomiting.</li>
               <li>Besides food, encourage your puppy to drink liquids. Ideas include:
            <ul>
               <li>Adding an ice cube to their water bowl</li>
               <li>Allowing your puppy to lick water from your hand or your finger</li>
               <li>Offering small amounts of Pedialyte®</li>
               <li>Offering low-sodium chicken broth</li>
            </ul>
            </li>
            </ul>
            <p>If you try these tips and your puppy still won’t eat, the best and safest thing is to take your puppy to the veterinarian. If your pet seems weak, becomes unable to stand, and/or you notice any additional muscle twitching, this is an emergency. This can be a sign of low blood sugar. Call your veterinarian immediately or contact the closest emergency clinic. To help low blood sugar, rub Karo® syrup on your puppy’s gums.</p>"
                }
              },{
                "@type": "Question",
                "name": "Step 5. Remember Things to Avoid",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you’ve figured out why your puppy isn’t eating, avoid similar situations in the future. For example, if your puppy got into the trash, avoid exposure to the trash. If your puppy has worms, make sure you follow the prescribed treatment and ensure that you follow all instructions from your veterinarian."
                }
              }]
            }
          `}</script>
        </Helmet>
      )
    case 'here-are-the-best-dog-foods-for-picky-dogs':
      return (
        <Helmet>
        {/* inline script elements */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "headline": "${post.yoast_meta.yoast_wpseo_title.replace(/[^a-zA-Z ]/g, "")}",
              "description": "${post.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")}",
              "image": "${process.env.GATSBY_WEB_SITE_URL}${imgUrl}",  
              "author": {
                "@type": "Person",
                "name": "${author}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PetPlace",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                  "width": 236,
                  "height": 45
                }
              },
              "datePublished": "${post.date}",
              "dateModified" : "${post.date}",
              "mainEntity": [{
                "@type": "Question",
                "name": "Why are Dogs Picky Eaters?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dogs can be fussy eaters either because they have a finicky personality or a health issue. The most important thing you can do is to make sure your pet is in good health and not suffering from other symptoms. Lack of appetite, decreased appetite, or abstaining from their normal food and only eating treats is a common situation if a dog doesn’t feel well. Learn more by reading What to Do When Your Dog Won’t Eat Their Food - But Will Eat Treats.
            Before making the assumption that your dog is just fussy – consider if they’re showing any other signs that may be abnormal. For example, observe your dog for the following:
            <ul>
               <li><strong>New, abnormal behavior.</strong> Is this pickiness new or has your dog always been this way? If it is new, it’s best to talk to your veterinarian about a potential underlying health problem.</li>
               <li><strong>Bad Breath.</strong> If your dog has bad breath, there is a possibility that they have dental disease, gum disease, oral ulceration, or other problems of the mouth, teeth, or gums.</li>
               <li><strong>Vomiting and Diarrhea.</strong> Are they vomiting or do they have loose stools? Is any mucus or blood present?</li>
               <li><strong>Weight Loss or Gain.</strong> Is your dog losing or gaining weight? Weigh your dog and find out.</li>
               <li><strong>Change in Drinking or Urination Habits.</strong> Is there any change in the amount your pet drinks and urinates? Some pets with underlying health issues, such as diabetes or kidney disease, can present changes in these patterns.</li>
               <li><strong>Coughing.</strong> Have you noticed any coughing? Trouble breathing? Exercise intolerance? Heart and lung disease can cause a diminished appetite.</li>
               <li><strong>Itching.</strong> Is your dog itching or have any abnormal skin rashes, bumps, or hair loss?</li>
               <li><strong>Trouble Walking.</strong> Have you noticed any trouble limping? Trouble getting up or down the stairs? Trouble getting up from a lying position?</li>
               <li><strong>Pain.</strong> Does your dog seem to be in pain?</li>
            </ul>"
                }
              },{
                "@type": "Question",
                "name": "How to Address Eating Issues",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The safest thing to do if your dog is showing any signs of inappetence is to see your veterinarian. Your veterinarian may want to do a physical examination to ensure there are no abnormalities that may make your dog “picky.” This is really the best thing to do, since a vet may determine that this pickiness was actually caused by something like bladder stones, gastrointestinal tumors, lung cancer, anemia, liver problems, fractured teeth, severe arthritis, or another life-threatening condition.
            
            Here are some great tips for Home care for the dog that is not eating. This article has suggestions that may help you get your dog to start eating. Also, for puppies, read the following: Here’s How to Help a Puppy Who Will Not Eat."
                }
              },{
                "@type": "Question",
                "name": "The Behaviors of a Picky Dog",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Here is something to consider before taking the steps to feed a picky pet. Is any part of your dog’s pickiness related to the desire for attention? For example, what is the typical feeding situation? When your dog refuses to eat whatever you feed them, do you pet them? Talk to them? Carry them around? Hand feed? Give other extra attention? Or do you walk away and let them eat if they are hungry?
            
            One recommendation for feeding picky dogs is not letting their mealtime become a time for them to get attention. Give them attention at other times, such as playtime. Some behaviorists recommend that the best way to feed meals to a picky dog is to offer the food and walk away. If your dog is hungry, they will eat."
                }
              },{
                "@type": "Question",
                "name": "What Is the Best Dog Food for Picky Dogs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "What is the best food to feed a dog that is finicky? If your dog is otherwise healthy and just seems to be picky, then consider the following questions as you consider a new food:
            <ul>
               <li>How old is your dog? How active is your dog? It is important to feed your dog based on their stage.</li>
               <li>Is your dog overweight, underweight, or just right? Maintaining a healthy weight is important.</li>
               <li>Does your dog have an underlying health issue that requires a special diet, such as a history of bladder stones or allergies that you need to consider?</li>
               <li>Does your dog seem to prefer canned or dry food?</li>
               <li>Does your dog seem to have a flavor preference? Chicken? Fish? Beef? Other?</li>
               <li>Do you believe in raw meat diets? Does your veterinarian?</li>
            </ul>"
                }
              },{
                "@type": "Question",
                "name": "16 Tips for Feeding a Picky Dog",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<ol>
               <li>When you are looking for a food to feed a finicky dog, you want a product that your dog will eat, but also a quality food that is formulated to meet their needs. It is also important to consider behavior – both yours and your dog’s. Sometimes, it isn’t about the food, but how you feed your pet. It is also important to consider how these decisions impact your entire family.</li>
               <li>Make sure you pick food for your dog’s life stage. Ensure that your puppy has high-quality, puppy-specific food. If you have a senior, choose a food formulated for seniors.</li>
               <li>The Association of American Feed Control Officials (AAFCO) is an organization that publishes regulations for nutritional adequacy of “complete and balanced” dog and cat foods. Diets that fulfill the AAFCO regulations will state on the label that they are, “formulated to meet the AAFCO Dog Food Nutrient Profile for…(a given life stage).” For proper nutrition, ensure your dog’s food is AAFCO approved.</li>
               <li>Some dogs desire a routine. If possible, feed your dog their meals at the same time each day. For some dogs, unpredictable feeding schedules can be stressful. If you work odd shifts and your schedule is unpredictable, automated feeders can help you maintain a routine. These feeders can be set to a particular time of day or multiple times per day at which time the feeder will open and provide an adequate amount of food for your dog to eat.</li>
               <li>Don’t create problems by changing food too often or by giving your dog low-quality foods. Some foods or changes to diet can cause vomiting and/or diarrhea. It is not recommended to choose your dog’s food based on “what’s on sale at the supermarket.” Choose a quality food and stick with it.</li>
               <li>Avoid any foods that can impact your dog’s medical condition, for example, foods that cause allergies or bladder stones.</li>
               <li>If you have a dog over 30 pounds, dry food is preferred as the base diet for its greater caloric density (more calories per volume of food). For dogs under 30 pounds, you can choose to feed either canned or dry, or a combination of the two. Many picky dogs will eat dry food if it is topped with a little something special.</li>
               <li>Pick a quality pet food company that is based in the United States and has a long history of quality control measures and minimal recalls.</li>
               <li>Offer the food and walk away. As mentioned above, don’t let mealtime be a time to get extra attention.</li>
               <li>Avoid feeding from the table. It is common for pet owners to create finicky dogs by giving table foods and encouraging dogs to hold out for something better.</li>
               <li>Feed to avoid obesity. There are a lot of health issues associated with obesity in dogs. Feed what your dog needs, not more and not less. Learn more about Obesity in Dogs.</li>
               <li>Check expiration dates. Both dry and canned dog foods can expire and become rancid. Picky dogs prefer fresh food.</li>
               <li>Buy smaller bags of food to avoid old staleness and loss of flavor. Sometimes it is tempting to save money and buy a 40-pound bag for a 10-pound dog, but it will get old and stale, and become less appealing.</li>
               <li>When you change your dog’s food, do so slowly. Mix the old food in with small amounts of the new food, then slowly increase the new food and decrease the old. This will prevent gastrointestinal upset. Make the change over 3-4 days.</li>
               <li>Make sure your entire home is on board with your plan. If you make a change to what or how you are feeding your dog, such as no longer giving treats or stopping table scraps, make sure your entire household is on board. One person can ruin the entire plan by feeding from the table when others are abstaining. Decide the feeding rules as a household.</li>
               <li>Always provide plenty of fresh clean water at all times.</li>
            </ol>"
                }
              },{
                "@type": "Question",
                "name": "Best Dog Food for Picky Dogs",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Below are dog foods with a history of high quality and palatability:
            <ul>
               <li>Acana</li>
               <li>Fromm</li>
               <li>Natural Balance Limited Ingredient Foods</li>
               <li>Nature's Recipe</li>
               <li>Orijen</li>
               <li>Stella and Chewy’s - they also make this in a meal topper that can be sprinkled on food, which dogs love.</li>
               <li>Taste of the Wild</li>
               <li>Wellness Core</li>
               <li>Zignature</li>
            </ul>"
                }
              }]
            }
          `}</script>
        </Helmet>
      )
    case 'dog-wont-eat-food-will-eat-treats':
      return (
        <Helmet>
        {/* inline script elements */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "headline": "${post.yoast_meta.yoast_wpseo_title.replace(/[^a-zA-Z ]/g, "")}",
              "description": "${post.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")}",
              "image": "${process.env.GATSBY_WEB_SITE_URL}${imgUrl}",  
              "author": {
                "@type": "Person",
                "name": "${author}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PetPlace",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                  "width": 236,
                  "height": 45
                }
              },
              "datePublished": "${post.date}",
              "dateModified" : "${post.date}",
              "mainEntity": [{
                "@type": "Question",
                "name": "Reasons Dogs Won’t Eat",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There are several causes for a dog to be off their food or have partial anorexia. According to Dr. Etienne Cote, the reasons dogs may refuse to eat can be grouped into two major categories -- psychological reasons and medical reasons.
            <h3>Psychological Causes for Anorexia in Dogs</h3>
            Psychological causes of refusing to eat include things in a dog’s environment that caused them to not want to eat. There is no underlying medical issue or disease. Common examples of psychological anorexia include anything that changes a dog’s schedule or causes stress, including:
            <ul>
               <li>New pets in the home</li>
               <li>New baby in the home</li>
               <li>Guests from out of town</li>
               <li>Moving to a new home</li>
               <li>A loud thunderstorm</li>
               <li>Remodeling or home construction</li>
               <li>Switching dog foods</li>
               <li>A change in schedules, such as a family member starting a job or becoming unemployed and staying home more frequently</li>
               <li>A family member leaving the homestead, such as a child going off to college</li>
            </ul>
            <h3>Medical Causes for Anorexia in Dogs</h3>
            Medical causes of anorexia include any condition or illness that causes a dog to not want to eat. They can include hundreds, maybe even thousands, of potential issues. The medical disorders that can cause anorexia include diseases of the gastrointestinal tract, liver, pancreas, kidneys, airway, lung or blood, and anything that can cause pain. Information about some of the most common causes include:
            <ul>
               <li><strong>Gastrointestinal Diseases</strong> – The gastrointestinal tract includes the system that takes food in, processes it, and eliminates it. This includes everything from the mouth, esophagus (the tube that takes food from the mouth to the stomach), the stomach, the small intestine, and finally the large intestine. A disease of any of these areas can cause a dog to not want to eat and are commonly associated with vomiting and diarrhea.
            <ul>
               <li>Diseases of the gastrointestinal (GI) tract include infections of the bacterial, viral, or parasitic variety. Examples of infections are hookworms, roundworms, whipworms, and viruses, such as coronavirus or parvovirus. Additional diseases of the GI tract include tumors, such as cancer, ulcerations, inflammatory diseases, food allergies, ingestion of indigestible objects that cause a “foreign body”, ingestion of spoiled food or trash, or even changes in food. Diseases of the mouth, such as bad teeth or ulcerations, can also cause pain and lack of appetite.</li>
            </ul>
            </li>
               <li><strong>Liver Diseases</strong> – The liver is an organ in the abdomen (belly) whose main job is to filter body wastes and toxins from the bloodstream. When the liver isn’t working properly, toxins can build up causing nausea and inappetence. Many dogs will be lethargic and/or have additional symptoms, such as vomiting and diarrhea.
            <ul>
               <li>Diseases of the liver include hepatitis, cirrhosis, liver cancer, toxic reactions from drug therapies, and congenital problems, such as a Portosystemic Shunt.</li>
            </ul>
            </li>
               <li><strong>Pancreatic Diseases</strong> – The pancreas is a small organ  that sits near the stomach that has several jobs, including the production of insulin and digestive enzymes that help break down food in the stomach.
            <ul>
               <li>Diseases of the pancreas include inflammation of the pancreas, also known as pancreatitis, and tumors of the pancreas (pancreatic cancer). When the pancreas becomes inflamed, the organ can release some of the digestive enzymes in to itself, causing further inflammation, pain, nausea, and lack of appetite. Pancreatic cancer also causes lack of appetite, lethargy, weakness, and general vomiting.</li>
            </ul>
            </li>
               <li><strong>Kidney Diseases</strong> – Diseases of the kidney, most commonly acute kidney failure or chronic kidney failure, cause a loss of appetite. Many pets will also drink more, urinate more or less, have ulcers in their mouth, foul-smelling breath, and be lethargic.</li>
               <li><strong>Airway and Lung Diseases</strong> – Diseases of the airway include problems associated with the nose, trachea, and lungs. Pets that have nasal diseases, such as infections or cancer, can’t smell their food and often won’t eat or will only eat treats. Pets with lung diseases may have a compromised ability to breathe, which causes them not want to eat as it can be difficult to eat and breathe at the same time.</li>
               <li><strong>Blood Diseases</strong> – There are many functions of the blood. Loss of blood or anemia from a variety of issues can cause dogs to become lethargic, weak, and lose their appetite. Anemia can result from loss of blood from trauma, ulcerations, immune-mediated problems where the body starts destroying its own red blood cells, or cancer. Often, we also see lethargy and weakness with diseases of the blood.</li>
               <li><strong>Neurologic Diseases</strong> – The neurologic system is focused on the brain, spinal cord, and nerves. Diseases that cause seizures, lack of coordination, inability to walk, or pain can all cause lack of appetite. There are hundreds of neurological diseases that include intervertebral disc disease, brain tumors, epilepsy, and vestibular disease, just to name a few.</li>
               <li><strong>Other Diseases</strong> – Any diseases that cause pain, such as a fracture, arthritis, or even something like eye pain, can cause lack of appetite.</li>
            </ul>
            As you can see, any disease that impacts the function of an organ can cause dogs not to feel like eating. If your dog is not eating, please see your veterinarian so that they can help identify the underlying cause and recommend the best treatment option to get your dog to start eating again.
            <h2>How to Get Your Dog to Start Eating</h2>
            To get your dog to start eating, you can try the following:
            <ul>
               <li>Begin by feeding them a fresh batch of their favorite dog food. If it is canned food, try heating it up, which can release the food’s aroma. If it is dry food, try adding a small amount of water or chicken broth to make it more appealing.</li>
               <li>If that doesn’t work, you can try feeding them treats. If your dog enjoys treats, crumble them into their dog food to inspire ingestion.</li>
               <li>Try feeding a bland diet, such as boiled hamburger or chicken, mixed with rice as a 50/50 mix. You can buy this food commercially or make it at home. See the bland diet recipe here.</li>
               <li>Try to mix it up by feeding different varieties of canned food to see what is appealing to your dog.</li>
            </ul>
            Here are some great tips for home care for dogs suffering from inappetence. This article has suggestions that may help you get your dog to start eating. For puppies, read the following article: Here’s How to Help a Puppy Who Will Not Eat."
                }
              },{
                "@type": "Question",
                "name": "How to Stop This from Happening Again",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Many pet owners ask, “How can I avoid having a dog that won’t eat or will only eat their treats?” The answer is to avoid underlying causes and monitor your pet’s diet. For example, if your dog is not eating because they got into the trash, ate some spoiled food, or have an upset stomach, the recommendation would be to ensure that your dog doesn’t have access to the trash can. Another example is, if your dog is not eating due to pain from arthritis, work with your veterinarian to treat and prevent pain. 
            Additional Articles of Interest Relating to Food for Dogs that Won’t Eat:
            <ul>
            <li>My Dog is Not Eating, What do I do?</li>
            <li>Here’s How to Help a Puppy Who Will Not Eat</li>
            <li>What’s the Best Tasting Dry Dog Food for Your Pet?</li>
            <li>How to Make a Bland Diet for Your Dog</li>
            <li>Nutrition in Dogs</li>
            <li>The Raw Meat Diet Debate</li>
            <li>Dangerous Foods – Learn What is Harmful to Your Dog</li>
            <li>What’s the Right Canine Epilepsy Diet?</li>
            </ul>"
                }
              }]
            }
          `}</script>
        </Helmet>
      )
    case 'what-is-a-pet-wellness-plan':
      return (
        <Helmet>
        {/* inline script elements */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "headline": "${post.yoast_meta.yoast_wpseo_title.replace(/[^a-zA-Z ]/g, "")}",
              "description": "${post.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")}",
              "image": "${process.env.GATSBY_WEB_SITE_URL}${imgUrl}",  
              "author": {
                "@type": "Person",
                "name": "${author}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PetPlace",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                  "width": 236,
                  "height": 45
                }
              },
              "datePublished": "${post.date}",
              "dateModified" : "${post.date}",
              "mainEntity": [{
                "@type": "Question",
                "name": "How to Pick a Pet Wellness Plan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A quick start is to look for a pet insurance company that offers a wellness plan. Consider what you normally spend on “wellness” over the course of a year and then review the cost of the wellness plan and what it covers. Review the plan options to see what works best for your budget."
                }
              },{
                "@type": "Question",
                "name": "How Does a Pet Hospital-Offered Wellness Plan Work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Some pet owners ask about pet hospital-based wellness plans. One example is the plan offered by Banfield Pet Hospitals. Banfield is a group of corporate-owned veterinary clinics associated with PetSmart® brand pet supply stores. They are often located inside or attached to PetSmart® stores. The United States has over 1,075 PetSmart stores and approximately 80% of these locations have Banfield Pet Hospitals affiliated with them.
            
            Banfield offers a program called “Optimum Wellness Plans,” which provides discounted services through the veterinary chain. It is not standard pet insurance and can only be used at Banfield hospitals.
            
            Unlike standard insurance plans, Optimum Wellness Plans have no deductibles, do not require making claims, and work like a discount membership. Depending on the plan, coverage ranges from emergency services to wellness care. Services covered by many plans include physical examinations, vaccinations, diagnostic testing, fecal exams, deworming, dental cleaning, urine testing, electrocardiograms, additional diagnostic testing and, in some cases, unlimited free office visits.
            
            Again, the covered services depend on the plan. Wellness plans include more preventive health coverage than budget plans.
            
            Similar plans are offered at veterinary hospitals, but cost and coverage will vary. This may be a good option if you live near one of these facilities.
            
            Costs vary with the age of your pet and the plan you select. As with Wellness Plans, hospital plans with more benefits will cost more than plans that cover less."
                }
              },{
                "@type": "Question",
                "name": "What is Not Covered with Wellness Plans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In general, wellness plans are intended to make wellness care more affordable and are not intended for use on “unpredictable or abnormal” occurrences, such as illnesses and injuries."
                }
              },{
                "@type": "Question",
                "name": "When Does Coverage Begin Once You Sign Up for a Wellness Plan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For most plans, coverage goes into effect as soon as the first payment is made. There is no waiting period for new plan members before services can be used."
                }
              },{
                "@type": "Question",
                "name": "What about Pet Insurance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Can you afford an unexpected $1,000 vet bill if your pet gets sick from swallowing something foreign or gets into an accident? Just as human medical treatment and technology has advanced, medical care for pets has also progressed, causing emergency care, diagnostic tests, and treatment options to be more expensive.
            
            Did You Know? 4 out of 5 pets will have a medical emergency in their lifetime, and every six seconds a pet owner will face a veterinary bill of $1,000 or more.
            
            We recommend getting a quote to see if pet insurance is right for your budget and your pet’s needs."
                }
              },{
                "@type": "Question",
                "name": "Is a Pet Wellness Plan Better for Your Wallet in the Long Run?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The advantage of a pet wellness plan is that you can provide your pet with recommended preventative care to help keep them healthy. If you vaccinate your pet to prevent disease and give your pet medications to prevent fleas and ticks, they will likely be healthier."
                }
              }]
            }
          `}</script>
        </Helmet>
      )
    case 'cat-head-pressing-while-sleeping-what-does-it-mean':
      return (
        <Helmet>
        {/* inline script elements */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "headline": "${post.yoast_meta.yoast_wpseo_title.replace(/[^a-zA-Z ]/g, "")}",
              "description": "${post.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")}",
              "image": "${process.env.GATSBY_WEB_SITE_URL}${imgUrl}",  
              "author": {
                "@type": "Person",
                "name": "${author}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PetPlace",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                  "width": 236,
                  "height": 45
                }
              },
              "datePublished": "${post.date}",
              "dateModified" : "${post.date}",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is Normal Cat Sleep Behavior?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "How much do cats sleep? Experts estimate that the average feline will sleep 13 to 15 hours per day with some cats sleeping as much as 20 hours a day."
                }
              },{
                "@type": "Question",
                "name": "When are Cats Awake Vs. Sleep?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cats are “crepuscular” which means their activity levels peak at twilight, whether that be at dawn or dusk. This is because their prey is most active at twilight. So, during the moments in-between, cats sleep, and although your pet may be indoors and domesticated, their predatory instincts remain. Pet lovers recognize this as their cats run around the house in the wee hours of the morning, sometimes knocking things over, or pouncing on moving toes while their parents try to sleep."
                }
              },{
                "@type": "Question",
                "name": "Where Do Cats Sleep?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "What is a normal location for cats to sleep? Cats love to sleep where they feel safe and comfortable, especially high on perches or beds where they can monitor their environment for threats from a safe height. They also love to sleep in boxes, cubbyholes, or hidden on dining room chairs. Small hiding spots are often happy, warm, cozy, and out of reach or sight of predators. Some cats also love to find a slice of sunshine and enjoy the warmth as they take their catnap."
                }
              },{
                "@type": "Question",
                "name": "Are Cats Deep or Light Sleepers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cats are known to be light sleepers, always being on alert to attacks based on their nature of survival. They can go from a full sleep to fully alert and running in no time."
                }
              },{
                "@type": "Question",
                "name": "What Positions Do Normal Cats Sleep In?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every cat is a little different as far as what position they sleep in. Cats sleep curled up in balls, sprawled out on the back of the sofa, on their backs in the middle of the floor, or curled into a position that appears to be head pressing while sleeping. Some cats will cover their eyes with their paws while sleeping as if to block out the light.
            The vast majority of cats sleep curled up in balls with their chin on their chest and their tail tucked gracefully beside them and up the length of their body. This posture is to help them retain their body heat. Cats curl up with their face between their paws or covering their faces as another way retain their body heat and minimize heat loss. Some of these positions will resemble head pressing while sleeping, which can be a normal feline behavior, dome for comfort and relaxation."
                }
              },{
                "@type": "Question",
                "name": "Why a Cat Might Press Their Head Against Something While Sleeping",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Some owners are worried about their cat head pressing while sleeping. Is this normal behavior? Or is this a symptom of a serious neurological problem? Learn more about What is Head Pressing in Cats?
            
            Some cats will perform a head pressing behavior as they curl up to go to sleep to mark their territory. Cats have scent glands on their cheeks and this head rubbing behavior allows them to mark their territory and take ownership. They may rub and head press against your leg to show affection as they mark you as their territory. Some cats will press their heads against you as you pet them and may even head press against your forehead. Many cats will close their eyes as they affectionately head press."
                }
              },{
                "@type": "Question",
                "name": "How to Know the Difference Between a Sign of Disease and Odd Behavior",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you’re worried about whether or not your cat’s head pressing is normal or abnormal, consider the following. If your cat is eating, drinking, playful, and exhibiting otherwise normal behavior, then it is unlikely that these symptoms are worthy of concern.
            
            When it comes to head pressing, if you see your cat doing this against the wall while sitting or while awake, and it appears that your cat doesn’t know what they are doing, this may be an abnormal sign. It can be a medical problem if they press their head up against something or a wall with an unrelaxed or tense posture. Learn more about the medical issues that can cause head pressing in this article: Cat Head Pressing: What You Need to Know.
            Additional symptoms of medical problems associated with feline head pressing may include:
            <ul>
               <li>Behavior changes or changes in learned behavior</li>
               <li>Circling and walking in one direction</li>
               <li>Compulsive repetitive behaviors
            Decreased appetite or weight loss</li>
               <li>Eye changes, such as unequal pupil sizes or inability to blink</li>
               <li>Falling</li>
               <li>Head tilt</li>
               <li>Incoordination or falling over when walking</li>
               <li>Less engaged with family or with normal activities</li>
               <li>Lethargy</li>
               <li>Loss of consciousness</li>
               <li>Restlessness and pacing</li>
               <li>Seizures</li>
               <li>Sleeping more</li>
               <li>Stuporous behavior</li>
               <li>Walking into a wall or other objects</li>
               <li>Weakness</li>
            </ul>
            The brain is an extremely complex structure located in the heads of animals. It is situated within the skull and consists of three major sections that include the brainstem, cerebrum, and cerebellum. The thalamus is a small structure within the brain that acts to communicate sensory and motor signals to the motor and sensory signals. The thalamus, as well as other parts of the brain, has many functions, including regulation of sleep and consciousness. Any disease or condition of the brain can cause abnormal signs. Learn more about the structure and function of the feline brain.
            
            If your cat is showing any of the above signs and/or seems to be head pressing, please contact your veterinarian immediately. There may be a serious and life-threatening underlying cause that requires urgent veterinary care. If your veterinarian is closed, you may be able to email, text or call their office for instructions as to how they handle emergencies. Some veterinarians will send comments via email or text, call you back, schedule a time to see you, or refer you to a specialty hospital with 24-hour care."
                }
              },{
                "@type": "Question",
                "name": "When You Should Be Concerned About Cat Head Pressing While Sleeping",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You should be concerned if your cat or dog is head pressing against a wall or any object and showing any of the clinical signs listed above. If you have any concerns that your cat’s head pressing or sleeping behavior is not normal, the safest thing to do is to see your veterinarian. Treatment will be dependent on the underlying cause for the symptoms. Early diagnosis is critical for success.
            
            The questions, examinations, and diagnostic tests that your vet may recommend will depend on the condition of your pet and may include the following:
            <ul>
               <li>If possible, <strong>take a video of your cat</strong> while demonstrating the abnormal behavior.</li>
               <li><strong>Search your home for any substance, chemical, medication, or toxin</strong> that your pet may have ingested or licked. If you see something your pet may have gotten into, save the container or package for evaluation by your veterinarian. Monitor your pet for abnormal signs, such as vomiting, weakness, or lack of appetite. Check the litter box to evaluate the bowel movement form for abnormalities that may suggest diarrhea or blood, and observe the size of the urinations for evidence of an increase or decrease in urine production. Also, look for any evidence of trauma.</li>
               <li>A <strong>thorough medical history</strong> will include diet history and any recent diet changes, vaccine history (distemper, leukemia, and rabies), recent feline leukemia or feline aids testing, recent toxins you cat may have been exposed to, history of trauma, medication list, surgical history, compulsive behaviors, lumps or tumors, or the ingestion of an object, such as a penny or lead paint. Trauma can cause damage to the brain or spinal cord leading to abnormal symptoms or behaviors.</li>
               <li>Once you make an appointment at your veterinarian, the first step is <strong>a thorough physical examination</strong>. Your vet will likely evaluate all body systems with a focus on the brain and nervous system. On the surface, your cat may look normal, but a detailed examination can reveal subtle differences. A temperature, pulse (heart rate), and respiratory rate will be done to look for any signs of a fever, abnormal high or low heart rates, or other irregularities. They will likely also do an oral exam by looking in the mouth for painful teeth, signs of infection, or other aberrations. The examination may include using an ophthalmoscope to look at the optic nerve, blood vessels, and the retina of the eye. Your vet will feel the abdomen for evidence of pain or an abnormal size or texture to the organs. They may also do a rectal exam that consists of gently inserting a gloved finger into the rectum to evaluate for masses or evidence of diarrhea. As they evaluate the nervous system, they will assess the overall attitude, appropriateness, alertness, pupil size and responsiveness to light, eye reflexes, such as the ability to blink, head and neck movements, coordination, body posture, gait, reflexes, and any evidence of seizure behavior. Examples of abnormal findings include absent or delayed reflexes, an abnormal gait, and/or observation of inappropriate behaviors.</li>
               <li>Any abnormality above may be cause for concern leading to the recommendation for various <strong>diagnostic tests</strong> that may include:
            <ul>
               <li>Basic blood work and urinalysis, which are recommended for animals with abnormal neurologic signs and to evaluate for systemic diseases. Tests may include a complete blood count (CBC) that can be within normal limits or an elevated white blood cell count, which can determine the presence of an infectious disease. A low red blood cell result can diagnose anemia. High red blood cell counts may suggest dehydration. A biochemical profile may be unremarkable unless an underlying or concurrent disease is present. The profile can help lead to the diagnosis of metabolic abnormalities, diabetes mellitus, acute and chronic kidney failure, liver disorders, and electrolyte abnormalities. The urinalysis can suggest signs of infection, kidney failure, dehydration, or diabetes.</li>
               <li>A thyroid blood test, which is recommended for older cats.. A high result can lead to a diagnosis of hyperthyroidism.</li>
               <li>Testing for lead or zinc poisoning, which can cause abnormal behavior in some cats. Lead poisoning can occur from lead based paint chips ingested while grooming. Cats can also eat lead pellets, sinkers, or automotive, plumbing, roofing, and construction materials. Blood or fecal concentrations of lead can diagnose lead poisoning. Zinc can be toxic, but is a fairly uncommon condition in cats. Zinc toxicity can be caused by the ingestion of zinc-containing foreign bodies, such as pennies minted after 1982. Zinc toxicity can be diagnosed by elevated blood levels.</li>
               <li>A fecal examination, which can diagnose the presence of parasites, infectious diseases, or show evidence of abnormal bleeding.</li>
               <li>Radiographs (X-rays) of the chest and abdomen. These are an important part of any baseline work-up. They may be within normal limits or can reveal signs of cancer or concurrent disease.</li>
               <li>Abdominal ultrasound. This is an imaging technique that allows visualization of cat’s abdominal structures by recording reflections of inaudible sound waves. This can assess the size and shape of organs such as the stomach, intestines, liver, pancreas, kidneys, bladder, and lymph nodes. Not all veterinary clinics offer ultrasound, therefore you may be referred to a specialty vet hospital.</li>
               <li>Computed tomography (CT scan or CAT scan), which is a special X-ray technique that provides serial images of the brain and nervous system using enhanced computer processing.</li>
               <li>Magnetic resonance imaging (MRI). MRI is a diagnostic test that uses powerful magnetic fields to generate detailed images of organs. It is an excellent way to determine the underlying cause for head pressing.</li>
               <li>A cerebrospinal fluid (CSF) tap, which is a procedure that provides a sample of the fluid found in the subarachnoid space surrounding the brain and spinal cord. The subarachnoid space is the area between the tough outermost membrane layer (called the dura mater) and the softer innermost layer (the pia mater) that covers the brain and spinal column. This test can help diagnose diseases such as encephalitis, sacral caudal dysgenesis (malformation of the vertebrae of the lower back and tail), infectious meningitis (inflammation of the meninges of the brain or spinal cord from an infection), and spinal tumors that can occur in the vertebrae, the meninges, nerve roots, and/or the spinal cord itself. One type of feline cancer that can affect the neurological system is lymphosarcoma. The most common causes of meningitis in cats are bacterial infections, feline infectious peritonitis infection, and systemic fungal infections.</li>
            </ul>
            </li>
            </ul>
            If your kitty is showing abnormal neurological signs in addition to head pressing while sleeping, your vet may refer you to a veterinary neurologist for a second opinion and additional advanced diagnostics, such as a CT scan or MRI. You vet may also have the option to call the veterinary neurologist for advice."
                }
              },{
                "@type": "Question",
                "name": "Treatment of Head Pressing in Cats",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The treatment for head pressing will depend on the underlying cause and specific condition or conditions present. For example, an infectious condition may be treated with antibiotics, a metabolic condition, such as diabetes, will be treated with insulin therapy, and a trauma-related issue will be treated with medications to reduce brain swelling. Depending on the underlying problem, it can take days or weeks to recover from some conditions.
            
            We hope this article helps you understand more about normal and abnormal reasons that lead to cat head pressing. Often, cats may curl up and press their head against something as a normal part of their behavior and even as a way to show affection. At other times, the reason may be due to a significant underlying disorder.
            
            It is important to prevent problems that can result in head trauma and brain damage in pets. Indoor cats are less likely to obtain trauma from gunshot wounds, be hit by cars, or involved in an animal attack. A quality cat-food diet, playtime, and environmental enrichment with scratching posts are all critical to good animal health. Only select flea products recommended by your vet and made for cats. NEVER use dog flea products on your cat without your vets approval. Treat your cat only with medications recommended by your veterinarian."
                }
              }]
            }
          `}</script>
        </Helmet>
      )
    case 'what-causes-bad-breath-in-puppies':
      return (
        <Helmet>
        {/* inline script elements */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "${post.yoast_meta.yoast_wpseo_title.replace(/[^a-zA-Z ]/g, "")}",
              "description": "${post.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")}",
              "image": "${process.env.GATSBY_WEB_SITE_URL}${imgUrl}",  
              "author": {
                "@type": "Person",
                "name": "${author}"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${process.env.GATSBY_WEB_SITE_URL}${post.path}"
             },  
              "publisher": {
                "@type": "Organization",
                "name": "PetPlace",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                  "width": 236,
                  "height": 45
                }
              },
              "datePublished": "${post.date}",
              "dateModified" : "${post.date}",
              "mainEntity": [{
                "@type": "Question",
                "name": "Why Do Puppies Get Bad Breath?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<ul>
            <li>Ingestion of Stinky Stuff. Puppies explore the world with their mouths and can chew on and/or ingest things as they explore. This is especially true with puppies that are teething between the ages of 8 weeks and 6 months. Learn more about Teething in Puppies. Puppies may ingest foul and sometimes stinky things that can cause bad breath. Some examples include dead animals they may find in the yard, mulch, compost, trash, and/or spoiled food.</li>
            <li>Ingestion of Foreign Bodies. Puppies may ingest indigestible objects that can lead to problems that cause bad breath. Ingested items can get stuck in the stomach and intestinal tract, which can cause vomiting and halitosis. Learn more about Gastrointestinal Foreign Bodies in Dogs and Puppies.</li>
            <li>Tooth Abscess. A tooth abscess is a dental infection around the tooth that can cause bad breath. Although less common in puppies, it is possible to have an infected tooth at any age.</li>
            <li>Oral Ulcerations and Infections. Ulcers in the mouth can occur from a puppy that ingests or licks caustic substances. Because puppies are curious, they commonly get into things causing chemical exposure that can lead to oral ulcerations and infections. Caustic substances that a puppy may lick or chew on include cleaning chemicals, soap and detergents, laundry or dishwater detergent pods, and liquid potpourri. These agents can cause oral ulcerations and infections that cause bad breath in puppies. Another cause for an oral infection is wounds that occur from a fight. Some dogs sustain bites around and in the mouth from fights with other animals.</li>
            <li>Respiratory Infections. Pneumonia and infections of the trachea can cause foul smelling breath. It can be especially noticeable during exhalation (breathing out) and coughing.</li>
            <li>Problems with Bones. Some bones given to puppies can break and splinter causing trauma to the oral tissues. Bones can also become lodged in the roof of the mouth or around the lower teeth and jaw. This can cause trauma to the tissues, an infection, and foul odor.</li>
            <li>Digestive Problems. Some puppies may have underlying digestive problems that can lead to bad breath. Feeding a high-quality, easily digestible food specifically formulated for puppies can help digestion and prevent bad breath. In addition, puppies may have worms, which should be treated by your veterinarian with a deworming medication.</li>
            <li>Other. There are additional causes of foul breath in dogs that don’t commonly occur in puppies, but are common in adult dogs. They may include diseases such as gum disease, periodontal disease, oral tumors, lung cancer, kidney disease, and uncontrolled diabetes (diabetic ketoacidosis). Some pet owners even describe their dog’s breath as having a foul fish type odor.</li>
            </ul>"
                }
              },{
                "@type": "Question",
                "name": "How to Stop Bad Breath in Puppies",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "<ul>
            <li>Brush those teeth. One of the best things you can do to help bad breath in puppies is to brush their teeth. Make brushing a positive experience. Pick out a veterinarian-approved toothbrush and veterinary toothpaste that has an appealing flavor to your puppy. Start slowly by touching your puppy’s teeth and gums gently and rewarding your puppy with praise for positive behavior. Brushing your pup’s teeth will help to remove tartar and reduce bad breath. Learn more about How to Brush Your Dog’s Teeth and about dental products for dogs.</li>
            <li>Provide safe chew toys. Ensure your puppy has plenty of safe chew toys that cannot be ingested. Some puppies will chew on and ingest toys, which can lead to a life-threatening obstruction in the stomach or intestines. Ensure all toys are appropriate for your puppy’s size and are not a choking hazard.</li>
            <li>Herbs. A natural way to help freshen your puppy’s bad breath is by offering herbs. You can add ½ teaspoon of fresh cut mint, parsley, or coriander leaves to your puppy’s food or offer the herb as a treat. You can also make a “tea” that you can add to their drinking water. Learn more about how to use herbs to freshen your puppy’s breath in this article: Home Remedies for Your Puppy’s Bad Breath.</li>
            <li>Water. Offer fresh clean water to your puppy every day. Scrub the water bowl at least weekly with mild detergent and rinse well to remove bacteria.</li>
            <li>Pick your puppy’s food with care. Feed a high-quality diet formulated for puppies. Ensure the food you are feeding is not expired. Seal open bags or store the food in a sealed container. Wash all food bowls daily.</li>
            </ul>"
                }
              }]
            }
          `}</script>
        </Helmet>
      )
    case 'can-dogs-get-coronavirus':
      return (
        <Helmet>
        {/* inline script elements */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "SpecialAnnouncement",
              "headline": "${post.yoast_meta.yoast_wpseo_title.replace(/[^a-zA-Z ]/g, "")}",
              "description": "${post.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")}",
              "image": "${process.env.GATSBY_WEB_SITE_URL}${imgUrl}",  
              "diseasePreventionInfo": "${process.env.GATSBY_WEB_SITE_URL}${post.path}",
              "category": "https://www.wikidata.org/wiki/Q81068910",
              "author": {
                "@type": "Person",
                "name": "${author}"
              },  
              "publisher": {
                "@type": "Organization",
                "name": "PetPlace",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                  "width": 236,
                  "height": 45
                }
              },
              "datePublished": "${post.date}",
              "dateModified" : "${post.date}"
            }
          `}</script>
        </Helmet>
      )
    case 'can-pet-get-coronavirus-covid-19':
      return (
        <Helmet>
        {/* inline script elements */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "SpecialAnnouncement",
              "headline": "${post.yoast_meta.yoast_wpseo_title.replace(/[^a-zA-Z ]/g, "")}",
              "description": "${post.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")}",
              "newsUpdatesAndGuidelines": "${process.env.GATSBY_WEB_SITE_URL}${post.path}",
              "category": "https://www.wikidata.org/wiki/Q81068910",
              "image": "${process.env.GATSBY_WEB_SITE_URL}${imgUrl}",  
              "author": {
                "@type": "Person",
                "name": "${author}"
              },  
              "publisher": {
                "@type": "Organization",
                "name": "PetPlace",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                  "width": 236,
                  "height": 45
                }
              },
              "datePublished": "${post.date}",
              "dateModified" : "${post.date}"
            }
          `}</script>
        </Helmet>
      )
    case 'can-my-cat-get-coronavirus':
      return (
        <Helmet>
        {/* inline script elements */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "SpecialAnnouncement",
              "headline": "${post.yoast_meta.yoast_wpseo_title.replace(/[^a-zA-Z ]/g, "")}",
              "description": "${post.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")}",
              "diseasePreventionInfo": "${process.env.GATSBY_WEB_SITE_URL}${post.path}",
              "category": "https://www.wikidata.org/wiki/Q81068910",
              "image": "${process.env.GATSBY_WEB_SITE_URL}${imgUrl}",  
              "author": {
                "@type": "Person",
                "name": "${author}"
              },  
              "publisher": {
                "@type": "Organization",
                "name": "PetPlace",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                  "width": 236,
                  "height": 45
                }
              },
              "datePublished": "${post.date}",
              "dateModified" : "${post.date}"
            }
          `}</script>
        </Helmet>
      )
    case 'pet-lovers-quarantine-movie-guide':
      return (
        <Helmet>
        {/* inline script elements */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "SpecialAnnouncement",
              "headline": "${post.yoast_meta.yoast_wpseo_title.replace(/[^a-zA-Z ]/g, "")}",
              "description": "${post.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")}",
              "newsUpdatesAndGuidelines": "${process.env.GATSBY_WEB_SITE_URL}${post.path}",
              "category": "https://www.wikidata.org/wiki/Q81068910",
              "image": "${process.env.GATSBY_WEB_SITE_URL}${imgUrl}",  
              "author": {
                "@type": "Person",
                "name": "${author}"
              },  
              "publisher": {
                "@type": "Organization",
                "name": "PetPlace",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                  "width": 236,
                  "height": 45
                }
              },
              "datePublished": "${post.date}",
              "dateModified" : "${post.date}"
            }
          `}</script>
        </Helmet>
      )
    case 'emergency-dog-food':
      return (
        <Helmet>
        {/* inline script elements */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "SpecialAnnouncement",
              "headline": "${post.yoast_meta.yoast_wpseo_title.replace(/[^a-zA-Z ]/g, "")}",
              "description": "${post.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")}",
              "quarantineGuidelines": "${process.env.GATSBY_WEB_SITE_URL}${post.path}",
              "category": "https://www.wikidata.org/wiki/Q81068910",
              "image": "${process.env.GATSBY_WEB_SITE_URL}${imgUrl}",  
              "author": {
                "@type": "Person",
                "name": "${author}"
              },  
              "publisher": {
                "@type": "Organization",
                "name": "PetPlace",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                  "width": 236,
                  "height": 45
                }
              },
              "datePublished": "${post.date}",
              "dateModified" : "${post.date}"
            }
          `}</script>
        </Helmet>
      )
    default:
      return (
        <Helmet>
        {/* inline script elements */}
          <script type="application/ld+json">{`
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "${post.yoast_meta.yoast_wpseo_title.replace(/[^a-zA-Z ]/g, "")}",
              "description": "${post.yoast_meta.yoast_wpseo_metadesc.replace(/[^a-zA-Z ]/g, "")}",
              "image": "${process.env.GATSBY_WEB_SITE_URL}${imgUrl}",  
              "author": {
                "@type": "Person",
                "name": "${author}"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${process.env.GATSBY_WEB_SITE_URL}${post.path}"
             },  
             "category": "https://www.wikidata.org/wiki/Q81068910",
              "publisher": {
                "@type": "Organization",
                "name": "PetPlace",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${process.env.GATSBY_WEB_SITE_URL}${logo}",
                  "width": 236,
                  "height": 45
                }
              },
              "datePublished": "${post.date}",
              "dateModified" : "${post.date}"
            }
          `}</script>
        </Helmet>
      )
  }
}