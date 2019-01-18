import React from "react";
import LogoFacebook from "react-ionicons/lib/LogoFacebook"
import styles from "./styles.scss";


export const LoginForm = props => (
    <div className={styles.formComponent} >
        <form className={styles.form} >
            <input type="text" placeholder="Phone number, username, or email" className={styles.textInput} />
            <input type="password" placeholder="Password" className={styles.textInput}/>
            <input type="submit" value="Log in" className={styles.button}/>
        </form>
        <span className={styles.divider}>or</span>
        <span>
            <LogoFacebook fontSize="20px" color="#385185" />
            Log in with Facebook
        </span>
        <span className={styles.forgotLink}>Forgot password?</span>
    </div>
);

export const SignupForm = props => (
    <div className={styles.formComponent}>
        <button className={styles.button}>
            <LogoFacebook fontSize="20px" color="#385185" color="white" />
            Log in with Facebook
        </button>
        <span className={styles.divider} >or</span>
        <form className={styles.form} >
            <input type="text" placeholder="Mobile Number or Email" className={styles.textInput} />
            <input type="text" placeholder="Full Name" className={styles.textInput} />
            <input type="username" placeholder="Username" className={styles.textInput} />
            <input type="password" placeholder="Password" className={styles.textInput} />
            <input type="submit" value="Sign up" className={styles.button} />
        </form>
        <p className={styles.terms} >
            By signing up, you agree to our <span>Terms, Data Policy</span> and <span>Cookies Policy.</span>
        </p>
    </div>
);
