import React from "react";
import { Badge } from "reactstrap";

import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const PaymentStatus = ({ payment_status }) => {
    const {t} = useTranslation();
    const all = {
        cash: { color: "success" },
        online: { color: "success" },

    }


    return (
        <Badge color={all[payment_status].color}>
            {t(payment_status)}
        </Badge>
    );
};

PaymentStatus.propTypes = {
    payment_status: PropTypes.string.isRequired,
};

export default PaymentStatus;
