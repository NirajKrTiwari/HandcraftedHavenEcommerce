
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Statue from "../assets/s1.png"
import css from "../styles/Category.module.css"
import HandicraftItems from "../assets/Handraft Items.jpg"
import WaterFountains from "../assets/Water Fountains.jpg"
import BuddhaIdols from "../assets/Buddha Idols.jpg"
import WallHangings from "../assets/Wall Hangings.jpg"
import Paintings from "../assets/Paintings.jpg"
import WoodWorks from "../assets/Wood Works.jpg"
import { useState } from 'react';
import List from "../pages/List"
export default function Category()
{
    const [value, setvalue] = useState("")
    console.log(value);

    //send value to other component List
    const router = useRouter();
    if(value)
    {
        router.push({
            pathname: '/List',
            query: { value: value },
            })
    }

    
    return(
        <div className={css.Wrapper}>
            <h2>Category</h2>
            <div className={css.wrapperInternal}>
                <div className={css.category} onClick={()=>{setvalue("Handicraft Items")}}>
                    <div className={css.image} ><Image className={css.image} src={HandicraftItems} height={175} width={175} /></div>
                    <p className={css.categoryName}>
                    Handicraft Items
                    </p>
                </div>
                <div className={css.category} onClick={()=>{setvalue("Water Fountains")}}>
                    <div className={css.image}><Image className={css.image} src={WaterFountains} height={175} width={175} /></div>
                    <p className={css.categoryName}>
                    Water Fountains
                    </p>
                </div>
                <div className={css.category} onClick={()=>{setvalue("Buddha Idols")}}>
                    <div className={css.image}><Image className={css.image} src={BuddhaIdols} height={175} width={175} /></div>
                    <p className={css.categoryName}>
                    Buddha Idols
                    </p>
                </div>
                <div className={css.category} onClick={()=>{setvalue("Wall Hangings")}}>
                    <div className={css.image}><Image className={css.image} src={WallHangings} height={175} width={175} /></div>
                    <p className={css.categoryName}>
                    Wall Hangings
                    </p>
                </div>
                <div className={css.category} onClick={()=>{setvalue("Paintings")}}>
                    <div className={css.image}><Image className={css.image} src={Paintings} height={175} width={175} /></div>
                    <p className={css.categoryName}>
                    Paintings
                    </p>
                </div>
                <div className={css.category} onClick={()=>{setvalue("Wood Works")}}>
                    <div className={css.image}><Image className={css.image} src={WoodWorks} height={175} width={175} /></div>
                    <p className={css.categoryName}>
                        Wood Works
                    </p>
                </div>
            </div>
        </div>
    )
}