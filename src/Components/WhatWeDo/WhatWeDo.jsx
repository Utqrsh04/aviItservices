import React from "react";
import "../ClientsSection/Clients.css";

const WhatWeDo = () => {
  return (
    <section>
      <div class="clients-section">
        <h1>What we do</h1>
        <div class="clients-row">
          <p className="whatwedo-text-p">
            AVI IT Services Private Limited works in Oracle Revenue Management
            and Billing (ORMB) - Oracle Revenue Management and Billing (ORMB)
            for insurance is a robust, flexible solution that meets today’s
            pricing and billing challenges. ORMB enables insurance companies to
            adopt a pricing and revenue management strategy built around the
            customer’s buying pattern. 
            <br />
            <br />
            AVIIT Services works especially in ORMB and CC&B. ORMB allows the
            user to define prices for premiums, various fees, credits,
            discounts, and taxes.
          </p>
        </div>

        <br />
        <br />
        <div className="clients-row">
          <h2 className="questtion">What is ORMB ?</h2>
          <br />
          RMB is focusing on preventing revenue leakage by automating the
          transaction alert notification process and simplifying the process of
          error record identification.
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2 className="questtion">What is CC&B ?</h2>
          <br />
          Oracle Utilities Customer Care and Billing is a complete, integrated
          CRM and billing application with work order functionality. CC&B gives
          every staff member a 360-degree view of customer and premise data. It
          helps you develop rates and ensures that every customer gets a correct
          bill.
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2 className="questtion">Benefits of ORMB :</h2>
          <br />
          <ul>
            <li>
              ORMB is focusing on preventing revenue leakage by automating the
              transaction alert notification process and simplifying the process
              of error record identification.
            </li>
            <li>
              It is a one-stop solution that helps businesses to: Ensure better
              revenue management (captures all the revenue opportunities)
            </li>
            <li>
              ORMB offers an enterprise wide digital platform to support revenue
              management  4.Oracle Utilities Application Framework (OUAF) based
              products, including Oracle Revenue Management & Billing (ORMB).
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
