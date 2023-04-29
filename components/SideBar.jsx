import React from "react";
import { slide as Menu } from "react-burger-menu";
import css from "../styles/SideBar.module.css";
import Link from 'next/link';
import { useState } from 'react';
// import Icon from '../assets/menu.svg'
import Image from 'next/image'
export default function SideBar(props) {

  var styles = {
    bmBurgerButton: {
      width: '25px',
      height: '25px',
      position: 'relative',
      display: 'flex',
      cursor: 'pointer'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: 'black'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      left: 0,
      top: 0
    },
    bmMenu: {
      background: '#80D0C7',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      background:'white'
      // backgroundimage: 'linear-gradient(160deg, #0093E9 49%, #80D0C7 100%)'
      
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'transparent'
    },
    myclass:
    {
      background: 'transparent'
    }
  }
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }
  const closeSideBar = () => {
    setIsOpen(false); 
  }

  
  return (

    <Menu isOpen={isOpen}
    onOpen={handleIsOpen}
    onClose={handleIsOpen}
     {...props} styles={styles} 
     overlayClassName={"myclass"} 
     customBurgerIcon={<Image alt="" src="data:image/png;base64,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"  width={50} height={50} />}
     >
      <div className={css.container}>
        <ul className={css.sideNav}>
          <Link  href="/"><li  onClick={closeSideBar} className={css.nav }>Home</li></Link>
          <li class={css.dropdown}>
          <Link class={css.dropbtn} href="/List">Menu</Link>
          <div class={css.dropdownContent}>
            <Link href="/List?value=Handicraft+Items">Handicraft Items</Link>
            <Link href="/List?value=Water+Fountains">Water Fountains</Link>
            <Link href="/List?value=Buddha+Idols">Buddha Idols</Link>
            <Link href="/List?value=Wall+Hangings">Wall Hangings</Link>
            <Link href="/List?value=Paintings">Paintings</Link>
            <Link href="/List?value=Wood+Works">Wood Works</Link>
          </div>
        </li>
          <Link  href="/#about"><li  onClick={closeSideBar} className={css.nav}>About Us</li></Link>
        </ul>
      </div>
    </Menu>
  );
};
