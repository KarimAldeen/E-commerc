import React from "react";
import { Badge } from "reactstrap";

import { useTranslation } from "react-i18next";

const OrderStatus = ({ order_status }) => {
    // const {t} = useTranslation();
    console.log(order_status);
    const all={
        pending:{color:"secondary"},
        accepted:{color:"success"},
        delivering:{color:"primary"},
        delivered:{color:"success"},
        canceled:{color:"danger"}
    }
    

    
  return (
        <Badge color={all[order_status].color}>
                {(order_status)}
        </Badge>
  );
};


export default OrderStatus;
