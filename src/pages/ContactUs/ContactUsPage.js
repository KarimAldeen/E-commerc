import React from "react";




import classes from './ContactUs.module.scss';

import { useTranslation } from "react-i18next";

import LinkItem from "./LinkItem";
import EmailForm from "./EmailForm";
import { baseURL } from "../../api/config";
import { useWindowSize } from "../../hooks/useWindowSize";
import Page from "../../layout/Page";

const useBackgroundImage = () => {
  const { width } = useWindowSize();
  const { i18n } = useTranslation();
  
  const dir =  i18n.dir();;

  if (width < 1200) return "";
  return dir === "ltr" ? '../../Images/contact_us_bg.png' : '../../Images/contact_us_bg.png';
};

const ContactUsPage = () => {
  const { t } = useTranslation();
  const BG_IMG = useBackgroundImage();


  const socials =  [{
    id:1,
    social_media_link:'facebook',
    social_media_image:"/facebook.jpg"
  },
  {
    id:2,
    social_media_link:'whatsapp',
    social_media_image:"/whatsapp.jpg"
  }
];

  const address = "SYRIA";
  const email = 'ibrahimkarimeddin@gmail.com'
  const phone = '0951968994';

  return (
    <Page>
      <div className={classes.page}>
        <main className={classes.main}>
          <section className={classes.contact_section}>
            <h1 className={classes.title}>{t("Contact us")}</h1>
            <div className={classes.links_container}>
              {address && <LinkItem src={'../../Images/location.png'} content={address} />}
              {email && (
                <LinkItem
                  src={'../../Images/email.png'}
                  href={`mailto:${email}`}
                  anchorProps={{ dir: "ltr" }}
                  content={email}
                />
              )}
              {phone && (
                <LinkItem
                  src={'../../Images/phone.png'}
                  href={`tel:${phone}`}
                  anchorProps={{ dir: "ltr" }}
                  content={phone}
                />
              )}

              {socials?.map(
                ({ social_media_image, social_media_link }, index) => (
                  <LinkItem
                    key={index}
                    src={social_media_image}
                    href={social_media_link}
                    anchorProps={{
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }}
                    content={social_media_link}
                  />
                )
              )}
            </div>
          </section>
          <section className={classes.form_section}>
            <EmailForm />
          </section>
        </main>
      </div>
    </Page>
  );
};

export default ContactUsPage;
