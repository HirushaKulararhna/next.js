import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

 export default function Home() {
  return (
   <>
   <h1>Home page</h1>

   <li><Link href = "/" className={styles.Link} >Home</Link></li>
   <li><Link href = "/services" className={styles.Link} >Services</Link></li>
   <li><Link href="/product" className={styles.Link} >Product</Link></li>
   <li><Link href = "/about" className={styles.Link} >About</Link></li>
   <li><Link href = "/contactUs" className={styles.Link} >Contact Us</Link></li>
   <li><Link href = "/about/carrers" className={styles.Link} >Carrers</Link></li>
   <li><Link href = "https://chat.deepseek.com/" target="_blank" className={styles.specialLink} >DeepSeek</Link></li>

   </>
    
  );
}
