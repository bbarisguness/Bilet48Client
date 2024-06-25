"use client";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useRef } from "react";
import { Formik, Form, Field } from "formik";
import TicketCard from "@/components/checkout/ticketCard";
import {
  cc_CVV_format,
  cc_expires_format,
  maskCreditCard,
} from "@/utils/myUtils";

const ContactFormSchema = Yup.object().shape({
  nameAndSurname: Yup.string()
    .min(2, "Lütfen daha uzun bir isim girin")
    .max(50, "Lütfen daha kısa bir isim girin")
    .required("Lütfen isim girin"),
  email: Yup.string()
    .email("Lütfen geçerli mail girin")
    .required("Lütfen mail girin"),
  cardNumber: Yup.string()
    .min(19, "Geçersiz kart numarası")
    .max(19, "Geçersiz kart numarası")
    .required("Lütfen kart numarası girin"),
  cvvCode: Yup.string()
    .min(3, "Geçersiz güvenlik kodu")
    .max(3, "Geçersiz güvenlik kodu")
    .required("Lütfen güvenlik kodunu girin"),
  expirationDate: Yup.string()
    .min(5, "Geçersiz tarih")
    .max(5, "Geçersiz tarih")
    .required("Lütfen tarih girin"),
});

export default function CheckOut() {
  const router = useRouter();
  const data = useSelector((state) => state.buyPageSelectedTicket);

  if (data.categoryId < 1) {
    router.push("/");
    return;
  }
  const clickContactFormButton = () => {
    document.getElementsByName("nameAndSurname")[0].focus();
  };

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    if (value == 0) return "";
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    if (phoneNumberLength < 9) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )} ${phoneNumber.slice(6, 10)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )} ${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8)}`;
  };

  return (
    <>
      <div className="header-margin"></div>
      <div style={{ marginTop: 90, backgroundColor: "#f1f1f1" }}>
        <div className="section-indent05">
          <div className="container">
            <div className="row pb-60 pt-60">
              <div
                className="col-md-5"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: 30
                }}
              >
                <h4
                  className="tt-subtitle"
                  style={{ paddingBottom: 20, fontWeight: 300 }}
                >
                  Bilet Bilgileri
                </h4>
                <TicketCard />
              </div>
              <div
                className="col-md-7"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h6
                  className="tt-subtitle"
                  style={{ paddingBottom: 20, fontWeight: 300 }}
                >
                  Ödeme
                </h6>
                <div className="checkoutForm">
                  <Formik
                    initialValues={{
                      nameAndSurname: "",
                      email: "",
                      phone: "",
                      cardNumber: "",
                      expirationDate: "",
                      cvvCode: "",
                    }}
                    validationSchema={ContactFormSchema}
                    onSubmit={(values, actions) => {
                      //showContactFormSuccesMessage()
                      //actions.resetForm();
                      //document.getElementsByName("nameAndSurname")[0].blur();
                      console.log(values);
                      //router.push("/congratulation");
                    }}
                  >
                    {({
                      errors,
                      touched,
                      submitCount,
                      setFieldValue,
                      values,
                    }) => (
                      <Form
                        id="contactform"
                        className="form-default contact-form"
                      >
                        <div className="form-group">
                          <Field
                            name="nameAndSurname"
                            type="text"
                            className="form-control"
                            id="inputName"
                            placeholder="Ad Soyad *"
                          />
                          {errors.nameAndSurname &&
                          touched.nameAndSurname &&
                          submitCount > 0 ? (
                            <label className="error">
                              {errors.nameAndSurname}
                            </label>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <Field
                            name="email"
                            type="email"
                            className="form-control"
                            id="inputEmail"
                            placeholder="Email address *"
                          />
                          {errors.email && touched.email && submitCount > 0 ? (
                            <label className="error">{errors.email}</label>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <Field
                            name="phone"
                            type="text"
                            className="form-control"
                            id="inputReview"
                            maxLength={15}
                            placeholder="Phone number"
                            onChange={(e) => {
                              const formattedPhoneNumber = formatPhoneNumber(
                                e.target.value
                              );
                              setFieldValue("phone", formattedPhoneNumber)
                            }}
                          />
                          {errors.phone && touched.phone ? (
                            <label className="error">{errors.phone}</label>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <Field
                            name="cardNumber"
                            type="text"
                            className="form-control"
                            placeholder="Card Number *"
                            onChange={(e) => {
                              const input = e.target.value;
                              const sanitizedInput = input.replace(/\D/g, ""); // Sadece sayısal karakterleri tutar
                              setFieldValue(
                                "cardNumber",
                                maskCreditCard(sanitizedInput)
                              );
                            }}
                            maxLength={19}
                          />
                          {errors.cardNumber &&
                          touched.cardNumber &&
                          submitCount > 0 ? (
                            <label className="error">{errors.cardNumber}</label>
                          ) : null}
                        </div>
                        <div className="row">
                          <div className="form-group col-md-6">
                            <Field
                              name="expirationDate"
                              type="text"
                              className="form-control"
                              placeholder="Expiration date *"
                              onChange={(e) => {
                                setFieldValue(
                                  "expirationDate",
                                  cc_expires_format(e.target.value)
                                );
                              }}
                            />
                            {errors.expirationDate &&
                            touched.expirationDate &&
                            submitCount > 0 ? (
                              <label className="error">
                                {errors.expirationDate}
                              </label>
                            ) : null}
                          </div>
                          <div className="form-group col-md-6">
                            <Field
                              name="cvvCode"
                              type="text"
                              className="form-control"
                              placeholder="CVV *"
                              onChange={(e) => {
                                setFieldValue(
                                  "cvvCode",
                                  cc_CVV_format(e.target.value)
                                );
                              }}
                              maxLength={3}
                            />
                            {errors.cvvCode &&
                            touched.cvvCode &&
                            submitCount > 0 ? (
                              <label className="error">{errors.cvvCode}</label>
                            ) : null}
                          </div>
                        </div>
                        <button
                          onClick={clickContactFormButton}
                          type="submit"
                          className="tt-btn-default tt-btn__wide"
                        >
                          <span>SATIN AL</span>
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
