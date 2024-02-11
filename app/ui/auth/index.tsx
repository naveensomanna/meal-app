"use client";

import styles from "./auth.module.css";
import Image from "next/image"
import { UserContext, useUser } from "@auth0/nextjs-auth0/client";


export const Auth = () => {
  const { user }: UserContext = useUser();
  console.log(user)
  return (
    <section className={styles.authHeader}>

      {/* <dialog className={styles.authWrapper} ref={modalRef}>
        <div className={styles.contents}>
          <div className={styles.authContainer}>
            <h1 className={styles.title}>Sign Up</h1>
            <SignUp />
            <p className={styles.info}>By signing up, you agree to our and
              <a> Terms of Service</a> and
              <a> Privacy Policy</a>
            </p>
          </div>
        </div>
      </dialog> */}
      {!user && (
        <>
          <a className={styles.secondaryBtn} href="/api/auth/login">Login/SignUp</a>
        </>
      )}
      {user && (
        <>
          <Image unoptimized
            referrerPolicy="no-referrer"
            src={user?.picture || ""} width={30} height={30} alt="profile"
            className={styles.profile}
          />
          <div className={styles.userInfoWrapper}>
            <h4 className={styles.name}>{user?.given_name}</h4>
            <a href="/api/auth/logout" className={styles.logOut}>
              Log Out
            </a>
          </div>
        </>
      )}
    </section>
  )
}
