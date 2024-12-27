import React from "react";
import Input from "./smallComp/input";
const Userinput = ({data,handleData}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          handleData={handleData}
          name="initialInvestment"
          data={data.initialInvestment}
        >
          Initial Investment
        </Input>
        <Input
          handleData={handleData}
          name="annualInvestment"
          data={data.annualInvestment}
        >
          Anual investment
        </Input>
        <Input
          handleData={handleData}
          name="expectedReturn"
          data={data.expectedReturn}
        >
          Expected Return
        </Input>
        <Input handleData={handleData} name="duration" data={data.duration}>
          Duration
        </Input>
      </div>
    </section>
  );
};

export default Userinput;
