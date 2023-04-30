import css from '../styles/Header.module.css'
import Image from 'next/image';
import MenuIcon from '../assets/menuIcon.png';
import Link from 'next/link';
import { UilShoppingBag } from '@iconscout/react-unicons';
import { useStore } from "../store/store";
import { useEffect, useState } from 'react';
import { UilReceipt } from '@iconscout/react-unicons';
import SideBar from './SideBar';
import Logo from "../assets/Logo.png"

export default function Header() {
  const items = useStore((state) => state.cart.food.length);
  const CartData = useStore((state) => state.cart);

  const [Order, setOrder] = useState("")
  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  }, [])

  return (
    <div className={css.header} id="App">
      <div className={css.icon}>
        {/* <Image src={MenuIcon} width={40} height={40}/> */}
        <SideBar />
      </div>
      <Link href="/">
        <div className={css.logo}>
          <Image src={Logo} alt="" width={120} height={80}
          // style={{
          //   borderRadius: "50%",
          //   border: "2px solid var(--themeRed)",
          //   padding: "5px"
          // }}
          />
          {/* <h2>Handcrafted Haven</h2> */}
        </div>
      </Link>
      <ul className={css.menu}>
        <Link href="/"><li>Home</li></Link>

        <li className={css.dropdown}>
          <Link className={css.dropbtn} href="/List">Products</Link>
          <div className={css.dropdownContent}>
            <Link href="/List?value=Handicraft+Items">Handicraft Items</Link>
            <Link href="/List?value=Water+Fountains">Water Fountains</Link>
            <Link href="/List?value=Buddha+Idols">Buddha Idols</Link>
            <Link href="/List?value=Wall+Hangings">Wall Hangings</Link>
            <Link href="/List?value=Paintings">Paintings</Link>
            <Link href="/List?value=Wood+Works">Wood Works</Link>
          </div>
        </li>

        <Link href="/about"><li>About</li></Link>
      </ul>

      <div className={css.rightSide}>
        <Link href='/cart'>
          <div className={css.cart}>
            <UilShoppingBag size={35} color="#2E2E2E" />
            <div className={css.badge}>{items}</div>
          </div>
        </Link>

        {Order && (
          <Link href={`/order/${Order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color="#2E2E2E" />
              {Order != "" && (
                <div className={css.badge}>1</div>
              )}
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}