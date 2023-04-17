import { useState } from "react";
import { useRouter } from "next/router";
import {client} from "../lib/client";
import css from "../styles/Marquee.module.css"
import Link from 'next/link';
import { urlFor } from '../lib/client';
import Image from 'next/image';

export default function Marquee({ub}) {
    const router = useRouter();
    return (
        <div className={css.maylikewrapper}>
        <h2>You May Like</h2>
      <div className={css.marquee}>
     <div className={`${css.maylikecontainer} ${css.track} ${css.menu}`}>
     {ub.map((underbelly, id) => {
                const src = urlFor(underbelly.image).url();
                return (
                    <div className={css.productcard} key={id}>
                        <Link href={`./product/${underbelly.slug.current}`}>
                        <div className={css.productimage}>
                            <Image
                                loader={() => src}
                                src={src}
                                alt=""
                                objectFit="cover"
                                layout="fill"
                                style={{
                                    borderRadius: "2rem",
                                }}
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
     </div>
     </div>

    );
}