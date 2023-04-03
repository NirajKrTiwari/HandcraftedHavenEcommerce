import React from 'react';
import css from '../styles/Footer.module.css';
import { UilFacebook, UilGithub, UilInstagram } from '@iconscout/react-unicons';
import Image from 'next/image';
import Logo from "../assets/Logo.png";
import Link from 'next/link';
export default function Footer (){
  return(
    <div className={css.container}>
      <span>Designed & Developed by Niraj</span>
      <div className={css.social}>
        <Link href="https://www.facebook.com/"><a target="_blank"><UilFacebook size={35} /></a></Link>
        <Link href="https://github.com/NirajKrTiwari"><a target="_blank"><UilGithub size={35} /></a></Link>
        <Link href="https://www.instagram.com/"><a target="_blank"><UilInstagram size={35} /></a></Link>
      </div>
      <Link href="/">
        <div className={css.logo}>
          <Image src={Logo} alt=""  width={200} height={110} />
          {/* <span>Under Belly</span> */}
        </div>
      </Link>

    </div>
  )
}
