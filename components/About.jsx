import Image from 'next/image';
import css from '../styles/About.module.css';
import AboutImage from '../assets/about.jpg';
import { useRouter } from "next/router";

export default function About() {
    const router = useRouter();
    const s1="Handcrafted Haven offers access to reserves of handcrafted artefacts - either richly curated by partnering with empanelled artisan communities and independent artists. Borrowing inspiration from our \"Rajasthani Karigar\" roots, we devote this gateway to the uniformly evolving and ever-inspirational creation of Indian Artisanship.\nOur mission is to offer the global audience a gateway to hand-picked Indian artefacts and incite a conversation dedicated to conserving arts and crafts. Rajasthan is famously known for the \"Treasure trove of Indian handicrafts\". These handicrafts have also earned the country endless love. Hence, we bring your handiworks directly here from Rajasthan under one roof.\nTo bring your home to life, you need decor with outstanding pieces of craftsmanship and art that you can see and feel. Every detail matters – clean designs, meticulous craftsmanship, stunning portraits and artefacts, personal touches and colours, and the highest quality materials. The art is functional, beautiful and has a view. You may never know who created these works of art. However, you know where to order - Handcrafted Haven."
    return (
             <div className={css.container} id="about">
                <div className={css.content}>
                <h1>About</h1>
            <p>
            {s1}
            </p>
            </div>
            <div className={css.img}>
                <Image className={css.image} src={AboutImage} alt='about' width={1500} height={1000}  style={{borderRadius:"0px 50px"}}/>
            </div>
            </div>
    )
}