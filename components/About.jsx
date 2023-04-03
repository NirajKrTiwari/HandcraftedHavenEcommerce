import Image from 'next/image';
import css from '../styles/About.module.css';
import AboutImage from '../assets/about.jpg';
import { useRouter } from "next/router";

export default function About() {
    const router = useRouter();
    return (
            
            <div className={css.container} id="about">
                <div className={css.content}>
                <h1>About</h1>
            <p>
                Welcome to our restaurant, where we believe that great food brings people together. We are a family-owned and operated establishment that has been serving delicious meals to our community for over 6 years.<br/><br/>
                Our chefs are passionate about creating dishes that are both flavorful and visually stunning. We use only the freshest, highest quality ingredients in all of our recipes. Whether you are in the mood for a juicy steak, a fresh salad, or a decadent dessert, we have something to please every palate.
                {/* <br/><br/> */}
                {/* At our restaurant, we also believe in providing exceptional customer service. Our friendly and knowledgeable staff will ensure that your dining experience is nothing short of extraordinary. We pride ourselves on creating a warm and inviting atmosphere where you can relax, unwind, and enjoy a memorable meal.
                Thank you for considering our restaurant for your next dining experience. We look forward to serving you soon! */}
            </p>
            </div>
            <div className={css.img}>
                <Image className={css.image} src={AboutImage} alt='about' width={1500} height={1000} />
            </div>
            </div>
    )
}