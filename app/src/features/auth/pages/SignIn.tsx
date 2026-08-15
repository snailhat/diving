import {
  Divider,
  FacebookSignInButton,
  GoogleSignInButton,
  OAuthScreen,
  SignInAuthForm,
} from "@firebase-oss/ui-react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <OAuthScreen>
      <SignInAuthForm onSignIn={() => navigate("/")} />
      <Divider />
      <GoogleSignInButton onSignIn={() => navigate("/")} />
      <FacebookSignInButton onSignIn={() => navigate("/")} />
    </OAuthScreen>
  );
}
