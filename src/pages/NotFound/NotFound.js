import React from "react";

import { useTranslation } from "react-i18next";

import { ImSad } from "react-icons/im";
import classes from "./NotFoundPage.scss";


import { NavLink } from "react-router-dom";


import PropTypes from "prop-types";
// import Button from "views/components/Button";
import Page from "../../layout/Page";
import { RoutesConfigs } from "../../config/RouteConfig";

const NotFoundPage = ({ text, backBtnText, backURL, icon: Icon }) => {
  const { t } = useTranslation();

  return (
    <Page>
      <div className={'page'}>
        {Icon ? <>{Icon}</> : <ImSad size={140} color={'light_green'} />}
        <h1 className={'_404'}>404</h1>
        {text && <h3 className={classes.text}>{t(text)}</h3>}
        <NavLink to={backURL}>
          {/* <button variant="primary">
            <p>{t(backBtnText)}</p>
          </button> */}
        </NavLink>
      </div>
    </Page>
  );
};

NotFoundPage.propTypes = {
  text: PropTypes.string,
  backBtnText: PropTypes.string,
  backURL: PropTypes.string,
};

NotFoundPage.defaultProps = {
  text: "_not_found.page",
  backBtnText: "back",
  backURL: RoutesConfigs.home.url,
};

export default NotFoundPage;
