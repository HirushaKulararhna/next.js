import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <h1>Home page</h1>

   <li><Link href = "/">Home</Link></li>
   <li><Link href = "/services">Services</Link></li>
   <li><Link href="/product">Product</Link></li>
   <li><Link href = "/about">About</Link></li>
   <li><Link href = "/contactUs">Contact Us</Link></li>
   <li><Link href = "/about/carrers">Carrers</Link></li>
   <li><Link href = "https://chat.deepseek.com/" target="_blank">DeepSeek</Link></li>

   </>
    
  );
}
