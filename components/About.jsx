import Image from 'next/image';
import css from '../styles/About.module.css';
import AboutImage from '../assets/about.jpg';
import { useRouter } from "next/router";
import Layout from './Layout';

export default function About() {
    const router = useRouter();
    return (
             <div className={css.container} id="about">
                <div className={css.content}>
                <h1>About</h1>
            <p>
            hii
            </p>
            </div>
            <div className={css.img}>
                <Image className={css.image} src={AboutImage} alt='about' width={1500} height={1000}  style={{borderRadius:"0px 50px"}}/>
            </div>
            </div>
    )
}