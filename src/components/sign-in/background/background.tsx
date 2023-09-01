import background from '../../../../public/assets/login.png';
import {StyledSignInBackground} from "../../../components/sign-in/background/component.styled";

export default function SignInBackground () {
    return (
        <StyledSignInBackground style={{backgroundImage: `url(${background.src})`}}></StyledSignInBackground>
    )
}