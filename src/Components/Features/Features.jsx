import React from "react";
import "../ClientsSection/Clients.css";

const Features = () => {
  return (
    <section>
      <div class="clients-section">
        <h1>Features</h1>
        <div class="clients-row">
          <p className="whatwedo-text-p">
            ORMB Cloud Service - ORMB Cloud Service hosting is provided in
            single tenancy having two Environments provisioned per Customer
            Deployment as default : Production and Non-Production.
            <br />
            <br />
            ORMB Cloud Service – Reporting Option also provides reporting
            features in ORMB Cloud Service Production Environment and has
            subscription validity duration same as that of the ORMB Cloud
            Service Production Environment. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
