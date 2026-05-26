import { useState } from "react";
import SingIn from "./SingIn";
import SingUP from "./SingUp";

function Auth() {
    // this is default singin page
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div>
            {isLogin ? (
                // if islogin true then singin page
                <SingIn toggleAuth={() => setIsLogin(false)} />
            ) : (
                //others SingUP page show
                <SingUP toggleAuth={() => setIsLogin(true)} />
            )}
        </div>
    );
}

export default Auth;