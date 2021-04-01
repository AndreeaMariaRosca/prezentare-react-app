import BoxContainer from './BoxContainer';
import BoxWrapper from './BoxWrapper'
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
export default function Contact() {

    return(
        <div>
            <BoxContainer>
                <BoxWrapper>
                <p align='center'>
                <MailIcon fontSize ='large'></MailIcon>
                    : andreea.rosca204@gmail.com
                </p> 
                <p align='center'>
                    <PhoneAndroidIcon fontSize ='large'></PhoneAndroidIcon>
                    : 0722655793
                </p>
                <p align='center'>
                    <GitHubIcon fontSize='large'></GitHubIcon>
                    <a href="https://github.com/AndreeaMariaRosca">: https://github.com/AndreeaMariaRosca</a>
                </p>
                <p align='center'>
                    <LinkedInIcon fontSize='large'></LinkedInIcon>
                    <a href="https://www.linkedin.com/in/andreea-maria-ro%C8%99ca-38a0161b4/?locale=en_US">: https://www.linkedin.com/andreea-maria-rosca</a>
                </p>
                </BoxWrapper>
            </BoxContainer>
        </div>
    );
}