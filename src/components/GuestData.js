const GuestData = ({ guestData }) => {
  const td = guestData
    .slice(0)
    .reverse()
    .map((data, index) => {
      return (
        <div key={index} className="guest-box">
          <p className="from-text">From. {data.name}</p>
          <hr />
          <p className="text-text">{data.text}</p>
        </div>
      );
    });

  return <div className="guest-data">{td}</div>;
};

export default GuestData;
