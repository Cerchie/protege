import React from "react";
import backgroundImage from "../assets/images/bg-pattern.png";

import { string, object } from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import RadioButton from "../components/form/RadioInput";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const schema = object().shape({
  jobTitle: string().required("Job title is a required field."),
  roleFocus: string().required("Please select a focus area."),
  positionType: string().required("Please select a position type."),
  jobDescription: string().required("Please give a description of the job and responsibilities."),
  howToApply: string().required("Please provide a way for candidates to apply."),
  companyName: string().required("Please enter a company name."),
  companyWebsite: string().required("Please enter a company website."),
  companyEmail: string().required("Please enter a company email."),
  companyDescription: string().required("Please give a brief description of the company and culture.")
});

const PostAJob = () => {
  return (
    <div className="container mx-auto mt-6 md:mt-12 p-2">
      <h1 className="text-lg md:text-2xl text-blue-500 font-bold text-center leading-snug">
        Inexperienced doesn’t mean incapable. <br />
        Fill your role with ambition.
      </h1>
      <div className="my-6">
        <svg
          width="216"
          height="52"
          viewBox="0 0 216 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.212 41.562H3.668C4.37733 41.562 4.93267 41.38 5.334 41.016C5.73533 40.6427 5.936 40.1713 5.936 39.602C5.936 38.9673 5.73067 38.4633 5.32 38.09C4.90933 37.7167 4.326 37.53 3.57 37.53H2.212V41.562ZM1.078 36.564H3.556C4.648 36.564 5.50667 36.8487 6.132 37.418C6.76667 37.978 7.084 38.706 7.084 39.602C7.084 40.442 6.77133 41.142 6.146 41.702C5.52067 42.2527 4.69467 42.528 3.668 42.528H2.212V46H1.078V36.564ZM11.5349 46.126C10.5176 46.126 9.71024 45.7853 9.11291 45.104C8.52491 44.4133 8.23091 43.5453 8.23091 42.5C8.23091 41.4453 8.53424 40.568 9.14091 39.868C9.75691 39.1587 10.5549 38.804 11.5349 38.804C12.6082 38.804 13.4342 39.1493 14.0129 39.84C14.6009 40.5307 14.8949 41.408 14.8949 42.472C14.8949 43.5267 14.5962 44.3993 13.9989 45.09C13.4016 45.7807 12.5802 46.126 11.5349 46.126ZM11.5349 39.784C10.8629 39.784 10.3356 40.0453 9.95291 40.568C9.57024 41.0907 9.37891 41.73 9.37891 42.486C9.37891 43.2233 9.57491 43.8533 9.96691 44.376C10.3589 44.8893 10.8816 45.146 11.5349 45.146C12.2442 45.146 12.7902 44.894 13.1729 44.39C13.5556 43.8767 13.7469 43.242 13.7469 42.486C13.7469 41.702 13.5649 41.058 13.2009 40.554C12.8369 40.0407 12.2816 39.784 11.5349 39.784ZM20.3762 39.14V40.19C19.9469 39.9287 19.3589 39.798 18.6122 39.798C18.2389 39.798 17.9402 39.8867 17.7162 40.064C17.5016 40.232 17.3942 40.4513 17.3942 40.722C17.3942 40.89 17.4269 41.0393 17.4922 41.17C17.5576 41.2913 17.6836 41.4127 17.8702 41.534C18.0662 41.6553 18.2062 41.7393 18.2902 41.786C18.3836 41.8233 18.5796 41.9073 18.8782 42.038C19.4756 42.2807 19.9422 42.556 20.2782 42.864C20.6142 43.172 20.7822 43.5873 20.7822 44.11C20.7822 44.7167 20.5676 45.1973 20.1382 45.552C19.7182 45.9067 19.1396 46.084 18.4022 46.084C17.5436 46.084 16.8482 45.9393 16.3162 45.65V44.572C16.9416 44.9453 17.6136 45.132 18.3322 45.132C18.7616 45.132 19.0882 45.048 19.3122 44.88C19.5362 44.712 19.6482 44.4833 19.6482 44.194C19.6482 43.858 19.5222 43.5967 19.2702 43.41C19.0276 43.2233 18.6169 43.0133 18.0382 42.78C17.5062 42.5747 17.0769 42.318 16.7502 42.01C16.4329 41.702 16.2742 41.2867 16.2742 40.764C16.2742 40.176 16.4936 39.7093 16.9322 39.364C17.3802 39.0093 17.9356 38.832 18.5982 38.832C19.3356 38.832 19.9282 38.9347 20.3762 39.14ZM23.8078 39.798V43.956C23.8078 44.712 24.1624 45.09 24.8718 45.09C25.2358 45.09 25.5578 44.9827 25.8378 44.768V45.818C25.5298 45.986 25.1844 46.07 24.8018 46.07C23.4018 46.07 22.7018 45.356 22.7018 43.928V39.798H21.5678V38.902H22.7018V37.138H23.8078V38.902H25.7678V39.798H23.8078Z"
            fill="#394056"
          />
          <path
            d="M77.212 41.562H78.668C79.3773 41.562 79.9327 41.38 80.334 41.016C80.7353 40.6427 80.936 40.1713 80.936 39.602C80.936 38.9673 80.7307 38.4633 80.32 38.09C79.9093 37.7167 79.326 37.53 78.57 37.53H77.212V41.562ZM76.078 36.564H78.556C79.648 36.564 80.5067 36.8487 81.132 37.418C81.7667 37.978 82.084 38.706 82.084 39.602C82.084 40.442 81.7713 41.142 81.146 41.702C80.5207 42.2527 79.6947 42.528 78.668 42.528H77.212V46H76.078V36.564ZM84.7429 38.902V40.148C85.1162 39.2707 85.7602 38.832 86.6749 38.832C86.8429 38.832 86.9736 38.8413 87.0669 38.86V39.952C86.8709 39.8867 86.6702 39.854 86.4649 39.854C85.9702 39.854 85.5596 40.0827 85.2329 40.54C84.9062 40.9973 84.7429 41.5247 84.7429 42.122V46H83.6369L83.6509 38.902H84.7429ZM92.7393 41.996V41.716C92.7393 41.128 92.5806 40.6613 92.2633 40.316C91.946 39.9613 91.5073 39.784 90.9473 39.784C90.4153 39.784 89.9626 39.9753 89.5893 40.358C89.216 40.7407 88.9966 41.2867 88.9313 41.996H92.7393ZM93.3973 44.6V45.636C92.8466 45.9253 92.1746 46.07 91.3813 46.07C90.308 46.07 89.44 45.7433 88.7773 45.09C88.124 44.4273 87.7973 43.5547 87.7973 42.472C87.7973 41.3427 88.0913 40.4513 88.6793 39.798C89.2673 39.1447 90.0233 38.818 90.9473 38.818C91.834 38.818 92.5386 39.1027 93.0613 39.672C93.584 40.2413 93.8453 41.0487 93.8453 42.094C93.8453 42.3927 93.822 42.668 93.7753 42.92H88.9313C89.0153 43.62 89.2813 44.1567 89.7293 44.53C90.1773 44.9033 90.7653 45.09 91.4933 45.09C92.2866 45.09 92.9213 44.9267 93.3973 44.6ZM97.3378 46L94.8598 38.902H96.0078L96.9878 41.898L98.0238 45.132C98.1078 44.7307 98.4578 43.6527 99.0738 41.898L100.082 38.902H101.23L98.6958 46H97.3378ZM102.656 46V38.902H103.762V46H102.656ZM102.684 37.194C102.553 37.054 102.488 36.8813 102.488 36.676C102.488 36.4707 102.553 36.298 102.684 36.158C102.824 36.018 102.997 35.948 103.202 35.948C103.407 35.948 103.58 36.018 103.72 36.158C103.86 36.298 103.93 36.4707 103.93 36.676C103.93 36.8813 103.86 37.054 103.72 37.194C103.58 37.3247 103.407 37.39 103.202 37.39C102.997 37.39 102.824 37.3247 102.684 37.194ZM110.39 41.996V41.716C110.39 41.128 110.231 40.6613 109.914 40.316C109.596 39.9613 109.158 39.784 108.598 39.784C108.066 39.784 107.613 39.9753 107.24 40.358C106.866 40.7407 106.647 41.2867 106.582 41.996H110.39ZM111.048 44.6V45.636C110.497 45.9253 109.825 46.07 109.032 46.07C107.958 46.07 107.09 45.7433 106.428 45.09C105.774 44.4273 105.448 43.5547 105.448 42.472C105.448 41.3427 105.742 40.4513 106.33 39.798C106.918 39.1447 107.674 38.818 108.598 38.818C109.484 38.818 110.189 39.1027 110.712 39.672C111.234 40.2413 111.496 41.0487 111.496 42.094C111.496 42.3927 111.472 42.668 111.426 42.92H106.582C106.666 43.62 106.932 44.1567 107.38 44.53C107.828 44.9033 108.416 45.09 109.144 45.09C109.937 45.09 110.572 44.9267 111.048 44.6ZM114.694 46L112.51 38.902H113.686L114.372 41.254C114.615 42.0753 114.815 42.794 114.974 43.41C115.142 44.0167 115.249 44.4227 115.296 44.628L115.366 44.922C115.506 44.3247 115.847 43.0973 116.388 41.24L117.06 38.902H118.236L118.922 41.24L119.972 44.936C120.103 44.3853 120.462 43.1533 121.05 41.24L121.764 38.902H122.898L120.658 46H119.3L118.628 43.676L117.648 40.134C117.508 40.7313 117.191 41.912 116.696 43.676L116.052 46H114.694Z"
            fill="#394056"
          />
          <path
            d="M175.812 36.942V38.104C175.401 37.8893 175.033 37.7353 174.706 37.642C174.379 37.5487 173.95 37.502 173.418 37.502C172.401 37.502 171.551 37.8473 170.87 38.538C170.198 39.2287 169.862 40.1293 169.862 41.24C169.862 42.3973 170.198 43.3213 170.87 44.012C171.542 44.7027 172.433 45.048 173.544 45.048C174.44 45.048 175.205 44.81 175.84 44.334V45.524C175.261 45.916 174.468 46.112 173.46 46.112C172.041 46.112 170.889 45.678 170.002 44.81C169.115 43.9327 168.672 42.7427 168.672 41.24C168.672 39.8213 169.12 38.6687 170.016 37.782C170.921 36.886 172.055 36.438 173.418 36.438C174.398 36.438 175.196 36.606 175.812 36.942ZM180.328 46.126C179.311 46.126 178.503 45.7853 177.906 45.104C177.318 44.4133 177.024 43.5453 177.024 42.5C177.024 41.4453 177.327 40.568 177.934 39.868C178.55 39.1587 179.348 38.804 180.328 38.804C181.401 38.804 182.227 39.1493 182.806 39.84C183.394 40.5307 183.688 41.408 183.688 42.472C183.688 43.5267 183.389 44.3993 182.792 45.09C182.195 45.7807 181.373 46.126 180.328 46.126ZM180.328 39.784C179.656 39.784 179.129 40.0453 178.746 40.568C178.363 41.0907 178.172 41.73 178.172 42.486C178.172 43.2233 178.368 43.8533 178.76 44.376C179.152 44.8893 179.675 45.146 180.328 45.146C181.037 45.146 181.583 44.894 181.966 44.39C182.349 43.8767 182.54 43.242 182.54 42.486C182.54 41.702 182.358 41.058 181.994 40.554C181.63 40.0407 181.075 39.784 180.328 39.784ZM186.397 38.902V40.134C186.817 39.2473 187.564 38.804 188.637 38.804C189.328 38.804 189.879 39.014 190.289 39.434C190.7 39.854 190.905 40.414 190.905 41.114V46H189.799V41.408C189.799 40.8853 189.664 40.4887 189.393 40.218C189.132 39.938 188.787 39.798 188.357 39.798C187.825 39.798 187.363 40.0033 186.971 40.414C186.589 40.8247 186.397 41.394 186.397 42.122V46H185.305V38.902H186.397ZM198.074 38.902V46H196.968V39.798H194.588V46H193.482V39.798H192.264V38.902H193.482V38.244C193.482 37.5533 193.668 37.0073 194.042 36.606C194.415 36.2047 194.942 36.004 195.624 36.004C196.286 36.004 196.935 36.1627 197.57 36.48V37.502C196.916 37.166 196.282 36.998 195.666 36.998C194.947 36.998 194.588 37.418 194.588 38.258V38.902H198.074ZM201.149 38.902V40.148C201.522 39.2707 202.166 38.832 203.081 38.832C203.249 38.832 203.38 38.8413 203.473 38.86V39.952C203.277 39.8867 203.076 39.854 202.871 39.854C202.376 39.854 201.966 40.0827 201.639 40.54C201.312 40.9973 201.149 41.5247 201.149 42.122V46H200.043L200.057 38.902H201.149ZM205.716 38.902V40.05C206.108 39.2193 206.775 38.804 207.718 38.804C208.81 38.804 209.5 39.266 209.79 40.19C209.995 39.742 210.28 39.4013 210.644 39.168C211.017 38.9253 211.432 38.804 211.89 38.804C212.627 38.804 213.182 39.014 213.556 39.434C213.929 39.854 214.116 40.4187 214.116 41.128V46H213.01V41.408C213.01 40.3347 212.557 39.798 211.652 39.798C211.204 39.798 210.802 40.0033 210.448 40.414C210.093 40.8153 209.916 41.3847 209.916 42.122V46H208.81V41.408C208.81 40.3347 208.357 39.798 207.452 39.798C207.004 39.798 206.602 40.0033 206.248 40.414C205.893 40.8153 205.716 41.3847 205.716 42.122V46H204.624V38.902H205.716Z"
            fill="#394056"
          />
          {/* Not Dynamic Yet */}
          <circle cx="14" cy="12" r="12" fill="#54AF8E" />
          <circle cx="99" cy="12" r="12" fill="#54AF8E" fillOpacity="0.5" />
          <circle cx="192" cy="12" r="12" fill="#54AF8E" fillOpacity="0.5" />
          <path
            d="M10.7611 10.836V8.154L14.0731 6.228H16.3411V18H13.7311V9.054L10.7611 10.836Z"
            fill="white"
          />
          <path
            d="M98.7032 15.768H102.879V18H95.0312V15.966C96.3272 15.078 97.4672 14.094 98.4512 13.014C99.4472 11.934 99.9452 10.98 99.9452 10.152C99.9452 9.648 99.7952 9.252 99.4952 8.964C99.1952 8.664 98.7392 8.514 98.1272 8.514C97.1072 8.514 96.1412 8.892 95.2292 9.648V7.11C95.6252 6.822 96.1412 6.576 96.7772 6.372C97.4132 6.168 98.0372 6.066 98.6492 6.066C99.8732 6.066 100.845 6.39 101.565 7.038C102.297 7.674 102.663 8.568 102.663 9.72C102.663 11.796 101.343 13.812 98.7032 15.768Z"
            fill="white"
          />
          <path
            d="M188.657 9.18V6.732C189.545 6.288 190.439 6.066 191.339 6.066C192.611 6.066 193.619 6.372 194.363 6.984C195.107 7.584 195.479 8.37 195.479 9.342C195.479 10.674 194.873 11.592 193.661 12.096C195.029 12.42 195.713 13.308 195.713 14.76C195.713 15.768 195.329 16.578 194.561 17.19C193.805 17.79 192.743 18.09 191.375 18.09C190.091 18.09 189.029 17.886 188.189 17.478V14.958C189.149 15.486 190.139 15.75 191.159 15.75C191.747 15.75 192.203 15.624 192.527 15.372C192.863 15.12 193.031 14.802 193.031 14.418C193.031 13.542 192.221 13.104 190.601 13.104H189.971V10.944H190.601C191.237 10.944 191.759 10.836 192.167 10.62C192.575 10.404 192.779 10.08 192.779 9.648C192.779 8.82 192.239 8.406 191.159 8.406C190.331 8.406 189.497 8.664 188.657 9.18Z"
            fill="white"
          />
          <line
            opacity="0.5"
            x1="26"
            y1="12.5"
            x2="87"
            y2="12.5"
            stroke="#54AF8E"
          />
          <line
            opacity="0.5"
            x1="111"
            y1="12.5"
            x2="180"
            y2="12.5"
            stroke="#54AF8E"
          />
        </svg>
      </div>

      <div className="lg:w-3/5 mx-auto">
        <Formik
          initialValues={{
            jobTitle: "",
            roleFocus: "",
            positionType: "",
            jobDescription: "",
            howToApply: "",
            companyName: "",
            companyWebsite: "",
            companyEmail: "",
            companyDescription: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
          validationSchema={schema}
        >
          {({ isSubmitting, values, errors, setFieldValue }) => {
            console.log({ values, errors });
            return (
              <Form>
                <div className="shadow-md border-t-4 border-teal-500">
                  <h2
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                    className="bg-cover text-blue-500 font-bold p-4 bg-blue-100 text-xl"
                  >
                    About the Role
                  </h2>
                  <div className="p-4">
                    <div className="mb-3 flex flex-col">
                      <label
                        htmlFor="job-title"
                        className="text-blue-500 font-bold mb-2"
                      >
                        Job Title
                      </label>
                      <Field
                        id="job-title"
                        name="jobTitle"
                        className="input"
                        type="text"
                        autocomplete="off"
                      ></Field>
                      <ErrorMessage
                        name="jobTitle"
                        component="span"
                        className="input-error"
                      />
                    </div>

                    <div className="md:flex">
                      <div className="flex flex-col md:w-1/2 mb-3 md:mr-6">
                        <label
                          htmlFor="role-focus"
                          className="text-blue-500 font-bold"
                        >
                          Role Focus
                        </label>

                        <span className="text-blue-200 text-xs mb-2 tracking-tight ">
                          Frontend, Backend, Full-Stack
                        </span>

                        <Field
                          id="role-focus"
                          name="roleFocus"
                          className="input"
                          as="select"
                        >
                          <option value="" className="text-gray-300">Select One..</option>
                          <option value="frontend">Frontend</option>
                          <option value="backend">Backend</option>
                          <option value="full-stack">Full-Stack</option>
                        </Field>
                        <ErrorMessage
                          name="roleFocus"
                          component="span"
                          className="input-error"
                        />
                      </div>

                      <div className="flex flex-col md:w-1/2 mb-3 md:mb-0">
                        <span
                          htmlFor="positionType"
                          className="text-blue-500 font-bold mb-2"
                        >
                          Position Type
                        </span>
                        <div className="flex justify-between">
                          <Field id="position-type" name="positionType">
                            {({ field }) => (
                              <>
                                <RadioButton
                                  name="type"
                                  type="radio"
                                  label="Full-time"
                                  id="full-time"
                                  value="Full-time"
                                />
                                <RadioButton
                                  name="type"
                                  type="radio"
                                  label="Part-time"
                                  id="part-time"
                                  value="Part-time"
                                />
                                <RadioButton
                                  name="type"
                                  type="radio"
                                  label="Contract"
                                  id="contract"
                                  value="Contract"
                                />
                              </>
                            )}
                          </Field>
                          <ErrorMessage
                            name="positionType"
                            component="span"
                            className="input-error"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col mb-3">
                      <label
                        htmlFor="job-description"
                        className="text-blue-500 font-bold mb-2"
                      >
                        Job Description
                      </label>
                        <Field
                            id="jobDescription"
                            name="jobDescription"
                            className="input"
                        >
                          {({field}) => 
                            <ReactQuill value={field.value} onChange={field.onChange(field.name)}/>
                          }
                        </Field>
                        <ErrorMessage
                          name="jobDescription"
                          component="span"
                          className="input-error"
                        />
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor="how-to-apply"
                        className="text-blue-500 font-bold"
                      >
                        How To Apply
                      </label>
                      <span className="text-blue-200 text-xs tracking-tight mb-2">
                        Email Address or link to 3rd party application page
                      </span>
                      <Field
                        id="how-to-apply"
                        name="howToApply"
                        className="input"
                        type="text"
                      ></Field>
                      <ErrorMessage
                        name="howToApply"
                        component="span"
                        className="input-error"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-16 shadow-md border-t-4 border-teal-500">
                  <div>
                    <h2
                      style={{ backgroundImage: `url(${backgroundImage})` }}
                      className="bg-cover text-blue-500 p-4 font-bold bg-blue-100 text-xl"
                    >
                      About the Company
                    </h2>

                    <div className="p-4">
                      <div className="md:flex mb-3">
                        <div className="flex flex-col md:w-1/2 md:mr-6 mb-3 md:mb-0">
                          <label
                            htmlFor="companyName"
                            className="text-blue-500 font-bold mb-2"
                          >
                            Company Name
                          </label>
                          <Field
                            id="companyName"
                            name="companyName"
                            className="input"
                            title="name of the company"
                            type="text"
                          />
                          <ErrorMessage
                            name="companyName"
                            component="span"
                            className="input-error"
                          />
                        </div>

                        <div className="flex flex-col md:w-1/2">
                          <label
                            htmlFor="companyWebsite"
                            className="text-blue-500 font-bold mb-2"
                          >
                            Company Website
                          </label>
                          <Field
                            id="companyWebsite"
                            name="companyWebsite"
                            className="input"
                            title="url of the company"
                            type="url"
                          />
                          <ErrorMessage
                            name="companyWebsite"
                            component="span"
                            className="input-error"
                          />
                        </div>
                      </div>
                      <div className="md:flex">
                        <div className="flex flex-col md:w-1/2 md:mr-6 mb-3">
                          <label
                            htmlFor="companyEmail"
                            className="text-blue-500 font-bold mb-2"
                          >
                            Email
                          </label>
                          <Field
                            id="companyEmail"
                            name="companyEmail"
                            className="input"
                            type="email"
                          />
                          <ErrorMessage
                            name="companyEmail"
                            component="span"
                            className="input-error"
                          />
                        </div>

                        <div className="flex flex-col md:w-1/2 mb-3">
                          <span className="text-blue-500 font-bold mb-2">
                            Logo
                          </span>

                          <div className="md:flex">
                            <div className="flex flex-col md:w-1/2 md:pr-3">
                              <label
                                htmlFor="companyLogo"
                                className="h-24 w-full mb-2 border border-dashed border-blue-300 text-center"
                              >
                                <span className="text-teal-500 align-middle text-2xl">
                                  +
                                </span>
                                <input
                                  id="companyLogo"
                                  name=""
                                  className="hidden"
                                  type="file"
                                  accept="image/*"
                                ></input>
                              </label>
                            </div>
                            <div className="flex flex-col md:w-1/2">
                              <span className="text-blue-200 text-xs tracking-tight">
                                Please provide a .png format of your companies
                                logo to be displayed with your job opening
                                listing.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="companyDescription"
                          className="text-blue-500 font-bold mb-2"
                        >
                          Company Description
                        </label>
                        <Field
                            id="companyDescription"
                            name="companyDescription"
                            className="input"
                        >
                          {({field}) => 
                            <ReactQuill value={field.value} onChange={field.onChange(field.name)}/>
                          }
                        </Field>
                        <ErrorMessage
                          name="companyDescription"
                          component="span"
                          className="input-error"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
        <button className="mt-6 btn btn-teal w-32">Next Step</button>
      </div>
    </div>
  );
};

export default PostAJob;
