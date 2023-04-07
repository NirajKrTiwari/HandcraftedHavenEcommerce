import React from 'react';
import css from '../styles/Menu.module.css';
import Image from 'next/image';
import { urlFor } from '../lib/client';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Menu({ub})
  {
    //get value from url
    const router = useRouter();
    const {value} = router.query;
    console.log(value);

    return(
        <div className={css.container} id="menu">
        <div className={css.heading}>
            <span>Our Menu</span>   
            <span>Menu That Always</span>
            <span>Make you Fall In Love</span>
        </div>
        {value===undefined?<h2 className={css.category}>All</h2>:<h2 className={css.category}>{value}</h2>}
{value!==undefined?
        
        <div className={css.menu}>
            {ub.map((underbelly, id) => {
                const src = urlFor(underbelly.image).url();
                if(underbelly.category.includes(value)){
                return (
                    <div className={css.food} key={id}>
                        <Link href={`./product/${underbelly.slug.current}`}>
                        <div className={css.ImageWrapper}>
                            <Image
                                loader={() => src}
                                src={src}
                                alt=""
                                objectFit="cover"
                                layout="fill"
                            />
                            </div>
                        </Link>
                        <span>{underbelly.name}</span>
                        <span><span style={{color:'var(--themeRed)'}}>Rs. </span>{underbelly.price}</span>
                        </div>
                )
            }
            })
            }
            </div>
:
        <div className={css.menu}>
            {ub.map((underbelly, id) => {
                const src = urlFor(underbelly.image).url();
                return (
                    <div className={css.food} key={id}>
                        <Link href={`./product/${underbelly.slug.current}`}>
                        <div className={css.ImageWrapper}>
                            <Image
                                loader={() => src}
                                src={src}
                                alt=""
                                objectFit="cover"
                                layout="fill"
                            />
                        </div>
                        </Link>
                        <span>{underbelly.name}</span>
                        <span><span style={{color:'var(--themeRed)'}}>Rs. </span>{underbelly.price}</span>
                    </div>
                )
            })
            }
        </div>
  }
    </div>
    )
}