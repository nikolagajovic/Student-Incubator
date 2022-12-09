import { HashRouter, Route, Switch } from "react-router-dom";
import { useToken } from "../../context/TokenContext/TokenProvider";
import { HomePage } from "../HomePage/HomePage";
import LandingPage from "../LandingPage/LandingPage";
import { MyProfilePage } from "../MyProfilePage/MyProfilePage";
import { MyProjectsPage } from "../MyProjectsPage/MyProjectsPage";
import PasswordChangePage from "../PasswordChangePage/PasswordChangePage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import UserLoginPage from "../UserLoginPage/UserLoginPage";
import { UserRegistrationPage } from "../UserRegistrationPage/UserRegistrationPage";
import PrivateRoute from "./PrivateRoute";


function Router() {
    

    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <PrivateRoute path="/homePage/" component={ HomePage } />
                    <PrivateRoute path="/projects/" component={ ProjectsPage }  />
                    <PrivateRoute path="/myprojectsPage/" component={ MyProjectsPage }  />
                    <PrivateRoute path="/myprofilePage/" component={ MyProfilePage }  />
                    <Route path="/login/" component={ UserLoginPage }  />
                    <Route path="/registration/" component={ UserRegistrationPage }  />
                    <PrivateRoute path="/changepassword/" component={ PasswordChangePage }  />
                    </Switch>
            </HashRouter>
        </>
    );
}

export default Router;
