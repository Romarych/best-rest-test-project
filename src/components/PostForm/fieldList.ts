import firstName from '../../static/images/first-name.png';
import secondName from '../../static/images/second-name.png';
import country from '../../static/images/country.png';
import phone from '../../static/images/phone.png';
import password from '../../static/images/password.png';
import confirmPassword from '../../static/images/confirm-password.png';
import email from '../../static/images/email.png';

export const fields = [
    {
        name: 'First Name',
        type: 'text',
        icon: firstName
    }, 
    {
        name: 'Second Name',
        type: 'text',
        icon: secondName
    },
    {
        name: 'Country',
        type: 'select',
        icon: country
    },
    {
        name: 'Phone',
        type: 'tel',
        icon: phone
    },
    {
        name: 'Password',
        type: 'password',
        icon: password
    },
    {
        name: 'Confirm Password',
        type: 'password',
        icon: confirmPassword
    },
    {
        name: 'Email',
        type: 'email',
        icon: email
    },
  ];