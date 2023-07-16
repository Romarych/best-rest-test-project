import React, { FC, useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { fields } from './fieldList';
import { countries, countriesPhone } from './countryList';
import { FormPropsType, FormType } from '../types';

const PostForm: FC<FormPropsType> = (isOption) => {
  const [isCountry, setIsCountry] = useState<boolean>(false);
  const [isErrorCountry, setIsErrorCountry] = useState<boolean>(false);
  const [isTerms, setIsTerms] = useState<boolean>(false);
  const [isPhone, setIsPhone] = useState<boolean>(false);
  const [isCheckbox, stIsCheckbox] = useState<boolean>(true);
  const [select, setSelect] = useState<string>('');
  const [index, setIndex] = useState<number>();
  const [countryPhone, setCountryPhone] = useState<string>('');

  useEffect(() => {
    const phone = countriesPhone.find((e, i) => index == i);
    phone && setCountryPhone(`+${phone}`);
  }, [index]);

  useEffect(() => {
    setIsCountry(false);
  }, [isOption]);

  const formValidate = (values: FormType) => {
    const errors: any = {};

    if (values.firstName.length < 3) {
      if (!values.firstName) {
        errors.firstName = 'Fill in the field';
      } else {
        errors.firstName = 'The name must be more than 2 characters';
      }
    }

    if (values.secondName.length < 3) {
      if (!values.secondName) {
        errors.secondName = 'Fill in the field';
      } else {
        errors.secondName = 'The name must be more than 2 characters';
      }
    }

    if (!values.password) {
      errors.password = 'Fill in the field';
    } else if (!/^(?=.*[a-z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{3,30}$/i.test(values.password)) {
      errors.password = 'Password must have 1 letter, 1 number and one symbol';
    }

    if (!values.email) {
      errors.email = 'Fill in the field';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Email is not correct';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Fill in the field';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Password does not match';
    }

    return errors;
  };

  const submit = () => {
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{ firstName: '', password: '', email: '', secondName: '', confirmPassword: '' }}
        validate={formValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form className="grid md:grid-cols-2 gap-6">
            {fields.map(field => {
              const name = field.name.replace(' ', '').replace(/(?:^|\s)(\S)/ug, m => m.toLowerCase())
              return <div key={field.name}>
                <div className="relative mb-3">
                  {field.type !== 'select' ? <div>
                    {field.type !== 'tel' ? <>
                      <Field
                        type={field.type}
                        name={name}
                        className="peer m-0 relative block h-[56px] w-full rounded border border-solid pl-[50px] border-white bg-black-2 hover:border-green-1 bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-300 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                        id="floatingInput"
                        placeholder={field.name}
                      />
                      <ErrorMessage name={name} component="div"
                        className="w-full absolute -bottom-6 whitespace-nowrap left-0 text-red-1 mx-auto text-[10px] font-medium text-right" />
                    </> :
                      <>
                        <input
                          type={field.type}
                          onClick={() => setIsPhone(true)}
                          value={countryPhone}
                          onChange={e => setCountryPhone(e.target.value)}
                          name={name}
                          className="peer m-0 relative block h-[56px] w-full rounded border border-solid pl-[50px] border-white bg-black-2 hover:border-green-1 bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-300 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                          id="floatingInput"
                          placeholder={field.name}
                        />
                        {!countryPhone && isPhone ? <div className="w-full absolute text-[10px] -bottom-6 left-0 text-red-1 mx-auto font-medium text-right">Fill in the field</div> : ''}
                      </>
                    }
                    <img className='h-6 w-6 absolute top-[14px] left-[14px]' src={field.icon} alt={field.name} />
                    <label
                      htmlFor="floatingInput"
                      className="pointer-events-none absolute left-[36px] top-0 origin-[0_0] border border-solid border-transparent px-3 py-3 text-gray-1 peer-focus:text-green-1 transition-[opacity,_transform] duration-300 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:text-green-1 peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none text-lg"
                    >{field.name}</label>
                  </div> :
                    <div key={field.name}>
                      <div onClick={(e) => {
                        e.stopPropagation();
                        setIsCountry(true);
                        setIsErrorCountry(true);
                      }}
                        id="floatingSelect" className='peer m-0 relative block h-[56px] w-full rounded border border-solid pl-[50px] border-white bg-black-2 hover:border-green-1 bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-300 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]'>
                        <div className='text-left text-base font-normal leading-tight'>{select}</div>
                        <div className={`border-l-2 border-b-2 border-white absolute right-0 top-5 h-2.5 w-2.5 inline-block ${isCountry ? 'rotate-[135deg] top-6' : '-rotate-45'} duration-300 mr-4`} />
                        {isErrorCountry && !isCountry && !select ? <div className="w-full absolute -bottom-6 left-0 text-red-1 mx-auto text-[10px] font-medium text-right">Fill in the field</div> : ''}
                      </div>
                      {isCountry && <ul className='w-full h-[159px] overflow-auto absolute z-20 bg-white block rounded-md text-left cursor-pointer'>
                        {countries.map((country, index) => <li key={country} onClick={() => {
                          setSelect(country);
                          setIndex(index);
                        }}
                          className='hover:text-black-3 hover:pl-8 duration-300 pl-5 text-gray-2'>{country}</li>)}
                      </ul>}
                      <img className='h-6 w-6 absolute top-[14px] left-[14px]' src={field.icon} alt={field.name} />
                      <label
                        htmlFor="floatingSelect"
                        className={`${(select || isCountry) && 'peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:text-green-1 peer-[:not(:placeholder-shown)]:scale-[0.85]'} pointer-events-none absolute left-[36px] top-0 origin-[0_0] border border-solid border-transparent px-3 py-3 text-gray-1 peer-focus:text-green-1 transition-[opacity,_transform] duration-300 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary motion-reduce:transition-none text-lg`}
                      >{field.name}</label>
                    </div>
                  }
                </div>
              </div>
            })}
            <div className='flex md:items-center text-sm font-light h-[56px]'>
              <div>
                <label className="select-none container block relative cursor-pointer text-sm text-left">
                  <input onClick={() => setIsTerms(!isTerms)} className="absolute opacity-0 left-0 top-0 cursor-pointer" type="checkbox" />
                  <span className={`h-5 w-5 checkmark absolute top-0 left-0 ${isCheckbox ? 'bg-transparent border border-green-1' : 'bg-red-1'} rounded-sm`}></span>
                </label>
                <div className='pl-8'>I agree to the <a className='text-green-1 underline' href="#">Terms & Conditions</a></div>
              </div>
            </div>
            <button onClick={() => {
              stIsCheckbox(isTerms);
              setIsPhone(true);
            }}
              className='bg-green-1 w-full md:w-[165px] h-[56px] hover:bg-transparent duration-300 border focus:bg-green-1 focus:text-black-1 border-green-1 hover:text-green-1 rounded-md font-medium text-black-1 leading-6 text-lg' type='submit'>Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostForm;