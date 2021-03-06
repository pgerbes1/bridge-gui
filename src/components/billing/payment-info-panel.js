import React from 'react';

const PaymentInfoPanel = ({
  removeCardHandler,
  removingCard,
  paymentInfo: {merchant, lastFour}
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2 className="title">Default Payment Method</h2>
          <div className="content">
            <div className="row">
              <div className="col-xs-4">
                <p className="text-muted">Merchant</p>
                <h2>{merchant}</h2>
              </div>
              <div className="col-xs-4">
                <p className="text-muted">Card Number</p>
                <h2>**** **** **** {lastFour}</h2>
              </div>
              <div className="col-xs-4 text-right">
                <button
                  onClick={removeCardHandler}
                  disabled={removingCard}
                  type="submit"
                  className="btn btn-action btn-red"
                >
                  {removingCard ? 'Submiting . . .' : 'Remove Card'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfoPanel;
